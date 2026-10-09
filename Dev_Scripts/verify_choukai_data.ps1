$raw = Get-Content "choukai.js" -Raw -Encoding UTF8
$marker = "const choukaiDataset = "
$startIdx = $raw.IndexOf($marker) + $marker.Length
$endIdx = $raw.IndexOf("// ==========================================================================", $startIdx)
$jsonStr = $raw.Substring($startIdx, $endIdx - $startIdx).Trim().TrimEnd(';').Trim()
$data = $jsonStr | ConvertFrom-Json

Write-Host "=== N3 CHOUKAI DATASET SUMMARY ==="
Write-Host "1. Nghe Tra Loi: " $data.N3.nghe_traloi.Count " lessons"

Write-Host "2. Nghe Chu De: " $data.N3.nghe_chude.Count " lessons"

Write-Host "3. Nghe Hoi: " $data.N3.nghe_hoi.Count " lessons"

Write-Host "4. Nghe Phan Xa: " $data.N3.nghe_phanxa.Count " lessons"
foreach ($l in $data.N3.nghe_phanxa) {
    Write-Host "   - $($l.title) ($($l.questions.Count) questions)"
    foreach ($q in $l.questions) {
        Write-Host "     Q$($q.id): $($q.subId) | Audio: $($q.audioSrc) | Opts: $($q.options.Count) | Ans: $($q.answer + 1)"
    }
}
