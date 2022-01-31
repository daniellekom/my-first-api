//brings express to life
const express = require('express');

//code to build first api 
const app = express();

// were telling express to handle a get request at the home address/
app.get('/',(request, response) => {
    response.send('My first Express API...works!');
});



//telling my express app to listen to that 1 port to get on this app
//pick a port: 3000 as example
//after i listen to port to 300 what do u want me to do?
app.listen(3000,() => console.log('Listening on port 3000...'));

// to get the http link do http://localhost:3000/
//command click on link send u to the website above