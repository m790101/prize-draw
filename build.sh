# For macOS/Linux - save as deploy.sh
#!/bin/bash

echo "🗑️  Cleaning docs directory..."
rm -rf docs/*

echo "🔨 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Copying files from dist to docs..."
    cp -r dist/* docs/
    echo "🎉 Deploy complete! All files copied to docs/"
else
    echo "❌ Build failed! Stopping deployment."
    exit 1
fi

# ============================================
# For Windows - save as deploy.bat
@echo off
echo 🗑️ Cleaning docs directory...
rmdir /s /q docs
mkdir docs

echo 🔨 Building project...
npm run build

if %errorlevel% equ 0 (
    echo ✅ Build successful!
    echo 📁 Copying files from dist to docs...
    xcopy /e /i /y dist\* docs\
    echo 🎉 Deploy complete! All files copied to docs/
) else (
    echo ❌ Build failed! Stopping deployment.
    exit /b 1
)

# ============================================
# For Windows PowerShell - save as deploy.ps1
Write-Host "🗑️ Cleaning docs directory..." -ForegroundColor Yellow
if (Test-Path "docs") {
    Remove-Item -Path "docs\*" -Recurse -Force
} else {
    New-Item -ItemType Directory -Path "docs"
}

Write-Host "🔨 Building project..." -ForegroundColor Blue
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build successful!" -ForegroundColor Green
    Write-Host "📁 Copying files from dist to docs..." -ForegroundColor Blue
    Copy-Item -Path "dist\*" -Destination "docs\" -Recurse -Force
    Write-Host "🎉 Deploy complete! All files copied to docs/" -ForegroundColor Green
} else {
    Write-Host "❌ Build failed! Stopping deployment." -ForegroundColor Red
    exit 1
}