@echo off
REM Create necessary folders if they don't exist
mkdir components about clubs contact events executive-panels images css js

REM Move shared components to the components folder
move navbar.html components
move navbar.css components
move navbar.js components
move footer.html components
move footer.css components
move footer.js components

REM Move page-specific files to their respective folders
move about.html about
move about.css about
move clubs.html clubs
move clubs.css clubs
move contact.html contact
move contacts.css contact
move event.html events
move executive-panel.html executive-panels
move executive-panel.css executive-panels
move join-us.html contact

REM Move CSS and JS files to their respective folders
move *.css css
move *.js js

REM Move images to the images folder
move *.png images

REM Move VS Code and CodeGPT configurations to a config folder
mkdir config
move .vscode config
move .codegpt config

REM Move remaining files to a miscellaneous folder
mkdir misc
move *.html misc
move *.txt misc

echo Files organized successfully!
pause