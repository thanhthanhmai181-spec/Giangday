$ts = Get-Date -Format 'yyyy_MM_dd_HHmmss'
$dir = "backups/Backup_Dokkai_N3_$ts"
New-Item -ItemType Directory -Path $dir -Force | Out-Null
Copy-Item 'index.html' "$dir/index.html"
Copy-Item 'class_tracking.js' "$dir/class_tracking.js"
Copy-Item 'dokkai.js' "$dir/dokkai.js"
Copy-Item 'styles.css' "$dir/styles.css"
Write-Host "Backup saved to $dir"
