# Script to safely backup and cleanup the workspace
$ws = $PSScriptRoot + "\.."
if (-not (Test-Path $ws)) { $ws = "." }

$backupRoot = Join-Path $ws "backups"
if (-not (Test-Path $backupRoot)) {
    New-Item -ItemType Directory -Path $backupRoot | Out-Null
    Write-Host "Created backups directory: $backupRoot"
}

# 1. Move old backup directories into backups/
$oldBackups = Get-ChildItem -Path $ws -Directory | Where-Object { $_.Name -like "Backup_2026*" }
foreach ($b in $oldBackups) {
    $dest = Join-Path $backupRoot $b.Name
    if (Test-Path $dest) { Remove-Item -Recurse -Force $dest }
    Move-Item -Path $b.FullName -Destination $dest
    Write-Host "Moved $($b.Name) to backups/"
}

# 2. Create a clean snapshot of current working state
$todayBackup = Join-Path $backupRoot "Backup_Clean_2026_08_09"
if (-not (Test-Path $todayBackup)) { New-Item -ItemType Directory -Path $todayBackup | Out-Null }
Copy-Item (Join-Path $ws "index.html") (Join-Path $todayBackup "index.html")
Copy-Item (Join-Path $ws "styles.css") (Join-Path $todayBackup "styles.css")
Copy-Item (Join-Path $ws "script.js") (Join-Path $todayBackup "script.js")
Write-Host "Created fresh snapshot in $todayBackup"

# 3. Clean up root junk files
$junkFiles = @(
    "add_comparison_bai8.ps1",
    "add_n3_lesson3.ps1",
    "bai7_snippet.js",
    "bai7_snippet_call.txt",
    "bai8_clean.json",
    "bai9_snippet.js",
    "extract_bai7.ps1",
    "extract_bai7_call.txt",
    "extract_snippet.ps1",
    "extract_snippet.py",
    "extracted_bai7.txt",
    "extracted_bai7_utf8.txt",
    "fix_comparison.ps1",
    "grammar_456.txt",
    "inject_bai6.ps1",
    "inject_bai6_by_line.ps1",
    "inject_bai7.ps1",
    "inject_line.ps1",
    "insert_bai6.py",
    "parse_dict.py",
    "script_backup_before_fix2.js",
    "script_backup_stable.js",
    "script_corrupted.js",
    "search.ps1",
    "search.py",
    "syntax_check.html",
    "test_syntax.html",
    "update.ps1",
    "update_data.js",
    "update_data.ps1",
    "update_mau25.ps1",
    "update_n3_grammar.py",
    "update_nonara.js"
)

$deletedCount = 0
foreach ($f in $junkFiles) {
    $filePath = Join-Path $ws $f
    if (Test-Path $filePath) {
        Remove-Item -Force $filePath
        $deletedCount++
    }
}
Write-Host "Cleaned up $deletedCount temporary files from root directory."

# 4. Clean up Dev_Scripts temporary scrap files
$devJunk = @(
    "all_ocr.txt",
    "pdf_counts.json",
    "test.js",
    "test_line125.ps1",
    "test_syntax.hta",
    "test_syntax.html",
    "last_response_dump.json",
    "inspect_grammar.ps1",
    "check_grammar_images.ps1",
    "preview_n3_grammar.ps1",
    "inspect_n3_details.ps1",
    "check_brackets.ps1",
    "fast_bracket_check.ps1",
    "gen.py",
    "gen_vocab_script.py",
    "generate_vocab.py",
    "fix_missing_braces.ps1",
    "fix_ruby.ps1",
    "inspect_braces.ps1",
    "run_ie_test.ps1",
    "add_dom_content_loaded.ps1",
    "add_initialization.ps1"
)

$devDeletedCount = 0
$devDir = Join-Path $ws "Dev_Scripts"
foreach ($df in $devJunk) {
    $devFilePath = Join-Path $devDir $df
    if (Test-Path $devFilePath) {
        Remove-Item -Force $devFilePath
        $devDeletedCount++
    }
}
Write-Host "Cleaned up $devDeletedCount temporary scrap files from Dev_Scripts."
