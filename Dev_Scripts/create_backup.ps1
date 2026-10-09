param(
    [string]$Tag = "Manual"
)

[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$timestamp = (Get-Date -Format 'yyyy_MM_dd_HHmmss')
$backupDir = Join-Path -Path $PSScriptRoot -ChildPath "..\\backups\\Backup_${Tag}_${timestamp}"

if (!(Test-Path -Path $backupDir)) {
    New-Item -ItemType Directory -Path $backupDir -Force | Out-Null
}

$root = Join-Path $PSScriptRoot ".."
$devScripts = $PSScriptRoot

# Core app files
$filesToBackup = @("script.js", "index.html", "style.css")
foreach ($file in $filesToBackup) {
    $fullSource = Join-Path $root $file
    if (Test-Path $fullSource) {
        Copy-Item -Path $fullSource -Destination $backupDir -Force
        Write-Output "  + Da sao luu: $file"
    }
}

# All JSON lesson files
Get-ChildItem -Path $devScripts -Filter "bai*.json" | ForEach-Object {
    Copy-Item $_.FullName -Destination $backupDir -Force
    Write-Output "  + Da sao luu: $($_.Name)"
}

$count = (Get-ChildItem $backupDir).Count

Write-Output ""
Write-Output "=========================================================="
Write-Output "  BAN SAO LUU MANUAL DA DUOC TAO THANH CONG!"
Write-Output "  Thu muc: $backupDir"
Write-Output "  Tong so file: $count files"
Write-Output "=========================================================="
