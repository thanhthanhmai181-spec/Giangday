$path = Join-Path $PSScriptRoot "..\script.js"
$lines = [System.IO.File]::ReadAllLines((Resolve-Path $path), [System.Text.Encoding]::UTF8)

# Check lines from 18000 to end
Write-Host "Searching function definitions around 18000-19426..."
for ($i = 18000; $i -lt $lines.Length; $i++) {
    if ($lines[$i] -match "function\s+([a-zA-Z0-9_]+)" -or $lines[$i] -match "const\s+([a-zA-Z0-9_]+)\s*=\s*(function|\()") {
        Write-Host "$($i + 1): $($lines[$i].Trim())"
    }
}
