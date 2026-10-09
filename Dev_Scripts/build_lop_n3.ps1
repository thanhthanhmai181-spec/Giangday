# ==============================================================================
# SCRIPT XAY DUNG LOP N3 - HAM CHOI CHUAN CHINH TA VA AN TOAN
# ==============================================================================
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$root = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$htmlPath = Join-Path $root "index.html"
$cssPath = Join-Path $root "styles.css"
$jsPath = Join-Path $root "script.js"

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "  DANG THIET KE LOP N3 - HAM CHOI..." -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan

# ------------------------------------------------------------------------------
# 1. CAP NHAT INDEX.HTML
# ------------------------------------------------------------------------------
Write-Host "`n[1] Cap nhat index.html..." -ForegroundColor Yellow
$htmlContent = [System.IO.File]::ReadAllText($htmlPath, [System.Text.Encoding]::UTF8)

# Kiem tra xem class-n3-hamchoi da co chua
if ($htmlContent -notmatch 'id="class-n3-hamchoi"') {
    $targetSnippet = '<div class="recent-classes glass-panel mb-2">'
    $idx = $htmlContent.IndexOf($targetSnippet)
    if ($idx -ge 0) {
        # Tim vi tri dong the </div> cua recent-classes
        $closeDivIdx = $htmlContent.IndexOf('</div>', $idx)
        if ($closeDivIdx -ge 0) {
            $endRecentClasses = $closeDivIdx + 6
            
            $classCardHtml = @"


                        <!-- Quản lý tiến độ lớp học: N3 - Ham chơi -->
                        <div class="class-tracking-card glass-panel mb-2" id="class-n3-hamchoi">
                            <div class="class-card-header">
                                <div class="class-title-group">
                                    <div class="class-badge">N3</div>
                                    <div>
                                        <h2 class="class-name">N3 - Ham chơi</h2>
                                        <div class="class-subtext">Theo dõi tiến độ giảng dạy các phân môn</div>
                                    </div>
                                </div>
                                <div class="class-stats-summary">
                                    <div class="class-stat-pill">
                                        <span class="stat-label">Tổng tiến độ:</span>
                                        <span class="stat-value text-neon-cyan" id="n3-total-progress-text">0%</span>
                                        <div class="mini-progress-bar">
                                            <div class="mini-progress-fill" id="n3-total-progress-bar" style="width: 0%;"></div>
                                        </div>
                                    </div>
                                    <div class="class-action-btns">
                                        <button class="btn-icon class-collapse-btn" id="n3-toggle-collapse-btn" title="Thu gọn / Mở rộng lớp học">
                                            <i class="fa-solid fa-chevron-up"></i>
                                        </button>
                                        <button class="btn-primary btn-outline btn-small" id="n3-reset-progress-btn" title="Đặt lại tất cả tiến độ lớp này">
                                            <i class="fa-solid fa-rotate-left"></i> Đặt lại
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <!-- Thân thẻ lớp học (Có thể thu gọn) -->
                            <div class="class-card-body" id="class-n3-body">
                                <!-- Hàng 1: Từ Vựng (30 bài) -->
                                <div class="class-track-section">
                                    <div class="class-track-header">
                                        <div class="class-track-title">
                                            <i class="fa-solid fa-spell-check text-neon-cyan"></i>
                                            <span>Từ Vựng (Goi)</span>
                                            <span class="track-count-badge" id="n3-vocab-count">0/30 bài</span>
                                        </div>
                                        <div class="class-track-hint">
                                            <i class="fa-solid fa-circle-info"></i> Nhấp để mở bài học | Chuột phải hoặc bấm ✓ để đánh dấu đã dạy
                                        </div>
                                    </div>
                                    <div class="class-track-scroll-wrapper">
                                        <div class="class-track-scroll" id="hamchoi-vocab-track">
                                            <!-- 30 bài render bằng JS -->
                                        </div>
                                    </div>
                                </div>

                                <!-- Hàng 2: Ngữ Pháp (28 bài) -->
                                <div class="class-track-section">
                                    <div class="class-track-header">
                                        <div class="class-track-title">
                                            <i class="fa-solid fa-bars-staggered text-neon-purple"></i>
                                            <span>Ngữ Pháp (Bunpou)</span>
                                            <span class="track-count-badge" id="n3-grammar-count">0/28 bài</span>
                                        </div>
                                        <div class="class-track-hint">
                                            <i class="fa-solid fa-circle-info"></i> Nhấp để mở bài học | Chuột phải hoặc bấm ✓ để đánh dấu đã dạy
                                        </div>
                                    </div>
                                    <div class="class-track-scroll-wrapper">
                                        <div class="class-track-scroll" id="hamchoi-grammar-track">
                                            <!-- 28 bài render bằng JS -->
                                        </div>
                                    </div>
                                </div>

                                <!-- Hàng 3: Hán Tự (42 bài) -->
                                <div class="class-track-section">
                                    <div class="class-track-header">
                                        <div class="class-track-title">
                                            <i class="fa-solid fa-language text-neon-yellow"></i>
                                            <span>Hán Tự (Kanji)</span>
                                            <span class="track-count-badge" id="n3-kanji-count">0/42 bài</span>
                                        </div>
                                        <div class="class-track-hint">
                                            <i class="fa-solid fa-circle-info"></i> Nhấp để mở bài học | Chuột phải hoặc bấm ✓ để đánh dấu đã dạy
                                        </div>
                                    </div>
                                    <div class="class-track-scroll-wrapper">
                                        <div class="class-track-scroll" id="hamchoi-kanji-track">
                                            <!-- 42 bài render bằng JS -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
"@
            $htmlContent = $htmlContent.Insert($endRecentClasses, $classCardHtml)
            [System.IO.File]::WriteAllText($htmlPath, $htmlContent, [System.Text.Encoding]::UTF8)
            Write-Host "  + Da them khung giao dien lop N3 vao index.html thanh cong." -ForegroundColor Green
        }
    }
} else {
    Write-Host "  + index.html da co khung giao dien lop N3." -ForegroundColor Green
}

