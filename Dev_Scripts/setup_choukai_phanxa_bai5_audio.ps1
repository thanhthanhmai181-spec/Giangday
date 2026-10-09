[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$audioDir = Get-ChildItem -Directory | Where-Object { $_.Name -like '*nghe*' -and $_.Name -notlike '*ảnh*' -and $_.Name -notlike '*anh*' } | Select-Object -First 1

$destAudio = "assets/audio/choukai/n3/nghe_phanxa/bai5"

if (-not (Test-Path $destAudio)) { New-Item -ItemType Directory -Path $destAudio -Force | Out-Null }

Write-Host "Audio folder: " $audioDir.FullName
Get-ChildItem $audioDir.FullName | Where-Object { $_.Name -match "^(102|103|104|105|106|107|108|109|110)\.mp3$" } | ForEach-Object {
    Copy-Item $_.FullName "$destAudio/$($_.Name)" -Force
    Write-Host "Copied $($_.Name) to $destAudio"
}
