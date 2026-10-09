[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$scriptDir = $PSScriptRoot

$jsonFiles = Get-ChildItem -Path $scriptDir -Filter "bai*.json"

foreach ($f in $jsonFiles) {
    $raw = [System.IO.File]::ReadAllText($f.FullName, [System.Text.Encoding]::UTF8)
    
    # Check if Mẫu \d+ is present
    $matches = [regex]::Matches($raw, 'Mẫu\s+\d+[:\s\.]*')
    if ($matches.Count -gt 0) {
        Write-Host "File: $($f.Name)"
        foreach ($m in $matches) {
            $start = [Math]::Max(0, $m.Index - 20)
            $len = [Math]::Min(80, $raw.Length - $start)
            Write-Host "   -> $($m.Value) in: $($raw.Substring($start, $len))"
        }
    }
}
