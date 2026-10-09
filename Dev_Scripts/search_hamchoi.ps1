$path = Join-Path $PSScriptRoot "..\script.js"
$lines = [System.IO.File]::ReadAllLines((Resolve-Path $path), [System.Text.Encoding]::UTF8)
Write-Host "Total lines in script.js: $($lines.Length)"
$matches = for ($i = 0; $i -lt $lines.Length; $i++) {
    if ($lines[$i] -match "hamchoi" -or $lines[$i] -match "Ham chơi" -or $lines[$i] -match "initHamChoi" -or $lines[$i] -match "class-n3") {
        "$($i + 1): $($lines[$i])"
    }
}
$matches | Select-Object -First 30
