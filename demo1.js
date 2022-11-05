//console.dir(document);
//console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title=123;
// console.log(document.doctype);
// console.log(document.body);
// console.log(document.head);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);


//getElementById
// console.log(document.getElementById('header-title'));
// var headerTitle=document.getElementById('header-title');
// console.log(headerTitle);
// var header=document.getElementById('main-header');
// var main1=document.getElementById('main');

// headerTitle.textContent='Abhishek';
// headerTitle.innerText='Abhi123';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML='<h3>Hello Abhishek</h3>';
// headerTitle.style.borderBottom='solid 4px #000';
// header.style.borderBottom='solid 4px #000';
// document.getElementById('main').style.fontSize="100px";
// document.getElementById("header-title").style.fontSize = "x-large";
// document.getElementById("abhi").style.fontSize = "50px";
// document.getElementById("abhi").style.color = "green";
// document.getElementById("abhi").innerHTML = '<b>Items</b>';

// get element by classname
var items=document.getElementsByClassName('list-group-item');
console.log(items);
// console.log(items[1]);
//  items[1].textContent='Hiii';
//  items[1].style.fontWeight='bold';
//  items[1].style.backgroundColor='yellow';
for (let i = 0; i < items.length; i++) {
    items[i].style.fontWeight='bold';
    items[i].style.color='red';
}
items[2].style.backgroundColor='green';
