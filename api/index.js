var Express = require("express")
// var Mongoclient = require("mongodb").MongoClient
var mongoose = require("mongoose")
var cors = require("cors")
const path = require('path');
const bodyParser = require('body-parser');
// const multer = require ('multer')
// const upload = multer({dest: 'uploads/'})

var currentUser = {}

// models
const Posts = require("./models/posts.js");
const Users = require("./models/users.js")
const Genre = require("./models/genre.js")

const posts = []
const users = []
const genres = []


var app = Express()
app.use(cors())
app.use(bodyParser.json())

mongoose.set("strictQuery", false);

const mongodb = 'mongodb://127.0.0.1/Wyvern'
// const Schema = mongoose.Schema

main().catch((err) => console.log(err))
async function main() {
    await mongoose.connect(mongodb, {useNewUrlParser : true})
    // await createGenre()
    // await createUser()
    // await CreatePost()
    
}

async function CreatePost(){
    const usar = await Users.find({username : "Ismail Sultan"})
    var usar2 = usar[0]
    const ganra = await Genre.find({name : "Architecture"})
    var ganra2 = ganra[0]
    // console.log(fetchGenreId("Yoga"))
    const post = new Posts({
        title : 'Architecture For You',
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc. Felis imperdiet proin fermentum leo vel orci porta.',
        author : usar2._id,
        genres : ganra2._id,
        image : 'https://images.unsplash.com/photo-1713769931230-eea2834a69af'
    })

    await post.save()
    console.log("Done Post")
}

db = mongoose.connection
db.once('open', _ => {
    console.log("Database Connected :", mongodb)
})

db.on('error', err => {
    console.error('Connection Error :',err)
})


app.get('/api/Wyvern/getUsers', (req, res) => {
    Users.find({}).then((resp, err) => {
        console.log(resp)
        console.log(err)
        res.redirect('/')
    })
})

app.get('/api/Wyvern/getPosts', (req, res) => {
    Posts.find({}).then((resp,err)=>{
        res.json(resp)
        console.log(resp)
    })
})

app.post('/api/login', async (req, res) => {
    const {name,password} = req.body

    try {
        usa = await Users.findOne({username : name})
        if (usa.password === password) {
            res.status(200).json(usa)
            console.log("Successfull")
            currentUser = usa
        } else {
            res.status(400).json({message : "Wrong Password"})
            console.log("Wrong Password")
        }
    } catch (error) {
        console.log(error)
    }
    
})

app.post('/api/signUp', async (req, res) => {
    const { name, email, password } = req.body;
  
    const newUser = new Users({
        username : name,
        email : email,
        password : password
});
  
    try {
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
      console.log("Successful")
      currentUser = savedUser
    } catch (error) {
      res.status(400).json({ message: error.message });
      console.log(error)
    }
});


  

app.listen('4000',()=>{
    console.log("connected")
})