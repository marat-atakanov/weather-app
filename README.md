# Weather Dashboard

### Overview
The application that shows a weather information of a city, which is provided by a user in a search input. The user can add city names to favorites or delete them. The application can adapt to different device sizes

#### How to setup and run the project:

Clone the project from a remote repository via the link:
```git clone https://github.com/marat-atakanov/weather-app```

##### To run the project locally:
1. Use the code editors: VSCode, Webstorm. 
- For VSCode, open the project in editor, install the Live Server (Ritwick Dey) extension, click on **Go Live** button on the bottom panel, a port number will appear and the project will automatically run in a browser. If the browser did not open, get to it manually, type http://localhost:5500 (write the specified port number). To stop the application, click on the **Port: 5500** button.
- For Webstorm, open the project in the editor, open the index.html file, click on any browser button on the floating window to run the application locally.

2. Use Serve:
- Install Serve globally via terminal: ```npm install -g serve``` then change the directory to the project one, type "```serve```" and press enter. It will run the project in a specified port. Open the browser, type http://localhost:5500 (write the specified port number). To stop the application, press **CTRL + C** keys on the terminal.

##### How to use:
Open the search bar by clicking on the button with the city name and arrow, write the city name in the input, and press **Enter**. The weather info of the desired city will appear. To add the name of a city to favorites, write the name in the input and click on the **+** button. To delete a city from the favorites, click on the **Delete** button. To find info by a favorite city, click on **Find** button next to the desired city name. On mobile devices, to open the navigation links, tap on the profile picture.