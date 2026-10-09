$parent = Split-Path $PSScriptRoot -Parent
$imgDir = Get-ChildItem -Path $parent -Directory | Where-Object { $_.Name -like "*ph*p*N3*" } | Select-Object -First 1
if ($imgDir) {
    Write-Host "Found dir: $($imgDir.FullName)"
    1..5 | ForEach-Object {
        $idx = $_
        $srcFile = Get-ChildItem -Path $imgDir.FullName | Where-Object { $_.Name -like "*60.$idx.png" } | Select-Object -First 1
        if ($srcFile) {
            $newName = $srcFile.Name -replace '60\.', '59.'
            $dstPath = Join-Path $imgDir.FullName $newName
            if (-not (Test-Path $dstPath)) {
                Copy-Item $srcFile.FullName $dstPath
                Write-Host "Created $newName"
            }
        }
    }
}
