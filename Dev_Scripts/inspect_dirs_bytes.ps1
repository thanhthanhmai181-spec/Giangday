Get-ChildItem -Directory | ForEach-Object {
    [PSCustomObject]@{
        Name = $_.Name
        Bytes = [System.Text.Encoding]::UTF8.GetBytes($_.Name) -join ' '
        FullName = $_.FullName
    }
} | Format-Table -AutoSize
