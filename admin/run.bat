@echo off
setlocal

REM Set your backend and frontend paths
set BACKEND_PATH=%cd%\backend
set FRONTEND_PATH=%cd%\frontend



cd %FRONTEND_PATH%
call npm i
cd %BACKEND_PATH%
call npm i


start cmd /k cd %FRONTEND_PATH% ^& npm run start
start cmd /k cd %BACKEND_PATH% ^& npm run start

endlocal
