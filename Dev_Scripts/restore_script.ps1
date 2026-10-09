$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$parentDir = Split-Path -Parent $scriptDir
$path = Join-Path $parentDir "script.js"

Write-Host "Target path: $path"
$lines = [System.IO.File]::ReadAllLines($path, [System.Text.Encoding]::UTF8)
Write-Host "Original line count: $($lines.Length)"

$targetIdx = -1
for ($i = $lines.Length - 1; $i -ge 0; $i--) {
    if ($lines[$i] -match 'toggleSidebar\(true\);') {
        $targetIdx = $i
        break
    }
}

Write-Host "Found target index: $targetIdx"
if ($targetIdx -ge 0) {
    $cleanLines = [System.Collections.Generic.List[string]]::new()
    for ($i = 0; $i -le ($targetIdx + 2); $i++) {
        $cleanLines.Add($lines[$i])
    }
    
    $footer = @(
        '    // --- INITIALIZATION ---',
        '    initDashboard();',
        '    initTuvung();',
        '    initHantu();',
        '    initNguphap();',
        '',
        '});',
        '',
        'document.addEventListener(''DOMContentLoaded'', () => {',
        '    const furiganaToggleBtn = document.getElementById(''furigana-toggle'');',
        '    if (furiganaToggleBtn) {',
        '        furiganaToggleBtn.addEventListener(''click'', () => {',
        '            document.body.classList.toggle(''furigana-disabled'');',
        '            furiganaToggleBtn.classList.toggle(''active'');',
        '        });',
        '    }',
        '});'
    )
    foreach ($line in $footer) {
        $cleanLines.Add($line)
    }

    [System.IO.File]::WriteAllLines($path, $cleanLines.ToArray(), [System.Text.Encoding]::UTF8)
    Write-Host "Restored clean script.js with $($cleanLines.Count) lines."
}
