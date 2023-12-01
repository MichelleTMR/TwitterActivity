const express = require('express')
const path = require('path')
const app = express()
app.use(express.static(path.join(__dirname, 'public'))) 


const tweets = [
    {
        author: "Devan",
        tweet: "Hello everyone!🦇",
        id: "1",
        likes: "10"
    },
    {
        author: "Garfield",
        tweet: "I hate mondays",
        id: "2",
        likes: "1"
    },
    {
        author: "Pam",
        tweet: "Where's Jim?",
        id: "3",
        likes: "60"
    },
    {
        author: "Bob",
        tweet: "Its snowing outside!",
        id: "4",
        likes: "100"
    },
    {
        author: "Aaron",
        tweet: "is this twitter or x?",
        id: "5",
        likes: "3"
    },
    {
        author: "Walter",
        tweet: "We gotta cook Jesse!",
        id: "6",
        likes: "1"
    }
]

app.get("/", (req , res) => {
   //res.send("welcome to tweet homepage")
   res.sendFile(path.join(__dirname, '/Public/tweet.html'))
})

app.get("/tweets", (req, res) => {
    res.send(tweets)
})

app.listen(3000)
console.log("This tweet is working🦇")
