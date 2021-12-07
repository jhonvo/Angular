const express = require("express");
const app = express();

app.use(express.json({extended:true}));
app.use(express.urlencoded({extended:true}));

const path = require( 'path' );

const cors = require('cors');
app.use(cors()); 

require ('./server/config/mongoose');

const {Router} = require('./server/routes/routes')
app.use( '/', Router );

app.use(express.static(path.join(__dirname, "./products/dist/products")));

app.all( '*', function( request, response ){
    response.sendFile( path.resolve( './products/dist/products/index.html' ) );
});

app.listen( 8000, function(){
    console.log( "The users server is running in port 8000." );
}); 