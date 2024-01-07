// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"

// 1) Take the data from the backend in API 1 and use the word fetch to grab it
// 2) Then but the word .json() after the API to convert it from backend language to JavaScript 
// 3) Both the fetch and .json are Promises, so we have to wait for them 
// 4) Which means you'll have to wait for both of these items to be completed
// 5) Which means you'll need to put both actions inside of an Async await function 

// 6) So let's console.log the fetch and .json() to see what we get inside of the console

// async function main () {
//     console.log((await fetch("https://jsonplaceholder.typicode.com/users")).json())
// }

// main();

// 7) Now at this stage the console.log is not printing anything and that's bc both the fetch
// 7) AND the .json need to be awaited so the correct log is
// 8) And don't forget functions need to be called
// async function main () {
//     console.log(await(await fetch("https://jsonplaceholder.typicode.com/users")).json())
// }

// main();
// 

// 9) So that worked! But the code is not readable code, so let's store things in values to make
// 9) it more easy for another coder to understand 

// 10) So first, store the entire await & fetch & API inside of a variable of const

// const users = await fetch("https://jsonplaceholder.typicode.com/users")

// 11) Now we need to also store the .json() and the variable we just created in a const 
// 11) And that's the part that makes the fetched API readable to JS thru .json()

// const userData = users.json();

// 12) Then we'll console.log userData - the final variable - & see what we get

// async function main() {
//     const users = await fetch("https://jsonplaceholder.typicode.com/users")
//     const usersData = await users.json();
//     console.log(usersData)
// }

// main();

// 13) So at this point we have an array full of OBJECTS
// 14) BUT we want an array full of HTML elements, so the next part turns our objects array into an HTML array 
// 15) And changing an array's elements from one thing to something else is done with the MAP METHOD

// 16) So go inside of your index.html and take copy the entire .user-card div and paste it inside of the function
// 17) Then put that data inside of the backtics so you can make it dynamic later
// 18) Then store all of that data inside of a variable (const); we'll use x for now but that's just for the example always write the variable out

// 19) At this point we are still trying to convert the objects to HTML, so here comes the MAP METHOD 
// 20) So I need to identify the variable that has the API converted into readable JS which is usersData and map that variable
// 21) THEN I need to throw the HTML template .user--card div inside of the map's callback function, only one element so {} are not necessary

// 22) *I BELIEVE he took the .user-card out of the variable bc we only had it in a variable to not cause an error
// 23)) ANYWAY after you do 21) then console.log that to see that you've turned the objects into HTML success!!

// 24) THEN I have to use .join("") AFTER the map's callback function to set the inner.HTML. .join("") turns an array into a string

// 25) Now we are focused on getting that HTML to show up on the actual webpage
// 26) So for that go inside the HTML and grab the .user-list (div that holds all of the numerous user-cards)
// 26) And use that class with querySelector that is ALL inside of a const variable

// 27) THEN you'll take that variable you just stored the querySelector in and use the property .innerHTML on it and make it = to the map function

// async function main() {
//     const users = await fetch("https://jsonplaceholder.typicode.com/users")
//     const usersData = await users.json();
//     const userListEl = document.querySelector('.user-list');
//     userListEl.innerHTML = usersData.map(user => 
//         `<div class="user-card">
//         <div class="user-card__container">
//             <h3>User's Name</h4>
//             <p><b>Email:</b> email@email.com</p>
//             <p><b>Phone:</b> 0000000000</p>
//             <p><b>Website:</b> <a href="https://website.website" target="_blank">website.website</a></p>
//         </div>
//         </div>`
//     ).join("")
// }

// main();

// 28) After finishing all of that you should see that your webpage has converted the objects into HTML AND put that HTML on your webpage

// 29) NOW we focus on making everything dynamic bc the stuff inside of the backtics is all generic
// 29A) Now you can console.log the usersData to look and see what variables we're working with
// 29A) BC we'll need those variable names to make the data dynamic, in this example you'll see the variable names being 
// 29A) address, company, email, id, name, phone, username, and website (in this ex. we're only using some of those)

// 30) Now, take the elem inside of the map function (user) and use that plus the elem name you want to make dynamic
// 30) EX. Making user's name dynamic by writing ${user.name}, or the email with ${user.email}

// async function main() {
//     const users = await fetch("https://jsonplaceholder.typicode.com/users")
//     const usersData = await users.json();
//     const userListEl = document.querySelector('.user-list');
//     userListEl.innerHTML = usersData.map(user => 
//         `<div class="user-card">
//             <div class="user-card__container">
//                 <h3>${user.name}</h4>
//                 <p><b>Email:</b>${user.email}</p>
//                 <p><b>Phone:</b>${user.phone}</p>
//                 <p><b>Website:</b> <a href="https://${user.website}" target="_blank">${user.website}</a></p>
//             </div>
//             </div>`
//     ).join("")
// }

// main();

// 31) Now at this point go back to your webpage and you should see each user has their own name email phone and website
// 31A) Just a little thing, write https:// infront of the dynamic website so it actually pushes to that website

// 32) NOW, at this point this code is AGAIN not readable at all, so next we clean stuff up, store stuff in variables to make it nicer
// 33) So first, to clean this up take the HTML template and store it inside of a function and return the HTML template inside of that function 
// 33) THEN put that function name inside of the same map function
// 33) and pass the user element inside of it. We'll store the HTML template in a function called userHTML

// 34) At this point you should have the same thing
// 35) Then move the const with the querySelector to the top