# ------------------------------------------------------------------------------
# 2. CAP NHAT STYLES.CSS
# ------------------------------------------------------------------------------
Write-Host "`n[2] Cap nhat styles.css..." -ForegroundColor Yellow
$cssContent = [System.IO.File]::ReadAllText($cssPath, [System.Text.Encoding]::UTF8)

if ($cssContent -notmatch 'CLASS PROGRESS TRACKING \(N3 - HAM CHƠI\)') {
    $classStyles = @"


/* ===================================================
   CLASS PROGRESS TRACKING (N3 - HAM CHƠI)
   =================================================== */
.class-tracking-card {
    background: rgba(15, 23, 42, 0.85);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 20px;
    padding: 1.8rem;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1);
    margin-top: 1.5rem;
}

.class-card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 1.2rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
    gap: 1rem;
}

.class-title-group {
    display: flex;
    align-items: center;
    gap: 1.2rem;
}

.class-badge {
    background: linear-gradient(135deg, #00f3ff, #3b82f6);
    color: #000;
    font-weight: 900;
    font-size: 1.3rem;
    padding: 0.4rem 1rem;
    border-radius: 12px;
    box-shadow: 0 0 15px rgba(0, 243, 255, 0.4);
    letter-spacing: 1px;
}

.class-name {
    font-size: 1.45rem;
    font-weight: 800;
    color: #fff;
    margin: 0;
    letter-spacing: 0.5px;
    text-shadow: 0 0 12px rgba(255, 255, 255, 0.2);
}

.class-subtext {
    font-size: 0.88rem;
    color: var(--text-secondary);
    margin-top: 3px;
}

.class-stats-summary {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    flex-wrap: wrap;
}

.class-stat-pill {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background: rgba(30, 41, 59, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 0.5rem 1.1rem;
    border-radius: 30px;
}

.mini-progress-bar {
    width: 110px;
    height: 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    overflow: hidden;
}

.mini-progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #00f3ff, #10b981);
    transition: width 0.4s ease;
}

.class-action-btns {
    display: flex;
    align-items: center;
    gap: 0.6rem;
}

.class-collapse-btn {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
}

.class-collapse-btn:hover {
    background: rgba(0, 243, 255, 0.2);
    border-color: var(--neon-cyan);
    color: var(--neon-cyan);
    transform: scale(1.08);
}

.class-collapse-btn i {
    transition: transform 0.3s ease;
}

.class-card-body {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    transition: all 0.35s ease;
    overflow: hidden;
}

.class-tracking-card.collapsed {
    padding-bottom: 1.2rem;
}

.class-tracking-card.collapsed .class-card-header {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
}

.class-tracking-card.collapsed .class-card-body {
    max-height: 0;
    opacity: 0;
    margin: 0;
    padding: 0;
    pointer-events: none;
}

.class-tracking-card.collapsed .class-collapse-btn {
    background: rgba(0, 243, 255, 0.15);
    border-color: var(--neon-cyan);
    color: var(--neon-cyan);
}

.class-tracking-card.collapsed .class-collapse-btn i {
    transform: rotate(180deg);
}

.class-track-section {
    background: rgba(30, 41, 59, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    padding: 1.2rem 1.4rem;
}

.class-track-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.class-track-title {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 1.1rem;
    font-weight: 700;
    color: #fff;
}

.track-count-badge {
    background: rgba(255, 255, 255, 0.1);
    color: var(--text-secondary);
    font-size: 0.82rem;
    font-weight: 600;
    padding: 0.2rem 0.65rem;
    border-radius: 12px;
    margin-left: 0.4rem;
}

.class-track-hint {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.45);
    display: flex;
    align-items: center;
    gap: 0.4rem;
}

.class-track-scroll-wrapper {
    overflow-x: auto;
    padding: 0.8rem 0.4rem 1.2rem;
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 243, 255, 0.3) rgba(15, 23, 42, 0.6);
}

