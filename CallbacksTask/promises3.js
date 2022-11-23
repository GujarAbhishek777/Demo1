const promise1=Promise.resolve('Hello World');
const promise2=10;
const promise3=new Promise((resolve,reject)=>
setTimeout(resolve,2000,'good Bye')
);

Promise.all([promise1,promise2,promise3]).then(values=>console.log(values));