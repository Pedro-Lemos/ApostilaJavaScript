const listaPosts = document.querySelector("#listaPosts");
let posts;

fetch("https://jsonplaceholder.typicode.com/posts", {
    method:"POST",
    body: JSON.stringify({
        title: "new post",
        body: "corpo do novo post",
        userId: 5,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => {
        posts = json;
    })
    .then(() => {
        console.log(posts);
        //exibePosts();
    })