1..10 | ForEach-Object {
    $file = "Dev_Scripts/dokkai_n3_truongvan_bai$_.json"
    Write-Host "Validating $file..."
    & "Dev_Scripts/validate_dokkai.ps1" -JsonFile $file
}
