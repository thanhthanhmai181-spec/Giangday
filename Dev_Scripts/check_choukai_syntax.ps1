$js = [System.IO.File]::ReadAllText('choukai.js', [System.Text.Encoding]::UTF8)

$bOpen = ([regex]::Matches($js, '\{')).Count
$bClose = ([regex]::Matches($js, '\}')).Count
$sOpen = ([regex]::Matches($js, '\[' )).Count
$sClose = ([regex]::Matches($js, '\]')).Count
$pOpen = ([regex]::Matches($js, '\(' )).Count
$pClose = ([regex]::Matches($js, '\)')).Count

Write-Host "Brackets Balance for choukai.js:"
Write-Host "  { } : $bOpen vs $bClose"
Write-Host "  [ ] : $sOpen vs $sClose"
Write-Host "  ( ) : $pOpen vs $pClose"

if ($bOpen -eq $bClose -and $sOpen -eq $sClose -and $pOpen -eq $pClose) {
    Write-Host "SUCCESS: choukai.js perfectly balanced!" -ForegroundColor Green
} else {
    Write-Host "ERROR: choukai.js unbalanced brackets!" -ForegroundColor Red
}
