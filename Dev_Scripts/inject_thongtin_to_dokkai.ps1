$jsonList = @()
$path = "Dev_Scripts/dokkai_n3_thongtin_bai1.json"
$raw = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
$obj = $raw | ConvertFrom-Json
$jsonList += $obj

$jsonArrayString = $jsonList | ConvertTo-Json -Depth 20
$target = '"thongtin": []'
$jsContent = [System.IO.File]::ReadAllText('dokkai.js', [System.Text.Encoding]::UTF8)

if (-not $jsContent.Contains($target)) {
    Write-Error "Target 'thongtin': [] not found in dokkai.js"
    exit 1
}

$replacement = "`"thongtin`": $jsonArrayString"
$newJs = $jsContent.Replace($target, $replacement)

[System.IO.File]::WriteAllText('dokkai.js', $newJs, [System.Text.Encoding]::UTF8)
Write-Host "Injected Thong Tin lesson 1 to dokkai.js successfully!"
& "Dev_Scripts/check_dokkai_syntax.ps1"
