$srcDir = Get-ChildItem -Directory | Where-Object { $_.Name -like '*nghe*' } | Select-Object -First 1
$destDir = "assets/audio/choukai/n3/nghe_traloi/bai1"

if (-not (Test-Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir -Force | Out-Null
}

if ($srcDir) {
    Get-ChildItem $srcDir.FullName -Filter "*.mp3" | ForEach-Object {
        Copy-Item $_.FullName "$destDir/$($_.Name)" -Force
        Write-Host "Copied $($_.Name) to $destDir"
    }
} else {
    Write-Warning "Source directory with 'nghe' not found."
}
