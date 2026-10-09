$audioDir = Get-ChildItem -Directory | Where-Object { $_.Name -like '*nghe*' -and $_.Name -notlike '*ảnh*' -and $_.Name -notlike '*anh*' } | Select-Object -First 1
$imgDir = Get-ChildItem -Directory | Where-Object { $_.Name -like '*ảnh*' -or $_.Name -like '*anh*' } | Select-Object -First 1

$destAudio = "assets/audio/choukai/n3/nghe_hoi/bai1"
$destImg = "assets/images/choukai/n3/nghe_hoi/bai1"

if (-not (Test-Path $destAudio)) { New-Item -ItemType Directory -Path $destAudio -Force | Out-Null }
if (-not (Test-Path $destImg)) { New-Item -ItemType Directory -Path $destImg -Force | Out-Null }

Write-Host "Audio folder: " $audioDir.FullName
Get-ChildItem $audioDir.FullName | Where-Object { $_.Name -match "^(46|47|48|49)\.mp3$" } | ForEach-Object {
    Copy-Item $_.FullName "$destAudio/$($_.Name)" -Force
    Write-Host "Copied $($_.Name) to $destAudio"
}

Write-Host "Image folder: " $imgDir.FullName
Get-ChildItem $imgDir.FullName | Where-Object { $_.Name -match "^(4|5|6|7)\.jpg$" } | ForEach-Object {
    Copy-Item $_.FullName "$destImg/$($_.Name)" -Force
    Write-Host "Copied $($_.Name) to $destImg"
}
