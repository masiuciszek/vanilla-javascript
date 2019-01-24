

const getData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify({id: 200})
        });
        if (response.ok === 200){
            const jsonResponse = await response.json();
            return jsonResponse;
        }
        throw new Error('Request failed!');
    } catch (error) {
        console.log(error)
    }
}

// const users = await fetch ('https://jsonplaceholder.typicode.com/users');
getData();


 const users = fetch('https://jsonplaceholder.typicode.com/users');
const posts = fetch('https://jsonplaceholder.typicode.com/posts');

Promise.all([ users , posts ])
 .then(response => {
     return Promise.all(response.map(res => res.json()))
     .then(res => {
         console.log(res)
     }).catch(err => {
         console.error(err);
     })
 })

