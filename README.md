# Event-Management-System
 
## for running the frontend
    Open the terminal and navigate to the Event-Management-System/frontend
    then run this commands one by one
        npm install
        npm start

## for running the backend
Mysql is used as the database fro this project.
We need to know the my sql username and password.
To run the backend server:
    create a schema in the sql named "event_management"
    open the file Event-Management-System/backend/src/main/resources/application.properties
    there, enter username and password for the mysql.
    if your mysql port number is not 3306, then change the port number according to your mysql port in "spring.datasource url=jdbc:mysql://localhost:3306/event_management".
    after that run the BackendApplication.java file located in this path "D:\programming\GIT\Event-Management-System\backend\src\main\java\com\EMS\backend"


