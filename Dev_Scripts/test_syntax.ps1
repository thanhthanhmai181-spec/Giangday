try {
    & node -c dokkai.js 2>&1
} catch {
    Write-Host "Node not available, using JScript engine via cscript/msxml/etc."
}
