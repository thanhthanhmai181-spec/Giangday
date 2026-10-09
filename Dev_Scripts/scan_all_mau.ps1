[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$scriptDir = $PSScriptRoot

$jsonFiles = Get-ChildItem -Path $scriptDir -Filter "bai*.json"

$out = @()

foreach ($f in $jsonFiles) {
    $raw = [System.IO.File]::ReadAllText($f.FullName, [System.Text.Encoding]::UTF8)
    
    # Check for Mẫu in HTML tags or headers
    $matches = [regex]::Matches($raw, '(?i)(?:Mẫu|Mau)\s*\d+[:\.]?')
    if ($matches.Count -gt 0) {
        $out += "=== $($f.Name) ($($matches.Count) matches) ==="
        foreach ($m in $matches) {
            $snippet = $raw.Substring([Math]::Max(0, $m.Index - 30), [Math]::Min(100, $raw.Length - $m.Index + 30))
            $out += "   Line match: $($m.Value) => Context: $snippet"
        }
    }
}

[System.IO.File]::WriteAllLines("$scriptDir\all_mau_matches.txt", $out, [System.Text.Encoding]::UTF8)
Write-Host "Scanned for all Mẫu matches."
