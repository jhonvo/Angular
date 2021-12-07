const express = require ('express');
const Router = express.Router();
const {Controller} = require( '../controllers/controller' );

Router
    .get( '/', Controller.index);

Router
    .post( '/authors', Controller.new);

Router
    .put( '/edit/:id', Controller.update);

Router
    .delete( '/author/:id', Controller.remove );

Router
    .get( '/:id', Controller.getOne );

module.exports = {Router};