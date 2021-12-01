const express = require ('express');
const Router = express.Router();
const {Controller} = require( '../controllers/controller' );

Router
    .get( '/all', Controller.index);

Router
    .get( '/new/:name', Controller.new);

Router
    .get( '/remove/:name', Controller.remove );

Router
    .get( '/:name', Controller.getOne );

module.exports = {Router};