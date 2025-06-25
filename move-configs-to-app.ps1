# Create app directory if it doesn't exist
if (-not (Test-Path .\app)) {
    New-Item -ItemType Directory -Path .\app -Force
}

# Move config files to app folder if they exist in root
if (Test-Path .\tailwind.config.js) { Move-Item -Path .\tailwind.config.js -Destination .\app\tailwind.config.js -Force }
if (Test-Path .\postcss.config.js) { Move-Item -Path .\postcss.config.js -Destination .\app\postcss.config.js -Force }
if (Test-Path .\postcss.config.mjs) { Move-Item -Path .\postcss.config.mjs -Destination .\app\postcss.config.mjs -Force }

Write-Host "Config files moved to app folder successfully."
 