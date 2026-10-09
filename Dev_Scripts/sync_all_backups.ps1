[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$backupTargets = @(
    "backups/backup 28-8",
    "backups/Backup 28-8",
    "backups/Backup_2026_08_28",
    "backups/Backup hoàn thiện",
    "backups/Backup nghe trả lời",
    "backups/Backup nghe chủ đề",
    "backups/Backup nghe hỏi",
    "backups/Backup_Nghe_Tra_Loi",
    "backups/Backup_Choukai_N3"
)

$filesToCopy = @(
    "index.html",
    "styles.css",
    "script.js",
    "grammar_explanations.js",
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
