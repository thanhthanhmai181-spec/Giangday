[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$js = [System.IO.File]::ReadAllText("$PSScriptRoot\..\script.js", [System.Text.Encoding]::UTF8)

# Find start of N3
$n3Pos = $js.IndexOf("N3: [")
$n3Block = $js.Substring($n3Pos)

# Let's extract each lesson by looking for "name": "Bài X" or name: "Bài X"
$pattern = '(?s)\{\s*["'']?name["'']?\s*:\s*["''](Bài\s+\d+)["''](.*?)(\n\s*\}\s*,\s*\{\s*["'']?name|\n\s*\}\s*\]\s*[\n\r]*\s*\})'
$matches = [regex]::Matches($n3Block, $pattern)

$outLines = [System.Collections.Generic.List[string]]::new()
foreach ($m in $matches) {
    $lessonName = $m.Groups[1].Value
    $body = $m.Groups[2].Value
    
    $outLines.Add("=== $lessonName ===")
    $sMatches = [regex]::Matches($body, '["'']?structure["'']?\s*:\s*["''](.*?)["''],?\r?\n')
    $idx = 1
    foreach ($sm in $sMatches) {
        $val = $sm.Groups[1].Value
        if (-not $val.StartsWith("<")) {
            $outLines.Add("   [$idx] $val")
            $idx++
        }
    }
}

[System.IO.File]::WriteAllLines("$PSScriptRoot\verified_structures.txt", $outLines, [System.Text.Encoding]::UTF8)
Write-Host "Wrote verified structures for $($matches.Count) lessons!"
