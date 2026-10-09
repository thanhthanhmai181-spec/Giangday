$js = [System.IO.File]::ReadAllText("$PSScriptRoot\..\script.js", [System.Text.Encoding]::UTF8)
$n3Index = $js.IndexOf("N3: [")
$n3Part = $js.Substring($n3Index)

$lines = $n3Part -split "`n"
$currentLesson = ""
$results = @()

foreach ($line in $lines) {
    if ($line -match 'name:\s*"([^"]+)"') {
        $currentLesson = $matches[1]
        $results += "=== $currentLesson ==="
    }
    if ($line -match 'structure:\s*"([^"]+)"') {
        $results += "   " + $matches[1]
    }
}

[System.IO.File]::WriteAllLines("$PSScriptRoot\structures_dump.txt", $results, [System.Text.Encoding]::UTF8)
Write-Host "Wrote $($results.Count) lines to structures_dump.txt"
