# ==============================================================================
# SCRIPT KIEM TRA TOAN VEN VA CU PHAP DU LIEU NGU PHAP (VALIDATE GRAMMAR)
# ==============================================================================
param (
    [string]$JsonFile = "",
    [string]$ScriptFile = "script.js"
)

$ws = $PSScriptRoot + "\.."
if (-not (Test-Path $ws)) { $ws = "." }

$scriptPath = Join-Path $ws $ScriptFile
$errors = @()
$warnings = @()

function Get-NormalizedText ([string]$str) {
    if ([string]::IsNullOrWhiteSpace($str)) { return "" }
    $s = $str -replace '<rt>.*?</rt>', ''
    $s = $s -replace '<[^>]+>', ''
    $s = $s -replace '\s+', ''
    $s = $s -replace '[\p{P}\p{S}]', ''
    return $s.Trim()
}

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "  VALIDATION ENGINE: N3 GRAMMAR DATA & SCRIPT INTEGRITY" -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan

# ------------------------------------------------------------------------------
# 1. KIEM TRA FILE JSON BAI HOC (NEU DUOC CUNG CAP)
# ------------------------------------------------------------------------------
if ($JsonFile -ne "") {
    $fullJsonPath = if ([System.IO.Path]::IsPathRooted($JsonFile)) { $JsonFile } else { Join-Path $ws $JsonFile }
    Write-Host "`n[1] Kiem tra file JSON: $fullJsonPath..." -ForegroundColor Yellow
    
    if (-not (Test-Path $fullJsonPath)) {
        $errors += "File JSON khong ton tai: $fullJsonPath"
    } else {
        try {
            $jsonContent = [System.IO.File]::ReadAllText($fullJsonPath, [System.Text.Encoding]::UTF8)
            $lessonObj = $jsonContent | ConvertFrom-Json
            
            if (-not $lessonObj.name) {
                $errors += "Thieu thuoc tinh 'name' trong bai hoc."
            } else {
                Write-Host "  + Ten bai hoc: $($lessonObj.name)" -ForegroundColor Green
            }

            if (-not $lessonObj.items -or $lessonObj.items.Count -eq 0) {
                $errors += "Bai hoc khong co cau truc nao trong mang 'items'."
            } else {
                Write-Host "  + So luong mau cau truc: $($lessonObj.items.Count)" -ForegroundColor Green
                
                $itemIndex = 1
                foreach ($item in $lessonObj.items) {
                    Write-Host "    - Kiem tra Mau $($itemIndex) : $($item.structure)..." -ForegroundColor White
                    if (-not $item.structure) { $errors += "Mau $($itemIndex) thieu 'structure'." }
                    if (-not $item.meaning) { $errors += "Mau $($itemIndex) thieu 'meaning'." }
                    if (-not $item.explanation -and -not $item.usage) { $warnings += "Mau $($itemIndex) chua co phan giai thich/cach dung." }
                    
                    $exampleJpList = @()
                    $exampleViList = @()

                    if (-not $item.examples -or $item.examples.Count -eq 0) {
                        $errors += "Mau $($itemIndex) ($($item.structure)) khong co vi du nao."
                    } else {
                        $exIdx = 1
                        foreach ($ex in $item.examples) {
                            if (-not $ex.jp) { $errors += "Mau $($itemIndex) - Vi du $($exIdx): Thieu tieng Nhat ('jp')." }
                            if (-not $ex.vi) { $errors += "Mau $($itemIndex) - Vi du $($exIdx): Thieu tieng Viet ('vi')." }
                            
                            if ($ex.jp) {
                                $openRuby = ([regex]::Matches($ex.jp, '<ruby>')).Count
                                $closeRuby = ([regex]::Matches($ex.jp, '</ruby>')).Count
                                $openRt = ([regex]::Matches($ex.jp, '<rt>')).Count
                                $closeRt = ([regex]::Matches($ex.jp, '</rt>')).Count
                                
                                if ($openRuby -ne $closeRuby -or $openRt -ne $closeRt -or $openRuby -ne $openRt) {
                                    $errors += "Mau $($itemIndex) - Vi du $($exIdx): Loi the ruby/rt trong: $($ex.jp)"
                                }
                                $exampleJpList += (Get-NormalizedText $ex.jp)
                            }
                            if ($ex.vi) {
                                $exampleViList += (Get-NormalizedText $ex.vi)
                            }
                            
                            if ($ex.img) {
                                $imgPath = Join-Path $ws $ex.img
                                if (-not (Test-Path $imgPath)) {
                                    $warnings += "Mau $($itemIndex) - Vi du $($exIdx): Khong tim thay file anh '$($ex.img)' tren o dia."
                                }
                            }
                            $exIdx++
                        }
                    }

                    if ($item.exercises) {
                        $allExerciseTexts = @()

                        $exKeys = @("particles", "vocab", "conjugation")
                        foreach ($k in $exKeys) {
                            if ($item.exercises.$k) {
                                foreach ($q in $item.exercises.$k) {
                                    if (-not $q.question) { 
                                        $errors += "Mau $($itemIndex): Cau hoi trac nghiem $k thieu 'question'." 
                                    } else {
                                        $qNorm = Get-NormalizedText $q.question
                                        
                                        foreach ($ej in $exampleJpList) {
                                            if ($ej.Length -gt 6 -and ($qNorm.Contains($ej) -or $ej.Contains($qNorm))) {
                                                $errors += "Mau $($itemIndex) ($k): Cau hoi bi trung voi cau vi du! Noi dung: $($q.question)"
                                            }
                                        }

                                        if ($allExerciseTexts -contains $qNorm) {
                                            $errors += "Mau $($itemIndex) ($k): Cau hoi bi trung voi 1 cau bai tap khac trong cung mau! Noi dung: $($q.question)"
                                        } else {
                                            $allExerciseTexts += $qNorm
                                        }
                                    }
                                    if (-not $q.options -or $q.options.Count -lt 2) { $errors += "Mau $($itemIndex): Cau hoi trac nghiem phai co it nhat 2 options." }
                                    if ($q.answer -lt 0 -or $q.answer -ge $q.options.Count) { $errors += "Mau $($itemIndex): 'answer' ($($q.answer)) vuot qua so luong options." }
                                }
                            }
                        }

                        if ($item.exercises.translation) {
                            foreach ($t in $item.exercises.translation) {
                                if (-not $t.vi -or -not $t.jp) { 
                                    $errors += "Mau $($itemIndex): Bai tap dich cau thieu 'vi' hoac 'jp'." 
                                } else {
                                    $tNormJp = Get-NormalizedText $t.jp
                                    $tNormVi = Get-NormalizedText $t.vi

                                    if ($exampleJpList -contains $tNormJp -or $exampleViList -contains $tNormVi) {
                                        $errors += "Mau $($itemIndex) (translation): Cau dich bi trung voi cau vi du! Tieng Viet: '$($t.vi)'"
                                    }

                                    if ($allExerciseTexts -contains $tNormJp) {
                                        $errors += "Mau $($itemIndex) (translation): Cau dich bi trung voi 1 cau bai tap khac trong cung mau! Tieng Viet: '$($t.vi)'"
                                    } else {
                                        $allExerciseTexts += $tNormJp
                                    }
                                }
                            }
                        }
                    }
                    $itemIndex++
                }
            }
        } catch {
            $errors += "Loi doc/parse file JSON: $($_.Exception.Message)"
        }
    }
}

