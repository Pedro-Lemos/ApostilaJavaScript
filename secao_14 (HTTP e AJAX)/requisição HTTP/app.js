const listaPosts = document.querySelector("#listaPosts");
const httpRequest = new XMLHttpRequest();
httpRequest.open("GET", "https://jsonplaceholder.typicode.com/posts/4");
httpRequest.send();
//console.log(httpRequest);
let posts;


httpRequest.onreadystatechange = function(){
    if(httpRequest.readyState === 4 && httpRequest.status === 200){
        //posts = JSON.parse(httpRequest.response);
        console.log(httpRequest.response);
        //exibePosts();  
    }
}

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