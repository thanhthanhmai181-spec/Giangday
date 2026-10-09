param()

$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
$root = Join-Path $PSScriptRoot ".."
$htmlPath = Join-Path $root "index.html"
$jsPath = Join-Path $root "script.js"

# 1. Update index.html
$htmlText = [System.IO.File]::ReadAllText($htmlPath, [System.Text.Encoding]::UTF8)

# Clean up any bad title encoding
$htmlText = $htmlText.Replace('title="Thu gá» n thanh Ä‘iá» u hÆ°á»›ng"', 'title="Thu gọn thanh điều hướng"')
$htmlText = $htmlText.Replace('title="Má»Ÿ thanh Ä‘iá» u hÆ°á»›ng"', 'title="Mở thanh điều hướng"')

[System.IO.File]::WriteAllText($htmlPath, $htmlText, $utf8NoBom)
Write-Output "index.html encoding cleaned."
