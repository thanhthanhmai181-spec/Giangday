$path = Join-Path $PSScriptRoot "..\index.html"
$content = [System.IO.File]::ReadAllText((Resolve-Path $path), [System.Text.Encoding]::UTF8)
$content = $content -replace '<title>.*?</title>', '<title>Nihongo Sensei - Nền Tảng Giảng Dạy Tiếng Nhật</title>'
[System.IO.File]::WriteAllText((Resolve-Path $path), $content, (New-Object System.Text.UTF8Encoding($false)))
Write-Host "Title cleaned."
