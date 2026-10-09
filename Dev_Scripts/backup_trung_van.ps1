$backupFolders = @("backups/Backup trung văn", "backups/Backup_Trung_Van")

foreach ($dir in $backupFolders) {
    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
    }
    Copy-Item 'index.html' "$dir/index.html" -Force
    Copy-Item 'script.js' "$dir/script.js" -Force
    Copy-Item 'styles.css' "$dir/styles.css" -Force
    Copy-Item 'dokkai.js' "$dir/dokkai.js" -Force
    Copy-Item 'class_tracking.js' "$dir/class_tracking.js" -Force
    
    if (-not (Test-Path "$dir/Dev_Scripts")) {
        New-Item -ItemType Directory -Path "$dir/Dev_Scripts" -Force | Out-Null
    }
    
    Get-ChildItem 'Dev_Scripts' -File | ForEach-Object {
        Copy-Item $_.FullName "$dir/Dev_Scripts/$($_.Name)" -Force
    }
    
    Write-Host "Sao lưu thành công vào: $dir"
}