# ------------------------------------------------------------------------------
# 2. KIEM TRA FILE SCRIPT.JS HIEN TAI
# ------------------------------------------------------------------------------
Write-Host "`n[2] Kiem tra tinh toan ven cua $ScriptFile..." -ForegroundColor Yellow
if (-not (Test-Path $scriptPath)) {
    $errors += "Khong tim thay file $scriptPath"
} else {
    $scriptContent = [System.IO.File]::ReadAllText($scriptPath, [System.Text.Encoding]::UTF8)
    
    $oB = 0; $cB = 0; $oBk = 0; $cBk = 0
    $chars = $scriptContent.ToCharArray()
    for ($i = 0; $i -lt $chars.Length; $i++) {
        $c = $chars[$i]
        if ($c -eq '{') { $oB++ }
        elseif ($c -eq '}') { $cB++ }
        elseif ($c -eq '[') { $oBk++ }
        elseif ($c -eq ']') { $cBk++ }
    }
    
    Write-Host "  - Dau ngoac nhon { } : $oB / $cB (Do lech: $($oB - $cB))" -ForegroundColor $(if ($oB -eq $cB) { "Green" } else { "Red" })
    Write-Host "  - Dau ngoac vuong [ ] : $oBk / $cBk (Do lech: $($oBk - $cBk))" -ForegroundColor $(if ($oBk -eq $cBk) { "Green" } else { "Red" })
    
    if ($oB -ne $cB) { $errors += "Lech dau ngoac nhon {} trong $ScriptFile (Mo: $oB, Dong: $cB)." }
    if ($oBk -ne $cBk) { $errors += "Lech dau ngoac vuong [] trong $ScriptFile (Mo: $oBk, Dong: $cBk)." }
    
    $n3Idx = $scriptContent.IndexOf("grammarMapData:")
    if ($n3Idx -lt 0) {
        $errors += "Khong tim thay bien 'grammarMapData' trong $ScriptFile."
    } else {
        $n3Sub = $scriptContent.Substring($n3Idx)
        $n3End = $n3Sub.IndexOf("};")
        if ($n3End -gt 0) { $n3Sub = $n3Sub.Substring(0, $n3End) }
        
        $lessonMatches = [regex]::Matches($n3Sub, '["'']?name["'']?\s*:\s*["'']([^"'']+)["'']')
        Write-Host "  + Hien tai co $($lessonMatches.Count) bai hoc trong grammarMapData:" -ForegroundColor Green
        foreach ($lm in $lessonMatches) {
            Write-Host "     - $($lm.Groups[1].Value)" -ForegroundColor Gray
        }
    }
}

# ------------------------------------------------------------------------------
# 3. TONG KET
# ------------------------------------------------------------------------------
Write-Host "`n==========================================================" -ForegroundColor Cyan
if ($errors.Count -eq 0) {
    Write-Host "  TAT CA CAC BUOC KIEM TRA DEU HOP LE! (0 LOI)" -ForegroundColor Green
    if ($warnings.Count -gt 0) {
        Write-Host "  Canh bao ($($warnings.Count)):" -ForegroundColor Yellow
        foreach ($w in $warnings) { Write-Host "    - $w" -ForegroundColor Yellow }
    }
    Write-Host "==========================================================" -ForegroundColor Cyan
    exit 0
} else {
    Write-Host "  PHAT HIEN $($errors.Count) LOI CAN SUA:" -ForegroundColor Red
    foreach ($err in $errors) {
        Write-Host "    * $err" -ForegroundColor Red
    }
    if ($warnings.Count -gt 0) {
        Write-Host "  Canh bao ($($warnings.Count)):" -ForegroundColor Yellow
        foreach ($w in $warnings) { Write-Host "    - $w" -ForegroundColor Yellow }
    }
    Write-Host "==========================================================" -ForegroundColor Cyan
    exit 1
}
