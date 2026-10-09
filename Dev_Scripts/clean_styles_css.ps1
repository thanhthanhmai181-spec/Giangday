$path = Join-Path $PSScriptRoot "..\styles.css"
$lines = [System.IO.File]::ReadAllLines((Resolve-Path $path), [System.Text.Encoding]::UTF8)

# Keep lines up to 2178 (before the second duplicate block)
$cleanLines = $lines[0..2178]
[System.IO.File]::WriteAllLines((Resolve-Path $path), $cleanLines, (New-Object System.Text.UTF8Encoding($false)))
Write-Host "styles.css cleaned, total lines now: $($cleanLines.Length)"
