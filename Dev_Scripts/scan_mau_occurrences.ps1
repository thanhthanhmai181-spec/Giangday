[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$scriptDir = $PSScriptRoot

$jsonFiles = Get-ChildItem -Path $scriptDir -Filter "bai*.json"

$out = @()

foreach ($f in $jsonFiles) {
    $raw = [System.IO.File]::ReadAllText($f.FullName, [System.Text.Encoding]::UTF8)
    $pattern = 'M[^\s]{1,4}u\s+\d+:?'
    $mMatches = [regex]::Matches($raw, $pattern)
    if ($mMatches.Count -gt 0) {
        $out += "$($f.Name) has $($mMatches.Count) matches"
        foreach ($m in $mMatches) {
            $snippet = $raw.Substring([Math]::Max(0, $m.Index - 20), [Math]::Min(80, $raw.Length - $m.Index + 20))
            $out += "   $($m.Value) -> Context: $snippet"
        }
    }
}

[System.IO.File]::WriteAllLines("$scriptDir\mau_scan_results.txt", $out, [System.Text.Encoding]::UTF8)
Write-Host "Done scanning $($jsonFiles.Count) files."
