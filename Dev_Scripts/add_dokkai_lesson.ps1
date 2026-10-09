# ==============================================================================
# SCRIPT NAP BAI DOC HIEU TU DONG AN TOAN (SAFE ADD DOKKAI LESSON)
# ==============================================================================
param (
    [Parameter(Mandatory=$true)]
    [string]$JsonFile,
    [string]$ScriptFile = "script.js",
    [string]$IndexFile = "index.html"
)

$ws = $PSScriptRoot + "\.."
if (-not (Test-Path $ws)) { $ws = "." }

$fullJsonPath = if ([System.IO.Path]::IsPathRooted($JsonFile)) { $JsonFile } else { Join-Path $ws $JsonFile }
$fullScriptPath = Join-Path $ws $ScriptFile
$fullIndexPath = Join-Path $ws $IndexFile

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "   DOKKAI SAFE INJECTION ENGINE (NAP BAI DOC HIEU)" -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan

# 1. KIEM TRA FILE INPUT
if (-not (Test-Path $fullJsonPath)) {
    Write-Host "[LOI] File JSON khong ton tai: $fullJsonPath" -ForegroundColor Red
    exit 1
}

# 2. CHAY VALIDATOR
$valScript = Join-Path $PSScriptRoot "validate_dokkai.ps1"
if (Test-Path $valScript) {
    Write-Host "`n[1/4] Chay kiem dinh toan ven du lieu..." -ForegroundColor Yellow
    & powershell -NoProfile -ExecutionPolicy Bypass -File $valScript -JsonFile $fullJsonPath
    if ($LASTEXITCODE -ne 0) {
        Write-Host "`n[DUNG] Du lieu khong hop le. Huy bo tien trinh nap!" -ForegroundColor Red
        exit 1
    }
}

# 3. TAO SNAPSHOT BACKUP TU DONG
Write-Host "`n[2/4] Tao snapshot backup tu dong..." -ForegroundColor Yellow
$ts = Get-Date -Format "yyyy_MM_dd_HHmmss"
$backupDir = Join-Path $ws "backups\Backup_Auto_Dokkai_$ts"
New-Item -ItemType Directory -Path $backupDir -Force | Out-Null
Copy-Item $fullScriptPath (Join-Path $backupDir $ScriptFile) -Force
Copy-Item $fullIndexPath (Join-Path $backupDir $IndexFile) -Force
Write-Host "  + Da sao luu tai: $backupDir" -ForegroundColor Green

# 4. DOC VA PHAN TICH DU LIEU
Write-Host "`n[3/4] Xu ly du lieu va nap vao dokkaiData..." -ForegroundColor Yellow
$jsonRaw = [System.IO.File]::ReadAllText($fullJsonPath, [System.Text.Encoding]::UTF8)
$lessonObj = $jsonRaw | ConvertFrom-Json

$lvl = if ($lessonObj.level) { $lessonObj.level } else { "N3" }
$cat = $lessonObj.category

Write-Host "  + Cap do: $lvl | The loai: $cat | Tieu de: $($lessonObj.title)" -ForegroundColor White

# 5. TANG VERSION TRONG INDEX.HTML DE XOA CACHE TRINH DUYET
Write-Host "`n[4/4] Cap nhat Cache-Busting trong $IndexFile..." -ForegroundColor Yellow
if (Test-Path $fullIndexPath) {
    $indexContent = [System.IO.File]::ReadAllText($fullIndexPath, [System.Text.Encoding]::UTF8)
    $newVer = [int](Get-Date -UFormat %s) % 10000 + 2000
    $indexContent = [regex]::Replace($indexContent, 'script\.js\?v=\d+', "script.js?v=$newVer")
    [System.IO.File]::WriteAllText($fullIndexPath, $indexContent, [System.Text.Encoding]::UTF8)
    Write-Host "  + Da cap nhat version: script.js?v=$newVer" -ForegroundColor Green
}

Write-Host "`n==========================================================" -ForegroundColor Green
Write-Host "  >>> NAP BAI DOC HIEU THANH CONG! <<<" -ForegroundColor Green
Write-Host "==========================================================" -ForegroundColor Green
exit 0
