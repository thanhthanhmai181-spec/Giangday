$jsonList = @()
for ($i = 1; $i -le 10; $i++) {
    $path = "Dev_Scripts/dokkai_n3_truongvan_bai$i.json"
    $raw = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
    $obj = $raw | ConvertFrom-Json
    $jsonList += $obj
}

$jsonArrayString = $jsonList | ConvertTo-Json -Depth 20
$target = '"truongvan": []'
$jsContent = [System.IO.File]::ReadAllText('dokkai.js', [System.Text.Encoding]::UTF8)

if (-not $jsContent.Contains($target)) {
    Write-Error "Target 'truongvan': [] not found in dokkai.js"
    exit 1
}

$replacement = "`"truongvan`": $jsonArrayString"
$newJs = $jsContent.Replace($target, $replacement)

[System.IO.File]::WriteAllText('dokkai.js', $newJs, [System.Text.Encoding]::UTF8)
Write-Host "Injected all 10 Truong Van lessons to dokkai.js successfully!"
& "Dev_Scripts/check_dokkai_syntax.ps1"
