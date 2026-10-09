$scriptDir = $PSScriptRoot
$configPath = Join-Path $scriptDir "titles_update_config.json"
$configRaw = [System.IO.File]::ReadAllText($configPath, [System.Text.Encoding]::UTF8)
$config = $configRaw | ConvertFrom-Json

$fileNames = @("bai14.json", "bai15.json", "bai16.json", "bai17.json", "bai18.json", "bai19.json", "bai20.json", "bai21.json", "bai22.json")

foreach ($fileName in $fileNames) {
    $filePath = Join-Path $scriptDir $fileName
    if (-not (Test-Path $filePath)) {
        Write-Warning "File not found: $filePath"
        continue
    }
    
    $raw = [System.IO.File]::ReadAllText($filePath, [System.Text.Encoding]::UTF8)
    $data = $raw | ConvertFrom-Json
    
    $propValue = $config.PSObject.Properties[$fileName].Value
    if ($propValue) {
        Write-Host "Updating $fileName with $($propValue.Count) titles..."
        for ($i = 0; $i -lt $propValue.Count; $i++) {
            if ($i -lt $data.items.Count) {
                $oldTitle = $data.items[$i].structure
                $data.items[$i].structure = $propValue[$i]
                Write-Host "   Item $($i+1): $oldTitle -> $($propValue[$i])"
            }
        }
        $newJson = $data | ConvertTo-Json -Depth 30
        [System.IO.File]::WriteAllText($filePath, $newJson, [System.Text.Encoding]::UTF8)
    } else {
        Write-Warning "No config found for $fileName"
    }
}

foreach ($fileName in $fileNames) {
    $filePath = Join-Path $scriptDir $fileName
    Write-Host "`n>>> Injecting $fileName..."
    & powershell -NoProfile -ExecutionPolicy Unrestricted -File (Join-Path $scriptDir "add_grammar_lesson.ps1") -JsonFile $filePath
}

Write-Host "`nAll lessons 14 to 22 updated and injected successfully!"
