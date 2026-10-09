[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$bai22Path = "$PSScriptRoot\bai22.json"
$content = [System.IO.File]::ReadAllText($bai22Path, [System.Text.Encoding]::UTF8)

# 1. Comparison table
$content = $content.Replace("Mẫu 90:\u003cbr\u003e〜と ／ 〜たら", "〜と ／ 〜たら")
$content = $content.Replace("Mẫu 90:<br>〜と ／ 〜たら", "〜と ／ 〜たら")
$content = $content.Replace("Mẫu 91:\u003cbr\u003e〜ると ／ 〜たら", "〜ると ／ 〜たら")
$content = $content.Replace("Mẫu 91:<br>〜ると ／ 〜たら", "〜ると ／ 〜たら")
$content = $content.Replace("Mẫu 93:\u003cbr\u003e〜ていると...た\u003cbr\u003e〜ていたら...た", "〜ていると...た\u003cbr\u003e〜ていたら...た")
$content = $content.Replace("Mẫu 93:<br>〜ていると...た<br>〜ていたら...た", "〜ていると...た<br>〜ていたら...た")
$content = $content.Replace("Mẫu 94:\u003cbr\u003e〜ると...た", "〜ると...た")
$content = $content.Replace("Mẫu 94:<br>〜ると...た", "〜ると...た")

# 2. Cards in comparison
$content = $content.Replace("Mẫu 90: 〜と / 〜たら", "〜と / 〜たら")
$content = $content.Replace("Mẫu 91: 〜ると / 〜たら", "〜ると / 〜たら")
$content = $content.Replace("Mẫu 93: 〜ていると...た / 〜ていたら...た", "〜ていると...た / 〜ていたら...た")
$content = $content.Replace("Mẫu 94: 〜ると...た", "〜ると...た")

# 3. thead titles in detailedStructure
$content = $content.Replace("Mẫu 90: 〜と ／ 〜たら (Sau khi làm... thì bất ngờ nhận ra...)", "〜と ／ 〜たら (Sau khi làm... thì bất ngờ nhận ra...)")
$content = $content.Replace("Mẫu 91: 〜ると ／ 〜たら (Sau khi... thì... / Cứ... thì...)", "〜ると ／ 〜たら (Sau khi... thì... / Cứ... thì...)")
$content = $content.Replace("Mẫu 93: 〜ていると...た ／ 〜ていたら...た (Đang lúc... thì bất ngờ xảy ra...)", "〜ていると...た ／ 〜ていたら...た (Đang lúc... thì bất ngờ xảy ra...)")
$content = $content.Replace("Mẫu 94: 〜ると...た (Vừa làm xong A là lập tức làm B ngay)", "〜ると...た (Vừa làm xong A là lập tức làm B ngay)")

# In case there are other "Mẫu \d+:" patterns
$content = [regex]::Replace($content, 'Mẫu\s+\d+:\s*', '')
$content = [regex]::Replace($content, 'Mẫu\s+\d+\s*', '')

[System.IO.File]::WriteAllText($bai22Path, $content, [System.Text.Encoding]::UTF8)
Write-Host "Updated bai22.json successfully!"
