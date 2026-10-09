// ==========================================================================
// NIHONGO SENSEI - CLASS PROGRESS TRACKING MODULE
// Quản lý tiến độ giảng dạy các lớp học: N3 - Ham chơi, N3 - Hmm
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Chờ một chút để đảm bảo các module chính đã load xong
    setTimeout(() => {
        initClassTracking();
    }, 150);
});

function initClassTracking() {
    // Danh sách icon phong cách bản đồ RPG (sử dụng tuần hoàn cho các bài học)
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

    // Điều hướng chung qua các section
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

    // Link sang bài Từ Vựng N3
    const navigateToVocabLesson = (lessonIndex) => {
        switchToView('tuvung');
        setTimeout(() => {
            const n3Tab = document.querySelector('.map-level-tabs .level-tab[data-map-level="N3"]');
            if (n3Tab && !n3Tab.classList.contains('active')) n3Tab.click();

            // Mở bản đồ từ vựng nếu đang đóng
            const mapContainer = document.getElementById('treasure-map-container');
            if (mapContainer && mapContainer.classList.contains('collapsed')) {
                const toggleBtn = document.getElementById('toggle-map-btn');
                if (toggleBtn) toggleBtn.click();
            }

            // Cuộn và kích hoạt node bài học
            setTimeout(() => {
                const nodes = document.querySelectorAll('#vocab-treasure-map .map-node');
                if (nodes && nodes[lessonIndex]) {
                    nodes[lessonIndex].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                    nodes[lessonIndex].click();
                }
            }, 200);
        }, 120);
    };

    // Link sang bài Ngữ Pháp N3
    const navigateToGrammarLesson = (lessonIndex) => {
        switchToView('nguphap');
        setTimeout(() => {
            const n3Tab = document.querySelector('#grammar-level-tabs .level-tab[data-level="N3"]');
            if (n3Tab && !n3Tab.classList.contains('active')) n3Tab.click();

            // Đảm bảo đang ở chế độ xem Danh sách (List)
            const listTab = document.querySelector('#grammar-view-tabs .level-tab[data-view="list"]');
            if (listTab && !listTab.classList.contains('active')) listTab.click();

            // Cuộn tới đúng bài ngữ pháp và phát sáng
            setTimeout(() => {
                const lessonSelect = document.getElementById('grammar-lesson-select');
                if (lessonSelect) {
                    lessonSelect.value = `grammar-lesson-${lessonIndex}`;
                }
                const targetLesson = document.getElementById(`grammar-lesson-${lessonIndex}`);
                if (targetLesson) {
                    targetLesson.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    targetLesson.classList.add('highlight-pulse');
                    setTimeout(() => targetLesson.classList.remove('highlight-pulse'), 3000);
                }
            }, 200);
        }, 120);
    };

    // Link sang bài Hán Tự N3
    const navigateToKanjiLesson = (lessonIndex) => {
        switchToView('hantu');
        setTimeout(() => {
            const n3Tab = document.querySelector('.kanji-level-tab[data-kanji-level="N3"]');
            if (n3Tab && !n3Tab.classList.contains('active')) n3Tab.click();

            // Mở bản đồ hán tự nếu đang đóng
            const mapContainer = document.getElementById('kanji-map-container');
            const toggleBtn = document.getElementById('toggle-kanji-map-btn');
            if (mapContainer && (mapContainer.style.display === 'none' || mapContainer.classList.contains('collapsed'))) {
                if (toggleBtn) toggleBtn.click();
            }

            // Cuộn và kích hoạt node bài học
            setTimeout(() => {
                const nodes = document.querySelectorAll('#kanji-map .map-node');
                if (nodes && nodes[lessonIndex]) {
                    nodes[lessonIndex].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                    nodes[lessonIndex].click();
                }
            }, 200);
        }, 120);
    };

    // Cấu hình các lớp học cần theo dõi tiến độ
    const classConfigs = [
        {
            id: 'n3-hamchoi',
            cardId: 'class-n3-hamchoi',
            name: 'N3 - Ham chơi',
            subtext: 'Theo dõi tiến độ giảng dạy các phân môn N3',
            storageKey: 'nihongo_class_n3_hamchoi_progress',
            collapseKey: 'n3_hamchoi_collapsed',
            vocabTrackId: 'hamchoi-vocab-track',
            grammarTrackId: 'hamchoi-grammar-track',
            kanjiTrackId: 'hamchoi-kanji-track',
            vocabCountId: 'n3-vocab-count',
            grammarCountId: 'n3-grammar-count',
            kanjiCountId: 'n3-kanji-count',
            totalTextId: 'n3-total-progress-text',
            totalBarId: 'n3-total-progress-bar',
            collapseBtnId: 'n3-toggle-collapse-btn',
            resetBtnId: 'n3-reset-progress-btn',
            counts: { vocab: 30, grammar: 28, kanji: 42 }
        },
        {
            id: 'n3-hmm',
            cardId: 'class-n3-hmm',
            name: 'N3 - Hmm',
            subtext: 'Theo dõi tiến độ giảng dạy các phân môn N3',
            storageKey: 'nihongo_class_n3_hmm_progress',
            collapseKey: 'n3_hmm_collapsed',
            vocabTrackId: 'hmm-vocab-track',
            grammarTrackId: 'hmm-grammar-track',
            kanjiTrackId: 'hmm-kanji-track',
            vocabCountId: 'n3-hmm-vocab-count',
            grammarCountId: 'n3-hmm-grammar-count',
            kanjiCountId: 'n3-hmm-kanji-count',
            totalTextId: 'n3-hmm-total-progress-text',
            totalBarId: 'n3-hmm-total-progress-bar',
            collapseBtnId: 'n3-hmm-toggle-collapse-btn',
            resetBtnId: 'n3-hmm-reset-progress-btn',
            counts: { vocab: 30, grammar: 28, kanji: 42 }
        }
    ];

    // Khởi tạo từng lớp học
    classConfigs.forEach(cfg => {
        setupSingleClassTracking(cfg, mapIcons, {
            navigateToVocabLesson,
            navigateToGrammarLesson,
            navigateToKanjiLesson
        });
    });
}

