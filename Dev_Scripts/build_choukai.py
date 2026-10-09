import json

with open('Dev_Scripts/choukai_n3_nghe_traloi_bai1.json', 'r', encoding='utf-8') as f:
    bai1_data = json.load(f)

bai1_json_str = json.dumps(bai1_data, ensure_ascii=False, indent=4)

js_template = """/**
 * CHOUKAI (NGHE HIỂU) JITI / JLPT ENGINE
 * Hỗ trợ các phân môn nghe hiểu: Nghe trả lời (nghe_traloi), Nghe chủ đề (nghe_chude),
 * Nghe hỏi (nghe_hoi), Nghe phản xạ (nghe_phanxa).
 */

const CHOUKAI_STORAGE_DONE_KEY = 'jiti_choukai_completed_lessons';

const choukaiDataset = {
    "N5": {
        "nghe_traloi": [],
        "nghe_chude": [],
        "nghe_hoi": [],
        "nghe_phanxa": []
    },
    "N4": {
        "nghe_traloi": [],
        "nghe_chude": [],
        "nghe_hoi": [],
        "nghe_phanxa": []
    },
    "N3": {
        "nghe_traloi": [
__BAI1_DATA__
        ],
        "nghe_chude": [],
        "nghe_hoi": [],
        "nghe_phanxa": []
    }
};

// ==========================================================================
// CONTROLLER & RENDER ENGINE
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        initChoukai();
    }, 150);
});

function initChoukai() {
    let currentLevel = 'N3';
    let currentSkill = 'nghe_traloi';
    let currentLessonIndex = 0;
    let currentFilter = 'all'; // 'all', 'done', 'undone'
    
    // Audio tracking per question
    const activeAudios = {};

    // Load completed lessons from localStorage
    const getCompletedList = () => {
        try {
            const raw = localStorage.getItem(CHOUKAI_STORAGE_DONE_KEY);
            return raw ? JSON.parse(raw) : [];
        } catch (e) {
            return [];
        }
    };

    const isLessonDone = (lessonId) => {
        return getCompletedList().includes(lessonId);
    };

    const toggleLessonDone = (lessonId) => {
        let list = getCompletedList();
        const idx = list.indexOf(lessonId);
        if (idx > -1) {
            list.splice(idx, 1);
        } else {
            list.push(lessonId);
        }
        try {
            localStorage.setItem(CHOUKAI_STORAGE_DONE_KEY, JSON.stringify(list));
        } catch (e) {}
        renderLessonTabs();
        renderChoukaiLesson();
    };

    // DOM Elements
    const levelTabs = document.querySelectorAll('#choukai-level-tabs .level-tab');
    const skillTabs = document.querySelectorAll('#choukai-type-tabs .level-tab');
    const lessonTabsContainer = document.getElementById('choukai-lesson-tabs');
    const choukaiContentArea = document.getElementById('choukai-content-area');

    if (!choukaiContentArea) return;

    // Helper: Stop all playing audios
    function stopAllAudios() {
        Object.keys(activeAudios).forEach(k => {
            if (activeAudios[k]) {
                activeAudios[k].pause();
                activeAudios[k].currentTime = 0;
            }
        });
    }

    // ── Get Sorted Lessons ─────────────────────────────────────────────────
    function getSortedLessons() {
        const levelData = choukaiDataset[currentLevel] || {};
        const rawLessons = levelData[currentSkill] || [];
        return rawLessons.slice().sort((a, b) => {
            const numA = parseInt(a.lessonNumber || (a.id ? a.id.replace(/\\D+/g, '') : 0)) || 0;
            const numB = parseInt(b.lessonNumber || (b.id ? b.id.replace(/\\D+/g, '') : 0)) || 0;
            return numA - numB;
        });
    }

    // ── Sync Active Tab Styles ─────────────────────────────────────────────
    function syncTabsUI() {
        levelTabs.forEach(t => {
            if (t.dataset.level === currentLevel) {
                t.classList.add('active');
            } else {
                t.classList.remove('active');
            }
        });

        skillTabs.forEach(t => {
            if (t.dataset.type === currentSkill) {
                t.classList.add('active');
            } else {
                t.classList.remove('active');
            }
        });
    }

    // ── Render Lesson Tabs & Filter Bar ────────────────────────────────────
    function renderLessonTabs() {
        if (!lessonTabsContainer) return;
        const lessons = getSortedLessons();
        lessonTabsContainer.innerHTML = '';

        if (lessons.length === 0) {
            lessonTabsContainer.innerHTML = `<span style="color:#888; padding: 0.4rem 1rem; font-size: 0.95rem;"><i class="fa-solid fa-hourglass-half"></i> Dữ liệu bài nghe đang được ban biên tập cập nhật...</span>`;
            return;
        }

        const filterWrapper = document.createElement('div');
        filterWrapper.className = 'dokkai-filter-bar-wrapper';

        const completedList = getCompletedList();
        const totalCount = lessons.length;
        const doneCount = lessons.filter(l => completedList.includes(l.id)).length;
        const pct = Math.round((doneCount / totalCount) * 100) || 0;

        filterWrapper.innerHTML = `
            <div class="dokkai-filter-left">
                <div class="dokkai-progress-pill" title="Tiến độ bài nghe đã hoàn thành">
                    <i class="fa-solid fa-headphones text-neon-cyan"></i>
                    <span>Đã nghe: <strong>${doneCount}/${totalCount}</strong> (${pct}%)</span>
                </div>
                <div class="dokkai-status-filters">
                    <button class="dokkai-filter-btn ${currentFilter === 'all' ? 'active' : ''}" data-filter="all">Tất cả (${totalCount})</button>
                    <button class="dokkai-filter-btn ${currentFilter === 'undone' ? 'active' : ''}" data-filter="undone">Chưa làm (${totalCount - doneCount})</button>
                    <button class="dokkai-filter-btn ${currentFilter === 'done' ? 'active' : ''}" data-filter="done">Đã làm (${doneCount})</button>
                </div>
            </div>
            <div class="dokkai-lesson-pills" id="choukai-pills-list"></div>
        `;

        const pillsList = filterWrapper.querySelector('#choukai-pills-list');

        lessons.forEach((lesson, index) => {
            const isDone = completedList.includes(lesson.id);

            if (currentFilter === 'done' && !isDone) return;
            if (currentFilter === 'undone' && isDone) return;

            const pill = document.createElement('button');
            pill.className = `dokkai-lesson-pill ${index === currentLessonIndex ? 'active' : ''} ${isDone ? 'is-done' : ''}`;
            pill.innerHTML = `
                <span class="pill-check-icon"><i class="fa-solid ${isDone ? 'fa-check' : 'fa-headphones'}"></i></span>
                <span class="pill-num">Bài ${lesson.lessonNumber || (index + 1)}</span>
                <span class="pill-status-dot"></span>
            `;
            pill.title = `${lesson.title} - ${isDone ? 'Đã làm' : 'Chưa làm'}`;

            pill.addEventListener('click', () => {
                stopAllAudios();
                currentLessonIndex = index;
                renderLessonTabs();
                renderChoukaiLesson();
            });

            pillsList.appendChild(pill);
        });

        filterWrapper.querySelectorAll('.dokkai-filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                currentFilter = btn.dataset.filter;
                renderLessonTabs();
            });
        });

        lessonTabsContainer.appendChild(filterWrapper);
    }

    // ── Render Current Choukai Lesson ──────────────────────────────────────
    function renderChoukaiLesson() {
        stopAllAudios();
        const lessons = getSortedLessons();
        const lesson = lessons[currentLessonIndex];

        if (!lesson) {
            choukaiContentArea.innerHTML = `
                <div class="dokkai-empty-state" style="padding: 3rem; text-align: center; color: #888;">
                    <i class="fa-solid fa-headphones-simple" style="font-size: 3rem; margin-bottom: 1rem; color: var(--neon-cyan);"></i>
                    <h3>Chưa có dữ liệu bài nghe</h3>
                    <p>Các bài luyện nghe cho dạng này đang được ban biên tập cập nhật.</p>
                </div>
            `;
            return;
        }

        const isDone = isLessonDone(lesson.id);

        choukaiContentArea.innerHTML = `
            <div class="choukai-lesson-header glass-panel mb-2">
                <div class="dokkai-title-row">
                    <div class="dokkai-title-text">
                        <span class="dokkai-badge-skill"><i class="fa-solid fa-headphones"></i> ${getChoukaiSkillName(currentSkill)}</span>
                        <span>${lesson.title}</span>
                    </div>
                    <div class="dokkai-header-actions">
                        <button class="dokkai-done-toggle-btn ${isDone ? 'is-done' : ''}" id="btn-toggle-choukai-done">
                            <i class="fa-solid ${isDone ? 'fa-square-check' : 'fa-square'}"></i>
                            <span>${isDone ? 'Đã hoàn thành' : 'Đánh dấu đã nghe'}</span>
                        </button>
                    </div>
                </div>
                ${lesson.description ? `<p class="choukai-desc-text"><i class="fa-solid fa-circle-info text-neon-cyan"></i> ${lesson.description}</p>` : ''}
            </div>

            <!-- Questions Grid/List -->
            <div class="choukai-questions-wrapper" id="choukai-questions-wrapper">
                <!-- Injected via JS -->
            </div>
        `;

        const toggleDoneBtn = document.getElementById('btn-toggle-choukai-done');
        if (toggleDoneBtn) {
            toggleDoneBtn.onclick = () => toggleLessonDone(lesson.id);
        }

        renderChoukaiQuestions(lesson);
    }

    // ── Render Questions with Audio Players & 4-Step Feedback ──────────────
    function renderChoukaiQuestions(lesson) {
        const wrapper = document.getElementById('choukai-questions-wrapper');
        if (!wrapper) return;
        wrapper.innerHTML = '';

        if (!lesson.questions || lesson.questions.length === 0) {
            wrapper.innerHTML = `<p style="color:#888; text-align:center; padding: 2rem;">Chưa có câu hỏi cho bài nghe này.</p>`;
            return;
        }

        lesson.questions.forEach((q, qIndex) => {
            const card = document.createElement('div');
            card.className = 'choukai-qcard glass-panel mb-2';
            card.id = `choukai-qcard-${q.id || (qIndex + 1)}`;

            let optionsHtml = '';
            q.options.forEach((opt, optIndex) => {
                optionsHtml += `
                    <button type="button" class="choukai-opt-btn" data-opt-idx="${optIndex}">
                        <span class="opt-num">${optIndex + 1}</span>
                        <span class="opt-text">${opt}</span>
                    </button>
                `;
            });

            // 1. Ý nghĩa & Phân tích 4 đáp án (optionsAnalysis)
            let optionsAnalysisHtml = '';
            if (q.optionsAnalysis && q.optionsAnalysis.length > 0) {
                optionsAnalysisHtml = `
                    <div class="feedback-options-meaning-box">
                        <div class="f-section-title"><i class="fa-solid fa-list-check text-neon-cyan"></i> 1. Ý nghĩa & Phân tích 4 lựa chọn:</div>
                        <ul class="feedback-options-list">
                            ${q.optionsAnalysis.map((item, idx) => `
                                <li class="opt-meaning-item ${idx === q.answer ? 'is-correct-target' : ''}">
                                    <div class="opt-meaning-header">
                                        <span class="opt-tag">${idx + 1}</span>
                                        <strong class="opt-name">${item.option}</strong>
                                        ${idx === q.answer ? '<span class="correct-badge"><i class="fa-solid fa-check"></i> ĐÁP ÁN ĐÚNG</span>' : ''}
                                    </div>
                                    <div class="opt-meaning-text"><span class="lbl-sub">Nghĩa:</span> ${item.meaning}</div>
                                    ${item.analysis ? `<div class="opt-analysis-text"><span class="lbl-sub">Nhận xét:</span> ${item.analysis}</div>` : ''}
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                `;
            }

            card.innerHTML = `
                <div class="choukai-qcard-header">
                    <div class="q-badge-row">
                        <span class="choukai-sub-badge">${q.subId || `Câu ${qIndex + 1}`}</span>
                        <span class="choukai-q-hint"><i class="fa-solid fa-headphones"></i> Bấm Play để nghe câu hỏi & lời thoại</span>
                    </div>
                    
                    <!-- AUDIO PLAYER BAR -->
                    <div class="choukai-player-bar" id="player-bar-${q.id}">
                        <button class="btn-play-audio" id="btn-play-${q.id}" title="Nghe / Dừng">
                            <i class="fa-solid fa-play"></i>
                        </button>
                        <button class="btn-audio-rewind" id="btn-rewind-${q.id}" title="Tua lại 5 giây">
                            <i class="fa-solid fa-rotate-left"></i> 5s
                        </button>
                        
                        <div class="audio-track-wrapper">
                            <input type="range" class="audio-seek-slider" id="seek-${q.id}" value="0" min="0" max="100" step="0.1">
                            <div class="audio-time-row">
                                <span class="time-current" id="time-cur-${q.id}">00:00</span>
                                <span class="time-duration" id="time-dur-${q.id}">--:--</span>
                            </div>
                        </div>

                        <div class="audio-speed-group">
                            <button class="speed-pill active" data-speed="1.0">1.0x</button>
                            <button class="speed-pill" data-speed="1.25">1.25x</button>
                            <button class="speed-pill" data-speed="0.75">0.75x</button>
                        </div>
                    </div>

                    <div class="choukai-q-text mt-2">${q.question}</div>
                    ${q.questionVi ? `<div class="choukai-q-subtext text-secondary">${q.questionVi}</div>` : ''}
                </div>

                <!-- 4 Options -->
                <div class="choukai-options-list">
                    ${optionsHtml}
                </div>

                <!-- Action Toolbar: Script Drawer Toggle -->
                <div class="choukai-actions-bar">
                    <button class="btn-primary btn-outline btn-small btn-toggle-script" id="btn-script-${q.id}">
                        <i class="fa-solid fa-file-audio"></i> <span class="script-btn-label">Hiện Lời Thoại (Script) & Dịch Nghĩa</span>
                    </button>
                </div>

                <!-- Script & Translation Drawer (Hidden by default) -->
                <div class="choukai-script-drawer" id="script-drawer-${q.id}" style="display: none;">
                    <div class="script-box-inner">
                        <div class="script-section">
                            <div class="script-title"><i class="fa-solid fa-volume-high text-neon-cyan"></i> Lời thoại gốc (Script tiếng Nhật):</div>
                            <div class="script-jp-body">${q.scriptJp || '<p>Đang cập nhật lời thoại...</p>'}</div>
                        </div>
                        <div class="script-section mt-2">
                            <div class="script-title"><i class="fa-solid fa-language text-neon-yellow"></i> Dịch nghĩa lời thoại tiếng Việt:</div>
                            <div class="script-vi-body">${(q.scriptVi || 'Đang cập nhật bản dịch...').replace(/\\n/g, '<br>')}</div>
                        </div>
                    </div>
                </div>

                <!-- 4-Step Standard Feedback Area -->
                <div class="dokkai-q-feedback choukai-feedback" style="display:none;" id="feedback-${q.id}">
                    <!-- 1. Giải thích nghĩa của cả 4 đáp án -->
                    ${optionsAnalysisHtml}

                    <!-- 2. Đáp án đúng & Trạng thái lựa chọn -->
                    <div class="feedback-status-box">
                        <div class="f-section-title"><i class="fa-solid fa-bullseye text-neon-cyan"></i> 2. Kết quả & Đáp án chính xác:</div>
                        <div class="feedback-status"></div>
                        <div class="feedback-correct-answer">
                            Đáp án đúng: <strong class="text-neon-cyan">[ ${q.answer + 1} ] ${q.options[q.answer]}</strong>
                        </div>
                    </div>

                    <!-- 3. Dẫn chứng trong bài nghe -->
                    <div class="feedback-evidence-box">
                        <div class="f-section-title"><i class="fa-solid fa-quote-left text-neon-yellow"></i> 3. Dẫn chứng trong bài nghe:</div>
                        <div class="evidence-text">${q.evidence || 'Xem lại lời thoại trong phần Script.'}</div>
                    </div>

                    <!-- 4. Phân tích giải thích chi tiết -->
                    <div class="feedback-explanation-box">
                        <div class="f-section-title"><i class="fa-solid fa-circle-info text-neon-purple"></i> 4. Phân tích giải thích chi tiết:</div>
                        <div class="explanation-text">${(q.explanation || 'Chưa có giải thích chi tiết.').replace(/\\n/g, '<br>')}</div>
                    </div>
                </div>
            `;

            // ── BIND AUDIO PLAYER EVENTS ────────────────────────────────────
            const audio = new Audio(q.audioSrc);
            activeAudios[q.id] = audio;

            const playBtn = card.querySelector(`#btn-play-${q.id}`);
            const rewindBtn = card.querySelector(`#btn-rewind-${q.id}`);
            const seekSlider = card.querySelector(`#seek-${q.id}`);
            const curTimeEl = card.querySelector(`#time-cur-${q.id}`);
            const durTimeEl = card.querySelector(`#time-dur-${q.id}`);
            const speedPills = card.querySelectorAll(`.speed-pill`);

            const formatTime = (secs) => {
                if (isNaN(secs)) return '00:00';
                const m = Math.floor(secs / 60).toString().padStart(2, '0');
                const s = Math.floor(secs % 60).toString().padStart(2, '0');
                return `${m}:${s}`;
            };

            audio.addEventListener('loadedmetadata', () => {
                durTimeEl.textContent = formatTime(audio.duration);
            });

            audio.addEventListener('timeupdate', () => {
                if (!isNaN(audio.duration) && audio.duration > 0) {
                    seekSlider.value = (audio.currentTime / audio.duration) * 100;
                    curTimeEl.textContent = formatTime(audio.currentTime);
                }
            });

            audio.addEventListener('ended', () => {
                playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
                playBtn.classList.remove('is-playing');
            });

            playBtn.addEventListener('click', () => {
                if (audio.paused) {
                    // Pause other audios
                    Object.keys(activeAudios).forEach(otherId => {
                        if (otherId !== `${q.id}` && activeAudios[otherId] && !activeAudios[otherId].paused) {
                            activeAudios[otherId].pause();
                            const otherBtn = document.querySelector(`#btn-play-${otherId}`);
                            if (otherBtn) {
                                otherBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
                                otherBtn.classList.remove('is-playing');
                            }
                        }
                    });

                    audio.play();
                    playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
                    playBtn.classList.add('is-playing');
                } else {
                    audio.pause();
                    playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
                    playBtn.classList.remove('is-playing');
                }
            });

            rewindBtn.addEventListener('click', () => {
                audio.currentTime = Math.max(0, audio.currentTime - 5);
            });

            seekSlider.addEventListener('input', () => {
                if (!isNaN(audio.duration)) {
                    audio.currentTime = (seekSlider.value / 100) * audio.duration;
                }
            });

            speedPills.forEach(pill => {
                pill.addEventListener('click', () => {
                    speedPills.forEach(p => p.classList.remove('active'));
                    pill.classList.add('active');
                    const speed = parseFloat(pill.dataset.speed) || 1.0;
                    audio.playbackRate = speed;
                });
            });

            // ── BIND SCRIPT TOGGLE ──────────────────────────────────────────
            const scriptBtn = card.querySelector(`#btn-script-${q.id}`);
            const scriptDrawer = card.querySelector(`#script-drawer-${q.id}`);
            const scriptBtnLabel = scriptBtn.querySelector('.script-btn-label');

            scriptBtn.addEventListener('click', () => {
                const isHidden = scriptDrawer.style.display === 'none';
                scriptDrawer.style.display = isHidden ? 'block' : 'none';
                scriptBtnLabel.textContent = isHidden ? 'Ẩn Lời Thoại (Script)' : 'Hiện Lời Thoại (Script) & Dịch Nghĩa';
                scriptBtn.classList.toggle('active', isHidden);
            });

            // ── BIND OPTION BUTTON CLICK ────────────────────────────────────
            const optBtns = card.querySelectorAll('.choukai-opt-btn');
            const feedbackBox = card.querySelector(`#feedback-${q.id}`);
            const statusEl = feedbackBox.querySelector('.feedback-status');

            optBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const chosenIdx = parseInt(btn.dataset.optIdx);
                    const isCorrect = (chosenIdx === q.answer);

                    optBtns.forEach(b => b.classList.remove('selected', 'is-correct', 'is-wrong'));
                    btn.classList.add('selected');

                    if (isCorrect) {
                        btn.classList.add('is-correct');
                        statusEl.innerHTML = `<span class="feedback-alert alert-correct"><i class="fa-solid fa-circle-check"></i> CHÍNH XÁC! Bạn đã chọn đúng đáp án [ ${chosenIdx + 1} ].</span>`;
                    } else {
                        btn.classList.add('is-wrong');
                        statusEl.innerHTML = `<span class="feedback-alert alert-wrong"><i class="fa-solid fa-circle-xmark"></i> CHƯA CHÍNH XÁC. Bạn đã chọn [ ${chosenIdx + 1} ].</span>`;
                        if (optBtns[q.answer]) optBtns[q.answer].classList.add('is-correct');
                    }

                    feedbackBox.style.display = 'block';
                });
            });

            wrapper.appendChild(card);
        });
    }

    function getChoukaiSkillName(key) {
        const map = {
            'nghe_traloi': 'Nghe trả lời (課題理解)',
            'nghe_chude': 'Nghe chủ đề (ポイント理解)',
            'nghe_hoi': 'Nghe hỏi (概要理解)',
            'nghe_phanxa': 'Nghe phản xạ (即時応答)'
        };
        return map[key] || 'Nghe hiểu';
    }

    // ── Level & Skill Event Listeners ──────────────────────────────────────
    levelTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            levelTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentLevel = tab.dataset.level || 'N3';
            currentLessonIndex = 0;
            syncTabsUI();
            renderLessonTabs();
            renderChoukaiLesson();
        });
    });

    skillTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            skillTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentSkill = tab.dataset.type || 'nghe_traloi';
            currentLessonIndex = 0;
            syncTabsUI();
            renderLessonTabs();
            renderChoukaiLesson();
        });
    });

    // Initial render
    syncTabsUI();
    renderLessonTabs();
    renderChoukaiLesson();
}
"""

final_js = js_template.replace('__BAI1_DATA__', bai1_json_str)

with open('choukai.js', 'w', encoding='utf-8') as f:
    f.write(final_js)

print("Generated choukai.js with Python successfully!")
