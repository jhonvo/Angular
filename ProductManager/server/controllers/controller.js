const {ProductsModel} = require( '../models/model' );

const Controller = {
    index : function( request, response ){
        ProductsModel
            .getProducts()
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
        ProductsModel
            .createProduct(request.body)
            .then(data => {
                response.json(data);
            })
            .catch(error => {
                console.log("NO DATA");
                response.statusMessage = "Please providee a valid Tittle, price and image URL!";
                response.status( 404 ).end();
                // response.json(error);
            }); 
    },

    remove : function( request, response ){
        ProductsModel
            .remove(request.params.id)
            .then(data => {
                response.json(data);
            })
            .catch(error => {
                response.json( "Product might not exist" );
            }); 
    },

    getOne : function( request, response ){
        // console.log(request.params.id);
        ProductsModel
            .getOneProduct(request.params.id)
            .then(data => {
                response.json(data);
            })
            .catch(error => {
                response.statusMessage = "Product might not exist!";
                response.status( 404 ).end();
            }); 
    },

    update : function( request, response ){
        console.log("UPDATED", request.body)
        if (request.body.title.length < 3 || request.body.price == null || request.body.imageURL == null){
        
            response.statusMessage =  "Please providee a valid Tittle, price and image URL!";
            response.status( 406 ).end();

            }   else {
                    let newTask = request.body;

                    let id = request.params.id;

                    ProductsModel
                        .updateProduct(id, newTask)
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

