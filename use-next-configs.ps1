# Move config files from app folder to root if they exist
if (Test-Path .\app\tailwind.config.js) { Move-Item -Path .\app\tailwind.config.js -Destination .\tailwind.config.js -Force }
if (Test-Path .\app\postcss.config.js) { Move-Item -Path .\app\postcss.config.js -Destination .\postcss.config.js -Force }
if (Test-Path .\app\postcss.config.mjs) { Move-Item -Path .\app\postcss.config.mjs -Destination .\postcss.config.mjs -Force }
Write-Host "Next.js configs moved to root."