$path = "Dev_Scripts/dokkai_n3_thongtin_bai1.json"
$raw = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)

# Format strictly as JS Array [ { ... } ]
$thongtinArrayString = "`"thongtin`": [`r`n" + $raw.Trim() + "`r`n        ]"

$jsContent = [System.IO.File]::ReadAllText('dokkai.js', [System.Text.Encoding]::UTF8)

# Replace existing "thongtin": { ... } or "thongtin": [] with proper Array
$thongtinRegex = [regex]'("thongtin"\s*:\s*\{[\s\S]*?\n\s*\})|("thongtin"\s*:\s*\[[\s\S]*?\])'
if ($thongtinRegex.IsMatch($jsContent)) {
    $newJs = $thongtinRegex.Replace($jsContent, $thongtinArrayString, 1)
    [System.IO.File]::WriteAllText('dokkai.js', $newJs, [System.Text.Encoding]::UTF8)
    Write-Host "Replaced thongtin with proper Array [ { ... } ]!"
} else {
    Write-Error "Could not match thongtin in dokkai.js"
    exit 1
}

& "Dev_Scripts/check_dokkai_syntax.ps1"
