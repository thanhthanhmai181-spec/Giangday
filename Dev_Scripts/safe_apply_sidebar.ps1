param()

$root = Join-Path $PSScriptRoot ".."
$htmlPath = Join-Path $root "index.html"
$jsPath = Join-Path $root "script.js"

# ========================================================
# 1. UPDATE index.html SAFELY
# ========================================================
[string[]]$rawHtml = [System.IO.File]::ReadAllLines($htmlPath, [System.Text.Encoding]::UTF8)
$htmlList = [System.Collections.Generic.List[string]]::new()
foreach ($l in $rawHtml) { $htmlList.Add($l) }

# Find index of '<aside class="sidebar" id="sidebar">'
$sidebarIdx = -1
for ($i = 0; $i -lt $htmlList.Count; $i++) {
    if ($htmlList[$i].Trim() -eq '<aside class="sidebar" id="sidebar">') {
        $sidebarIdx = $i
        break
    }
}

if ($sidebarIdx -ge 0) {
    [string[]]$btnLines = @(
        '            <button class="sidebar-collapse-btn" id="sidebar-collapse-btn" title="Thu gon thanh dieu huong">',
        '                <i class="fa-solid fa-chevron-left" id="sidebar-collapse-icon"></i>',
        '            </button>'
    )
    for ($k = $btnLines.Length - 1; $k -ge 0; $k--) {
        $htmlList.Insert($sidebarIdx + 1, $btnLines[$k])
    }
    Write-Output "  + Added collapse button after line $sidebarIdx in index.html"
} else {
    Write-Error "Could not find sidebar tag in index.html"
}

# Find index of '<script src="script.js?v=2054"></script>'
$scriptIdx = -1
for ($i = 0; $i -lt $htmlList.Count; $i++) {
    if ($htmlList[$i].Trim() -like '*script.js?v=*') {
        $scriptIdx = $i
        break
    }
}

if ($scriptIdx -ge 0) {
    [string[]]$fabLines = @(
        '    <!-- Floating Sidebar Open Button (visible when sidebar is hidden) -->',
        '    <button id="sidebar-open-fab" title="Mo thanh dieu huong">',
        '        <i class="fa-solid fa-bars"></i>',
        '        <span class="fab-label">MENU</span>',
        '    </button>',
        ''
    )
    for ($k = $fabLines.Length - 1; $k -ge 0; $k--) {
        $htmlList.Insert($scriptIdx, $fabLines[$k])
    }
    Write-Output "  + Added sidebar-open-fab before line $scriptIdx in index.html"
} else {
    Write-Error "Could not find script.js tag in index.html"
}

$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllLines($htmlPath, $htmlList.ToArray(), $utf8NoBom)
Write-Output "index.html written cleanly with $($htmlList.Count) lines."

# ========================================================
# 2. UPDATE script.js SAFELY
# ========================================================
[string[]]$rawJs = [System.IO.File]::ReadAllLines($jsPath, [System.Text.Encoding]::UTF8)
$jsList = [System.Collections.Generic.List[string]]::new()
foreach ($l in $rawJs) { $jsList.Add($l) }

# Fix selector for navBtns
for ($i = 0; $i -lt $jsList.Count; $i++) {
    if ($jsList[$i].Contains("const navBtns = document.querySelectorAll('.nav-btn');")) {
        $jsList[$i] = $jsList[$i].Replace("const navBtns = document.querySelectorAll('.nav-btn');", "const navBtns = document.querySelectorAll('.sidebar-nav .nav-btn');")
        Write-Output "  + Scoped navBtns selector at line $i in script.js"
        break
    }
}

# Find index of '// --- INITIALIZATION ---'
$initIdx = -1
for ($i = 0; $i -lt $jsList.Count; $i++) {
    if ($jsList[$i].Trim() -eq '// --- INITIALIZATION ---') {
        $initIdx = $i
        break
    }
}

