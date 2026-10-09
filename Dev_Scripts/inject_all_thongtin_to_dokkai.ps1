$thongtinFiles = Get-ChildItem "Dev_Scripts" -Filter "dokkai_n3_thongtin_bai*.json" | 
    Sort-Object { [int]($_.BaseName -replace '\D+') }

Write-Host "Ordering of files to inject:"
$thongtinFiles | ForEach-Object { Write-Host "  - $($_.Name)" }

$jsonList = @()
foreach ($f in $thongtinFiles) {
    $raw = [System.IO.File]::ReadAllText($f.FullName, [System.Text.Encoding]::UTF8)
    $obj = $raw | ConvertFrom-Json
    $jsonList += $obj
}

$thongtinArrayJson = $jsonList | ConvertTo-Json -Depth 20

$jsContent = [System.IO.File]::ReadAllText('dokkai.js', [System.Text.Encoding]::UTF8)

# Find start of thongtin block
$splitMarker = '"thongtin": ['
$splitIdx = $jsContent.IndexOf($splitMarker)

if ($splitIdx -lt 0) {
    Write-Error "Could not find 'thongtin': ["
    exit 1
}

# The controller start marker:
$controllerMarker = '// =========================================================================='
$ctrlIdx = $jsContent.IndexOf($controllerMarker, $splitIdx)

if ($ctrlIdx -lt 0) {
    Write-Error "Could not find controller marker"
    exit 1
}

$cleanBlock = '"thongtin": ' + $thongtinArrayJson + "`r`n" + '    }' + "`r`n" + '};' + "`r`n`r`n"

$newJs = $jsContent.Substring(0, $splitIdx) + $cleanBlock + $jsContent.Substring($ctrlIdx)

[System.IO.File]::WriteAllText('dokkai.js', $newJs, [System.Text.Encoding]::UTF8)
Write-Host "Successfully injected $($thongtinFiles.Count) thongtin lessons in NATURAL NUMERICAL ORDER (1 -> 10) to dokkai.js!"

& "Dev_Scripts/check_dokkai_syntax.ps1"
