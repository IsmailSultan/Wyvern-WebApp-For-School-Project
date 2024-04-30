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

db = mongoose.connection
db.once('open', _ => {
    console.log("Database Connected :", mongodb)
})

db.on('error', err => {
    console.error('Connection Error :',err)
})

function createGenre(){
        const yoga = new Genre({
            name : "Yoga"
        })
        yoga.save()
        console.log("yoga created")
        const art = new Genre({
            name : "Art"
        })
        art.save()
        console.log("art created")
        const music = new Genre({
            name : "MusicDance"
        })
        music.save()
        console.log("musicdance created")
        const architecture = new Genre({
            name : "Architecture"
        })
        architecture.save()
        console.log("architecture created")
}