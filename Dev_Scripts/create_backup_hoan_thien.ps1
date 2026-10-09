[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$backupRoot = "backups/Backup hoàn thiện"

if (-not (Test-Path $backupRoot)) {
    New-Item -ItemType Directory -Path $backupRoot -Force | Out-Null
}

$filesToCopy = @(
    "index.html",
    "style.css",
    "script.js",
    "class_tracking.js",
    "dokkai.js",
    "choukai.js"
)

foreach ($f in $filesToCopy) {
    if (Test-Path $f) {
        Copy-Item $f "$backupRoot/$f" -Force
        Write-Host "Copied $f"
    }
}

# Copy assets folder recursively
if (Test-Path "assets") {
    Copy-Item "assets" "$backupRoot/assets" -Recurse -Force
    Write-Host "Copied assets folder"
}

# Copy Dev_Scripts folder recursively
if (Test-Path "Dev_Scripts") {
    Copy-Item "Dev_Scripts" "$backupRoot/Dev_Scripts" -Recurse -Force
    Write-Host "Copied Dev_Scripts folder"
}

Write-Host "Successfully created complete backup in: $backupRoot"
