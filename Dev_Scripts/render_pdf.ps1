[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$csharp = @"
using System;
using System.IO;
using System.Threading.Tasks;
using Windows.Data.Pdf;
using Windows.Storage;
using Windows.Storage.Streams;

public class PdfRenderer {
    public static async Task RenderPages(string pdfPath, string outputDir, int startPage, int endPage) {
        StorageFile file = await StorageFile.GetFileFromPathAsync(pdfPath);
        PdfDocument doc = await PdfDocument.LoadFromFileAsync(file);
        int total = (int)doc.PageCount;
        Console.WriteLine("PDF Total Pages: " + total);
        
        Directory.CreateDirectory(outputDir);
        
        int start = Math.Max(0, startPage - 1);
        int end = Math.Min(total - 1, endPage - 1);
        
        for (int i = start; i <= end; i++) {
            using (PdfPage page = doc.GetPage((uint)i)) {
                string outFile = Path.Combine(outputDir, string.Format("page_{0:D3}.png", i + 1));
                StorageFile imgFile = await StorageFile.CreateStreamedFileAsync(
                    Path.GetFileName(outFile),
                    async (stream) => { },
                    null
                );
                // Save page to file
                var fileStream = await StorageFile.GetFileFromPathAsync(Path.GetFullPath(outFile)).AsTask().ContinueWith(async t => {
                    if (t.IsFaulted || t.Result == null) {
                        var folder = await StorageFolder.GetFolderFromPathAsync(Path.GetFullPath(outputDir));
                        return await folder.CreateFileAsync(Path.GetFileName(outFile), CreationCollisionOption.ReplaceExisting);
                    }
                    return t.Result;
                }).Unwrap();
                
                using (var stream = await fileStream.OpenAsync(FileAccessMode.ReadWrite)) {
                    await page.RenderToStreamAsync(stream);
                    await stream.FlushAsync();
                }
                Console.WriteLine("Rendered page: " + (i + 1));
            }
        }
    }
}
"@

$pdfFiles = Get-ChildItem -Path (Get-Location) -Filter "*.pdf"
$pdfPath = $pdfFiles[0].FullName
$outDir = Join-Path (Get-Location) "Dev_Scripts\pdf_pages"

Add-Type -TypeDefinition $csharp -ReferencedAssemblies "System.Runtime.WindowsRuntime", "Windows"

[PdfRenderer]::RenderPages($pdfPath, $outDir, 1, 10).GetAwaiter().GetResult()
