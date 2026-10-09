$backupFolders = @("backups/Backup điền từ", "backups/Backup_Dien_Tu")

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
    Copy-Item 'Dev_Scripts/dokkai_n3_dientu_bai1.json' "$dir/Dev_Scripts/dokkai_n3_dientu_bai1.json" -Force
    Copy-Item 'Dev_Scripts/validate_dokkai.ps1' "$dir/Dev_Scripts/validate_dokkai.ps1" -Force
    Copy-Item 'Dev_Scripts/add_dokkai_lesson.ps1' "$dir/Dev_Scripts/add_dokkai_lesson.ps1" -Force
    
    Write-Host "Sao lưu thành công vào: $dir"
}
