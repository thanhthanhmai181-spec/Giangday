# ==============================================================================
# SCRIPT KIEM TRA TOAN VEN VA CU PHAP DU LIEU DOC HIEU (VALIDATE DOKKAI)
# ==============================================================================
param (
    [string]$JsonFile = "",
    [string]$ScriptFile = "script.js"
)

$ws = $PSScriptRoot + "\.."
if (-not (Test-Path $ws)) { $ws = "." }

$errors = @()
$warnings = @()

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "  VALIDATION ENGINE: N3 DOKKAI (READING) DATA INTEGRITY" -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan

if ($JsonFile -ne "") {
    $fullJsonPath = if ([System.IO.Path]::IsPathRooted($JsonFile)) { $JsonFile } else { Join-Path $ws $JsonFile }
    Write-Host "`n[1] Kiem tra file JSON: $fullJsonPath..." -ForegroundColor Yellow
    
    if (-not (Test-Path $fullJsonPath)) {
        $errors += "File JSON khong ton tai: $fullJsonPath"
    } else {
        try {
            $jsonContent = [System.IO.File]::ReadAllText($fullJsonPath, [System.Text.Encoding]::UTF8)
            $lessonObj = $jsonContent | ConvertFrom-Json
            
            # Kiem tra id & title
            if (-not $lessonObj.id) { $errors += "Thieu thuoc tinh 'id'." }
            if (-not $lessonObj.title) { $errors += "Thieu thuoc tinh 'title'." } else {
                Write-Host "  + Tieu de: $($lessonObj.title)" -ForegroundColor Green
            }
            
            # Kiem tra level & category
            if (-not $lessonObj.level) { $warnings += "Chua chi dinh 'level' (mac dinh se la N3)." }
            $validCats = @("doanvan", "trungvan", "truongvan", "thongtin", "dientu")
            if (-not $lessonObj.category -or ($validCats -notcontains $lessonObj.category)) {
                $errors += "Category '$($lessonObj.category)' khong hop le. Cac gia tri cho phep: $($validCats -join ', ')."
            } else {
                Write-Host "  + The loai: $($lessonObj.category) ($($lessonObj.categoryName))" -ForegroundColor Green
            }

            # Kiem tra passage (bai doc)
            if (-not $lessonObj.passage -or [string]::IsNullOrWhiteSpace($lessonObj.passage)) {
                $errors += "Thieu noi dung bai doc 'passage'."
            } else {
                Write-Host "  + Do dai bai doc: $($lessonObj.passage.Length) ky tu" -ForegroundColor Green
                # Kiem tra the ruby
                $rubyOpen = ([regex]::Matches($lessonObj.passage, "<ruby>")).Count
                $rubyClose = ([regex]::Matches($lessonObj.passage, "</ruby>")).Count
                $rtOpen = ([regex]::Matches($lessonObj.passage, "<rt>")).Count
                $rtClose = ([regex]::Matches($lessonObj.passage, "</rt>")).Count
                
                if ($rubyOpen -ne $rubyClose) {
                    $errors += "Lech the <ruby>: $rubyOpen the mo, $rubyClose the dong."
                }
                if ($rtOpen -ne $rtClose) {
                    $errors += "Lech the <rt>: $rtOpen the mo, $rtClose the dong."
                }
            }

            # Kiem tra ban dich toan van
            if (-not $lessonObj.fullTranslation) {
                $warnings += "Chua co ban dich tieng Viet toan van ('fullTranslation')."
            }

            # Kiem tra cau hoi
            if (-not $lessonObj.questions -or $lessonObj.questions.Count -eq 0) {
                $errors += "Bai doc khong co cau hoi nao trong mang 'questions'."
            } else {
                Write-Host "  + So luong cau hoi: $($lessonObj.questions.Count)" -ForegroundColor Green
                $qIdx = 1
                foreach ($q in $lessonObj.questions) {
                    if (-not $q.question) { $errors += "Cau hoi #$qIdx thieu noi dung 'question'." }
                    if (-not $q.options -or $q.options.Count -lt 2) {
                        $errors += "Cau hoi #$qIdx phai co it nhat 2 lua chon (thuong la 4 lua chon)."
                    }
                    if ($q.answer -lt 0 -or $q.answer -ge $q.options.Count) {
                        $errors += "Cau hoi #$qIdx co dap an 'answer'=$($q.answer) nam ngoai pham vi lua chon."
                    }
                    if (-not $q.explanation) {
                        $warnings += "Cau hoi #$qIdx chua co phan giai thich chi tiet ('explanation')."
                    }
                    if (-not $q.evidence) {
                        $warnings += "Cau hoi #$qIdx chua co phan dan chung trich dan ('evidence')."
                    }
                    $qIdx++
                }
            }
        } catch {
            $errors += "Loi phan tich JSON: $($_.Exception.Message)"
        }
    }
}

# ------------------------------------------------------------------------------
# TONG KET KET QUA
# ------------------------------------------------------------------------------
Write-Host "`n==========================================================" -ForegroundColor Cyan
Write-Host "  KET QUA KIEM TRA" -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan

if ($warnings.Count -gt 0) {
    Write-Host "`n[CANH BAO] ($($warnings.Count)):" -ForegroundColor Yellow
    foreach ($w in $warnings) {
        Write-Host "  - $w" -ForegroundColor Yellow
    }
}

if ($errors.Count -gt 0) {
    Write-Host "`n[LOI BIEN DICH] ($($errors.Count)):" -ForegroundColor Red
    foreach ($err in $errors) {
        Write-Host "  - $err" -ForegroundColor Red
    }
    Write-Host "`n--> KHONG DU DIEU KIEN NAP VAO HE THONG!" -ForegroundColor Red
    exit 1
} else {
    Write-Host "`n>>> TAT CA KIEM TRA HOP LE! FILE SAN SANG DE NAP! <<<" -ForegroundColor Green
    exit 0
}