if ($initIdx -ge 0) {
    [string[]]$sidebarJs = @(
        '    // --- SIDEBAR COLLAPSE / EXPAND LOGIC ---',
        '    function toggleSidebar(forceState) {',
        '        const sidebar = document.getElementById(''sidebar'');',
        '        const appContainer = document.getElementById(''app-container'');',
        '        const openFab = document.getElementById(''sidebar-open-fab'');',
        '        const collapseIcon = document.getElementById(''sidebar-collapse-icon'');',
        '        if (!sidebar) return;',
        '',
        '        const isCurrentlyCollapsed = sidebar.classList.contains(''collapsed'');',
        '        const shouldCollapse = (typeof forceState === ''boolean'') ? forceState : !isCurrentlyCollapsed;',
        '',
        '        if (shouldCollapse) {',
        '            sidebar.classList.add(''collapsed'');',
        '            if (appContainer) appContainer.classList.add(''sidebar-collapsed'');',
        '            if (openFab) openFab.classList.add(''visible'');',
        '            if (collapseIcon) {',
        '                collapseIcon.classList.remove(''fa-chevron-left'');',
        '                collapseIcon.classList.add(''fa-chevron-right'');',
        '            }',
        '        } else {',
        '            sidebar.classList.remove(''collapsed'');',
        '            if (appContainer) appContainer.classList.remove(''sidebar-collapsed'');',
        '            if (openFab) openFab.classList.remove(''visible'');',
        '            if (collapseIcon) {',
        '                collapseIcon.classList.remove(''fa-chevron-right'');',
        '                collapseIcon.classList.add(''fa-chevron-left'');',
        '            }',
        '        }',
        '',
        '        try {',
        '            localStorage.setItem(''sidebar_collapsed_state'', shouldCollapse ? ''true'' : ''false'');',
        '        } catch(e) {}',
        '    }',
        '',
        '    const sidebarCollapseBtn = document.getElementById(''sidebar-collapse-btn'');',
        '    if (sidebarCollapseBtn) {',
        '        sidebarCollapseBtn.addEventListener(''click'', (e) => {',
        '            e.stopPropagation();',
        '            toggleSidebar(true);',
        '        });',
        '    }',
        '',
        '    const headerSidebarToggle = document.getElementById(''sidebar-toggle-btn'');',
        '    if (headerSidebarToggle) {',
        '        headerSidebarToggle.addEventListener(''click'', (e) => {',
        '            e.stopPropagation();',
        '            toggleSidebar();',
        '        });',
        '    }',
        '',
        '    const sidebarOpenFab = document.getElementById(''sidebar-open-fab'');',
        '    if (sidebarOpenFab) {',
        '        sidebarOpenFab.addEventListener(''click'', (e) => {',
        '            e.stopPropagation();',
        '            toggleSidebar(false);',
        '        });',
        '    }',
        '',
        '    document.addEventListener(''keydown'', (e) => {',
        '        if (e.altKey && (e.key.toLowerCase() === ''m'' || e.key === ''b'')) {',
        '            e.preventDefault();',
        '            toggleSidebar();',
        '        }',
        '    });',
        '',
        '    try {',
        '        if (localStorage.getItem(''sidebar_collapsed_state'') === ''true'') {',
        '            toggleSidebar(true);',
        '        }',
        '    } catch(e) {}',
        ''
    )
    for ($k = $sidebarJs.Length - 1; $k -ge 0; $k--) {
        $jsList.Insert($initIdx, $sidebarJs[$k])
    }
    Write-Output "  + Added sidebar collapse JS before line $initIdx in script.js"
} else {
    Write-Error "Could not find initialization comment in script.js"
}

[System.IO.File]::WriteAllLines($jsPath, $jsList.ToArray(), $utf8NoBom)
Write-Output "script.js written cleanly with $($jsList.Count) lines."
Write-Output "ALL MODIFICATIONS COMPLETE AND VERIFIED!"
