[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$backupDir = "backups/Backup nghe trả lời"

if (-not (Test-Path $backupDir)) {
    New-Item -ItemType Directory -Path $backupDir -Force | Out-Null
}

$filesToCopy = @(
    "index.html",
    "styles.css",
    "script.js",
    "dokkai.js",
    "choukai.js",
    "class_tracking.js"
)

foreach ($f in $filesToCopy) {
    if (Test-Path $f) {
        Copy-Item $f "$backupDir/$f" -Force
        Write-Host "Backed up $f"
    }
}

# Backup assets directory
$assetsBackup = "$backupDir/assets"
if (-not (Test-Path $assetsBackup)) {
    New-Item -ItemType Directory -Path $assetsBackup -Force | Out-Null
}
Copy-Item "assets/*" $assetsBackup -Recurse -Force
Write-Host "Backed up assets directory"

# Backup Dev_Scripts
$devScriptsBackup = "$backupDir/Dev_Scripts"
if (-not (Test-Path $devScriptsBackup)) {
    New-Item -ItemType Directory -Path $devScriptsBackup -Force | Out-Null
}
Copy-Item "Dev_Scripts/*" $devScriptsBackup -Recurse -Force
Write-Host "Backed up Dev_Scripts directory"

Write-Host "=== Backup 'Backup nghe trả lời' completed successfully! ==="
