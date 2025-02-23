@echo off
REM Specify the folder path
set "folder_path=C:\Users\Frsdho42\Documents\GitHub\uca-test"

REM Specify the output file path
set "output_file=C:\Users\Frsdho42\Documents\GitHub\uca-test\directory_list.txt"

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

REM Recursively list all files and directories with details
dir "%folder_path%" /s /b /o:n >> "%output_file%"

REM Notify the user
echo Directory listing saved to "%output_file%"
pause