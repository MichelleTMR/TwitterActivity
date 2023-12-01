fetch("/tweets")
.then((response) => {
    return response.json()
})
.then((json) => {
    console.log(json)

    const cardContainerDiv = document.getElementById("tweetcard-container")
    

    json.forEach((tweet) => {


        const tweetDiv = document.createElement("div") //this div goes inside my div container.
        const tweetAuthor = document.createElement("h1")
        const tweetPost = document.createElement("p")
        const tweetLikes = document.createElement("h4")
        const tweetId = document.createElement("h4")

        tweetAuthor.innerText = tweet.author //
        tweetPost.innerText = tweet.tweet
        tweetLikes.innerText = tweet.likes 
        tweetId.innerText = tweet.id 

        tweetDiv.appendChild(tweetAuthor) //elements are placed inside the div container
        tweetDiv.appendChild(tweetPost)
        tweetDiv.appendChild(tweetLikes)
        tweetDiv.appendChild(tweetId)

        tweetDiv.classList.add("tweetcard") //this classs is added to the 2nd div created in js

        cardContainerDiv.appendChild(tweetDiv) //this places the div in js inside the html div container with all the tags it now contains
    })
})
.catch((error) => {
    console.log(error)
})

