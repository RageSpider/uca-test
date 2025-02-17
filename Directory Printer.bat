@echo off
REM Specify the folder path
set "folder_path=C:\Users\Frsdho42\Desktop\1\Club\Club Websites\UCA(United Club Association)"

REM Specify the output file path
set "output_file=C:\Users\Frsdho42\Desktop\1\Club\directory_list.txt"

REM Check if the folder exists
if not exist "%folder_path%" (
    echo Folder does not exist: "%folder_path%"
    pause
    exit /b
)

REM Clear the output file if it already exists
> "%output_file%" echo Directory listing for "%folder_path%":
>> "%output_file%" echo -----------------------------------
>> "%output_file%" echo.

REM Recursively list all files and directories
dir "%folder_path%" /s /b >> "%output_file%"

REM Notify the user
echo Directory listing saved to "%output_file%"
pause