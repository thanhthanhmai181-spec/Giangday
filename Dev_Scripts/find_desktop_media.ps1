Get-ChildItem -Path "c:\Users\admin\Desktop" -Directory | ForEach-Object {
    Write-Host "Desktop folder:" $_.FullName
}

Get-ChildItem -Path "c:\Users\admin\Desktop" -Recurse -Depth 2 | Where-Object { $_.Name -like "*7.mp3*" -or $_.Name -like "*ảnh*" -or $_.Name -like "*anh nghe*" -or $_.Name -like "*Ảnh nghe*" -or $_.Name -like "*Âm nghe*" } | Select-Object FullName
