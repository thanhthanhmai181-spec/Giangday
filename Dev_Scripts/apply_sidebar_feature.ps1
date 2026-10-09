param()

[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$root = Join-Path $PSScriptRoot ".."
$htmlPath = Join-Path $root "index.html"
$jsPath = Join-Path $root "script.js"

# 1. UPDATE index.html
$htmlContent = [System.IO.File]::ReadAllText($htmlPath, [System.Text.Encoding]::UTF8)

# Check if sidebar-collapse-btn already exists
if (-not ($htmlContent.Contains('sidebar-collapse-btn'))) {
    $target1 = '<aside class="sidebar" id="sidebar">'
    $replace1 = @"
<aside class="sidebar" id="sidebar">
            <button class="sidebar-collapse-btn" id="sidebar-collapse-btn" title="Thu gọn thanh điều hướng">
                <i class="fa-solid fa-chevron-left" id="sidebar-collapse-icon"></i>
            </button>
"@
    $htmlContent = $htmlContent.Replace($target1, $replace1)
    Write-Output "  + Added sidebar-collapse-btn to index.html"
}

# Check if sidebar-open-fab already exists
if (-not ($htmlContent.Contains('sidebar-open-fab'))) {
    $target2 = '<script src="script.js?v=2054"></script>'
    $replace2 = @"
    <!-- Floating Sidebar Open Button (visible when sidebar is hidden) -->
    <button id="sidebar-open-fab" title="Mở thanh điều hướng">
        <i class="fa-solid fa-bars"></i>
        <span class="fab-label">MENU</span>
    </button>

    <script src="script.js?v=2054"></script>
"@
    $htmlContent = $htmlContent.Replace($target2, $replace2)
    Write-Output "  + Added sidebar-open-fab to index.html"
}

[System.IO.File]::WriteAllText($htmlPath, $htmlContent, [System.Text.Encoding]::UTF8)
Write-Output "index.html updated successfully."

# 2. UPDATE script.js
$jsContent = [System.IO.File]::ReadAllText($jsPath, [System.Text.Encoding]::UTF8)

# Fix navBtns selector to prevent matching any non-sidebar buttons
if ($jsContent.Contains("const navBtns = document.querySelectorAll('.nav-btn');")) {
    $jsContent = $jsContent.Replace("const navBtns = document.querySelectorAll('.nav-btn');", "const navBtns = document.querySelectorAll('.sidebar-nav .nav-btn');")
    Write-Output "  + Scoped navBtns selector strictly to .sidebar-nav .nav-btn"
}

# Add sidebar logic before the closing of main DOMContentLoaded
if (-not ($jsContent.Contains("toggleSidebar"))) {
    $targetJs = "    // --- INITIALIZATION ---"
    $sidebarLogic = @"
    // --- SIDEBAR COLLAPSE / EXPAND LOGIC ---
    function toggleSidebar(forceState) {
        const sidebar = document.getElementById('sidebar');
        const appContainer = document.getElementById('app-container');
        const openFab = document.getElementById('sidebar-open-fab');
        const collapseIcon = document.getElementById('sidebar-collapse-icon');
        if (!sidebar) return;

        const isCurrentlyCollapsed = sidebar.classList.contains('collapsed');
        const shouldCollapse = (typeof forceState === 'boolean') ? forceState : !isCurrentlyCollapsed;

        if (shouldCollapse) {
            sidebar.classList.add('collapsed');
            if (appContainer) appContainer.classList.add('sidebar-collapsed');
            if (openFab) openFab.classList.add('visible');
            if (collapseIcon) {
                collapseIcon.classList.remove('fa-chevron-left');
                collapseIcon.classList.add('fa-chevron-right');
            }
        } else {
            sidebar.classList.remove('collapsed');
            if (appContainer) appContainer.classList.remove('sidebar-collapsed');
            if (openFab) openFab.classList.remove('visible');
            if (collapseIcon) {
                collapseIcon.classList.remove('fa-chevron-right');
                collapseIcon.classList.add('fa-chevron-left');
            }
        }

        try {
            localStorage.setItem('sidebar_collapsed_state', shouldCollapse ? 'true' : 'false');
        } catch(e) {}
    }

    const sidebarCollapseBtn = document.getElementById('sidebar-collapse-btn');
    if (sidebarCollapseBtn) {
        sidebarCollapseBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleSidebar(true);
        });
    }

    const headerSidebarToggle = document.getElementById('sidebar-toggle-btn');
    if (headerSidebarToggle) {
        headerSidebarToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleSidebar();
        });
    }

    const sidebarOpenFab = document.getElementById('sidebar-open-fab');
    if (sidebarOpenFab) {
        sidebarOpenFab.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleSidebar(false);
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.altKey && (e.key.toLowerCase() === 'm' || e.key === 'b')) {
            e.preventDefault();
            toggleSidebar();
        }
    });

    try {
        if (localStorage.getItem('sidebar_collapsed_state') === 'true') {
            toggleSidebar(true);
        }
    } catch(e) {}

    // --- INITIALIZATION ---
"@
    $jsContent = $jsContent.Replace($targetJs, $sidebarLogic)
    Write-Output "  + Added sidebar collapse logic to script.js"
}

[System.IO.File]::WriteAllText($jsPath, $jsContent, [System.Text.Encoding]::UTF8)
Write-Output "script.js updated successfully."
Write-Output "ALL APPLIED SAFELY!"
