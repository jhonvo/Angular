const {ApiModel} = require( '../models/model' );

const Controller = {
    index : function( request, response ){
        ApiModel
            .getRecords()
            .then (data => {
                response.json(data);
            })
            .catch(error => {
                response.json( error );
            }); 
    },

    new : function( request, response ){
        
        let newRecord = {
            name : request.params.name
        };

        ApiModel
            .createRecord(newRecord)
            .then(data => {
                response.redirect( '/' );
            })
            .catch(error => {
                response.json( "Record already exists." );
            }); 
    },

    remove : function( request, response ){
        ApiModel
            .remove(request.params.name)
            .then(data => {
                response.redirect( '/' );
            })
            .catch(error => {
                response.json( "Record might not exist" );
            }); 
    },

    getOne : function( request, response ){
        ApiModel
            .getOneRecord(request.params.name)
            .then(data => {
                response.json(data);
            })
            .catch(error => {
                response.json( "Record does not exist" );
            }); 
    }
}


module.exports = { Controller };

