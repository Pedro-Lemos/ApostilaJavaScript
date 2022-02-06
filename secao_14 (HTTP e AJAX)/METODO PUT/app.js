const listaPosts = document.querySelector("#listaPosts");
let posts;

fetch("https://jsonplaceholder.typicode.com/posts/2", {
    method:"PUT",
    body: JSON.stringify({
        title: "new post",
        body: "corpo do novo post - atualização",
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