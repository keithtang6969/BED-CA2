1. Create new user
Username: bed_dvd_root
Password: pa$$woRD123

At the navigation, select "Users and Privileges" under "Management".
Under "Login", click "Add Account".
Enter the information and click "Apply".

----------------------------------------------------------------------------------------

2. Grant all privileges to bed_dvd_root:
Under "Users and Privileges", select bed_dvd_root, then "Administrative Roles".
Check all the boxes for the roles and select "Apply".

----------------------------------------------------------------------------------------

3. Set up a new connection in MySQL HomePage:
Under MySQL Connections and click the plus button to create a new connection.
Enter connection related information and click "OK".

----------------------------------------------------------------------------------------

4. Connect to MySQL Server:
Click on the newly created connection.
Enter the password and click "OK".

----------------------------------------------------------------------------------------

5. Create Schema 
Schema Name: bed_dvd_db

Right-click the empty space at "SCHEMAS" and select "Create Schema".
Enter the name of the schema to create and select "Apply".

----------------------------------------------------------------------------------------

6. Run SQL script:
File Name: sakila_bed.sql

Under "File", select "Open SQL Script", and open the file.
If the "Unknown File Encoding" prompts, select the default character set encoding name (latin1).
Click "OK".
Run the SQL script, then click the refresh button to see latest results.

------------------------------------------------------------------------------------------

7. Database Modifications
Refer to Database_Modifications.docx for more information

------------------------------------------------------------------------------------------