Get-ChildItem -Directory | ForEach-Object {
    [PSCustomObject]@{
        Name = $_.Name
        FullName = $_.FullName
        FileCount = (Get-ChildItem $_.FullName -File).Count
    }
} | Format-Table -AutoSize
