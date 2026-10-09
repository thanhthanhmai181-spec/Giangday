$bai22Path = "$PSScriptRoot\bai22.json"
$content = [System.IO.File]::ReadAllText($bai22Path, [System.Text.Encoding]::UTF8)

# Replace "Mẫu \d+:" or "Mẫu \d+"
$char_au = [char]0x1EAB
$pattern1 = "M" + $char_au + "u\s+\d+:\s*(?:<br>|\\u003cbr\\u003e)?"
$pattern2 = "M" + $char_au + "u\s+\d+:\s*"
$pattern3 = "M" + $char_au + "u\s+\d+\s*"

$content = [regex]::Replace($content, $pattern1, "")
$content = [regex]::Replace($content, $pattern2, "")
$content = [regex]::Replace($content, $pattern3, "")

[System.IO.File]::WriteAllText($bai22Path, $content, [System.Text.Encoding]::UTF8)
Write-Host "Replaced Mẫu occurrences in bai22.json successfully!"
