# Update grammar lesson quick navigation in script.js
$scriptPath = "$PSScriptRoot\..\script.js"
$lines = [System.IO.File]::ReadAllLines($scriptPath, [System.Text.Encoding]::UTF8)

# Find target line index for lessonHeader
$headerLineIdx = -1
for ($i = 18900; $i -lt $lines.Length; $i++) {
    if ($lines[$i] -match "const lessonHeader = document\.createElement\('h3'\);") {
        $headerLineIdx = $i
        break
    }
}

if ($headerLineIdx -ge 0) {
    Write-Host "Found lessonHeader at line $($headerLineIdx + 1)" -ForegroundColor Cyan
    # Insert id and className right after creating element
    $newLines = [System.Collections.Generic.List[string]]::new($lines)
    $newLines.Insert($headerLineIdx + 1, "                lessonHeader.id = ``grammar-lesson-`${index}``;")
    $newLines.Insert($headerLineIdx + 2, "                lessonHeader.className = 'grammar-lesson-header';")
    
    # Now find the end of renderGrammarList: levelData.forEach closing brace
    # Search for the closing brace of renderGrammarList
    $endIdx = -1
    for ($j = $headerLineIdx + 50; $j -lt $newLines.Count; $j++) {
        if ($newLines[$j] -match "const viewTabs = document\.querySelectorAll\('#grammar-view-tabs") {
            # Line before viewTabs is typically empty, and the line before that is '};'
            $endIdx = $j - 1
            while ($endIdx -ge 0 -and $newLines[$endIdx].Trim() -ne "};") {
                $endIdx--
            }
            break
        }
    }
    
    if ($endIdx -ge 0) {
        Write-Host "Found renderGrammarList closing brace at line $($endIdx + 1)" -ForegroundColor Cyan
        $navCode = @"

            // Populate Lesson Quick Navigation
            const lessonSelect = document.getElementById('grammar-lesson-select');
            const quickPillsContainer = document.getElementById('grammar-quick-pills');

            const scrollToGrammarLesson = (targetId) => {
                if (!targetId) return;
                const listTab = document.querySelector('#grammar-view-tabs .level-tab[data-view="list"]');
                if (listTab && !listTab.classList.contains('active')) {
                    listTab.click();
                }
                const targetEl = document.getElementById(targetId);
                if (targetEl) {
                    targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    targetEl.classList.add('highlight-pulse');
                    setTimeout(() => {
                        targetEl.classList.remove('highlight-pulse');
                    }, 1600);
                }
            };

            if (lessonSelect) {
                lessonSelect.innerHTML = '<option value="">-- Chọn bài học (' + levelData.length + ' bài) --</option>';
                levelData.forEach((node, index) => {
                    const opt = document.createElement('option');
                    opt.value = `grammar-lesson-`${index}`;
                    opt.textContent = `${node.name} (${node.items.length} mẫu)`;
                    lessonSelect.appendChild(opt);
                });
                lessonSelect.onchange = (e) => {
                    scrollToGrammarLesson(e.target.value);
                };
            }

            if (quickPillsContainer) {
                quickPillsContainer.innerHTML = '';
                levelData.forEach((node, index) => {
                    const pill = document.createElement('button');
                    pill.className = 'grammar-pill-btn';
                    pill.textContent = node.name;
                    pill.title = `Chuyển nhanh đến ${node.name}`;
                    pill.onclick = () => {
                        if (lessonSelect) lessonSelect.value = `grammar-lesson-`${index}`;
                        scrollToGrammarLesson(`grammar-lesson-`${index}`);
                    };
                    quickPillsContainer.appendChild(pill);
                });
            }
"@
        $newLines.Insert($endIdx, $navCode)
        [System.IO.File]::WriteAllLines($scriptPath, $newLines, [System.Text.Encoding]::UTF8)
        Write-Host "Da chen Grammar Lesson Nav thanh cong!" -ForegroundColor Green
    } else {
        Write-Host "Khong tim thay vi tri ket thuc renderGrammarList!" -ForegroundColor Red
    }
} else {
    Write-Host "Khong tim thay vi tri lessonHeader!" -ForegroundColor Red
}
