$audioDir = Get-ChildItem -Directory | Where-Object { $_.Name -like '*nghe*' -and $_.Name -notlike '*ảnh*' -and $_.Name -notlike '*anh*' } | Select-Object -First 1
$imageDir = Get-ChildItem -Directory | Where-Object { $_.Name -like '*ảnh*' -or $_.Name -like '*anh*' -or $_.Name -like '*Ảnh*' } | Select-Object -First 1

$destAudio = "assets/audio/choukai/n3/nghe_traloi/bai2"
$destImg = "assets/images/choukai/n3/nghe_traloi/bai2"

if (-not (Test-Path $destAudio)) { New-Item -ItemType Directory -Path $destAudio -Force | Out-Null }
if (-not (Test-Path $destImg)) { New-Item -ItemType Directory -Path $destImg -Force | Out-Null }

if ($audioDir) {
    7..12 | ForEach-Object {
        $srcFile = Join-Path $audioDir.FullName "$_.mp3"
        if (Test-Path $srcFile) {
            Copy-Item $srcFile "$destAudio/$_.mp3" -Force
            Write-Host "Copied $srcFile to $destAudio/$_.mp3"
        }
    }
}

if ($imageDir) {
    Get-ChildItem $imageDir.FullName | ForEach-Object {
        Copy-Item $_.FullName "$destImg/$($_.Name)" -Force
        Write-Host "Copied $($_.FullName) to $destImg/$($_.Name)"
    }
}
