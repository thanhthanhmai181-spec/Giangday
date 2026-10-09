$content = [System.IO.File]::ReadAllText('dokkai.js', [System.Text.Encoding]::UTF8)
$openCurly = ([regex]::Matches($content, '\{')).Count
$closeCurly = ([regex]::Matches($content, '\}')).Count
$openSquare = ([regex]::Matches($content, '\[')).Count
$closeSquare = ([regex]::Matches($content, '\]')).Count
$openParen = ([regex]::Matches($content, '\(')).Count
$closeParen = ([regex]::Matches($content, '\)')).Count

Write-Host "Brackets Balance for dokkai.js:"
Write-Host "  { } : $openCurly vs $closeCurly"
Write-Host "  [ ] : $openSquare vs $closeSquare"
Write-Host "  ( ) : $openParen vs $closeParen"

if ($openCurly -eq $closeCurly -and $openSquare -eq $closeSquare -and $openParen -eq $closeParen) {
    Write-Host "SUCCESS: dokkai.js perfectly balanced!" -ForegroundColor Green
} else {
    Write-Host "ERROR: Mismatch in dokkai.js" -ForegroundColor Red
    exit 1
}
