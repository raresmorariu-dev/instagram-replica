const postEl = document.querySelector("#post")
const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

function renderPosts(){
    for (let i = 0; i < posts.length; i++) {
        let post = posts[i]
        postEl.innerHTML += `
        <section class="post">
            <div class="post-details">
                <img class="poster-avatar poster-avatar-el" src="${post.avatar}" alt="Avatar of the person that posted the image/video">
                <div class="name-and-location" alt="The name of the poster and the location from where they posted">
                    <p class="name name-el">${post.name}</p>
                    <p class="location location-el">${post.location}</p>
                </div>
            </div>
            <img class="post-image post-image-el" src="${post.post}" alt="The post itself">
            <div class="post-engagement">
                <div class="engagement-btns">
                    <button class="like-btn" alt="The like button which is heart shaped"><img class="like-img" src="images/icon-heart.png"></button>
                    <button class="comment-btn" alt="The comment button which is like a dialog bubble."><img class="comment-img" src="images/icon-comment.png"></button>
                    <button class="dm-btn" alt="The private message button which is shaped like a paper airplane"><img class="dm-img" src="images/icon-dm.png"></button>
                </div>
                <div class="engagement-details">
                    <p class="likes likes-el">${post.likes} likes</p>
                    <p class="description description-el"><span class="username-el">${post.username}</span> ${post.comment}</p>
                </div>
            </div>
        </section>
        `
    }
}

renderPosts()

const likeBtn = document.querySelectorAll(".like-btn")
const likesEl = document.querySelectorAll(".likes")

function addLikes() {
    for (let i = 0; i < likeBtn.length; i++) {
        // biome-ignore lint/complexity/useArrowFunction: false
        likeBtn[i].addEventListener("click", function() {
            let currentLikes = parseInt(likesEl[i].textContent) || 0
            currentLikes += 1 
            likesEl[i].textContent = `${currentLikes} likes`
        })
    }
}


addLikes()