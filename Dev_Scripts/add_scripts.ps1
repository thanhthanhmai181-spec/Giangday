$content = [System.IO.File]::ReadAllText('index.html', [System.Text.Encoding]::UTF8)
$old = '<script src="script.js?v=2073"></script>'
$new = '<script src="script.js?v=2073"></script>' + "`r`n" + '    <script src="class_tracking.js?v=2073"></script>' + "`r`n" + '    <script src="drawing_tool.js?v=2073"></script>'
if ($content -notlike "*class_tracking.js*") {
    $content = $content.Replace($old, $new)
    [System.IO.File]::WriteAllText('index.html', $content, [System.Text.Encoding]::UTF8)
    Write-Host "Added script tags OK"
} else {
    Write-Host "Already has class_tracking.js"
}
