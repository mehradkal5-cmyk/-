$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$bundledPython = Join-Path $env:USERPROFILE '.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe'
$systemPython = Get-Command python -ErrorAction SilentlyContinue

if (Test-Path -LiteralPath $bundledPython) {
  $python = $bundledPython
} elseif ($systemPython) {
  $python = $systemPython.Source
} else {
  throw 'Python پیدا نشد. پوشه را با Live Server یا هر وب‌سرور استاتیک دیگری باز کنید.'
}

Write-Host 'نسخهٔ فارسی در http://127.0.0.1:4173 آماده است.'
Write-Host 'برای توقف، Ctrl+C را بزنید.'
& $python -m http.server 4173 --directory $projectRoot --bind 127.0.0.1

