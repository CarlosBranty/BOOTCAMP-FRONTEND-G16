
const url = 'https://jsonplaceholder.typicode.com/posts'

const fetchPosts = async () =>{
    try{
        
        const response = await fetch(url)
        if(!response.ok){// ok === status code 200
            throw new Error('ERROR HTTP:', response.status)
        }
        const json = await response.json()
        return json
    }
    catch(error){
        console.log(error)
    }

}

const renderPosts = (posts = []) =>{
    const appDiv = document.getElementById('app')

    let postList =''

    posts.forEach(post => {
        postList += `
        <div>
        <h2>${post.id}: ${post.title}</h2>
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
.catch(error =>{
    console.log(error)
})