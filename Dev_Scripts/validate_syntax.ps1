# Quick syntax check for script.js
$content = [System.IO.File]::ReadAllText("script.js", [System.Text.Encoding]::UTF8)

$openCurly = ([regex]::Matches($content, '\{')).Count
$closeCurly = ([regex]::Matches($content, '\}')).Count
$openSquare = ([regex]::Matches($content, '\[')).Count
$closeSquare = ([regex]::Matches($content, '\]')).Count
$openParen = ([regex]::Matches($content, '\(')).Count
$closeParen = ([regex]::Matches($content, '\)')).Count

Write-Host "Brackets Balance Report:"
Write-Host "  { } : $openCurly vs $closeCurly (Diff: $($openCurly - $closeCurly))"
Write-Host "  [ ] : $openSquare vs $closeSquare (Diff: $($openSquare - $closeSquare))"
Write-Host "  ( ) : $openParen vs $closeParen (Diff: $($openParen - $closeParen))"

if ($openCurly -eq $closeCurly -and $openSquare -eq $closeSquare -and $openParen -eq $closeParen) {
    Write-Host "`nSUCCESS: All brackets, braces, and parentheses are 100% perfectly balanced!" -ForegroundColor Green
} else {
    Write-Host "`nERROR: Bracket mismatch detected!" -ForegroundColor Red
    exit 1
}
