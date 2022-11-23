console.log('person1:shows ticket');
console.log('person2:shows ticket');


const preMovie=async()=>{
const promiseWifeBringingTicks= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket');    
    },3000)
});

let ticket;

try{
    ticket=await promiseWifeBringingTicks; 
}catch(e){
   ticket='sad face';
}






// const getPopcorn= new Promise((resolve,reject)=>resolve(`popcorn`));

// const addButter= new Promise((resolve,reject)=>resolve(`butter`));

// const getColdDrinks=new Promise((resolve,reject)=>resolve(`colddrink`));

// let [popcorn,butter,colddrink]=await Promise.all([getPopcorn,addButter,getColdDrinks])

// console.log(`${popcorn}, ${butter}, ${colddrink}`);


// let ticket=await promiseWifeBringingTicks;
  
//     console.log(`wife:i have a ${ticket}`);
//     console.log('husband:we should go in');
//     console.log('wife: no i am hungry');

//    let popcorn=await getPopcorn;
   
//    console.log(`husband: i got some ${popcorn}`);
//        console.log('husband:we should go in');
//        console.log('wife: no i am hungry');

//        let butter=await addButter;

//        console.log(`husband:i got some ${butter} on popcorn`);
//        console.log(`husband: anything else darling?`);
//        console.log(`wife:lets go we are getting late`);
//        console.log(`husband:thank you for the remainder`);
       
       return ticket;

}

preMovie().then((m)=>console.log(`person3: shows ${m}`));


console.log('person4:shows ticket');
console.log('person5:shows ticket');

// promiseWifeBringingTicks.then((t)=>{
//     console.log(`person3: shows ${t}`);
// })

// const getPopcorn=promiseWifeBringingTicks.then((t)=>{
//     console.log('wife:i have a ticket');
//     console.log('husband:we should go in');
//     console.log('wife: no i am hungry');
//     return new Promise((resolve,reject)=>resolve(`${t} popcorn`));
    
// });

// const getButter=getPopcorn.then((t)=>{
//     console.log('husband: i got some popcorn');
    
//     console.log('husband:we should go in');
//     console.log('wife: no i am hungry');
//     return new Promise((resolve,reject)=>resolve(`${t} butter`));
// });

// getButter.then((t)=>console.log(t));




// console.log('person4:shows ticket');
// console.log('person5:shows ticket');
