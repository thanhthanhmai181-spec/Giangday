$path = Join-Path $PSScriptRoot "..\styles.css"
$lines = [System.IO.File]::ReadAllLines((Resolve-Path $path), [System.Text.Encoding]::UTF8)
Write-Host "Total lines in styles.css: $($lines.Length)"
$matches = for ($i = 0; $i -lt $lines.Length; $i++) {
    if ($lines[$i] -match "class-tracking" -or $lines[$i] -match "hamchoi" -or $lines[$i] -match "class-track") {
        "$($i + 1): $($lines[$i])"
    }
}
$matches
