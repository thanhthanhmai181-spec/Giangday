$audioDir = Get-ChildItem -Directory | Where-Object { $_.Name -like '*nghe*' -and $_.Name -notlike '*ảnh*' -and $_.Name -notlike '*anh*' } | Select-Object -First 1
$destAudio = "assets/audio/choukai/n3/nghe_traloi/bai3"
$destImg = "assets/images/choukai/n3/nghe_traloi/bai3"

if (-not (Test-Path $destAudio)) { New-Item -ItemType Directory -Path $destAudio -Force | Out-Null }
if (-not (Test-Path $destImg)) { New-Item -ItemType Directory -Path $destImg -Force | Out-Null }

Write-Host "Audio folder: " $audioDir.FullName
Get-ChildItem $audioDir.FullName | Where-Object { $_.Name -match "^1[3-8]\.mp3$" } | ForEach-Object {
    Copy-Item $_.FullName "$destAudio/$($_.Name)" -Force
    Write-Host "Copied $($_.Name) to $destAudio"
}

# Image folder check
$allDirs = Get-ChildItem -Directory
foreach ($d in $allDirs) {
    $bytes = [System.Text.Encoding]::UTF8.GetBytes($d.Name)
    if ($bytes[0] -eq 225 -and $bytes[1] -eq 186 -and $bytes[2] -eq 162) {
        Write-Host "Found Image folder: " $d.FullName
        Get-ChildItem $d.FullName | Where-Object { $_.Name -match "^3\.(jpg|png)$" } | ForEach-Object {
            Copy-Item $_.FullName "$destImg/$($_.Name)" -Force
            Write-Host "Copied $($_.Name) to $destImg"
        }
    }
}
