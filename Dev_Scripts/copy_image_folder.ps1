$destImg = "assets/images/choukai/n3/nghe_traloi/bai2"
if (-not (Test-Path $destImg)) { New-Item -ItemType Directory -Path $destImg -Force | Out-Null }

$allDirs = Get-ChildItem -Directory
foreach ($d in $allDirs) {
    $bytes = [System.Text.Encoding]::UTF8.GetBytes($d.Name)
    # Check if bytes start with 225 186 162 (Ảnh)
    if ($bytes[0] -eq 225 -and $bytes[1] -eq 186 -and $bytes[2] -eq 162) {
        Write-Host "Found Image Dir: " $d.FullName
        Get-ChildItem $d.FullName | ForEach-Object {
            Copy-Item $_.FullName "$destImg/$($_.Name)" -Force
            Write-Host "Copied $($_.Name) to $destImg"
        }
    }
}
