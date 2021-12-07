const {AuthorsModel} = require( '../models/model' );

const Controller = {
    index : function( request, response ){
        AuthorsModel
            .getAuthors()
            .then (data => {
                response.json(data);
            })
            .catch(error => {
                response.json( error );
            }); 
    },

    new : function( request, response ){
        
        // let newTask = {
        //     title : request.body.title,
        //     description : request.body.description,
        //     completed : request.body.completed
        // };
        // if (request.body.name.lenght < 3){
        //     throw new Error( "Pleas providee a valid author name (Min 3 characters)!" );
        // }
        console.log(request.query);
        AuthorsModel
            .createAuthor(request.body)
            .then(data => {
                response.json(data);
            })
            .catch(error => {
                console.log("NO DATA");
                response.statusMessage = "Pleas providee a valid author name (Min 3 characters)!";
                response.status( 404 ).end();
                // response.json(error);
            }); 
    },

    remove : function( request, response ){
        AuthorsModel
            .remove(request.params.id)
            .then(data => {
                response.json(data);
            })
            .catch(error => {
                response.json( "Task might not exist" );
            }); 
    },

    getOne : function( request, response ){
        // console.log(request.params.id);
        AuthorsModel
            .getOneAuthor(request.params.id)
            .then(data => {
                response.json(data);
            })
            .catch(error => {
                response.statusMessage = "The author might not exist!";
                response.status( 404 ).end();
            }); 
    },

    update : function( request, response ){
        console.log("UPDATED", request.body.name.length)
        if (request.body.name.length < 3){
        
            response.statusMessage =  "Pleas provide a valid author name (Min 3 characters)!" ;
            response.status( 406 ).end();

            }   else {
                let newTask = {
            name : request.body.name
        };

        let id = request.params.id;

        AuthorsModel
            .updateAuthor(id, newTask)
            .then(data => {
                response.json(data);
            })
            .catch(error => {
                // response.statusMessage = "The author might not exist!";
                response.statusMessage = error.message;
                response.status( 404 ).end();
            }); 
            }

        
    },

}


module.exports = { Controller };

