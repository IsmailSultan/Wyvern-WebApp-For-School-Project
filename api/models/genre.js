const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const genres = new Scheme({
    name: {
        type: String,
        required: true,
        unique: true
    },
});

genres.virtual("url").get(function () {
    return `/catalog/genre/${this._id}`
})

module.exports = Item = mongoose.model('Genres', genres);