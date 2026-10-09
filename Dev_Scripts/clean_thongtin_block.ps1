$jsContent = [System.IO.File]::ReadAllText('dokkai.js', [System.Text.Encoding]::UTF8)

# Find the start of thongtin:
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

# Read pure JSON of thongtin bai 1:
$jsonRaw = [System.IO.File]::ReadAllText("Dev_Scripts/dokkai_n3_thongtin_bai1.json", [System.Text.Encoding]::UTF8).Trim()

# Construct clean thongtin block:
$cleanBlock = '"thongtin": [' + "`r`n" + $jsonRaw + "`r`n" + '        ]' + "`r`n" + '    }' + "`r`n" + '};' + "`r`n`r`n"

$newJs = $jsContent.Substring(0, $splitIdx) + $cleanBlock + $jsContent.Substring($ctrlIdx)

[System.IO.File]::WriteAllText('dokkai.js', $newJs, [System.Text.Encoding]::UTF8)
Write-Host "Successfully rewritten thongtin block in dokkai.js!"

& "Dev_Scripts/check_dokkai_syntax.ps1"
