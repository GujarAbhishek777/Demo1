const posts=[
    {title:'Post one' ,body:'This post one',createdAt:new Date().getTime()},
    {title:'Post two' ,body:'This post two',createdAt:new Date().getTime()}
];

let intervalId=0;
function lastEditedInSecondsAgo(){
    clearInterval(intervalId);
   intervalId= setInterval(()=>{
        let output ='';
        posts.forEach((post,index)=>{
            output+=`<li>${post.title}- last updated ${Math.floor((new Date().getTime() -post.createdAt)/1000)} seconds ago</li>`;
        });
        document.body.innerHTML=output;
    },1000);
}

lastEditedInSecondsAgo();

function createPost(post,callback){
    setTimeout(()=>{
        posts.push({...post,createdAt:new Date().getTime()}); 
        callback();
    },2000);
}
createPost({title:'Post three',body:'This post three'},lastEditedInSecondsAgo);


// function create4Post(post,callback){
//     setTimeout(()=>{
//         posts.push(post); 
//         callback();
//     },2000);
// }
createPost({title:'Post four',body:'This post four'},lastEditedInSecondsAgo);












