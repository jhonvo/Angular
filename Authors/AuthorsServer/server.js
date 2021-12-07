const express = require("express");
const app = express();

app.use(express.json({extended:true}));
app.use(express.urlencoded({extended:true}));

const cors = require('cors');
app.use(cors()); 

require ('./server/config/mongoose');

const {Router} = require('./server/routes/routes')
app.use( '/', Router );

app.listen( 8000, function(){
    console.log( "The users server is running in port 8000." );
}); 