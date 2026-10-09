# Update flashcard sizing in script.js
$scriptPath = "$PSScriptRoot\..\script.js"
$content = [System.IO.File]::ReadAllText($scriptPath, [System.Text.Encoding]::UTF8)

$oldSnippet = @"
                    // Render to flashcards grid as well
                    if (flashcardContainer) {
                        const card = document.createElement('div');
                        card.className = 'grammar-flashcard-item';
                        card.innerHTML = ``
                            <div class="vocab-flashcard-inner">
                                <div class="vocab-flashcard-face vocab-flashcard-front">
                                    <div class="vocab-text" style="font-size:1.5rem; text-shadow:none;">`${g.meaning}</div>
                                </div>
                                <div class="vocab-flashcard-face vocab-flashcard-back" style="background: rgba(30,41,59,0.9); border: 1px solid var(--neon-cyan);">
                                    <div class="vocab-reading" style="font-size:2rem; color:var(--neon-cyan);">`${g.structure}</div>
                                </div>
                            </div>
                        ``;
                        card.onclick = () => card.classList.toggle('is-flipped');
                        flashcardContainer.appendChild(card);
                    }
"@

$newSnippet = @"
                    // Render to flashcards grid as well
                    if (flashcardContainer) {
                        const card = document.createElement('div');
                        card.className = 'grammar-flashcard-item';
                        
                        const cleanMeaning = (g.meaning || '').replace(/<[^>]*>/g, '').trim();
                        let meaningFontSize = '1.35rem';
                        if (cleanMeaning.length > 45) {
                            meaningFontSize = '0.92rem';
                        } else if (cleanMeaning.length > 30) {
                            meaningFontSize = '1.05rem';
                        } else if (cleanMeaning.length > 18) {
                            meaningFontSize = '1.2rem';
                        }

                        const cleanStructure = (g.structure || '').replace(/<[^>]*>/g, '').trim();
                        let structFontSize = '1.6rem';
                        if (cleanStructure.length > 35) {
                            structFontSize = '0.92rem';
                        } else if (cleanStructure.length > 22) {
                            structFontSize = '1.15rem';
                        } else if (cleanStructure.length > 12) {
                            structFontSize = '1.35rem';
                        }

                        card.innerHTML = ``
                            <div class="vocab-flashcard-inner">
                                <div class="vocab-flashcard-face vocab-flashcard-front" style="padding: 0.6rem 0.8rem;">
                                    <div class="vocab-text" style="font-size:`${meaningFontSize}; text-shadow:none; line-height:1.35;">`${g.meaning}</div>
                                </div>
                                <div class="vocab-flashcard-face vocab-flashcard-back" style="background: rgba(30,41,59,0.95); border: 1px solid var(--neon-cyan); padding: 0.6rem 0.8rem;">
                                    <div class="vocab-reading" style="font-size:`${structFontSize}; color:var(--neon-cyan); line-height:1.35;">`${g.structure}</div>
                                </div>
                            </div>
                        ``;
                        card.onclick = () => card.classList.toggle('is-flipped');
                        flashcardContainer.appendChild(card);
                    }
"@

# Normalize CRLF for replacement
$contentNorm = $content.Replace("`r`n", "`n")
$oldSnippetNorm = $oldSnippet.Replace("`r`n", "`n")
$newSnippetNorm = $newSnippet.Replace("`r`n", "`n")

if ($contentNorm.Contains($oldSnippetNorm)) {
    $updatedNorm = $contentNorm.Replace($oldSnippetNorm, $newSnippetNorm)
    [System.IO.File]::WriteAllText($scriptPath, $updatedNorm.Replace("`n", "`r`n"), [System.Text.Encoding]::UTF8)
    Write-Host "Da cap nhat thanh cong script.js!" -ForegroundColor Green
} else {
    Write-Host "Khong tim thay doan code can thay the trong script.js!" -ForegroundColor Red
}
