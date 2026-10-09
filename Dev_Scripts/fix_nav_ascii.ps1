$scriptPath = "$PSScriptRoot\..\script.js"
$lines = [System.IO.File]::ReadAllLines($scriptPath, [System.Text.Encoding]::UTF8)

for ($i = 19080; $i -lt 19130; $i++) {
    if ($lines[$i] -match "lessonSelect\.innerHTML = '<option value=") {
        $lines[$i] = '                lessonSelect.innerHTML = "<option value=\"\">-- \u0043\u0068\u1ECD\u006E \u0062\u00E0\u0069 \u0068\u1ECD\u0063 (" + levelData.length + " \u0062\u00E0\u0069) --</option>";'
    }
    if ($lines[$i] -match "opt\.textContent = node\.name \+") {
        $lines[$i] = '                    opt.textContent = node.name + " (" + node.items.length + " \u006D\u1EAB\u0075)";'
    }
    if ($lines[$i] -match "pill\.title = ") {
        $lines[$i] = '                    pill.title = "\u0043\u0068\u0075\u0079\u1EC3\u006E \u006E\u0068\u0061\u006E\u0068 \u0111\u1EBF\u006E " + node.name;'
    }
}

[System.IO.File]::WriteAllLines($scriptPath, $lines, [System.Text.Encoding]::UTF8)
Write-Host "Replaced with unicode escape sequences successfully!" -ForegroundColor Green
