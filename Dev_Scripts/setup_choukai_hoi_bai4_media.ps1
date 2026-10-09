[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$audioDir = Get-ChildItem -Directory | Where-Object { $_.Name -like '*nghe*' -and $_.Name -notlike '*ảnh*' -and $_.Name -notlike '*anh*' } | Select-Object -First 1
$imgDir = Get-ChildItem -Directory | Where-Object { $_.Name -like '*nghe*' -and ($_.Name -like '*nh*' -or $_.Name -like '*Ảnh*') } | Select-Object -First 1

$destAudio = "assets/audio/choukai/n3/nghe_hoi/bai4"
$destImg = "assets/images/choukai/n3/nghe_hoi/bai4"

if (-not (Test-Path $destAudio)) { New-Item -ItemType Directory -Path $destAudio -Force | Out-Null }
if (-not (Test-Path $destImg)) { New-Item -ItemType Directory -Path $destImg -Force | Out-Null }

Write-Host "Audio folder: " $audioDir.FullName
Get-ChildItem $audioDir.FullName | Where-Object { $_.Name -match "^(58|59|60|61)\.mp3$" } | ForEach-Object {
    Copy-Item $_.FullName "$destAudio/$($_.Name)" -Force
    Write-Host "Copied $($_.Name) to $destAudio"
}

Write-Host "Image folder: " $imgDir.FullName
Get-ChildItem $imgDir.FullName | Where-Object { $_.Name -match "^(16|17|18|19)\.jpg$" } | ForEach-Object {
    Copy-Item $_.FullName "$destImg/$($_.Name)" -Force
    Write-Host "Copied $($_.Name) to $destImg"
}
