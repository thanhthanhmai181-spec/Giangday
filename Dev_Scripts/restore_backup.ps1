param(
    [string]$BackupFolderName = "Backup_Manual_v2054_CleanMau_2026_08_12_113604"
)

[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$root = Join-Path $PSScriptRoot ".."
$backupPath = Join-Path $root "Backups\$BackupFolderName"

if (!(Test-Path $backupPath)) {
    Write-Error "Backup path does not exist: $backupPath"
    exit 1
}

Write-Output "Restoring from: $backupPath"

# Restore core files
$filesToRestore = @("script.js", "index.html", "style.css", "styles.css")
foreach ($file in $filesToRestore) {
    $src = Join-Path $backupPath $file
    if (Test-Path $src) {
        $dest = Join-Path $root $file
        Copy-Item -Path $src -Destination $dest -Force
        Write-Output "  + Restored: $file"
    }
}

# Restore JSON lesson files
$devScripts = Join-Path $root "Dev_Scripts"
Get-ChildItem -Path $backupPath -Filter "bai*.json" | ForEach-Object {
    Copy-Item $_.FullName -Destination $devScripts -Force
    Write-Output "  + Restored: $($_.Name)"
}

Write-Output "RESTORE COMPLETE!"
