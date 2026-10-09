$raw = Get-Content "backups/Backup_Choukai_N3/choukai.js" -Raw -Encoding UTF8
$marker = "// =========================================================================="
$engineIdx = $raw.IndexOf($marker)
$engineCode = $raw.Substring($engineIdx)

# Load lesson files
$json1 = Get-Content "Dev_Scripts/choukai_n3_nghe_traloi_bai1.json" -Raw -Encoding UTF8
$json2 = Get-Content "Dev_Scripts/choukai_n3_nghe_traloi_bai2.json" -Raw -Encoding UTF8
$json3 = Get-Content "Dev_Scripts/choukai_n3_nghe_traloi_bai3.json" -Raw -Encoding UTF8
$json4 = Get-Content "Dev_Scripts/choukai_n3_nghe_traloi_bai4.json" -Raw -Encoding UTF8
$json5 = Get-Content "Dev_Scripts/choukai_n3_nghe_traloi_bai5.json" -Raw -Encoding UTF8

$jsonChude1 = Get-Content "Dev_Scripts/choukai_n3_nghe_chude_bai1.json" -Raw -Encoding UTF8
$jsonChude2 = Get-Content "Dev_Scripts/choukai_n3_nghe_chude_bai2.json" -Raw -Encoding UTF8
$jsonChude3 = Get-Content "Dev_Scripts/choukai_n3_nghe_chude_bai3.json" -Raw -Encoding UTF8
$jsonChude4 = Get-Content "Dev_Scripts/choukai_n3_nghe_chude_bai4.json" -Raw -Encoding UTF8
$jsonChude5 = Get-Content "Dev_Scripts/choukai_n3_nghe_chude_bai5.json" -Raw -Encoding UTF8

$jsonHoi1 = Get-Content "Dev_Scripts/choukai_n3_nghe_hoi_bai1.json" -Raw -Encoding UTF8
$jsonHoi2 = Get-Content "Dev_Scripts/choukai_n3_nghe_hoi_bai2.json" -Raw -Encoding UTF8
$jsonHoi3 = Get-Content "Dev_Scripts/choukai_n3_nghe_hoi_bai3.json" -Raw -Encoding UTF8
$jsonHoi4 = Get-Content "Dev_Scripts/choukai_n3_nghe_hoi_bai4.json" -Raw -Encoding UTF8
$jsonHoi5 = Get-Content "Dev_Scripts/choukai_n3_nghe_hoi_bai5.json" -Raw -Encoding UTF8

$jsonPhanxa1 = Get-Content "Dev_Scripts/choukai_n3_nghe_phanxa_bai1.json" -Raw -Encoding UTF8
$jsonPhanxa2 = Get-Content "Dev_Scripts/choukai_n3_nghe_phanxa_bai2.json" -Raw -Encoding UTF8
$jsonPhanxa3 = Get-Content "Dev_Scripts/choukai_n3_nghe_phanxa_bai3.json" -Raw -Encoding UTF8
$jsonPhanxa4 = Get-Content "Dev_Scripts/choukai_n3_nghe_phanxa_bai4.json" -Raw -Encoding UTF8
$jsonPhanxa5 = Get-Content "Dev_Scripts/choukai_n3_nghe_phanxa_bai5.json" -Raw -Encoding UTF8

$datasetStr = @"
{
    "N5": {
        "nghe_traloi": [],
        "nghe_chude": [],
        "nghe_hoi": [],
        "nghe_phanxa": []
    },
    "N4": {
        "nghe_traloi": [],
        "nghe_chude": [],
        "nghe_hoi": [],
        "nghe_phanxa": []
    },
    "N3": {
        "nghe_traloi": [
$json1,
$json2,
$json3,
$json4,
$json5
        ],
        "nghe_chude": [
$jsonChude1,
$jsonChude2,
$jsonChude3,
$jsonChude4,
$jsonChude5
        ],
        "nghe_hoi": [
$jsonHoi1,
$jsonHoi2,
$jsonHoi3,
$jsonHoi4,
$jsonHoi5
        ],
        "nghe_phanxa": [
$jsonPhanxa1,
$jsonPhanxa2,
$jsonPhanxa3,
$jsonPhanxa4,
$jsonPhanxa5
        ]
    }
}
"@

$fullJs = @"
/**
 * CHOUKAI (NGHE HIỂU) JITI / JLPT ENGINE
 * Hỗ trợ các phân môn nghe hiểu: Nghe trả lời (nghe_traloi), Nghe chủ đề (nghe_chude),
 * Nghe hỏi (nghe_hoi), Nghe phản xạ (nghe_phanxa).
 */

const CHOUKAI_STORAGE_DONE_KEY = 'jiti_choukai_completed_lessons';

const choukaiDataset = $datasetStr;

$engineCode
"@

[System.IO.File]::WriteAllText("choukai.js", $fullJs, [System.Text.Encoding]::UTF8)
Write-Host "Rebuilt choukai.js with 20 lessons (5 traloi, 5 chude, 5 hoi, 5 phanxa) successfully!"
