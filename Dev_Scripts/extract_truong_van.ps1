Add-Type -AssemblyName System.IO.Compression.FileSystem

$file = Get-ChildItem -Path . -Filter "*Trường*" | Where-Object { $_.Extension -eq ".docx" } | Select-Object -First 1
if (-not $file) {
    # Fallback search
    $file = Get-ChildItem -Path . -Filter "*.docx" | Where-Object { $_.Name -like "*Tr*" -and $_.Name -notlike "*Trung*" } | Select-Object -First 1
}

if (-not $file) {
    Write-Error "Khong tim thay file Truong van docx"
    exit 1
}

Write-Host "Found file: $($file.FullName)"
$zip = [System.IO.Compression.ZipFile]::OpenRead($file.FullName)
$entry = $zip.GetEntry('word/document.xml')
$stream = $entry.Open()
$reader = New-Object System.IO.StreamReader($stream, [System.Text.Encoding]::UTF8)
$xmlContent = $reader.ReadToEnd()
$reader.Close()
$stream.Close()
$zip.Dispose()

[xml]$docXml = $xmlContent
$ns = New-Object System.Xml.XmlNamespaceManager($docXml.NameTable)
$ns.AddNamespace('w', 'http://schemas.openxmlformats.org/wordprocessingml/2006/main')

$paragraphs = $docXml.SelectNodes('//w:p', $ns)
$lines = [System.Collections.Generic.List[string]]::new()
foreach ($p in $paragraphs) {
    $textNodes = $p.SelectNodes('.//w:t', $ns)
    if ($textNodes) {
        $pText = ($textNodes | ForEach-Object { $_.InnerText }) -join ''
        if ($pText.Trim().Length -gt 0) {
            $lines.Add($pText)
        }
    }
}

$lines | Out-File -FilePath 'Dev_Scripts/truong_van_raw.txt' -Encoding utf8
Write-Host "Total lines extracted: $($lines.Count)"
