$targetDirs = @(
    "backups/Backup hoàn thiện đọc hiểu",
    "backups/Backup_Hoan_Thien_Doc_Hieu"
)

foreach ($dir in $targetDirs) {
    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
    }
    Copy-Item 'index.html' "$dir/index.html" -Force
    Copy-Item 'script.js' "$dir/script.js" -Force
    Copy-Item 'styles.css' "$dir/styles.css" -Force
    Copy-Item 'dokkai.js' "$dir/dokkai.js" -Force
    Copy-Item 'class_tracking.js' "$dir/class_tracking.js" -Force

    $devDir = "$dir/Dev_Scripts"
    if (-not (Test-Path $devDir)) {
        New-Item -ItemType Directory -Path $devDir -Force | Out-Null
    }

    Get-ChildItem 'Dev_Scripts' -File | ForEach-Object {
        Copy-Item $_.FullName "$devDir/$($_.Name)" -Force
    }

    Write-Host "Da sao luu thanh cong vao: $dir"
}

# Verify files count
$backedFiles = Get-ChildItem "backups/Backup hoàn thiện đọc hiểu" -Recurse -File
Write-Host "Tong so file da sao luu: $($backedFiles.Count) files."
