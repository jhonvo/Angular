const mongoose = require( 'mongoose' );

const AuthorsSchema = new mongoose.Schema({
    name : {
        type : String,
        minlength : 3
    }
}, {timestamps: true });

const Authors = mongoose.model( 'authors', AuthorsSchema);

const AuthorsModel = {
    
    getAuthors : function(){
        return Authors.find().sort({createdAt:-1});
    },
    
    createAuthor : function(newAuthor){
        return Authors.create(newAuthor);
    },

    remove : function(id){
        return Authors.deleteOne({_id:id});
    },

    updateAuthor : function(id, newInfo){
        // console.log("THIS IS THE IFNO", newInfo);
        return Authors.updateOne({_id:id}, newInfo);
    },

    getOneAuthor : function(id){
        return Authors.find({_id:id});
    }

};

module.exports = {AuthorsModel};