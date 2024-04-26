var Express = require("express")
// var Mongoclient = require("mongodb").MongoClient
var mongoose = require("mongoose")
var cors = require("cors")
const path = require('path');
const bodyParser = require('body-parser');
// const multer = require ('multer')
// const upload = multer({dest: 'uploads/'})

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
    // await createPost()
    
}

db = mongoose.connection
db.once('open', _ => {
    console.log("Database Connected :", mongodb)
})

db.on('error', err => {
    console.error('Connection Error :',err)
})

function fetchGenreId(genname){
    Genre.find({name : genname}).lean().exec(function(error, records) {
        records.forEach(function(record) {

          console.log(record._id);
          return record._id;
        });
    });
}

function fetchUserId(username){
    Users.find({username : username}).lean().exec(function(error, records) {
        records.forEach(function(record) {

          console.log(record._id);
          return record._id;
        });
    });
}

app.get('/', (req,res) => {
    // res.sendFile(path.join(__dirname,'..','client','/index.html'))
    // console.log(path.join(__dirname,'/index.html'))
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
        console.log(resp)
    })
})

app.get('/api/Wyvern/addUser', (req,res) => {
    
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
    } catch (error) {
      res.status(400).json({ message: error.message });
      console.log(error)
    }
});
  

app.listen('4000',()=>{
    console.log("connected")
})