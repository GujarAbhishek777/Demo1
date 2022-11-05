//Query selector 
// var header=document.querySelector('#main-header');
// header.style.borderBottom='solid 3px black';

// var input=document.querySelector('input');
// input.value='Abhishek Gujar';

// var submit=document.querySelector('input[type="submit"]');
// submit.value='SEND';

// var Firstitem=document.querySelector('.list-group-item');
// Firstitem.style.color='red';

// var Secitem=document.querySelector('.list-group-item:nth-child(2)');
// Secitem.style.backgroundColor='green';

// var Titem=document.querySelector('.list-group-item:nth-child(3)');
// Titem.style.display='none';

// var item=document.querySelector('.list-group-item:last-child');
// item.style.color='blue';

//Query selectorAll
var titles= document.querySelectorAll('.title');
console.log(titles);
titles.textContent='Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
//  Titem.style.color='yellow';.
for (let index = 0; index < odd.length; index++) {
     odd[index].style.backgroundColor ='green';
    
}

var odd1 = document.querySelectorAll('li:nth-child(even)');
  odd1[0].style.color='green';

