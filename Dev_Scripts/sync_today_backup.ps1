# Sync current workspace files directly into today's backup folder
$targetFolder = "$PSScriptRoot\..\backups\Backup_Backup_HomNay_2026_08_12_2026_08_12_161447"

if (Test-Path $targetFolder) {
    Copy-Item "$PSScriptRoot\..\script.js" $targetFolder -Force
    Copy-Item "$PSScriptRoot\..\index.html" $targetFolder -Force
    Copy-Item "$PSScriptRoot\..\styles.css" $targetFolder -Force
    Copy-Item "$PSScriptRoot\..\Dev_Scripts\bai*.json" $targetFolder -Force
    
    $fileCount = (Get-ChildItem -Path $targetFolder -File).Count
    Write-Host "DA CAP NHAT CHEN VAO BAN BACKUP HOM NAY THANH CONG!" -ForegroundColor Green
    Write-Host "Thu muc: $targetFolder" -ForegroundColor Cyan
    Write-Host "Tong so file hien co trong backup: $fileCount files" -ForegroundColor Yellow
} else {
    Write-Host "Khong tim thay thu muc backup hom nay!" -ForegroundColor Red
}
