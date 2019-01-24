const posts = [
    {title: 'post one', body: 'post one'},
    {title: 'post two', body: 'post two'},
]

const createPost = ((post) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            posts.push(post);
            resolve(post)
        },2000)
    });
});


const getPosts = (() => {
    setTimeout(() => {
        let output = '';
        posts.forEach(post => {
            output += `<li> ${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },3323)
})

createPost({title: 'post three', body: 'this is post three boooi'})
    .then(getPosts)
    .catch(err => {
        console.error(err);
    })

    const users = fetch('https://jsonplaceholder.typicode.com/users');

    const todos = fetch('https://jsonplaceholder.typicode.com/todos');

    const comments = fetch('https://jsonplaceholder.typicode.com/comments');


    Promise.all([users,todos,comments])
      .then(response => {
          return Promise.all(response.map(res => res.json()));
      }).then(response => {
          console.log(response)
      }).catch(err=> {
          console.error(err);
      })
