$pdfPath = Join-Path $PSScriptRoot "..\1. Ngữ pháp N3.pdf"
Write-Host "PDF Path: $pdfPath, Exists: $(Test-Path $pdfPath)"

# In Windows 10/11, Windows.Data.Pdf namespace is available via WinRT!
[Windows.Storage.StorageFile, Windows.Storage, ContentType = WindowsRuntime] | Out-Null
[Windows.Data.Pdf.PdfDocument, Windows.Data.Pdf, ContentType = WindowsRuntime] | Out-Null

async function Extract-Pdf {
    # We can check if WinRT works
}

# Let's check streams inside the PDF
$bytes = [System.IO.File]::ReadAllBytes($pdfPath)
Write-Host "PDF size: $($bytes.Length) bytes"
