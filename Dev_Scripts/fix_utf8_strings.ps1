# Fix UTF-8 strings in script.js
$scriptPath = "$PSScriptRoot\..\script.js"
$content = [System.IO.File]::ReadAllText($scriptPath, [System.Text.Encoding]::UTF8)

# Replace the garbled strings with clean UTF8
$content = $content.Replace("Chá» n bÃ i há» c", "Chọn bài học")
$content = $content.Replace("máº«u", "mẫu")
$content = $content.Replace("bÃ i", "bài")
$content = $content.Replace("Chuyá»ƒn nhanh Ä‘áº¿n", "Chuyển nhanh đến")

[System.IO.File]::WriteAllText($scriptPath, $content, [System.Text.Encoding]::UTF8)
Write-Host "UTF8 strings fixed successfully!" -ForegroundColor Green
