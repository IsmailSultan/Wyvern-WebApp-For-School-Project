var mongoose = require("mongoose")

// const Posts = require("./models/posts.js")
// const ContactPosts = require("./models/contact.js")
// const Users = require("./models/users.js")
const Genre = require("./models/genre.js")

mongoose.set("strictQuery", false);
const mongodb = 'mongodb://127.0.0.1/Wyvern'

main().catch((err) => console.log(err))
async function main() {
    await mongoose.connect(mongodb, {useNewUrlParser : true})
    await createGenre()
}

function createGenre(){
        const yoga = new Genre({
            name : "Yoga"
        })
        yoga.save()
        const art = new Genre({
            name : "Art"
        })
        art.save()
        const music = new Genre({
            name : "MusicDance"
        })
        music.save()
        const architecture = new Genre({
            name : "Architecture"
        })
        architecture.save()
    }