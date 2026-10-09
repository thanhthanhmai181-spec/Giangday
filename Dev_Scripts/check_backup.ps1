$backupContent = [System.IO.File]::ReadAllText("backups\Backup_Backup_HomNay_2026_08_12_2026_08_12_161447\script.js", [System.Text.Encoding]::UTF8)
$bOpen = ([regex]::Matches($backupContent, '\(')).Count
$bClose = ([regex]::Matches($backupContent, '\)')).Count
Write-Host "Backup ( ) : $bOpen vs $bClose (Diff: $($bOpen - $bClose))"
