const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const contactposts = new Scheme({
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
    }
});

contactposts.virtual("url").get(function (){
    return `/catalog/contactpost/${this._id}`
})

module.exports = Item = mongoose.model('ContactPosts', contactposts);