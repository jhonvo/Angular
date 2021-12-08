const {NotesModel} = require( '../models/model' );

const Controller = {
    index : function( request, response ){
        NotesModel
            .getNotes()
            .then (data => {
                response.json(data);
            })
            .catch(error => {
                response.json( error );
            }); 
    },

    new : function( request, response ){
        
        // console.log(request.query);
        NotesModel
            .createNotes(request.body)
            .then(data => {
                response.json(data);
            })
            .catch(error => {
                console.log("NO DATA");
                response.statusMessage = "Please providee a valid Note, min 3 characteres!";
                response.status( 404 ).end();
                // response.json(error);
            }); 
    }
}


module.exports = { Controller };

