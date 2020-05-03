import {
    Schema,
    model
} from "mongoose";

const userSchema = new Schema({
    rut: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },

})

export default model('User', userSchema)