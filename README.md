# MailChimp Registration Form : Semitect Education
Created Thursday, November 2nd, 2017  
This page is to be hosted and used for testing the demand for individuals interested in a 10 day bootcamp that teaches fundamental programming.

View production version: [MailChimp Registration Form](http://35.199.53.227/)  

# Remaining Tasks
1. Controlling the look and feel of the confirmation page's HTML?
2. Controlling the look and feel of the confirmation email?
3. Organize CSS
4. Minify the css, update the HTML reference link
5. Add to app.js, look to see if the port is in use, if it is kill it and start the new stuff.

# Completed Tasks
1. 11/02/2017 - Mobile UI vs Desktop UI - The columns are not stacking.
   [ **Solution** ] BootStrap4 stacking columns from desktop to mobile. Current work around is to use 12 columns at all times to force them to stack. Ideally I want 12 columns on mobile and 6/6 columns for desktop.
2. 11/02/2017 - Remove SimpleStrips and use External IP

# Road Blocks
1. 'Error: listen EADDRINUSE :::80' - Being able to kill all processes to run the application on the server.
   ```
   $ sudo kill `sudo lsof -t -i:80`
   ```
