const mongoose = require( 'mongoose' );

const ProductSchema = new mongoose.Schema({
    title : {
        type : String,
        minlength : 3
    },
    price : {
        type : Number,
        required : true,
    },
    imageURL : {
        type : String,
        required : true
    }
}, {timestamps: true });

const Products = mongoose.model( 'products', ProductSchema);

const ProductsModel = {
    
    getProducts : function(){
        return Products.find().sort({createdAt:-1});
    },
    
    createProduct : function(newAuthor){
        return Products.create(newAuthor);
    },

    remove : function(id){
        return Products.deleteOne({_id:id});
    },

    updateProduct : function(id, newInfo){
        // console.log("THIS IS THE IFNO", newInfo);
        return Products.updateOne({_id:id}, newInfo);
    },

    getOneProduct : function(id){
        return Products.find({_id:id});
    }

};

module.exports = {ProductsModel};