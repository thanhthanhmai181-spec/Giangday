$path = "index.html"
$lines = [System.IO.File]::ReadAllLines($path, [System.Text.Encoding]::UTF8)

# Find start and end of class card
$startIdx = -1
$endIdx = -1

for ($i = 0; $i -lt $lines.Length; $i++) {
    if ($lines[$i] -match 'id="class-n3-hamchoi"') {
        $startIdx = $i - 1 # Include comment line
    }
    if ($startIdx -ge 0 -and $lines[$i] -match 'id="flashcards"') {
        $endIdx = $i - 2 # Before flashcards section
        break
    }
}

$newLines = @(
'                        <!-- Quản lý tiến độ lớp học: N3 - Ham chơi -->'
'                        <div class="class-tracking-card glass-panel mb-2" id="class-n3-hamchoi">'
'                            <div class="class-card-header">'
'                                <div class="class-title-group">'
'                                    <div class="class-badge">N3</div>'
'                                    <div>'
'                                        <h2 class="class-name">N3 - Ham chơi</h2>'
'                                        <div class="class-subtext">Theo dõi tiến độ giảng dạy các phân môn N3</div>'
'                                    </div>'
'                                </div>'
'                                <div class="class-stats-summary">'
'                                    <div class="class-stat-pill">'
'                                        <span class="stat-label">Tổng tiến độ:</span>'
'                                        <span class="stat-value text-neon-cyan" id="n3-total-progress-text">0%</span>'
'                                        <div class="mini-progress-bar">'
'                                            <div class="mini-progress-fill" id="n3-total-progress-bar" style="width: 0%;"></div>'
'                                        </div>'
'                                    </div>'
'                                    <div class="class-action-btns">'
'                                        <button class="btn-icon class-collapse-btn" id="n3-toggle-collapse-btn" title="Thu gọn / Mở rộng lớp học">'
'                                            <i class="fa-solid fa-chevron-up"></i>'
'                                        </button>'
'                                        <button class="btn-primary btn-outline btn-small" id="n3-reset-progress-btn" title="Đặt lại tất cả tiến độ lớp này">'
'                                            <i class="fa-solid fa-rotate-left"></i> Đặt lại'
'                                        </button>'
'                                    </div>'
'                                </div>'
'                            </div>'
''
'                            <!-- Thân thẻ lớp học (Có thể thu gọn) -->'
'                            <div class="class-card-body" id="class-n3-body">'
'                                <!-- Hàng 1: Từ Vựng (30 bài) -->'
'                                <div class="class-track-section">'
'                                    <div class="class-track-header">'
'                                        <div class="class-track-title">'
'                                            <i class="fa-solid fa-spell-check text-neon-cyan"></i>'
'                                            <span>Từ Vựng (Goi)</span>'
'                                            <span class="track-count-badge" id="n3-vocab-count">0/30 bài</span>'
'                                        </div>'
'                                        <div class="class-track-hint">'
'                                            <i class="fa-solid fa-circle-info"></i> Nhấp để mở bài học | Chuột phải hoặc bấm ✓ để đánh dấu đã dạy'
'                                        </div>'
'                                    </div>'
'                                    <div class="class-track-scroll-wrapper">'
'                                        <div class="class-track-scroll" id="hamchoi-vocab-track">'
'                                            <!-- 30 bài render bằng JS -->'
'                                        </div>'
'                                    </div>'
'                                </div>'
''
'                                <!-- Hàng 2: Ngữ Pháp (28 bài) -->'
'                                <div class="class-track-section">'
'                                    <div class="class-track-header">'
'                                        <div class="class-track-title">'
'                                            <i class="fa-solid fa-bars-staggered text-neon-purple"></i>'
'                                            <span>Ngữ Pháp (Bunpou)</span>'
'                                            <span class="track-count-badge" id="n3-grammar-count">0/28 bài</span>'
'                                        </div>'
'                                        <div class="class-track-hint">'
'                                            <i class="fa-solid fa-circle-info"></i> Nhấp để mở bài học | Chuột phải hoặc bấm ✓ để đánh dấu đã dạy'
'                                        </div>'
'                                    </div>'
'                                    <div class="class-track-scroll-wrapper">'
'                                        <div class="class-track-scroll" id="hamchoi-grammar-track">'
'                                            <!-- 28 bài render bằng JS -->'
'                                        </div>'
'                                    </div>'
'                                </div>'
''
'                                <!-- Hàng 3: Hán Tự (42 bài) -->'
'                                <div class="class-track-section">'
'                                    <div class="class-track-header">'
'                                        <div class="class-track-title">'
'                                            <i class="fa-solid fa-language text-neon-yellow"></i>'
'                                            <span>Hán Tự (Kanji)</span>'
'                                            <span class="track-count-badge" id="n3-kanji-count">0/42 bài</span>'
'                                        </div>'
'                                        <div class="class-track-hint">'
'                                            <i class="fa-solid fa-circle-info"></i> Nhấp để mở bài học | Chuột phải hoặc bấm ✓ để đánh dấu đã dạy'
'                                        </div>'
'                                    </div>'
'                                    <div class="class-track-scroll-wrapper">'
'                                        <div class="class-track-scroll" id="hamchoi-kanji-track">'
'                                            <!-- 42 bài render bằng JS -->'
'                                        </div>'
'                                    </div>'
'                                </div>'
'                            </div>'
'                        </div>'
'                    </div>'
'                </section>'
)

$result = @()
for ($i = 0; $i -lt $lines.Length; $i++) {
    if ($i -eq $startIdx) {
        $result += $newLines
        $i = $endIdx
    } else {
        $result += $lines[$i]
    }
}

$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllLines($path, $result, $utf8NoBom)
Write-Output "Fixed index.html successfully! Total lines: $($result.Length)"
