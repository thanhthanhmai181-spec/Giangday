$path = Join-Path $PSScriptRoot "..\script.js"
$lines = [System.IO.File]::ReadAllLines((Resolve-Path $path), [System.Text.Encoding]::UTF8)

for ($i = 17930; $i -lt 18100; $i++) {
    if ($lines[$i] -match "N3" -or $lines[$i] -match "vocabLevelsConfig" -or $lines[$i] -match "nodes") {
        Write-Host "$($i + 1): $($lines[$i].Trim())"
    }
}
