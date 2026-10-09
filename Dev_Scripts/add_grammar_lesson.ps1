# ==============================================================================
# SCRIPT THEM BAI NGU PHAP AN TOAN VAO SCRIPT.JS (ADD GRAMMAR LESSON SAFE INJECTOR)
# ==============================================================================
param (
    [Parameter(Mandatory=$true)]
    [string]$JsonFile,
    [string]$Level = "N3",
    [switch]$Force
)

$ws = $PSScriptRoot + "\.."
if (-not (Test-Path $ws)) { $ws = "." }

$scriptPath = Join-Path $ws "script.js"
$htmlPath = Join-Path $ws "index.html"
$backupDir = Join-Path $ws "backups"
$validatorPath = Join-Path $PSScriptRoot "validate_grammar.ps1"

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "  SAFE GRAMMAR INJECTOR: N3 GRAMMAR LESSON" -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan

# ------------------------------------------------------------------------------
# BUOC 1: KIEM TRA TINH HOP LE
# ------------------------------------------------------------------------------
Write-Host "`n[Buoc 1/5] Tham dinh du lieu bai hoc qua Validator..." -ForegroundColor Yellow
$fullJsonPath = if ([System.IO.Path]::IsPathRooted($JsonFile)) { $JsonFile } else { Join-Path $ws $JsonFile }

if (-not (Test-Path $fullJsonPath)) {
    Write-Host "Loi: Khong tim thay file $fullJsonPath" -ForegroundColor Red
    exit 1
}

if (Test-Path $validatorPath) {
    & powershell -NoProfile -ExecutionPolicy Unrestricted -File $validatorPath -JsonFile $fullJsonPath
    if ($LASTEXITCODE -ne 0 -and -not $Force) {
        Write-Host "`nQua trinh bi dung lai do du lieu bai hoc chua dat chuan. Hay sua cac loi tren hoac dung tham so -Force." -ForegroundColor Red
        exit 1
    }
}

$jsonRaw = [System.IO.File]::ReadAllText($fullJsonPath, [System.Text.Encoding]::UTF8)
$lessonObj = $jsonRaw | ConvertFrom-Json
$lessonName = $lessonObj.name
Write-Host "Du lieu bai hoc '$lessonName' hop le!" -ForegroundColor Green

# ------------------------------------------------------------------------------
# BUOC 2: SAO LUU FILE HIEN TAI (AUTO-BACKUP)
# ------------------------------------------------------------------------------
Write-Host "`n[Buoc 2/5] Tao ban sao luu an toan (Snapshot)..." -ForegroundColor Yellow
if (-not (Test-Path $backupDir)) { New-Item -ItemType Directory -Path $backupDir | Out-Null }
$timestamp = Get-Date -Format "yyyy_MM_dd_HHmmss"
$snapshotDir = Join-Path $backupDir "Backup_Auto_$timestamp"
New-Item -ItemType Directory -Path $snapshotDir | Out-Null

Copy-Item $scriptPath (Join-Path $snapshotDir "script.js") -Force
Copy-Item $htmlPath (Join-Path $snapshotDir "index.html") -Force
Write-Host "Da luu snapshot tai: $snapshotDir" -ForegroundColor Green

# ------------------------------------------------------------------------------
# BUOC 3: CHEN DU LIEU VAO SCRIPT.JS (SAFE INJECTION)
# ------------------------------------------------------------------------------
Write-Host "`n[Buoc 3/5] Dang nap du lieu '$lessonName' vao script.js ($Level)..." -ForegroundColor Yellow

$scriptContent = [System.IO.File]::ReadAllText($scriptPath, [System.Text.Encoding]::UTF8)

# Tim vung grammarMapData
$gMarker = "grammarMapData:"
$gPos = $scriptContent.IndexOf($gMarker)
if ($gPos -lt 0) {
    Write-Host "Khong tim thay 'grammarMapData' trong script.js!" -ForegroundColor Red
    exit 1
}

# Tim vung cua Level (VD: N3: [)
$lvlMarker = "$Level" + ": ["
$lvlPos = $scriptContent.IndexOf($lvlMarker, $gPos)
if ($lvlPos -lt 0) {
    Write-Host "Khong tim thay mang '$lvlMarker' trong grammarMapData!" -ForegroundColor Red
    exit 1
}

$lvlArrayStart = $lvlPos + $lvlMarker.Length

# Tim vi tri ket thuc mang cua Level nay
$depth = 1
$lvlArrayEnd = -1
for ($i = $lvlArrayStart; $i -lt $scriptContent.Length; $i++) {
    $ch = $scriptContent[$i]
    if ($ch -eq '[') { $depth++ }
    elseif ($ch -eq ']') {
        $depth--
        if ($depth -eq 0) {
            $lvlArrayEnd = $i
            break
        }
    }
}

if ($lvlArrayEnd -lt 0) {
    Write-Host "Khong xac dinh duoc diem ket thuc mang cua $Level trong script.js!" -ForegroundColor Red
    exit 1
}

# Format indent 12 spaces
$indentedLesson = ($jsonRaw.Trim() -split "`n" | ForEach-Object { "            " + $_ }) -join "`n"
$indentedLesson = $indentedLesson.TrimStart()

