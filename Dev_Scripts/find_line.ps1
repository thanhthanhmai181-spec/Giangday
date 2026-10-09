$lines = [System.IO.File]::ReadAllLines("script.js", [System.Text.Encoding]::UTF8)
for ($i = 17800; $i -lt [Math]::Min(18100, $lines.Length); $i++) {
    if ($lines[$i] -match "initTuvung|DASHBOARD|student-roster|function init") {
        Write-Host "Line $($i + 1): $($lines[$i])"
    }
}
