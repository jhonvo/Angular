const mongoose = require( 'mongoose' );

const QuoteSchema = new mongoose.Schema({
    name : {
        type : String,
        unique : true
    }
}, {timestamps: true });

const ApiRecord = mongoose.model( 'records', QuoteSchema);

const ApiModel = {
    
    getRecords : function(){
        return ApiRecord.find().sort({createdAt:-1});
    },
    
    createRecord : function(newRecord){
        return ApiRecord.create(newRecord);
    },

    remove : function(name){
        return ApiRecord.deleteOne({name});
    },

    getOneRecord : function(name){
        return ApiRecord.find({name});
    },
};

module.exports = {ApiModel};