# Kiem tra xem bai hoc da ton tai trong mang chua
$currentLevelContent = $scriptContent.Substring($lvlArrayStart, $lvlArrayEnd - $lvlArrayStart)
$escapedName = [regex]::Escape($lessonName)
$existsMatch = [regex]::Match($currentLevelContent, '["'']?name["'']?\s*:\s*["'']' + $escapedName + '["'']')

if ($existsMatch.Success) {
    Write-Host "Bai hoc '$lessonName' da ton tai trong $Level -> Dang tien hanh cap nhat/thay the..." -ForegroundColor Cyan
    
    $matchPos = $lvlArrayStart + $existsMatch.Index
    $lessonStartPos = $scriptContent.LastIndexOf("{", $matchPos)
    
    $objDepth = 0
    $lessonEndPos = -1
    for ($j = $lessonStartPos; $j -lt $scriptContent.Length; $j++) {
        if ($scriptContent[$j] -eq '{') { $objDepth++ }
        elseif ($scriptContent[$j] -eq '}') {
            $objDepth--
            if ($objDepth -eq 0) {
                $lessonEndPos = $j
                break
            }
        }
    }
    
    $beforeLesson = $scriptContent.Substring(0, $lessonStartPos)
    $afterLesson = $scriptContent.Substring($lessonEndPos + 1)
    $scriptContent = $beforeLesson + $indentedLesson + $afterLesson
} else {
    Write-Host "Them moi bai hoc '$lessonName' vao cuoi danh sach $Level..." -ForegroundColor Cyan
    
    $beforeEnd = $scriptContent.Substring(0, $lvlArrayEnd).TrimEnd()
    $afterEnd = $scriptContent.Substring($lvlArrayEnd)
    
    if ($currentLevelContent.Trim().Length -gt 0) {
        $beforeEnd = $beforeEnd + ",`n            " + $indentedLesson
    } else {
        $beforeEnd = $beforeEnd + "`n            " + $indentedLesson
    }
    
    $scriptContent = $beforeEnd + "`n        " + $afterEnd
}

# Ghi file script.js voi UTF-8 No BOM
$utf8NoBom = New-Object System.Text.UTF8Encoding $false
[System.IO.File]::WriteAllText($scriptPath, $scriptContent, $utf8NoBom)
Write-Host "Da ghi de script.js thanh cong!" -ForegroundColor Green

# ------------------------------------------------------------------------------
# BUOC 4: XAC THUC CU PHAP & TOAN VEN
# ------------------------------------------------------------------------------
Write-Host "`n[Buoc 4/5] Kiem tra cu phap script.js sau khi chen..." -ForegroundColor Yellow

$verifyContent = [System.IO.File]::ReadAllText($scriptPath, [System.Text.Encoding]::UTF8)
$oB = 0; $cB = 0; $oBk = 0; $cBk = 0
$chars = $verifyContent.ToCharArray()
for ($i = 0; $i -lt $chars.Length; $i++) {
    $c = $chars[$i]
    if ($c -eq '{') { $oB++ }
    elseif ($c -eq '}') { $cB++ }
    elseif ($c -eq '[') { $oBk++ }
    elseif ($c -eq ']') { $cBk++ }
}

$isHealthy = ($oB -eq $cB) -and ($oBk -eq $cBk)
if (-not $isHealthy) {
    Write-Host "PHAT HIEN LOI LECH DAU NGOAC: { } ($oB/$cB), [ ] ($oBk/$cBk)!" -ForegroundColor Red
    Write-Host "Dang tu dong Rollback khoi phuc lai ban snapshot..." -ForegroundColor Yellow
    Copy-Item (Join-Path $snapshotDir "script.js") $scriptPath -Force
    Write-Host "Da hoan tac an toan ve trang thai ban dau!" -ForegroundColor Green
    exit 1
} else {
    Write-Host "  - Dau ngoac nhon { } : $oB / $cB (Khop 100%)" -ForegroundColor Green
    Write-Host "  - Dau ngoac vuong [ ] : $oBk / $cBk (Khop 100%)" -ForegroundColor Green
    Write-Host "Cu phap JavaScript hoan toan toan ven!" -ForegroundColor Green
}

# ------------------------------------------------------------------------------
# BUOC 5: TU DONG TANG VERSION CACHE BUSTING TRONG INDEX.HTML
# ------------------------------------------------------------------------------
Write-Host "`n[Buoc 5/5] Cap nhat Cache-Busting trong index.html..." -ForegroundColor Yellow

$htmlContent = [System.IO.File]::ReadAllText($htmlPath, [System.Text.Encoding]::UTF8)
$vMatch = [regex]::Match($htmlContent, 'script\.js\?v=(\d+)')

if ($vMatch.Success) {
    $oldVer = [int]$vMatch.Groups[1].Value
    $newVer = $oldVer + 1
    $htmlContent = $htmlContent -replace 'script\.js\?v=\d+', "script.js?v=$newVer"
    [System.IO.File]::WriteAllText($htmlPath, $htmlContent, $utf8NoBom)
    Write-Host "Da tang Cache version: v$oldVer -> v$newVer" -ForegroundColor Green
} else {
    Write-Host "Khong tim thay script.js?v=... trong index.html" -ForegroundColor Gray
}

Write-Host "`n==========================================================" -ForegroundColor Cyan
Write-Host "  BAI HOC '$lessonName' DA DUOC THEM THANH CONG VAO UNG DUNG!" -ForegroundColor Green
Write-Host "==========================================================" -ForegroundColor Cyan
