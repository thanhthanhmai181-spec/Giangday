[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$pdfFiles = Get-ChildItem -Path (Get-Location) -Filter "*.pdf"
if ($pdfFiles.Count -eq 0) {
    Write-Host "No PDF found"
    exit
}

$pdfPath = $pdfFiles[0].FullName
Write-Host "Found PDF: $pdfPath"

# Check if WinRT PdfDocument can be used to render pages
Add-Type -AssemblyName System.Runtime.WindowsRuntime
$asTaskGeneric = [System.WindowsRuntimeSystemExtensions].GetMethods() | ? { $_.Name -eq 'AsTask' -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncOperation`1' }

[Windows.Storage.StorageFile, Windows.Storage, ContentType = WindowsRuntime] | Out-Null
[Windows.Data.Pdf.PdfDocument, Windows.Data.Pdf, ContentType = WindowsRuntime] | Out-Null

$storageFileTask = [Windows.Storage.StorageFile]::GetFileFromPathAsync($pdfPath)
$netTask = [System.WindowsRuntimeSystemExtensions]::AsTask($storageFileTask)
$netTask.Wait()
$storageFile = $netTask.Result

$pdfDocTask = [Windows.Data.Pdf.PdfDocument]::LoadFromFileAsync($storageFile)
$netTask2 = [System.WindowsRuntimeSystemExtensions]::AsTask($pdfDocTask)
$netTask2.Wait()
$pdfDoc = $netTask2.Result

Write-Host "Total Pages: $($pdfDoc.PageCount)"
