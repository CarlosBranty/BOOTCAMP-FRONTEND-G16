
const url = 'https://jsonplaceholder.typicode.com/posts'


// fetch(url)
// .then(response => response.json())
// .then(data =>{
//     console.log(data)
// })

const fetchPosts = () =>{
    console.log('Llamado al API json')

    return fetch(url)
    .then(response => response.json())
    // .then(data => {
    //     return data
    // })
}

const renderPosts = (posts = []) =>{
    const appDiv = document.getElementById('app')

    let postList =''

    posts.forEach(post => {
        postList += `
        <div>
        <h2>${post.id}: ${post.tittle}</h2>
        <p>${post.body}</p>
        </div>
        `
    })
    appDiv.innerHTML = postList
}
renderPosts();

fetchPosts()
.then(posts =>{
    renderPosts(posts);
})
// console.log(fetchPosts());