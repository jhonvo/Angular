const express = require ('express');
const Router = express.Router();
const {Controller} = require( '../controllers/controller' );

Router
    .get( '/notes/all', Controller.index);

Router
    .post( '/notes', Controller.new);

module.exports = {Router};