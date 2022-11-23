
const posts = [

    { title: 'Post one', body: 'This post one' },

    { title: 'Post two', body: 'This post two' }

];



function getPosts() {

    setTimeout(() => {

        let output = '';

        posts.forEach((post) => {

            output += `<li>${post.title}</li>`;

        });

        document.body.innerHTML = output;

    }, 1000);

}



 getPosts();



function createPost(post) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            posts.push(post);

            const error = false;
            if (!error) {
                resolve();
            } else {
                reject('error something went wrong');
            }

        }, 2000);
    });


}

function deletePost() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (posts.length > 0) {
                const lastelement = posts.pop();
                resolve(lastelement);
            } else {
                reject('Array is empty now');
            }
        }, 1000);
    });
}

createPost({ title: 'Post three', body: 'This post three' })
    .then(() => {
        getPosts();
        deletePost().then((deleteElement) => {
            getPosts(deleteElement);
            deletePost().then(() => {
                getPosts();
                deletePost().then(()=>{
                    getPosts();
                    deletePost().then(()=>{})
                    .catch((err)=>{
                        console.log('inside catch block',err);
                    }) .catch(err=> console.log(err))
                }) .catch(err=> console.log(err))
            }) .catch(err=> console.log(err))
        }) .catch(err=> console.log(err))
    })
    .catch(err=> console.log(err))