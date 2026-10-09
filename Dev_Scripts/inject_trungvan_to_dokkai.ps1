$jsPath = "dokkai.js"
$content = [System.IO.File]::ReadAllText($jsPath, [System.Text.Encoding]::UTF8)

$lessons = [System.Collections.Generic.List[string]]::new()
for ($i = 1; $i -le 10; $i++) {
    $jsonPath = "Dev_Scripts/dokkai_n3_trungvan_bai$i.json"
    $rawJson = [System.IO.File]::ReadAllText($jsonPath, [System.Text.Encoding]::UTF8)
    $lessons.Add($rawJson)
}

$trungvanFormatted = "`"trungvan`": [`r`n" + (($lessons | ForEach-Object {
    $obj = $_ | ConvertFrom-Json
    
    # Custom JS formatter for readability and neat indentation
    $passHtml = $obj.passage.Trim()
    $trans = ($obj.fullTranslation -replace "`r", "" -replace "\\", "\\\" -replace "\n", "\n")
    
    $vocabItems = ($obj.vocabulary | ForEach-Object {
        "                    { word: `"$($_.word)`", hiragana: `"$($_.hiragana)`", meaning: `"$($_.meaning)`" }"
    }) -join ",`r`n"
    
    $grammarItems = ($obj.grammarNotes | ForEach-Object {
        "                    { pattern: `"$($_.pattern)`", meaning: `"$($_.meaning)`" }"
    }) -join ",`r`n"
    
    $qItems = ($obj.questions | ForEach-Object {
        $q = $_
        $optLines = ($q.options | ForEach-Object { "                            `"$_`"" }) -join ",`r`n"
        $optAnalysisLines = ($q.optionsAnalysis | ForEach-Object {
            $oa = $_
            @"
                            {
                                option: "$($oa.option)",
                                meaning: "$($oa.meaning)",
                                analysis: "$($oa.analysis)"
                            }
"@
        }) -join ",`r`n"
        
        @"
                    {
                        id: $($q.id),
                        question: "$($q.question)",
                        options: [
$optLines
                        ],
                        optionsAnalysis: [
$optAnalysisLines
                        ],
                        answer: $($q.answer),
                        evidence: "$($q.evidence)",
                        explanation: "$($q.explanation)"
                    }
"@
    }) -join ",`r`n"

    @"
            {
                id: "$($obj.id)",
                level: "$($obj.level)",
                category: "$($obj.category)",
                categoryName: "$($obj.categoryName)",
                lessonNumber: $($obj.lessonNumber),
                title: "$($obj.title)",
                timeLimit: $($obj.timeLimit),
                passage: \`
$passHtml
                \`,
                fullTranslation: \`$($obj.fullTranslation)\`,
                vocabulary: [
$vocabItems
                ],
                grammarNotes: [
$grammarItems
                ],
                questions: [
$qItems
                ]
            }
"@
}) -join ",`r`n") + "`r`n        ]"

$target = '"trungvan": []'
if (-not $content.Contains($target)) {
    Write-Error "Khong tim thay target $target trong dokkai.js"
    exit 1
}

$newContent = $content.Replace($target, $trungvanFormatted)
[System.IO.File]::WriteAllText($jsPath, $newContent, [System.Text.Encoding]::UTF8)

Write-Host "Da cap nhat thanh cong toan bo 10 bai trung van vao dokkai.js!"
