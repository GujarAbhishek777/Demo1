// concept of the call apply and bind

// var obj={
//     num:2
// };

// var addToThis =function (b){
//     return this.num + b;
// }

// console.log(addToThis.call(obj,3));//5

// var obj={
//     num:2
// };

// var addToThis =function (b,c,d){
//     return this.num + b +c+d;
// }

// console.log(addToThis.call(obj,3,3,6));//14

// var abhi=[1,4,6];

// console.log(addToThias.apply(obj,abhi));//13

// var band= addToThis.bind(obj);


// console.log(band(2,5,3));



// var obj={
//         age:20
//     };

//   var abhu=function(){
//     return this.age;
     
//   }
//   var band= abhu.bind(obj);
//   console.log(band());
 

//concept of the function currying

// let multiply= function(x,y){
//     console.log(x*y);
// }


// let multiply= function(x,y){
//     return function(y){
//     console.log(x*y);
//     }
// }

// let multiplyByTwo= multiply(2);
// multiplyByTwo(3);

// let multiplyByThree =multiply(3);
// multiplyByThree(10);
    


