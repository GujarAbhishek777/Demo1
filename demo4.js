//Traversing the dom
var itemList = document.querySelector('#items');
// //parentnode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='grey';
// console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='yellow';
// console.log(itemList.parentElement.parentElement.parentElement);

//childNodes
// // console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='pink';

// //firstchild
// console.log(itemList.firstChild);
// //firstElementChild
// itemList.firstElementChild.textContent='blue';


// //lastchild
// console.log(itemList.lastChild);
// //lastElementChild
// itemList.lastElementChild.textContent='blue';


// //nextSibling
// console.log(itemList.nextSibling);
// //lastElementSibling
// console.log(itemList.nextElementSibling);


// //previousSibling
// console.log(itemList.previousSibling);
// //previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='red';

//create Element

//create a div
var newDiv=document.createElement('div');
//Add Class
newDiv.className='Hello';
//Add new Id
newDiv.id='main12';
//add attribute
newDiv.setAttribute=('title','Hellodiv');
//create textNode
var newDivText=document.createTextNode('Hello World');

//add text to div
newDiv.appendChild(newDivText);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');


container.insertBefore(newDiv,h1);

var res=document.querySelector('ul');

var h2=document.querySelector('li');

res.insertBefore(newDiv,h2);

console.log(newDiv);
