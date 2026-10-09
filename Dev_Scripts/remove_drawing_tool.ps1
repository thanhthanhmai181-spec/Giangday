$content = [System.IO.File]::ReadAllText('index.html', [System.Text.Encoding]::UTF8)
$content = $content -replace "`r`n    <script src=`"drawing_tool\.js\?v=\d+`"></script>", ""
$content = $content -replace "`n    <script src=`"drawing_tool\.js\?v=\d+`"></script>", ""
[System.IO.File]::WriteAllText('index.html', $content, [System.Text.Encoding]::UTF8)
Write-Host "Removed drawing_tool.js script tag from index.html"
