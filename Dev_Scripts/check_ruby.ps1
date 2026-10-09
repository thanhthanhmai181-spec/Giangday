$raw = [System.IO.File]::ReadAllText('Dev_Scripts/dokkai_n3_thongtin_bai5.json', [System.Text.Encoding]::UTF8)
$opens = [regex]::Matches($raw, '<ruby>')
$closes = [regex]::Matches($raw, '</ruby>')

Write-Host "Open count: $($opens.Count), Close count: $($closes.Count)"

for ($i = 0; $i -lt $opens.Count; $i++) {
    $sub = $raw.Substring($opens[$i].Index, 80)
    if (-not $sub.Contains('</ruby>')) {
        Write-Host "Unclosed ruby at index $($opens[$i].Index): $sub"
    }
}
