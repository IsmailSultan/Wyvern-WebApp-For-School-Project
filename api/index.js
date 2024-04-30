var Express = require("express")
var mongoose = require("mongoose")
var cors = require("cors")
const path = require('path');
const bodyParser = require('body-parser');

var currentUser = {}

// Database Models
const Posts = require("./models/posts.js")
const ContactPosts = require("./models/contact.js")
const Users = require("./models/users.js")
const Genre = require("./models/genre.js")

// Express App 
var app = Express()
app.use(cors())
app.use(bodyParser.json())

// Mongoose Setup 
mongoose.set("strictQuery", false);
const mongodb = 'mongodb://127.0.0.1/Wyvern'

main().catch((err) => console.log(err))
async function main() {
    await mongoose.connect(mongodb, {useNewUrlParser : true})
    // await createGenre()
    // await createUser()
    // await CreatePost()  
}

db = mongoose.connection
db.once('open', _ => {
    console.log("Database Connected :", mongodb)
})

db.on('error', err => {
    console.error('Connection Error :',err)
})

// Create Post Section 

async function CreatePost(info){
    const usar = await Users.find({_id : info.author})
    // var usar2 = usar[0]
    console.log("hi create post works")
    var usar2 = usar[0]
    const ganra = await Genre.find({name : info.genreName})
    var ganra2 = ganra[0]
    console.log(ganra2)
    // console.log(fetchGenreId("Yoga"))
    const post = new Posts({
        title : info.title,
        desc : info.description,
        author : usar2._id,
        genres : ganra2._id,
        image : info.imageLink
    })

    const newPost = await post.save()

    console.log("Done Post")
    return newPost
}

async function CreateContactPost(info){
    const usar = await Users.find({_id : info.author})
    // var usar2 = usar[0]
    console.log("hi create contact post works")
    var usar2 = usar[0]
    console.log("usar2Contact", usar2)
    // console.log(fetchGenreId("Yoga"))
    const post = new ContactPosts({
        title : info.title,
        desc : info.description,
        author : usar2._id,
    })

    const newPost = await post.save()

    console.log("Done Post")
    return newPost
}

app.post("/api/Wyvern/CreatePost", (req,res) => {
    const {title,description,image,author,genre} = req.body
    // console.log(req.body)
    const newPostRes = CreatePost({
        genreName : genre,
        title : title,
        description : description,
        imageLink : image,
        author : author
    })

    res.json(newPostRes)
})

app.post("/api/Wyvern/CreateContactPost", (req,res) => {
    const {title,description,author} = req.body
    // console.log(req.body)
    const newPostRes = CreateContactPost({
        title : title,
        description : description,
        author : author
    })

    res.json(newPostRes)
})
// Get Posts Section 

app.post('/api/Wyvern/getPosts', (req, res) => {
    console.log("reqFromGetPosts : ", req.body)
    if (req.body.filter === ""){
        console.log("fromIndexIf",req.body.message)
        Posts.find({}).then((resp,err)=>{
            // console.log("posts find res : ",resp)
            res.status(201).json(resp)
        })
    } else {
        var genQ = []
        console.log("fromIndexElse",req.body.message)
        Genre.find({name : req.body.filter}).then((respo, err) => {
            genQ = respo[0]
            Posts.find({genres : genQ._id}).then((resp,err)=>{
                res.status(201).json(resp)
                // console.log("server response : ",resp)
    
                // console.log(resp)
            })
        })
    }
})

app.post('/api/Wyvern/getPostsById', (req, res) => {
    console.log("req : ", req.body.filter.profileId)
        console.log("if trig")
        Posts.find({author : req.body.filter.profileId}).then((resp,err)=>{
            console.log("posts find res : ",resp)
            res.status(201).json(resp)
        })
})


// User Authentication To Change Navbar/Allow Add Post 
app.get('/api/Wyvern/auth', (req,res) => {
    res.json(currentUser)
})

// Get Username From Author Id 
app.post('/api/Wyvern/getusername', (req, res) => {
    // console.log(req.body)
    Users.find({"_id" : req.body.id}).then((resp,err)=>{
        res.json(resp)
        // console.log(resp)
    })
})

// Login Request Handler 
app.post('/api/login', async (req, res) => {
    const {name,password} = req.body
    console.log(req.body)

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

// Sign Up Handler 
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
    console.log("connected on port 4000")
})