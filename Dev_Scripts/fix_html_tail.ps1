$lines = Get-Content -Path 'index.html' -Encoding UTF8
$keep = $lines[0..664]

$tail = @(
'            <!-- Next Button -->',
'            <button class="nav-btn next-btn" id="grammar-slide-next" style="position: absolute; right: 20px; z-index: 10;">',
'                <i class="fa-solid fa-chevron-right"></i>',
'            </button>',
'        </div>',
'    </div>',
'',
'    <!-- Floating Sidebar Open Button (visible when sidebar is hidden) -->',
'    <button id="sidebar-open-fab" title="Mo thanh dieu huong">',
'        <i class="fa-solid fa-bars"></i>',
'        <span class="fab-label">MENU</span>',
'    </button>',
'',
'    <script src="script.js?v=2054"></script>',
'</body>',
'</html>'
)

$result = $keep + $tail
Set-Content -Path 'index.html' -Value $result -Encoding UTF8
Write-Output "DONE. Total lines written: $($result.Count)"
