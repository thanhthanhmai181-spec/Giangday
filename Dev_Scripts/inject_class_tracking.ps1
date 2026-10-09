$path = Join-Path $PSScriptRoot "..\script.js"
$fullPath = Resolve-Path $path
$lines = [System.IO.File]::ReadAllLines($fullPath, [System.Text.Encoding]::UTF8)

# Find where initDashboard() is called
$targetIdx = -1
for ($i = 19300; $i -lt $lines.Length; $i++) {
    if ($lines[$i] -match "// --- INITIALIZATION ---" -or $lines[$i] -match "initDashboard\(\);") {
        $targetIdx = $i
        break
    }
}

if ($targetIdx -eq -1) {
    Write-Error "Could not find initialization block in script.js"
    exit 1
}

Write-Host "Target line index: $targetIdx (Line $($targetIdx + 1))"

$funcCode = @"
    // --- CLASS PROGRESS TRACKING LOGIC (N3 - HAM CHƠI) ---
    function initClassTracking() {
        const STORAGE_KEY = 'nihongo_class_n3_hamchoi_progress';
        const COLLAPSE_KEY = 'n3_hamchoi_collapsed';

        const vocabTrack = document.getElementById('hamchoi-vocab-track');
        const grammarTrack = document.getElementById('hamchoi-grammar-track');
        const kanjiTrack = document.getElementById('hamchoi-kanji-track');

        if (!vocabTrack || !grammarTrack || !kanjiTrack) return;

        const mapIcons = [
            'assets/node_castle.jpg',
            'assets/node_maze.jpg',
            'assets/node_mountain.jpg',
            'assets/node_forest.jpg',
            'assets/node_village.jpg',
            'assets/node_tower.jpg',
            'assets/node_gate.jpg',
            'assets/node_battle.jpg'
        ];

        // Load progress
        let progress = { vocab: [], grammar: [], kanji: [] };
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                const parsed = JSON.parse(saved);
                progress.vocab = Array.isArray(parsed.vocab) ? parsed.vocab : [];
                progress.grammar = Array.isArray(parsed.grammar) ? parsed.grammar : [];
                progress.kanji = Array.isArray(parsed.kanji) ? parsed.kanji : [];
            }
        } catch (e) {
            console.error('Error loading class progress:', e);
        }

        const saveProgress = () => {
            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
            } catch (e) {
                console.error('Error saving class progress:', e);
            }
            updateStats();
        };

        const updateStats = () => {
            const vCount = progress.vocab.length;
            const gCount = progress.grammar.length;
            const kCount = progress.kanji.length;
            const totalDone = vCount + gCount + kCount;
            const totalLessons = 30 + 28 + 42; // 100
            const pct = Math.round((totalDone / totalLessons) * 100);

            // Update Track Count Badges
            const vCountEl = document.getElementById('n3-vocab-count');
            if (vCountEl) vCountEl.textContent = `${vCount}/30 bài`;

            const gCountEl = document.getElementById('n3-grammar-count');
            if (gCountEl) gCountEl.textContent = `${gCount}/28 bài`;

            const kCountEl = document.getElementById('n3-kanji-count');
            if (kCountEl) kCountEl.textContent = `${kCount}/42 bài`;

            // Update Total Progress
            const totalPctEl = document.getElementById('n3-total-progress-text');
            if (totalPctEl) totalPctEl.textContent = `${pct}%`;

            const totalBarEl = document.getElementById('n3-total-progress-bar');
            if (totalBarEl) totalBarEl.style.width = `${pct}%`;
        };

        const switchToView = (targetView) => {
            const navBtn = document.querySelector(`.sidebar-nav .nav-btn[data-target="${targetView}"]`);
            if (navBtn) {
                navBtn.click();
            } else {
                const allNavBtns = document.querySelectorAll('.sidebar-nav .nav-btn');
                const allSections = document.querySelectorAll('.view-section');
                allNavBtns.forEach(b => b.classList.remove('active'));
                allSections.forEach(s => s.classList.remove('active'));
                const targetEl = document.getElementById(targetView);
                if (targetEl) targetEl.classList.add('active');
            }
        };

        const navigateToVocabLesson = (lessonIndex) => {
            switchToView('tuvung');
            setTimeout(() => {
                const n3Tab = document.querySelector('.map-level-tabs .level-tab[data-level="N3"]');
                if (n3Tab && !n3Tab.classList.contains('active')) n3Tab.click();

                const mapContainer = document.getElementById('treasure-map-container');
                if (mapContainer && mapContainer.classList.contains('collapsed')) {
                    const toggleBtn = document.getElementById('toggle-map-btn');
                    if (toggleBtn) toggleBtn.click();
                }

                setTimeout(() => {
                    const nodes = document.querySelectorAll('#vocab-treasure-map .map-node');
                    if (nodes && nodes[lessonIndex]) {
                        nodes[lessonIndex].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                        nodes[lessonIndex].click();
                    }
                }, 150);
            }, 100);
        };

        const navigateToGrammarLesson = (lessonIndex) => {
            switchToView('nguphap');
            setTimeout(() => {
                const n3Tab = document.querySelector('#grammar-level-tabs .level-tab[data-level="N3"]');
                if (n3Tab && !n3Tab.classList.contains('active')) n3Tab.click();

                // Ensure List view is active
                const btnList = document.getElementById('btn-grammar-list');
                if (btnList && !btnList.classList.contains('active')) btnList.click();

                setTimeout(() => {
                    const targetLesson = document.getElementById(`grammar-lesson-${lessonIndex}`);
                    if (targetLesson) {
                        targetLesson.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        targetLesson.classList.add('highlight-pulse');
                        setTimeout(() => targetLesson.classList.remove('highlight-pulse'), 2500);
                    }
                }, 150);
            }, 100);
        };

        const navigateToKanjiLesson = (lessonIndex) => {
            switchToView('hantu');
            setTimeout(() => {
                const n3Tab = document.querySelector('.kanji-level-tab[data-level="N3"]');
                if (n3Tab && !n3Tab.classList.contains('active')) n3Tab.click();

                const mapContainer = document.getElementById('kanji-map-container');
                if (mapContainer && mapContainer.classList.contains('collapsed')) {
                    const toggleBtn = document.getElementById('toggle-kanji-map-btn');
                    if (toggleBtn) toggleBtn.click();
                }

                setTimeout(() => {
                    const nodes = document.querySelectorAll('#kanji-map .map-node');
                    if (nodes && nodes[lessonIndex]) {
                        nodes[lessonIndex].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                        nodes[lessonIndex].click();
                    }
                }, 150);
            }, 100);
        };

        const renderTrack = (container, count, type, onNavigate) => {
            container.innerHTML = '';
            for (let i = 0; i < count; i++) {
                const lessonNum = i + 1;
                const isLit = progress[type].includes(i);
                const iconSrc = mapIcons[i % mapIcons.length];

                const item = document.createElement('div');
                item.className = `class-map-item ${isLit ? 'is-lit' : 'is-dark'}`;
                item.dataset.index = i;
                item.dataset.type = type;
                item.title = `Bài ${lessonNum} (Click để mở bài học, Click vào nút ✓ hoặc Chuột phải để bật/tắt Đã học)`;

                item.innerHTML = `
                    <div class="class-node-thumb" style="background-image: url('${iconSrc}');">
                        <div class="class-node-overlay"></div>
                        <button type="button" class="class-node-check" title="${isLit ? 'Đã học (Bấm để chuyển thành Chưa học)' : 'Chưa học (Bấm để đánh dấu Đã học)'}">
                            <i class="fa-solid fa-check"></i>
                        </button>
                    </div>
                    <div class="class-node-title">Bài ${lessonNum}</div>
                    <div class="class-node-status-text">${isLit ? 'Đã học' : 'Chưa học'}</div>
                `;

                // Handle click on check button to toggle status
                const checkBtn = item.querySelector('.class-node-check');
                checkBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    toggleItemStatus(type, i, item);
                });

                // Right-click to toggle status
                item.addEventListener('contextmenu', (e) => {
                    e.preventDefault();
                    toggleItemStatus(type, i, item);
                });

                // Click on the item itself (thumbnail / label) navigates to lesson
                item.addEventListener('click', () => {
                    onNavigate(i);
                });

                container.appendChild(item);
            }
        };

        const toggleItemStatus = (type, index, itemEl) => {
            const arr = progress[type];
            const idx = arr.indexOf(index);
            if (idx > -1) {
                arr.splice(idx, 1);
                itemEl.classList.remove('is-lit');
                itemEl.classList.add('is-dark');
                itemEl.querySelector('.class-node-status-text').textContent = 'Chưa học';
                itemEl.querySelector('.class-node-check').title = 'Chưa học (Bấm để đánh dấu Đã học)';
            } else {
                arr.push(index);
                itemEl.classList.remove('is-dark');
                itemEl.classList.add('is-lit');
                itemEl.querySelector('.class-node-status-text').textContent = 'Đã học';
                itemEl.querySelector('.class-node-check').title = 'Đã học (Bấm để chuyển thành Chưa học)';
            }
            saveProgress();
        };

        // Render the 3 tracks
        renderTrack(vocabTrack, 30, 'vocab', navigateToVocabLesson);
        renderTrack(grammarTrack, 28, 'grammar', navigateToGrammarLesson);
        renderTrack(kanjiTrack, 42, 'kanji', navigateToKanjiLesson);

        // Initial stats update
        updateStats();

        // Collapse / Expand toggle
        const classCard = document.getElementById('class-n3-hamchoi');
        const collapseBtn = document.getElementById('n3-toggle-collapse-btn');
        if (classCard && collapseBtn) {
            try {
                if (localStorage.getItem(COLLAPSE_KEY) === 'true') {
                    classCard.classList.add('collapsed');
                    collapseBtn.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
                }
            } catch (e) {}

            collapseBtn.addEventListener('click', () => {
                classCard.classList.toggle('collapsed');
                const isCollapsed = classCard.classList.contains('collapsed');
                collapseBtn.innerHTML = isCollapsed ? '<i class="fa-solid fa-chevron-down"></i>' : '<i class="fa-solid fa-chevron-up"></i>';
                try {
                    localStorage.setItem(COLLAPSE_KEY, isCollapsed ? 'true' : 'false');
                } catch (e) {}
            });
        }

        // Reset progress button
        const resetBtn = document.getElementById('n3-reset-progress-btn');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                if (confirm('Bạn có chắc chắn muốn đặt lại toàn bộ tiến độ lớp "N3 - Ham chơi" về trạng thái Chưa học (tối icon)?')) {
                    progress = { vocab: [], grammar: [], kanji: [] };
                    saveProgress();
                    renderTrack(vocabTrack, 30, 'vocab', navigateToVocabLesson);
                    renderTrack(grammarTrack, 28, 'grammar', navigateToGrammarLesson);
                    renderTrack(kanjiTrack, 42, 'kanji', navigateToKanjiLesson);
                }
            });
        }
    }

"@

$newLines = [System.Collections.Generic.List[string]]::new()
for ($i = 0; $i -lt $targetIdx; $i++) {
    $newLines.Add($lines[$i])
}

$newLines.Add($funcCode)

for ($i = $targetIdx; $i -lt $lines.Length; $i++) {
    $newLines.Add($lines[$i])
}

[System.IO.File]::WriteAllLines($fullPath, $newLines.ToArray(), [System.Text.Encoding]::UTF8)
Write-Host "Successfully injected initClassTracking into script.js"
