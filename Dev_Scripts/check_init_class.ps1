$path = Join-Path $PSScriptRoot "..\script.js"
$lines = [System.IO.File]::ReadAllLines((Resolve-Path $path), [System.Text.Encoding]::UTF8)

for ($i = 0; $i -lt $lines.Length; $i++) {
    if ($lines[$i] -match "initClassTracking") {
        Write-Host "$($i + 1): $($lines[$i].Trim())"
    }
}
