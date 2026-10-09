$content = [System.IO.File]::ReadAllText('dokkai.js', [System.Text.Encoding]::UTF8)

$dientuMatches = [regex]::Matches($content, 'dokkai-n3-dientu-\d+')
$doanvanMatches = [regex]::Matches($content, 'dokkai-n3-doanvan-\d+')
$trungvanMatches = [regex]::Matches($content, 'dokkai-n3-trungvan-\d+')
$truongvanMatches = [regex]::Matches($content, 'dokkai-n3-truongvan-\d+')
$thongtinMatches = [regex]::Matches($content, 'dokkai-n3-thongtin-\d+')

Write-Host "========================================"
Write-Host "  DOKKAI DATASET INVENTORY VERIFICATION "
Write-Host "========================================"
Write-Host "  + Dạng Điền từ (dientu)    : $($dientuMatches.Count) bài (Bài 1 -> 10)"
Write-Host "  + Dạng Đoản văn (doanvan)   : $($doanvanMatches.Count) bài (Bài 1 -> 12)"
Write-Host "  + Dạng Trung văn (trungvan) : $($trungvanMatches.Count) bài (Bài 1 -> 10)"
Write-Host "  + Dạng Trường văn (truongvan): $($truongvanMatches.Count) bài (Bài 1 -> 10)"
Write-Host "  + Dạng Tìm thông tin (thongtin): $($thongtinMatches.Count) bài (Bài 1)"
Write-Host "========================================"
