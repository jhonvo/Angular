const mongoose = require( 'mongoose' );

const NotesSchema = new mongoose.Schema({
    note : {
        type : String,
        minlength : 3
    }
}, {timestamps: true });

const Notes = mongoose.model( 'notes', NotesSchema);

const NotesModel = {
    
    getNotes : function(){
        return Notes.find().sort({createdAt:-1});
    },
    
    createNotes : function(newAuthor){
        return Notes.create(newAuthor);
    },


};

module.exports = {NotesModel};