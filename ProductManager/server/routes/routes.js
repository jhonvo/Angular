const express = require ('express');
const Router = express.Router();
const {Controller} = require( '../controllers/controller' );

Router
    .get( '/products/all', Controller.index);

Router
    .post( '/products', Controller.new);

Router
    .put( '/product/edit/:id', Controller.update);

Router
    .delete( '/product/:id', Controller.remove );

Router
    .get( '/product/:id', Controller.getOne );

module.exports = {Router};