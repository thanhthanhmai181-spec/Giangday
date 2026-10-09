function Test-FileBracket($path) {
    $c = Get-Content $path -Raw -Encoding UTF8
    $oB = ($c.ToCharArray() | Where-Object { $_ -eq '{' }).Count
    $cB = ($c.ToCharArray() | Where-Object { $_ -eq '}' }).Count
    $oS = ($c.ToCharArray() | Where-Object { $_ -eq '[' }).Count
    $cS = ($c.ToCharArray() | Where-Object { $_ -eq ']' }).Count
    $oP = ($c.ToCharArray() | Where-Object { $_ -eq '(' }).Count
    $cP = ($c.ToCharArray() | Where-Object { $_ -eq ')' }).Count
    Write-Host "$path :"
    Write-Host "  { } : $oB vs $cB | [ ] : $oS vs $cS | ( ) : $oP vs $cP"
    try {
        $json = $c | ConvertFrom-Json
        Write-Host "  JSON Valid: YES"
    } catch {
        Write-Host "  JSON Valid: NO -> $($_.Exception.Message)"
    }
}

Test-FileBracket "Dev_Scripts/choukai_n3_nghe_traloi_bai1.json"
Test-FileBracket "Dev_Scripts/choukai_n3_nghe_traloi_bai2.json"
Test-FileBracket "Dev_Scripts/choukai_n3_nghe_traloi_bai3.json"
Test-FileBracket "Dev_Scripts/choukai_n3_nghe_traloi_bai4.json"
