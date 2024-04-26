const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const users = new Scheme({
    username: {
        type : String,
        required : true
    },
    email: {
        type: String, 
        unique: true, 
        required: 'Email address is required',  
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: true, 
    }
});

users.virtual("url").get(function (){
    return `/catalog/author/${this._id}`
})

module.exports = Item = mongoose.model('Users', users);