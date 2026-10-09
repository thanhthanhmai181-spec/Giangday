[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$js = [System.IO.File]::ReadAllText("$PSScriptRoot\..\script.js", [System.Text.Encoding]::UTF8)

# Find start of N3
$n3Pos = $js.IndexOf("N3: [")
$n3Block = $js.Substring($n3Pos)

$lessonMatches = [regex]::Matches($n3Block, 'name:\s*["'']Bài\s+(\d+)["'']')
Write-Host "Found $($lessonMatches.Count) lessons in N3"

$outLines = @()

for ($i = 0; $i -lt $lessonMatches.Count; $i++) {
    $lessonNum = $lessonMatches[$i].Groups[1].Value
    $startPos = $lessonMatches[$i].Index
    $endPos = if ($i -lt $lessonMatches.Count - 1) { $lessonMatches[$i+1].Index } else { $n3Block.Length }
    $block = $n3Block.Substring($startPos, $endPos - $startPos)
    
    $outLines += "=================== Bài $lessonNum ==================="
    $structMatches = [regex]::Matches($block, '(?m)^\s*structure:\s*["''](.*?)["''],?$')
    $idx = 1
    foreach ($sm in $structMatches) {
        $outLines += "  Item $($idx): $($sm.Groups[1].Value)"
        $idx++
    }
}

[System.IO.File]::WriteAllLines("$PSScriptRoot\all_lessons_structures.txt", $outLines, [System.Text.Encoding]::UTF8)
Write-Host "Done writing all_lessons_structures.txt"
