import {Schema, model} from "mongoose";

const livrosSchema = new Schema({

    titulo: {
        type: String,
        required: true,
    },
    autor:{
        type: String,
        required: true,
    },
    ano:{
        type: String,
        required: true,
    },
    genero:{
        type: String,
        required: true,
    },

});

export default model("Livros",livrosSchema);