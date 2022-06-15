import mongoose from 'mongoose';

const livrosSchema = new mongoose.Schema({
    id: {type:String},
    titulo:{type:String, required:true},
    autor: {type:String, required:true},
    editora: {type:String, required:true},
    numeroPaginas: {type:String, required:true},
})
