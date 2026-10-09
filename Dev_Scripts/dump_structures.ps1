$js = [System.IO.File]::ReadAllText("$PSScriptRoot\..\script.js", [System.Text.Encoding]::UTF8)

# Match lesson objects by looking for x: ..., y: ...
$pattern = '(?s)\{\s*"name":\s*"([^"]+)",\s*"x":\s*(\d+),\s*"y":\s*(\d+)'
$altPattern = '(?s)\{\s*name:\s*"([^"]+)",\s*x:\s*(\d+),\s*y:\s*(\d+)'

$matches1 = [regex]::Matches($js, $pattern)
$matches2 = [regex]::Matches($js, $altPattern)

Write-Host "JSON style name matches: $($matches1.Count)"
Write-Host "JS style name matches: $($matches2.Count)"

$allLessons = @()
foreach ($m in $matches1) {
    $allLessons += [PSCustomObject]@{ Name = $m.Groups[1].Value; Index = $m.Index; IsJson = $true }
}
foreach ($m in $matches2) {
    $allLessons += [PSCustomObject]@{ Name = $m.Groups[1].Value; Index = $m.Index; IsJson = $false }
}

$allLessons = $allLessons | Sort-Object Index

$outLines = [System.Collections.Generic.List[string]]::new()

for ($i = 0; $i -lt $allLessons.Count; $i++) {
    $lesson = $allLessons[$i]
    $start = $lesson.Index
    $end = if ($i -lt $allLessons.Count - 1) { $allLessons[$i+1].Index } else { $js.Length }
    $block = $js.Substring($start, $end - $start)
    
    $outLines.Add("================ $($lesson.Name) ================")
    
    $sMatches = [regex]::Matches($block, '(?:"structure"|structure):\s*"([^"]+)"')
    $itemIdx = 1
    foreach ($sm in $sMatches) {
        $val = $sm.Groups[1].Value
        if (-not $val.StartsWith("<")) {
            $outLines.Add("  Item $itemIdx : $val")
            $itemIdx++
        }
    }
}

[System.IO.File]::WriteAllLines("$PSScriptRoot\all_structures_report.txt", $outLines, [System.Text.Encoding]::UTF8)
Write-Host "Report written with $($allLessons.Count) lessons!"
