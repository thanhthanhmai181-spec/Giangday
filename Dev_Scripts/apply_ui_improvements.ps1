# Safe UI Updater for script.js
$scriptPath = "$PSScriptRoot\..\script.js"
$lines = [System.IO.File]::ReadAllLines($scriptPath, [System.Text.Encoding]::UTF8)

Write-Host "Total lines in script.js: $($lines.Length)" -ForegroundColor Cyan

# 1. Find renderGrammarList in the bottom section (after line 18000)
$renderGrammarListIdx = -1
for ($i = 18500; $i -lt $lines.Length; $i++) {
    if ($lines[$i] -match "const renderGrammarList = \(level\) => \{") {
        $renderGrammarListIdx = $i
        break
    }
}

if ($renderGrammarListIdx -lt 0) {
    Write-Error "Could not find renderGrammarList definition!"
    exit 1
}

Write-Host "Found renderGrammarList at line $($renderGrammarListIdx + 1)" -ForegroundColor Green

# 2. Find lessonHeader inside renderGrammarList
$lessonHeaderIdx = -1
for ($i = $renderGrammarListIdx; $i -lt $renderGrammarListIdx + 50; $i++) {
    if ($lines[$i] -match "const lessonHeader = document\.createElement\('h3'\);") {
        $lessonHeaderIdx = $i
        break
    }
}

if ($lessonHeaderIdx -lt 0) {
    Write-Error "Could not find lessonHeader inside renderGrammarList!"
    exit 1
}

Write-Host "Found lessonHeader at line $($lessonHeaderIdx + 1)" -ForegroundColor Green

# 3. Find the flashcard innerHTML block inside renderGrammarList
$flashcardCardIdx = -1
for ($i = $lessonHeaderIdx; $i -lt $lines.Length; $i++) {
    if ($lines[$i] -match "if \(flashcardContainer\) \{") {
        $flashcardCardIdx = $i
        break
    }
}

if ($flashcardCardIdx -lt 0) {
    Write-Error "Could not find flashcardContainer block!"
    exit 1
}

Write-Host "Found flashcardContainer block at line $($flashcardCardIdx + 1)" -ForegroundColor Green

# 4. Find the end of renderGrammarList
$renderGrammarEndIdx = -1
for ($i = $flashcardCardIdx + 10; $i -lt $lines.Length; $i++) {
    if ($lines[$i] -match "const viewTabs = document\.querySelectorAll\('#grammar-view-tabs") {
        # The line before viewTabs (or line with };) is the end of renderGrammarList
        $k = $i - 1
        while ($k -ge $flashcardCardIdx -and $lines[$k].Trim() -ne "};") {
            $k--
        }
        $renderGrammarEndIdx = $k
        break
    }
}

if ($renderGrammarEndIdx -lt 0) {
    Write-Error "Could not find renderGrammarList end!"
    exit 1
}

Write-Host "Found renderGrammarList end at line $($renderGrammarEndIdx + 1)" -ForegroundColor Green

# Construct updated code
$resultList = [System.Collections.Generic.List[string]]::new()

for ($i = 0; $i -lt $lines.Length; $i++) {
    if ($i -eq $lessonHeaderIdx) {
        $resultList.Add($lines[$i])
        $resultList.Add("                lessonHeader.id = 'grammar-lesson-' + index;")
        $resultList.Add("                lessonHeader.className = 'grammar-lesson-header';")
    }
    elseif ($i -eq $flashcardCardIdx) {
        # Replace the flashcard block with adaptive sizing block
        # Find closing brace of if (flashcardContainer)
        $fcEnd = $i
        while ($fcEnd -lt $lines.Length -and $lines[$fcEnd].Trim() -ne "}") {
            $fcEnd++
        }
        
        $fcCode = @'
                    if (flashcardContainer) {
                        const card = document.createElement('div');
                        card.className = 'grammar-flashcard-item';
                        
                        const meaningLen = (g.meaning || '').length;
                        let meaningFontSize = '1.35rem';
                        if (meaningLen > 40) {
                            meaningFontSize = '0.92rem';
                        } else if (meaningLen > 25) {
                            meaningFontSize = '1.05rem';
                        } else if (meaningLen > 15) {
                            meaningFontSize = '1.2rem';
                        }

                        const structLen = (g.structure || '').length;
                        let structFontSize = '1.6rem';
                        if (structLen > 30) {
                            structFontSize = '0.92rem';
                        } else if (structLen > 20) {
                            structFontSize = '1.15rem';
                        } else if (structLen > 12) {
                            structFontSize = '1.35rem';
                        }

                        card.innerHTML = '<div class="vocab-flashcard-inner">' +
                            '<div class="vocab-flashcard-face vocab-flashcard-front" style="padding: 0.6rem 0.8rem;">' +
                                '<div class="vocab-text" style="font-size:' + meaningFontSize + '; text-shadow:none; line-height:1.35;">' + g.meaning + '</div>' +
                            '</div>' +
                            '<div class="vocab-flashcard-face vocab-flashcard-back" style="background: rgba(30,41,59,0.95); border: 1px solid var(--neon-cyan); padding: 0.6rem 0.8rem;">' +
                                '<div class="vocab-reading" style="font-size:' + structFontSize + '; color:var(--neon-cyan); line-height:1.35;">' + g.structure + '</div>' +
                            '</div>' +
                        '</div>';
                        card.onclick = () => card.classList.toggle('is-flipped');
                        flashcardContainer.appendChild(card);
                    }
'@
        foreach ($line in ($fcCode -split "`r?`n")) {
            $resultList.Add($line)
        }
        $i = $fcEnd # Advance loop to after the old flashcard block
    }
    elseif ($i -eq $renderGrammarEndIdx) {
        # Insert navigation population code right before the closing '};' of renderGrammarList
        $navCode = @'

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
                    opt.value = 'grammar-lesson-' + index;
                    opt.textContent = node.name + ' (' + node.items.length + ' mẫu)';
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
                    pill.title = 'Chuyển nhanh đến ' + node.name;
                    pill.onclick = () => {
                        if (lessonSelect) lessonSelect.value = 'grammar-lesson-' + index;
                        scrollToGrammarLesson('grammar-lesson-' + index);
                    };
                    quickPillsContainer.appendChild(pill);
                });
            }
'@
        foreach ($line in ($navCode -split "`r?`n")) {
            $resultList.Add($line)
        }
        $resultList.Add($lines[$i])
    }
    else {
        $resultList.Add($lines[$i])
    }
}

[System.IO.File]::WriteAllLines($scriptPath, $resultList, [System.Text.Encoding]::UTF8)
Write-Host "Successfully updated script.js!" -ForegroundColor Green
