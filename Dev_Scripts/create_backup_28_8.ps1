[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$backupTargets = @(
    "backups/backup 28-8",
    "backups/Backup 28-8",
    "backups/Backup_2026_08_28"
)

$filesToCopy = @(
    "index.html",
    "styles.css",
    "script.js",
    "class_tracking.js",
    "dokkai.js",
    "choukai.js"
)

foreach ($target in $backupTargets) {
    if (-not (Test-Path $target)) {
        New-Item -ItemType Directory -Path $target -Force | Out-Null
    }

    foreach ($f in $filesToCopy) {
        if (Test-Path $f) {
            Copy-Item $f "$target/$f" -Force
            Write-Host "Copied $f to $target"
        }
    }

    # Copy assets folder recursively
    if (Test-Path "assets") {
        Copy-Item "assets" "$target/assets" -Recurse -Force
        Write-Host "Copied assets folder to $target"
    }

    # Copy Dev_Scripts folder recursively
    if (Test-Path "Dev_Scripts") {
        Copy-Item "Dev_Scripts" "$target/Dev_Scripts" -Recurse -Force
        Write-Host "Copied Dev_Scripts folder to $target"
    }

    Write-Host "Successfully created complete backup in: $target"
}
