@echo off
echo Stopping any Node processes...
taskkill /F /IM node.exe 2>nul

echo Waiting for processes to close...
timeout /t 2 /nobreak >nul

echo Renaming folder...
cd /d d:\
move "cardio-sonix-nextjs" "heartbeat-audio-analysis"

if %errorlevel% == 0 (
    echo SUCCESS! Folder renamed to 'heartbeat-audio-analysis'
    echo.
    echo Next steps:
    echo 1. Open VS Code
    echo 2. Open folder: d:\heartbeat-audio-analysis
    echo 3. Run: npm run dev
) else (
    echo FAILED: Please close VS Code first, then run this script again.
)

pause