function setupSingleClassTracking(cfg, mapIcons, navigators) {
    const classCard = document.getElementById(cfg.cardId);
    const vocabTrack = document.getElementById(cfg.vocabTrackId);
    const grammarTrack = document.getElementById(cfg.grammarTrackId);
    const kanjiTrack = document.getElementById(cfg.kanjiTrackId);

    if (!classCard || !vocabTrack || !grammarTrack || !kanjiTrack) return;

    // Chuẩn hóa text hiển thị tiếng Việt trên giao diện thẻ lớp học
    const sanitizeCardUI = () => {
        const nameEl = classCard.querySelector('.class-name');
        if (nameEl) nameEl.textContent = cfg.name;

        const subtextEl = classCard.querySelector('.class-subtext');
        if (subtextEl) subtextEl.textContent = cfg.subtext;

        const statLabel = classCard.querySelector('.class-stat-pill .stat-label');
        if (statLabel) statLabel.textContent = 'Tổng tiến độ:';

        const resetBtn = document.getElementById(cfg.resetBtnId);
        if (resetBtn) {
            resetBtn.title = 'Đặt lại tất cả tiến độ lớp này';
            resetBtn.innerHTML = '<i class="fa-solid fa-rotate-left"></i> Đặt lại';
        }

        const collapseBtn = document.getElementById(cfg.collapseBtnId);
        if (collapseBtn) {
            collapseBtn.title = 'Thu gọn / Mở rộng lớp học';
        }

        const sections = classCard.querySelectorAll('.class-track-section');
        if (sections.length >= 3) {
            // Hàng 1: Từ Vựng
            const t1 = sections[0].querySelector('.class-track-title span:first-of-type');
            if (t1) t1.textContent = 'Từ Vựng (Goi)';
            const h1 = sections[0].querySelector('.class-track-hint');
            if (h1) h1.innerHTML = '<i class="fa-solid fa-circle-info"></i> Nhấp để mở bài học | Chuột phải hoặc bấm ✓ để đánh dấu đã dạy';

            // Hàng 2: Ngữ Pháp
            const t2 = sections[1].querySelector('.class-track-title span:first-of-type');
            if (t2) t2.textContent = 'Ngữ Pháp (Bunpou)';
            const h2 = sections[1].querySelector('.class-track-hint');
            if (h2) h2.innerHTML = '<i class="fa-solid fa-circle-info"></i> Nhấp để mở bài học | Chuột phải hoặc bấm ✓ để đánh dấu đã dạy';

            // Hàng 3: Hán Tự
            const t3 = sections[2].querySelector('.class-track-title span:first-of-type');
            if (t3) t3.textContent = 'Hán Tự (Kanji)';
            const h3 = sections[2].querySelector('.class-track-hint');
            if (h3) h3.innerHTML = '<i class="fa-solid fa-circle-info"></i> Nhấp để mở bài học | Chuột phải hoặc bấm ✓ để đánh dấu đã dạy';
        }
    };
    sanitizeCardUI();

    // Tải tiến độ từ localStorage (mặc định: tất cả rỗng = TẤT CẢ ICON TỐI)
    let progress = { vocab: [], grammar: [], kanji: [] };
    try {
        const saved = localStorage.getItem(cfg.storageKey);
        if (saved) {
            const parsed = JSON.parse(saved);
            progress.vocab = Array.isArray(parsed.vocab) ? parsed.vocab : [];
            progress.grammar = Array.isArray(parsed.grammar) ? parsed.grammar : [];
            progress.kanji = Array.isArray(parsed.kanji) ? parsed.kanji : [];
        }
    } catch (e) {
        console.error(`Lỗi khi tải tiến độ lớp ${cfg.name}:`, e);
    }

    const updateStats = () => {
        const vCount = progress.vocab.length;
        const gCount = progress.grammar.length;
        const kCount = progress.kanji.length;
        const totalDone = vCount + gCount + kCount;
        const totalLessons = cfg.counts.vocab + cfg.counts.grammar + cfg.counts.kanji; // 30 + 28 + 42 = 100 bài
        const pct = Math.round((totalDone / totalLessons) * 100);

        // Cập nhật số bài đã học trên từng hàng
        const vCountEl = document.getElementById(cfg.vocabCountId);
        if (vCountEl) vCountEl.textContent = `${vCount}/${cfg.counts.vocab} bài`;

        const gCountEl = document.getElementById(cfg.grammarCountId);
        if (gCountEl) gCountEl.textContent = `${gCount}/${cfg.counts.grammar} bài`;

        const kCountEl = document.getElementById(cfg.kanjiCountId);
        if (kCountEl) kCountEl.textContent = `${kCount}/${cfg.counts.kanji} bài`;

        // Cập nhật thanh tiến độ tổng quan
        const totalPctEl = document.getElementById(cfg.totalTextId);
        if (totalPctEl) totalPctEl.textContent = `${pct}%`;

        const totalBarEl = document.getElementById(cfg.totalBarId);
        if (totalBarEl) totalBarEl.style.width = `${pct}%`;
    };

    const saveProgress = () => {
        try {
            localStorage.setItem(cfg.storageKey, JSON.stringify(progress));
        } catch (e) {
            console.error(`Lỗi khi lưu tiến độ lớp ${cfg.name}:`, e);
        }
        updateStats();
    };

    // Render danh sách icon cho từng hàng
    const renderTrack = (container, count, type, onNavigate) => {
        container.innerHTML = '';
        for (let i = 0; i < count; i++) {
            const lessonNum = i + 1;
            const isLit = progress[type].includes(i);
            const iconSrc = mapIcons[i % mapIcons.length];

            const item = document.createElement('div');
            item.className = `class-node-item ${isLit ? 'is-lit' : 'is-dark'}`;
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
                <div class="class-node-label">Bài ${lessonNum}</div>
            `;

            // Nút check tròn để bật/tắt nhanh trạng thái
            const checkBtn = item.querySelector('.class-node-check');
            if (checkBtn) {
                checkBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    toggleItemStatus(type, i, item);
                });
            }

            // Click chuột phải trên toàn bộ icon để bật/tắt nhanh
            item.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                toggleItemStatus(type, i, item);
            });

            // Click vào thumbnail hoặc tên bài học để chuyển ngay tới bài học
            item.addEventListener('click', () => {
                onNavigate(i);
            });

            container.appendChild(item);
        }
    };

    // Chuyển đổi trạng thái Đã học <-> Chưa học (Sáng <-> Tối)
    const toggleItemStatus = (type, index, itemEl) => {
        const arr = progress[type];
        const idx = arr.indexOf(index);
        if (idx > -1) {
            arr.splice(idx, 1);
            itemEl.classList.remove('is-lit');
            itemEl.classList.add('is-dark');
            const checkBtn = itemEl.querySelector('.class-node-check');
            if (checkBtn) checkBtn.title = 'Chưa học (Bấm để đánh dấu Đã học)';
        } else {
            arr.push(index);
            itemEl.classList.remove('is-dark');
            itemEl.classList.add('is-lit');
            const checkBtn = itemEl.querySelector('.class-node-check');
            if (checkBtn) checkBtn.title = 'Đã học (Bấm để chuyển thành Chưa học)';
        }
        saveProgress();
    };

    // Render cả 3 hàng tiến độ
    renderTrack(vocabTrack, cfg.counts.vocab, 'vocab', navigators.navigateToVocabLesson);
    renderTrack(grammarTrack, cfg.counts.grammar, 'grammar', navigators.navigateToGrammarLesson);
    renderTrack(kanjiTrack, cfg.counts.kanji, 'kanji', navigators.navigateToKanjiLesson);

    // Cập nhật số liệu ban đầu
    updateStats();

    // Nút Thu gọn / Mở rộng card lớp học
    const collapseBtn = document.getElementById(cfg.collapseBtnId);
    if (collapseBtn) {
        try {
            if (localStorage.getItem(cfg.collapseKey) === 'true') {
                classCard.classList.add('collapsed');
                collapseBtn.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
            }
        } catch (e) {}

        collapseBtn.addEventListener('click', () => {
            classCard.classList.toggle('collapsed');
            const isCollapsed = classCard.classList.contains('collapsed');
            collapseBtn.innerHTML = isCollapsed ? '<i class="fa-solid fa-chevron-down"></i>' : '<i class="fa-solid fa-chevron-up"></i>';
            try {
                localStorage.setItem(cfg.collapseKey, isCollapsed ? 'true' : 'false');
            } catch (e) {}
        });
    }

    // Nút Đặt lại tiến độ (Reset all)
    const resetBtn = document.getElementById(cfg.resetBtnId);
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            if (confirm(`Bạn có chắc chắn muốn đặt lại toàn bộ tiến độ lớp "${cfg.name}" về trạng thái Chưa học (tối icon)?`)) {
                progress = { vocab: [], grammar: [], kanji: [] };
                saveProgress();
                renderTrack(vocabTrack, cfg.counts.vocab, 'vocab', navigators.navigateToVocabLesson);
                renderTrack(grammarTrack, cfg.counts.grammar, 'grammar', navigators.navigateToGrammarLesson);
                renderTrack(kanjiTrack, cfg.counts.kanji, 'kanji', navigators.navigateToKanjiLesson);
            }
        });
    }
}
