const express = require("express");
const app = express();
const cors = require ('cors');
app.use (cors());

app.use(express.json());

require ('./server/config/mongoose');

const {Router} = require('./server/routes/routes')
app.use( '/', Router );

app.listen( 8080, function(){
    console.log( "The users server is running in port 8080." );
});