.class-track-scroll-wrapper::-webkit-scrollbar {
    height: 6px;
}

.class-track-scroll-wrapper::-webkit-scrollbar-track {
    background: rgba(15, 23, 42, 0.6);
    border-radius: 3px;
}

.class-track-scroll-wrapper::-webkit-scrollbar-thumb {
    background: rgba(0, 243, 255, 0.3);
    border-radius: 3px;
}

.class-track-scroll {
    display: flex;
    align-items: center;
    gap: 1.1rem;
    min-width: max-content;
}

.class-node-item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
    cursor: pointer;
    user-select: none;
    transition: transform 0.25s ease, filter 0.25s ease;
    width: 68px;
}

.class-node-item:hover {
    transform: translateY(-6px) scale(1.06);
}

.class-node-thumb {
    width: 62px;
    height: 62px;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    border: 3px solid rgba(255, 255, 255, 0.2);
    position: relative;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
}

.class-node-check {
    position: absolute;
    top: -2px;
    right: -2px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.72rem;
    font-weight: 900;
    transition: all 0.2s ease;
    z-index: 2;
}

.class-node-check:hover {
    transform: scale(1.2);
}

.class-node-label {
    margin-top: 7px;
    font-size: 0.82rem;
    font-weight: 600;
    text-align: center;
    white-space: nowrap;
    transition: color 0.3s ease;
}

/* --- Tối (Chưa dạy / Unlearned) --- */
.class-node-item.is-dark .class-node-thumb {
    filter: grayscale(95%) brightness(0.55);
    opacity: 0.5;
    border-color: rgba(255, 255, 255, 0.12);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
}

.class-node-item.is-dark .class-node-label {
    color: rgba(255, 255, 255, 0.45);
}

.class-node-item.is-dark .class-node-check {
    background: rgba(15, 23, 42, 0.8);
    color: transparent;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.class-node-item.is-dark:hover .class-node-thumb {
    filter: grayscale(60%) brightness(0.75);
    opacity: 0.75;
    border-color: rgba(255, 255, 255, 0.35);
}

/* --- Sáng (Đã dạy / Learned) --- */
/* Từ vựng: Neon Cyan */
.class-track-section:nth-of-type(1) .class-node-item.is-lit .class-node-thumb {
    filter: none;
    opacity: 1;
    border-color: #00f3ff;
    box-shadow: 0 0 16px rgba(0, 243, 255, 0.7), inset 0 0 10px rgba(0, 243, 255, 0.35);
}

/* Ngữ pháp: Neon Purple/Pink */
.class-track-section:nth-of-type(2) .class-node-item.is-lit .class-node-thumb {
    filter: none;
    opacity: 1;
    border-color: #d946ef;
    box-shadow: 0 0 16px rgba(217, 70, 239, 0.7), inset 0 0 10px rgba(217, 70, 239, 0.35);
}

/* Hán tự: Gold/Yellow */
.class-track-section:nth-of-type(3) .class-node-item.is-lit .class-node-thumb {
    filter: none;
    opacity: 1;
    border-color: #ffd700;
    box-shadow: 0 0 16px rgba(255, 215, 0, 0.7), inset 0 0 10px rgba(255, 215, 0, 0.35);
}

.class-node-item.is-lit .class-node-label {
    color: #fff;
    font-weight: 700;
    text-shadow: 0 1px 6px rgba(0, 0, 0, 0.9);
}

.class-node-item.is-lit .class-node-check {
    background: #10b981;
    color: #fff;
    border: 1px solid #34d399;
    box-shadow: 0 0 10px rgba(16, 185, 129, 0.8);
}
"@
    [System.IO.File]::AppendAllText($cssPath, $classStyles, [System.Text.Encoding]::UTF8)
    Write-Host "  + Da them CSS style cho lop N3 vao styles.css." -ForegroundColor Green
} else {
    Write-Host "  + styles.css da co style cho lop N3." -ForegroundColor Green
}