// const userListEl = document.querySelector('.user-list');

// async function main() {
//     const users = await fetch("https://jsonplaceholder.typicode.com/users")
//     const usersData = await users.json();
//     userListEl.innerHTML = usersData.map(user => userHTML(user)).join("")
// }

// main();

// function userHTML(user) {
//     return `<div class="user-card">
//     <div class="user-card__container">
//         <h3>${user.name}</h4>
//         <p><b>Email:</b>${user.email}</p>
//         <p><b>Phone:</b>${user.phone}</p>
//         <p><b>Website:</b> <a href="https://${user.website}" target="_blank">${user.website}</a></p>
//     </div>
//     </div>`
// }

// 36) That clean up job is done
// 37) NOW we are going to add a click listener so when we click on the user data on the webpage it takes us to the users URL 
// 37) (At this point when we click on the user data absolutely nothing happens)

// 38) SO first we understand we need a JavaS onlick listener somewhere in our HTML
// 39) So we'll go to our HTML template and focus on the div that holds everything .user-card and add an onclick with a 
// 39) Function name we made up, and pass the user inside of that function like onclick="showUserPost(user)"

// 40) Now we'll make a function with showUserPost and console.log(user) to see what's going on
// 40) After doing that the console says "user is not defined"
// 40) And that's bc the onclick(user) is not dynamic
// 41) Make is dynamic with ${user} and you still get an error because it's passing in the entire user but we just want the user ID
// 42) Final solution is to make the onclick look like: onclick="showUserPosts(${user.id})"
// 43) So at this point when you click a user it console.logs the user ID number, so hitting the 10th user prints 10

// 44) Then you can make the element inside of the showUserPosts id just bc technically that is what we are identifying in the HTML template

// const userListEl = document.querySelector('.user-list');

// async function main() {
//     const users = await fetch("https://jsonplaceholder.typicode.com/users")
//     const usersData = await users.json();
//     userListEl.innerHTML = usersData.map(user => userHTML(user)).join("")
// }

// main();

// function showUserPosts(id) {
//     console.log(id)
// }

// function userHTML(user) {
//     return `<div class="user-card" onclick="showUserPosts(${user.id})">
//     <div class="user-card__container">
//         <h3>${user.name}</h4>
//         <p><b>Email:</b>${user.email}</p>
//         <p><b>Phone:</b>${user.phone}</p>
//         <p><b>Website:</b> <a href="https://${user.website}" target="_blank">${user.website}</a></p>
//     </div>
//     </div>`
// }

// 45) All that is done
// 46) NOW We want to click on a user and have it re-route it to user.HTML i.e. it takes us to a whole different webpage with matching data

// 47) And just have to know or google this, to re-route something to a different webpage just use window.location.href = whatever page you want to 
// 47) route to. And after the = put that link in `` backtics

// 48) Now we're worrring about making that website location dynamic
// 49) With the onjects we're dealing w in this ex. The website re-route is named origin. Can find this by console.logging window.location inside the showUserPosts function
// 49) So you'll write window.location.href = `${window.location.origin}/user/.html`

// const userListEl = document.querySelector('.user-list');

// async function main() {
//     const users = await fetch("https://jsonplaceholder.typicode.com/users")
//     const usersData = await users.json();
//     userListEl.innerHTML = usersData.map(user => userHTML(user)).join("")
// }

// main();

// function showUserPosts(id) {
//     window.location.href = `${window.location.origin}/user.html`
// }

// function userHTML(user) {
//     return `<div class="user-card" onclick="showUserPosts(${user.id})">
//     <div class="user-card__container">
//         <h3>${user.name}</h4>
//         <p><b>Email:</b>${user.email}</p>
//         <p><b>Phone:</b>${user.phone}</p>
//         <p><b>Website:</b> <a href="https://${user.website}" target="_blank">${user.website}</a></p>
//     </div>
//     </div>`
// }

// 50) So at this stage each time we click a user it brings us to the user.html which is a step closer but not what we want
// 51) NOW we focus on how to click on a user with an ID and bring up the webpage that shows all the data that goes with that certain ID

// 52) JavaS has a built in functin for this and it's called localStorage.setItem(), inside of the () you'll have they key which you can 
// 52) name anything, and the second thing will be the actual value. Seperated by a comma

// 53) After you write that, go to the console and find Application, inside of there go to Local Storage
// 53) And when you click a user you should see their ID number pop up in the local storage

// 54) NOW we'll go into the user.js file and write: localStorage.getItem("id"), so we used the KEY we made in localStorage.setItem, what was in the ""
// 54) All of that is good, but we still need to get the post when we click on a user

// 55) GO INTO USER.JS FOR THE REST OF THE NOTES THE NEXT STEP IS IN USER.JS

const userListEl = document.querySelector('.user-list');

async function main() {
    const users = await fetch("https://jsonplaceholder.typicode.com/users")
    const usersData = await users.json();
    userListEl.innerHTML = usersData.map(user => userHTML(user)).join("")
}

main();

function showUserPosts(id) {
    localStorage.setItem("id", id)
    window.location.href = `${window.location.origin}/user.html`
}

function userHTML(user) {
    return `<div class="user-card" onclick="showUserPosts(${user.id})">
    <div class="user-card__container">
        <h3>${user.name}</h4>
        <p><b>Email:</b>${user.email}</p>
        <p><b>Phone:</b>${user.phone}</p>
        <p><b>Website:</b> <a href="https://${user.website}" target="_blank">${user.website}</a></p>
    </div>
    </div>`
}