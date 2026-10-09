Get-ChildItem -Path "c:\Users\admin\Desktop" -Recurse -File -Include "*.mp3", "*.png", "*.jpg" | Select-Object FullName
Get-ChildItem -Path "c:\Users\admin\Downloads" -Recurse -Depth 2 -File -Include "*.mp3", "*.png", "*.jpg" | Select-Object FullName
