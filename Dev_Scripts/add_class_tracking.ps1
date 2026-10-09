# PowerShell script to inject initClassTracking into script.js
$scriptPath = "script.js"
$encoding = [System.Text.Encoding]::UTF8
$lines = [System.IO.File]::ReadAllLines($scriptPath, $encoding)

Write-Host "Total lines in script.js before: $($lines.Length)"

# Find the start of initTuvung function
$targetIdx = -1
for ($i = 17840; $i -lt [Math]::Min(18000, $lines.Length); $i++) {
    if ($lines[$i] -match "function\s+initTuvung") {
        $targetIdx = $i
        break
    }
}

if ($targetIdx -eq -1) {
    Write-Error "Could not find target index for function initTuvung"
    exit 1
}

Write-Host "Found target index at line $($targetIdx + 1): $($lines[$targetIdx])"

$trackingCode = @'
    // --- N3 - HAM CHƠI CLASS TRACKING LOGIC ---
    function initClassTracking() {
        const vocabTrack = document.getElementById('hamchoi-vocab-track');
        const grammarTrack = document.getElementById('hamchoi-grammar-track');
        const kanjiTrack = document.getElementById('hamchoi-kanji-track');

        if (!vocabTrack || !grammarTrack || !kanjiTrack) return;

        const STORAGE_KEY = 'n3_hamchoi_class_progress';
        let progress = {
            vocab: Array(30).fill(false),
            grammar: Array(28).fill(false),
            kanji: Array(42).fill(false)
        };

        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                const parsed = JSON.parse(saved);
                if (Array.isArray(parsed.vocab)) {
                    for (let i = 0; i < 30; i++) progress.vocab[i] = !!parsed.vocab[i];
                }
                if (Array.isArray(parsed.grammar)) {
                    for (let i = 0; i < 28; i++) progress.grammar[i] = !!parsed.grammar[i];
                }
                if (Array.isArray(parsed.kanji)) {
                    for (let i = 0; i < 42; i++) progress.kanji[i] = !!parsed.kanji[i];
                }
            }
        } catch(e) {
            console.error('Failed to load class progress:', e);
        }

        function saveProgress() {
            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
            } catch(e) {
                console.error('Failed to save class progress:', e);
            }
            updateStats();
        }

        function updateStats() {
            const vocabDone = progress.vocab.filter(Boolean).length;
            const grammarDone = progress.grammar.filter(Boolean).length;
            const kanjiDone = progress.kanji.filter(Boolean).length;

            const vocabCountEl = document.getElementById('n3-vocab-count');
            const grammarCountEl = document.getElementById('n3-grammar-count');
            const kanjiCountEl = document.getElementById('n3-kanji-count');
            const totalTextEl = document.getElementById('n3-total-progress-text');
            const totalBarEl = document.getElementById('n3-total-progress-bar');

            if (vocabCountEl) vocabCountEl.textContent = vocabDone + '/30 bài';
            if (grammarCountEl) grammarCountEl.textContent = grammarDone + '/28 bài';
            if (kanjiCountEl) kanjiCountEl.textContent = kanjiDone + '/42 bài';

            const totalLessons = 30 + 28 + 42;
            const totalDone = vocabDone + grammarDone + kanjiDone;
            const totalPercent = Math.round((totalDone / totalLessons) * 100);
            if (totalTextEl) totalTextEl.textContent = totalPercent + '%';
            if (totalBarEl) totalBarEl.style.width = totalPercent + '%';
        }

        const vocabIcons = [
            'assets/node_castle.jpg',
            'assets/node_maze.jpg',
            'assets/node_mountain.jpg',
            'assets/node_forest.jpg',
            'assets/node_village.jpg'
        ];

        const grammarIcons = [
            'assets/node_dojo.jpg',
            'assets/node_gate.jpg',
            'assets/node_castle.jpg',
            'assets/node_tower.jpg',
            'assets/node_maze.jpg',
            'assets/node_forest.jpg',
            'assets/node_mountain.jpg',
            'assets/node_village.jpg'
        ];

        const kanjiIcons = [
            'assets/kanji_scroll.jpg',
            'assets/kanji_stone.jpg',
            'assets/kanji_tower.jpg',
            'assets/node_castle.jpg',
            'assets/node_maze.jpg',
            'assets/node_mountain.jpg',
            'assets/node_forest.jpg',
            'assets/node_village.jpg'
        ];

        // 1. Render Vocab Track (30 lessons)
        vocabTrack.innerHTML = '';
        for (let i = 0; i < 30; i++) {
            const isLit = !!progress.vocab[i];
            const iconPath = vocabIcons[i % vocabIcons.length];
            const lessonNum = i + 1;

            const item = document.createElement('div');
            item.className = 'class-node-item ' + (isLit ? 'is-lit' : 'is-dark');
            item.title = 'Bài ' + lessonNum + ' (Click: Xem nội dung | Chuột phải hoặc click ✓: Bật/Tắt sáng)';

            item.innerHTML = 
                '<div class="class-node-thumb" style="background-image: url(\'' + iconPath + '\');">' +
                    '<div class="class-node-check">' + (isLit ? '<i class="fa-solid fa-check"></i>' : '') + '</div>' +
                '</div>' +
                '<div class="class-node-label">Bài ' + lessonNum + '</div>';

            const toggleLit = () => {
                progress.vocab[i] = !progress.vocab[i];
                item.classList.toggle('is-lit', progress.vocab[i]);
                item.classList.toggle('is-dark', !progress.vocab[i]);
                const checkEl = item.querySelector('.class-node-check');
                if (checkEl) checkEl.innerHTML = progress.vocab[i] ? '<i class="fa-solid fa-check"></i>' : '';
                saveProgress();
            };

            const checkBtn = item.querySelector('.class-node-check');
            if (checkBtn) {
                checkBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    toggleLit();
                });
            }

            item.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                toggleLit();
            });

            item.addEventListener('click', (e) => {
                if (e.target.closest('.class-node-check')) return;
                const tuvungNav = document.querySelector('.sidebar-nav .nav-btn[data-target="tuvung"]');
                if (tuvungNav) tuvungNav.click();
                const n3Tab = document.querySelector('.map-level-tabs .level-tab[data-map-level="N3"]');
                if (n3Tab && !n3Tab.classList.contains('active')) n3Tab.click();
                setTimeout(() => {
                    const nodes = document.querySelectorAll('#vocab-treasure-map .map-node');
                    if (nodes[i]) {
                        nodes[i].click();
                        nodes[i].scrollIntoView({ behavior: 'smooth', inline: 'center' });
                    }
                }, 200);
            });

            vocabTrack.appendChild(item);
        }

        // 2. Render Grammar Track (28 lessons)
        grammarTrack.innerHTML = '';
        for (let i = 0; i < 28; i++) {
            const isLit = !!progress.grammar[i];
            const iconPath = grammarIcons[i % grammarIcons.length];
            const lessonNum = i + 1;

            const item = document.createElement('div');
            item.className = 'class-node-item ' + (isLit ? 'is-lit' : 'is-dark');
            item.title = 'Bài ' + lessonNum + ' (Click: Xem nội dung | Chuột phải hoặc click ✓: Bật/Tắt sáng)';

            item.innerHTML = 
                '<div class="class-node-thumb" style="background-image: url(\'' + iconPath + '\');">' +
                    '<div class="class-node-check">' + (isLit ? '<i class="fa-solid fa-check"></i>' : '') + '</div>' +
                '</div>' +
                '<div class="class-node-label">Bài ' + lessonNum + '</div>';

            const toggleLit = () => {
                progress.grammar[i] = !progress.grammar[i];
                item.classList.toggle('is-lit', progress.grammar[i]);
                item.classList.toggle('is-dark', !progress.grammar[i]);
                const checkEl = item.querySelector('.class-node-check');
                if (checkEl) checkEl.innerHTML = progress.grammar[i] ? '<i class="fa-solid fa-check"></i>' : '';
                saveProgress();
            };

            const checkBtn = item.querySelector('.class-node-check');
            if (checkBtn) {
                checkBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    toggleLit();
                });
            }

            item.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                toggleLit();
            });

            item.addEventListener('click', (e) => {
                if (e.target.closest('.class-node-check')) return;
                const nguphapNav = document.querySelector('.sidebar-nav .nav-btn[data-target="nguphap"]');
                if (nguphapNav) nguphapNav.click();
                const n3Tab = document.querySelector('#grammar-level-tabs .level-tab[data-level="N3"]');
                if (n3Tab && !n3Tab.classList.contains('active')) n3Tab.click();
                const listTab = document.querySelector('#grammar-view-tabs .level-tab[data-view="list"]');
                if (listTab && !listTab.classList.contains('active')) listTab.click();

                setTimeout(() => {
                    const targetId = 'grammar-lesson-' + i;
                    const targetEl = document.getElementById(targetId);
                    const lessonSelect = document.getElementById('grammar-lesson-select');
                    if (lessonSelect) lessonSelect.value = targetId;
                    if (targetEl) {
                        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        targetEl.classList.add('highlight-pulse');
                        setTimeout(() => targetEl.classList.remove('highlight-pulse'), 1600);
                    }
                }, 200);
            });

            grammarTrack.appendChild(item);
        }

        // 3. Render Kanji Track (42 lessons)
        kanjiTrack.innerHTML = '';
        for (let i = 0; i < 42; i++) {
            const isLit = !!progress.kanji[i];
            const iconPath = kanjiIcons[i % kanjiIcons.length];
            const lessonNum = i + 1;

            const item = document.createElement('div');
            item.className = 'class-node-item ' + (isLit ? 'is-lit' : 'is-dark');
            item.title = 'Bài ' + lessonNum + ' (Click: Xem nội dung | Chuột phải hoặc click ✓: Bật/Tắt sáng)';

            item.innerHTML = 
                '<div class="class-node-thumb" style="background-image: url(\'' + iconPath + '\');">' +
                    '<div class="class-node-check">' + (isLit ? '<i class="fa-solid fa-check"></i>' : '') + '</div>' +
                '</div>' +
                '<div class="class-node-label">Bài ' + lessonNum + '</div>';

            const toggleLit = () => {
                progress.kanji[i] = !progress.kanji[i];
                item.classList.toggle('is-lit', progress.kanji[i]);
                item.classList.toggle('is-dark', !progress.kanji[i]);
                const checkEl = item.querySelector('.class-node-check');
                if (checkEl) checkEl.innerHTML = progress.kanji[i] ? '<i class="fa-solid fa-check"></i>' : '';
                saveProgress();
            };

            const checkBtn = item.querySelector('.class-node-check');
            if (checkBtn) {
                checkBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    toggleLit();
                });
            }

            item.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                toggleLit();
            });

            item.addEventListener('click', (e) => {
                if (e.target.closest('.class-node-check')) return;
                const hantuNav = document.querySelector('.sidebar-nav .nav-btn[data-target="hantu"]');
                if (hantuNav) hantuNav.click();
                const n3Tab = document.querySelector('.kanji-level-tab[data-kanji-level="N3"]');
                if (n3Tab && !n3Tab.classList.contains('active')) n3Tab.click();
                setTimeout(() => {
                    const nodes = document.querySelectorAll('#kanji-map .map-node');
                    if (nodes[i]) {
                        nodes[i].click();
                        nodes[i].scrollIntoView({ behavior: 'smooth', inline: 'center' });
                    }
                }, 200);
            });

            kanjiTrack.appendChild(item);
        }

        // Reset progress button
        const resetBtn = document.getElementById('n3-reset-progress-btn');
        if (resetBtn) {
            resetBtn.onclick = () => {
                if (confirm('Bạn có chắc muốn đặt lại toàn bộ tiến độ lớp N3 - Ham chơi về trạng thái ban đầu (chưa dạy)?')) {
                    progress.vocab = Array(30).fill(false);
                    progress.grammar = Array(28).fill(false);
                    progress.kanji = Array(42).fill(false);
                    saveProgress();
                    initClassTracking();
                }
            };
        }

        updateStats();
    }
'@

# Find the closing brace of initDashboard right before initTuvung
$closingBraceIdx = -1
for ($i = $targetIdx - 1; $i -ge 17880; $i--) {
    if ($lines[$i] -match "^\s*\}\s*$") {
        $closingBraceIdx = $i
        break
    }
}

if ($closingBraceIdx -eq -1) {
    Write-Error "Could not find closing brace of initDashboard"
    exit 1
}

Write-Host "Found closing brace of initDashboard at line $($closingBraceIdx + 1)"

$newLines = [System.Collections.Generic.List[string]]::new()
for ($i = 0; $i -lt $closingBraceIdx; $i++) {
    $newLines.Add($lines[$i])
}

# Add initClassTracking inside initDashboard
$newLines.Add("        initClassTracking();")
$newLines.Add($trackingCode)
$newLines.Add($lines[$closingBraceIdx])

for ($i = $closingBraceIdx + 1; $i -lt $lines.Length; $i++) {
    $newLines.Add($lines[$i])
}

[System.IO.File]::WriteAllLines($scriptPath, $newLines.ToArray(), $encoding)
Write-Host "Successfully injected initClassTracking into script.js. Total lines now: $($newLines.Count)"
