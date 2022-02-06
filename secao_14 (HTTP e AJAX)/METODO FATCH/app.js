const listaPosts = document.querySelector("#listaPosts");
let posts;

fetch("https://jsonplaceholder.typicode.com/posts/4")
    .then((response) => response.json())
    .then((json) => {
        posts = json;
    })
    .then(() => {
        console.log(posts);
        //exibePosts();
    })

function exibePosts(){
    setTimeout(() => {
        let saida = "";
        posts.forEach((post) => {
            saida += `<li> ${post.title} </li>
                    <li> ${post.body}</li> <hr></hr>`
        });
    listaPosts.innerHTML = saida;
    }, 3000)
};