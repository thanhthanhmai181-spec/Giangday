$path = Join-Path $PSScriptRoot "..\index.html"
$content = [System.IO.File]::ReadAllText((Resolve-Path $path), [System.Text.Encoding]::UTF8)

$oldBlock = @"
                        <!-- Quáº£n lÃ½ tiáº¿n Ä‘á»™ lá»›p há» c: N3 - Ham chÆ¡i -->
                        <div class="class-tracking-card glass-panel mb-2" id="class-n3-hamchoi">
                            <div class="class-card-header">
                                <div class="class-title-group">
                                    <div class="class-badge">N3</div>
                                    <div>
                                        <h2 class="class-name">N3 - Ham chÆ¡i</h2>
                                        <div class="class-subtext">Theo dÃµi tiáº¿n Ä‘á»™ giáº£ng dáº¡y cÃ¡c phÃ¢n mÃ´n</div>
                                    </div>
                                </div>
                                <div class="class-stats-summary">
                                    <div class="class-stat-pill">
                                        <span class="stat-label">Tá»•ng tiáº¿n Ä‘á»™:</span>
                                        <span class="stat-value text-neon-cyan" id="n3-total-progress-text">0%</span>
                                        <div class="mini-progress-bar">
                                            <div class="mini-progress-fill" id="n3-total-progress-bar" style="width: 0%;"></div>
                                        </div>
                                    </div>
                                    <div class="class-action-btns">
                                        <button class="btn-icon class-collapse-btn" id="n3-toggle-collapse-btn" title="Thu gá» n / Má»Ÿ rá»™ng lá»›p há» c">
                                            <i class="fa-solid fa-chevron-up"></i>
                                        </button>
                                        <button class="btn-primary btn-outline btn-small" id="n3-reset-progress-btn" title="Ä áº·t láº¡i táº¥t cáº£ tiáº¿n Ä‘á»™ lá»›p nÃ y">
                                            <i class="fa-solid fa-rotate-left"></i> Ä áº·t láº¡i
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <!-- ThÃ¢n tháº» lá»›p há» c (CÃ³ thá»ƒ thu gá» n) -->
                            <div class="class-card-body" id="class-n3-body">
                                <!-- HÃ ng 1: Tá»« Vá»±ng (30 bÃ i) -->
                                <div class="class-track-section">
                                    <div class="class-track-header">
                                        <div class="class-track-title">
                                            <i class="fa-solid fa-spell-check text-neon-cyan"></i>
                                            <span>Tá»« Vá»±ng (Goi)</span>
                                            <span class="track-count-badge" id="n3-vocab-count">0/30 bÃ i</span>
                                        </div>
                                        <div class="class-track-hint">
                                            <i class="fa-solid fa-circle-info"></i> Nháº¥p Ä‘á»ƒ má»Ÿ bÃ i há» c | Chuá»™t pháº£i hoáº·c báº¥m âœ“ Ä‘á»ƒ Ä‘Ã¡nh dáº¥u Ä‘Ã£ dáº¡y
                                        </div>
                                    </div>
                                    <div class="class-track-scroll-wrapper">
                                        <div class="class-track-scroll" id="hamchoi-vocab-track">
                                            <!-- 30 bÃ i render báº±ng JS -->
                                        </div>
                                    </div>
                                </div>

                                <!-- HÃ ng 2: Ngá»¯ PhÃ¡p (28 bÃ i) -->
                                <div class="class-track-section">
                                    <div class="class-track-header">
                                        <div class="class-track-title">
                                            <i class="fa-solid fa-bars-staggered text-neon-purple"></i>
                                            <span>Ngá»¯ PhÃ¡p (Bunpou)</span>
                                            <span class="track-count-badge" id="n3-grammar-count">0/28 bÃ i</span>
                                        </div>
                                        <div class="class-track-hint">
                                            <i class="fa-solid fa-circle-info"></i> Nháº¥p Ä‘á»ƒ má»Ÿ bÃ i há» c | Chuá»™t pháº£i hoáº·c báº¥m âœ“ Ä‘á»ƒ Ä‘Ã¡nh dáº¥u Ä‘Ã£ dáº¡y
                                        </div>
                                    </div>
                                    <div class="class-track-scroll-wrapper">
                                        <div class="class-track-scroll" id="hamchoi-grammar-track">
                                            <!-- 28 bÃ i render báº±ng JS -->
                                        </div>
                                    </div>
                                </div>

                                <!-- HÃ ng 3: HÃ¡n Tá»± (42 bÃ i) -->
                                <div class="class-track-section">
                                    <div class="class-track-header">
                                        <div class="class-track-title">
                                            <i class="fa-solid fa-language text-neon-yellow"></i>
                                            <span>HÃ¡n Tá»± (Kanji)</span>
                                            <span class="track-count-badge" id="n3-kanji-count">0/42 bÃ i</span>
                                        </div>
                                        <div class="class-track-hint">
                                            <i class="fa-solid fa-circle-info"></i> Nháº¥p Ä‘á»ƒ má»Ÿ bÃ i há» c | Chuá»™t pháº£i hoáº·c báº¥m âœ“ Ä‘á»ƒ Ä‘Ã¡nh dáº¥u Ä‘Ã£ dáº¡y
                                        </div>
                                    </div>
                                    <div class="class-track-scroll-wrapper">
                                        <div class="class-track-scroll" id="hamchoi-kanji-track">
                                            <!-- 42 bÃ i render báº±ng JS -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
"@

$newBlock = @"
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

$content = $content.Replace($oldBlock, $newBlock)
[System.IO.File]::WriteAllText((Resolve-Path $path), $content, (New-Object System.Text.UTF8Encoding($false)))
Write-Host "Updated class section in index.html cleanly."
