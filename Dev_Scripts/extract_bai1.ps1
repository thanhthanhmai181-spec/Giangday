$raw = Get-Content "backups/Backup_Choukai_N3/choukai.js" -Raw -Encoding UTF8
$startIdx = $raw.IndexOf('{"id":"choukai-n3-nghe_traloi-01"')
if ($startIdx -eq -1) {
    $startIdx = $raw.IndexOf('"id": "choukai-n3-nghe_traloi-01"')
    if ($startIdx -gt -1) {
        $startIdx = $raw.LastIndexOf('{', $startIdx)
    }
}
$endMarker = '"id": "choukai-n3-nghe_traloi-02"'
$endIdx = $raw.IndexOf($endMarker)
if ($endIdx -gt -1) {
    $endIdx = $raw.LastIndexOf('{', $endIdx)
    # find closing brace before this
    $closingBrace = $raw.LastIndexOf('}', $endIdx)
    $lesson1Str = $raw.Substring($startIdx, $closingBrace - $startIdx + 1)
    [System.IO.File]::WriteAllText("Dev_Scripts/choukai_n3_nghe_traloi_bai1.json", $lesson1Str, [System.Text.Encoding]::UTF8)
    Write-Host "Lesson 1 JSON saved successfully!"
} else {
    Write-Host "Could not find boundary"
}
