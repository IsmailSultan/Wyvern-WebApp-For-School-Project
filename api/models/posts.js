const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const posts = new Scheme({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String, 
        required: true
    },
    author: {
        type: Scheme.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    genres: {
        type: Scheme.Types.ObjectId,
        ref: 'Genres',
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

posts.virtual("url").get(function (){
    return `/catalog/post/${this._id}`
})

module.exports = Item = mongoose.model('Posts', posts);