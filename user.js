// localStorage.getItem("id");

// 56) First thing we do is fetch the second API that has been provided for us and fetch that inside of an async function
// 57) Use backtics bc the ID inside of that API will need to be dynamic, so make that dynamic with ${id}
// 58) Drop the localStorage.getItem into the function and put it inside the variable of id

// 59) You'll see similarities of this function below and the one in index.js
// 60) Store the await fetch in a const variable
// 61) So first you fetch the data from the backend server, then you make it readable to JavaS with .json() just like before
// 62) So link the posts variable with a .json() and store that in a variable of const

// 63) Then console.log postsData just to see what's happening

// 64) And don't forget the .json() is also a promise so it needs to be waited on as well
// 65) Also don't forget to call the function

// async function main() {
//     const id = localStorage.getItem("id");
//     const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
//     const postsData = await posts.json()

//     console.log(postsData)
// }

// main();

// 66) NOW WE HAVE SUCCESSFULLY LINKED THE USER IDs WITH GIVING US THE USER POSTS THAT MATCH THAT ID
// 67) In other words when you go to the webpage and click the user id of 2, 10 items will pop up in the console all with the ID of 2

// 68) Not done yet, all of this stuff are objects, we still need to convert to HTML with the map function

// const postListEl = document.querySelector('.post-list')

// async function main() {
//     const id = localStorage.getItem("id");
//     const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
//     const postsData = await posts.json()
//     postListEl.innerHTML = postsData.map((post) => userPosts(post)).join("")

//     console.log(postsData)
// }

// function userPosts(post) {
//     return `<div class="post">
//                 <div class="post__title">
//                     ${post.title}
//                 </div>
//                 <p class="post__body">
//                     ${post.body}
//                 </p>
//                 </div>`
// }

// main();

// 69) NOW everything is a success!!!
// 70) Next we want to be able to go on our webpage and use the Search by ID function in the top right to toggle the page with matching data from the IDs

// 71) Go to user.html and look for the input tag, we need to target the input
// 72) Go into that tag and use the onchange function and write in a function name: onchange="onSearchChange()"

// 73) Create a function that is called whatever you put inside of the onchange="" function
// 74) At this point if you console.log inside of that function, everytime you change the value in that Search by ID bar then the console will 
// 74) run an iteration of whatever you have in the log

// 75) Go back to the input tag in the HTML and change the type to number instead of text
// 76) At this point the value that we are really after is the id, so you pass the word id into the onSearchChange function
// 77) How do we get the id? Go back to the html input tag, and write the word event inside of that onSearchChange function
// 78) Then come to the onSearchChange function and pass in the word event and console.log the event
// 79) You'll see the event in the console. Open up the Target, you'll see Value: 1. Which is = the id we are looking for
// 80) In other words the event is calling the id we want, by the word Value, they are exactly the same
// 90) So now that we know the id=value we can console.log(event.target.value) & at this point each time we change the ID number in that search bar
// 90) the value/id will match that inside of the console. 
// 90) the event.target.value is to say that first we went inside of the event, then inside of the target, and found the value which is what we want
// 90) because its the same thing as our id

// 91) NOOOWWWW, copy what you have in the async function main inside of your into the onSearchChange function
// 92) make the const id = event.target.value
// 93) Make this function a async function

// 94) So now it is complete. We have a situation where the code is fetching the API data, turning it into JavaS language
// 94) mapping the object data and changing it into HTML, then using inner.HTML to reflect those changes onto the webpage
// 95) So now everytime we change the number in the Search by id it reflects the different posts w each diff id number
// 96) Don't forget to take your localStorage.getItem and take it out of the function, put it at the top

// const postListEl = document.querySelector('.post-list');
// const id = localStorage.getItem("id");

// async function onSearchChange(event) {
//     const id = event.target.value
//     const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
//     const postsData = await posts.json()
//     postListEl.innerHTML = postsData.map((post) => userPosts(post)).join("")
// }

// async function main() {
//     const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
//     const postsData = await posts.json()
//     postListEl.innerHTML = postsData.map((post) => userPosts(post)).join("")
// }

// function userPosts(post) {
//     return `<div class="post">
//                 <div class="post__title">
//                     ${post.title}
//                 </div>
//                 <p class="post__body">
//                     ${post.body}
//                 </p>
//                 </div>`
// }

// main();

// 96) IF you ever needed to troubleshoot go inside of the console and find where it says Network, use wither ALL or FETCH/XHR

// 97) Now at this point the entire thing can be cleaned up even more
// 98) Notice that the entire async function main() is inside of the onSearchChange function
// 99) So instead of having that entire data set inside of onSearchChange just write: main()
// 100) BUT, you have to pass in the value of id inside of the onSearchChange function, and twice in the main function, 
// 101) The extra time is when you call the main() function, that one also needs to have id passed inside of it

const postListEl = document.querySelector('.post-list');
const id = localStorage.getItem("id");

async function onSearchChange(event) {
    const id = event.target.value
    main(id);
}

async function main(id) {
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    const postsData = await posts.json()
    postListEl.innerHTML = postsData.map((post) => userPosts(post)).join("")
}

function userPosts(post) {
    return `<div class="post">
                <div class="post__title">
                    ${post.title}
                </div>
                <p class="post__body">
                    ${post.body}
                </p>
                </div>`
}

main(id);