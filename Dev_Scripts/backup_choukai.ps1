$targetDirs = @(
    "backups/Backup_Choukai_N3",
    "backups/Backup nghe hiểu"
)

foreach ($dir in $targetDirs) {
    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
    }
    Copy-Item 'index.html' "$dir/index.html" -Force
    Copy-Item 'script.js' "$dir/script.js" -Force
    Copy-Item 'styles.css' "$dir/styles.css" -Force
    Copy-Item 'dokkai.js' "$dir/dokkai.js" -Force
    Copy-Item 'choukai.js' "$dir/choukai.js" -Force
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
