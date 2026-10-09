$path = Join-Path $PSScriptRoot "..\script.js"
$lines = [System.IO.File]::ReadAllLines((Resolve-Path $path), [System.Text.Encoding]::UTF8)

Write-Host "--- Tuvung Level Tabs ---"
for ($i = 17900; $i -lt 17950; $i++) {
    Write-Host "$($i + 1): $($lines[$i])"
}

Write-Host "--- Hantu Level Tabs ---"
for ($i = 18355; $i -lt 18400; $i++) {
    Write-Host "$($i + 1): $($lines[$i])"
}

Write-Host "--- Nguphap Level Tabs ---"
for ($i = 18935; $i -lt 18970; $i++) {
    Write-Host "$($i + 1): $($lines[$i])"
}
