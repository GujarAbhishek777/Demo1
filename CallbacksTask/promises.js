
const posts=[

    {title:'Post one' ,body:'This post one'},

    {title:'Post two' ,body:'This post two'}

];



function getPosts(){

    setTimeout(()=>{

        let output ='';

        posts.forEach((post,index)=>{

            output+=`<li>${post.title}</li>`;

        });

        document.body.innerHTML=output;

    },1000);

}



//  getPosts();



function createPost(post){

    return new Promise((resolve,reject)=>{
    
        setTimeout(()=>{

            posts.push(post); 
    
            const error=true;
            if(!error){
                resolve();
            }else{
                reject('error something went wrong');
            }
    
        },2000);
    });
   

}

createPost({title:'Post three',body:'This post three'})
.then(getPosts)
.catch(err=>console.log(err));