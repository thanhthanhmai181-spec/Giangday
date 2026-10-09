$audioDir = Get-ChildItem -Directory | Where-Object { $_.Name -like '*nghe*' -and $_.Name -notlike '*ảnh*' -and $_.Name -notlike '*anh*' } | Select-Object -First 1
$imageDir = Get-ChildItem -Directory | Where-Object { $_.Name -like '*ảnh*' -or $_.Name -like '*anh*' -or $_.Name -like '*Ảnh*' } | Select-Object -First 1

Write-Host "Audio Dir: " $audioDir.FullName
if ($audioDir) {
    Get-ChildItem $audioDir.FullName | Select-Object Name, Length | Format-Table -AutoSize
}

Write-Host "Image Dir: " $imageDir.FullName
if ($imageDir) {
    Get-ChildItem $imageDir.FullName | Select-Object Name, Length | Format-Table -AutoSize
}
