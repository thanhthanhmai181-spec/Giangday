# ==============================================================================
# SCRIPT KHOI PHUC VA LUU BACKUP BAN TRUOC KHI XAY LOP N3
# ==============================================================================
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$root = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$backups = Join-Path $root "backups"

# 1. Luu backup ban CO Lop N3 hien tai
$backupWithN3 = Join-Path $backups "Backup_Co_Lop_N3_HamChoi_2026_08_12"
if (!(Test-Path $backupWithN3)) {
    New-Item -ItemType Directory -Path $backupWithN3 -Force | Out-Null
}
Copy-Item (Join-Path $root "index.html") $backupWithN3 -Force
Copy-Item (Join-Path $root "script.js") $backupWithN3 -Force
Copy-Item (Join-Path $root "styles.css") $backupWithN3 -Force
Get-ChildItem -Path (Join-Path $root "Dev_Scripts") -Filter "bai*.json" | Copy-Item -Destination $backupWithN3 -Force
Write-Host "[1] Da luu tru ban CO Lop N3 vao: $backupWithN3" -ForegroundColor Green

# 2. Tao thu muc backup cho ban TRUOC KHI XAY LOP N3
$backupWithoutN3 = Join-Path $backups "Backup_Truoc_Khi_Xay_Lop_N3_2026_08_12"
if (!(Test-Path $backupWithoutN3)) {
    New-Item -ItemType Directory -Path $backupWithoutN3 -Force | Out-Null
}

$srcClean = Join-Path $backups "Backup_BaiNav_Fixed_Clean_2026_08_12_163828"
Copy-Item (Join-Path $srcClean "index.html") $backupWithoutN3 -Force
Copy-Item (Join-Path $srcClean "script.js") $backupWithoutN3 -Force
Get-ChildItem -Path $srcClean -Filter "bai*.json" | Copy-Item -Destination $backupWithoutN3 -Force

# Tao file styles.css khong co class tracking
$stylesLines = [System.IO.File]::ReadAllLines((Join-Path $root "styles.css"), [System.Text.Encoding]::UTF8)
$cleanStylesList = New-Object System.Collections.Generic.List[string]
foreach ($l in $stylesLines) {
    if ($l -match "CLASS PROGRESS TRACKING \(N3 - HAM CHƠI\)") {
        break
    }
    $cleanStylesList.Add($l)
}
# Xoa comment phan tach cuoi cung neu co
while ($cleanStylesList.Count -gt 0 -and $cleanStylesList[$cleanStylesList.Count - 1] -match '^\s*/\*\s*={10,}') {
    $cleanStylesList.RemoveAt($cleanStylesList.Count - 1)
}

[System.IO.File]::WriteAllLines((Join-Path $backupWithoutN3 "styles.css"), $cleanStylesList.ToArray(), [System.Text.Encoding]::UTF8)
Write-Host "[2] Da tao ban backup TRUOC KHI XAY LOP N3 tai: $backupWithoutN3" -ForegroundColor Green

# 3. Khoi phuc ma nguon workspace ve ban Truoc Khi Xay Lop N3
Copy-Item (Join-Path $backupWithoutN3 "index.html") $root -Force
Copy-Item (Join-Path $backupWithoutN3 "script.js") $root -Force
Copy-Item (Join-Path $backupWithoutN3 "styles.css") $root -Force

Write-Host "`n[3] DA KHOI PHUC WORKSPACE VE BAN TRUOC KHI XAY LOP N3 HOAN TAT!" -ForegroundColor Cyan
