[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$destImg = "assets/images/choukai/n3/nghe_hoi/bai1"
if (-not (Test-Path $destImg)) { New-Item -ItemType Directory -Path $destImg -Force | Out-Null }

$imgFolder = Get-ChildItem -Directory | Where-Object { $_.Name -like '*nghe*' -and ($_.Name -like '*nh*' -or $_.Name -like '*Ảnh*') } | Select-Object -First 1

Write-Host "Found Image folder: " $imgFolder.FullName
Get-ChildItem $imgFolder.FullName | Where-Object { $_.Name -match "^(4|5|6|7)\.jpg$" } | ForEach-Object {
    Copy-Item $_.FullName "$destImg/$($_.Name)" -Force
    Write-Host "Copied $($_.Name) to $destImg"
}