# ------------------------------------------------------------------------------
# 3. CAP NHAT SCRIPT.JS
# ------------------------------------------------------------------------------
Write-Host "`n[3] Cap nhat script.js..." -ForegroundColor Yellow
$jsContent = [System.IO.File]::ReadAllText($jsPath, [System.Text.Encoding]::UTF8)

if ($jsContent -notmatch 'initClassTracking') {
    # 1. Them ham initClassTracking truoc '// --- TỪ VỰNG LOGIC ---'
    $targetSnippet = '// --- TỪ VỰNG LOGIC ---'
    $idx = $jsContent.IndexOf($targetSnippet)
    if ($idx -ge 0) {
        $classLogicCode = @"
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

        // 1. Render Vocab Track (30 bai)
        vocabTrack.innerHTML = '';
        for (let i = 0; i < 30; i++) {
            const isLit = !!progress.vocab[i];
            const iconPath = vocabIcons[i % vocabIcons.length];
            const lessonNum = i + 1;

            const item = document.createElement('div');
            item.className = 'class-node-item ' + (isLit ? 'is-lit' : 'is-dark');
            item.title = 'Bài ' + lessonNum + ' (Nhấp: Mở bài học | Chuột phải hoặc bấm ✓: Đánh dấu đã dạy)';

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

        // 2. Render Grammar Track (28 bai)
        grammarTrack.innerHTML = '';
        for (let i = 0; i < 28; i++) {
            const isLit = !!progress.grammar[i];
            const iconPath = grammarIcons[i % grammarIcons.length];
            const lessonNum = i + 1;

            const item = document.createElement('div');
            item.className = 'class-node-item ' + (isLit ? 'is-lit' : 'is-dark');
            item.title = 'Bài ' + lessonNum + ' (Nhấp: Mở bài học | Chuột phải hoặc bấm ✓: Đánh dấu đã dạy)';

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

        // 3. Render Kanji Track (42 bai)
        kanjiTrack.innerHTML = '';
        for (let i = 0; i < 42; i++) {
            const isLit = !!progress.kanji[i];
            const iconPath = kanjiIcons[i % kanjiIcons.length];
            const lessonNum = i + 1;

            const item = document.createElement('div');
            item.className = 'class-node-item ' + (isLit ? 'is-lit' : 'is-dark');
            item.title = 'Bài ' + lessonNum + ' (Nhấp: Mở bài học | Chuột phải hoặc bấm ✓: Đánh dấu đã dạy)';

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

        // Collapse / Expand toggle
        const collapseBtn = document.getElementById('n3-toggle-collapse-btn');
        const classCard = document.getElementById('class-n3-hamchoi');
        if (collapseBtn && classCard) {
            if (localStorage.getItem('n3_hamchoi_collapsed') === 'true') {
                classCard.classList.add('collapsed');
                collapseBtn.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
            } else {
                classCard.classList.remove('collapsed');
                collapseBtn.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
            }
            collapseBtn.onclick = () => {
                classCard.classList.toggle('collapsed');
                const isCollapsed = classCard.classList.contains('collapsed');
                collapseBtn.innerHTML = isCollapsed ? '<i class="fa-solid fa-chevron-down"></i>' : '<i class="fa-solid fa-chevron-up"></i>';
                localStorage.setItem('n3_hamchoi_collapsed', isCollapsed ? 'true' : 'false');
            };
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

"@
        $jsContent = $jsContent.Insert($idx, $classLogicCode)
    }

    # 2. Goi initClassTracking trong initialization block
    $initSnippet = 'initDashboard();'
    $initIdx = $jsContent.IndexOf($initSnippet)
    if ($initIdx -ge 0) {
        $callCode = "initDashboard();`n        try { initClassTracking(); } catch(e) { console.error('initClassTracking error:', e); }"
        $jsContent = $jsContent.Substring(0, $initIdx) + $callCode + $jsContent.Substring($initIdx + $initSnippet.Length)
    }

    [System.IO.File]::WriteAllText($jsPath, $jsContent, [System.Text.Encoding]::UTF8)
    Write-Host "  + Da them logic initClassTracking vao script.js." -ForegroundColor Green
} else {
    Write-Host "  + script.js da co logic initClassTracking." -ForegroundColor Green
}

Write-Host "`n==========================================================" -ForegroundColor Cyan
Write-Host "  XAY DUNG LOP N3 - HAM CHOI HOAN TAT!" -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan
