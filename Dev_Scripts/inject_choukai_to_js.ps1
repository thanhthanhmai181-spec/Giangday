$jsonFiles = Get-ChildItem "Dev_Scripts" -Filter "choukai_n3_nghe_traloi_bai*.json" | 
    Sort-Object { [int]($_.BaseName -replace '\D+') }

Write-Host "Ordering of choukai files to inject:"
$jsonFiles | ForEach-Object { Write-Host "  - $($_.Name)" }

$jsonList = @()
foreach ($f in $jsonFiles) {
    $raw = [System.IO.File]::ReadAllText($f.FullName, [System.Text.Encoding]::UTF8)
    $obj = $raw | ConvertFrom-Json
    $jsonList += $obj
}

$choukaiArrayJson = $jsonList | ConvertTo-Json -Depth 20

$jsContent = [System.IO.File]::ReadAllText('choukai.js', [System.Text.Encoding]::UTF8)

# Find start of nghe_traloi block in N3
$targetMarker = '"nghe_traloi": ['
$splitIdx = $jsContent.IndexOf($targetMarker)

if ($splitIdx -lt 0) {
    Write-Error "Could not find 'nghe_traloi': ["
    exit 1
}

# The next marker is "nghe_chude": [
$nextMarker = '"nghe_chude": ['
$nextIdx = $jsContent.IndexOf($nextMarker, $splitIdx)

if ($nextIdx -lt 0) {
    Write-Error "Could not find 'nghe_chude': ["
    exit 1
}

$cleanBlock = '"nghe_traloi": ' + $choukaiArrayJson + ",`r`n        "

$newJs = $jsContent.Substring(0, $splitIdx) + $cleanBlock + $jsContent.Substring($nextIdx)

[System.IO.File]::WriteAllText('choukai.js', $newJs, [System.Text.Encoding]::UTF8)
Write-Host "Successfully injected $($jsonFiles.Count) choukai lessons to choukai.js!"
