[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$backupTargets = @(
    "backups/Backup nghe hỏi",
    "backups/Backup_Nghe_Hoi",
    "backups/Backup_Choukai_N3"
)

$filesToCopy = @(
    "index.html",
    "styles.css",
    "script.js",
    "dokkai.js",
    "choukai.js",
    "class_tracking.js"
)

foreach ($target in $backupTargets) {
    if (-not (Test-Path $target)) {
        New-Item -ItemType Directory -Path $target -Force | Out-Null
    }
    
    foreach ($f in $filesToCopy) {
        if (Test-Path $f) {
            Copy-Item $f "$target/$f" -Force
        }
    }
    
    $assetsBackup = "$target/assets"
    if (-not (Test-Path $assetsBackup)) {
        New-Item -ItemType Directory -Path $assetsBackup -Force | Out-Null
    }
    Copy-Item "assets/*" $assetsBackup -Recurse -Force
    
    $devScriptsBackup = "$target/Dev_Scripts"
    if (-not (Test-Path $devScriptsBackup)) {
        New-Item -ItemType Directory -Path $devScriptsBackup -Force | Out-Null
    }
    Copy-Item "Dev_Scripts/*" $devScriptsBackup -Recurse -Force
    
    Write-Host "Backed up successfully into: $target"
}

Write-Host "=== Backup 'Backup nghe hỏi' completed successfully! ==="
