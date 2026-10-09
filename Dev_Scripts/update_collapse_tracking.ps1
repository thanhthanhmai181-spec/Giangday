# PowerShell script to update initClassTracking in script.js with collapse button logic
$scriptPath = "script.js"
$encoding = [System.Text.Encoding]::UTF8
$lines = [System.IO.File]::ReadAllLines($scriptPath, $encoding)

Write-Host "Total lines in script.js before: $($lines.Length)"

# Find the location of reset progress button in initClassTracking
$targetIdx = -1
for ($i = 18150; $i -lt [Math]::Min(18220, $lines.Length); $i++) {
    if ($lines[$i] -match "Reset progress button") {
        $targetIdx = $i
        break
    }
}

if ($targetIdx -eq -1) {
    Write-Error "Could not find target index for Reset progress button"
    exit 1
}

Write-Host "Found target index at line $($targetIdx + 1): $($lines[$targetIdx])"

$collapseCode = @'
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
'@

$newLines = [System.Collections.Generic.List[string]]::new()
for ($i = 0; $i -lt $targetIdx; $i++) {
    $newLines.Add($lines[$i])
}

$newLines.Add($collapseCode)

for ($i = $targetIdx; $i -lt $lines.Length; $i++) {
    $newLines.Add($lines[$i])
}

[System.IO.File]::WriteAllLines($scriptPath, $newLines.ToArray(), $encoding)
Write-Host "Successfully added collapse logic to script.js. Total lines now: $($newLines.Count)"
