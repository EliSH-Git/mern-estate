import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true,
        unique: true
    },
    email: {    
        type: String,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: true
    },
    avatar:{
        type: String,
        default: "https://img.freepik.com/free-photo/portrait-beautiful-young-woman-with-stylish-hairstyle-glasses_1142-40217.jpg?t=st=1707781994~exp=1707785594~hmac=70b7a0808d3a1722ba34109ff3bafd5a68852123448cce860cfbfdf20c03854a&w=740"
    },

}, {timestamps: true});

const User = mongoose.model('User', userSchema);
export default User; 