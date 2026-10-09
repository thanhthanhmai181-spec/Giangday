Get-ChildItem -Path . -Directory | ForEach-Object {
    Write-Host "Folder:" $_.Name
    Get-ChildItem $_.FullName | Select-Object Name, Length | Format-Table -AutoSize
}
