$path = Join-Path $PSScriptRoot "..\script.js"
$lines = [System.IO.File]::ReadAllLines((Resolve-Path $path), [System.Text.Encoding]::UTF8)

for ($i = 17500; $i -lt $lines.Length; $i++) {
    if ($lines[$i] -match "DOMContentLoaded" -or $lines[$i] -match "dashboard" -or $lines[$i] -match "initApp") {
        Write-Host "$($i + 1): $($lines[$i].Trim())"
    }
}
