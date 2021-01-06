//EXAMINE THE DOCUMENT 
console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
document.title=123;
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
document.all[10].textContent='Hello';
console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);

//GET ELEMENT BY ID
console.log(document.getElementById('header-title'));
var headerTitle=document.getElementById('header-title');
var header=document.getElementById("main-header");
console.log(headerTitle);
headerTitle.textContent="helloo";
headerTitle.innerText="goodbye";
console.log(headerTitle.textContent);
headerTitle.innerHTML="<h3>Helloo</h3>"
headerTitle.style.borderBottom="solid 3p #000";

//GET ELEMENT BY CLASS NAME
var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent='Hello 2';
items[1].style.fontWeight='bold';
items[1].style.backgroundColor="yellow";

// gives error
items.style.backgroundColor="#f4f4f4";

 for(var i=0 ; i< items.length ; i++)
 {
    items[i].style.backgroundColor="#568acb";
 }

// GET ELEMENT BY TAG NAME

var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent="Hello 2";
li[1].style.fontWeight="bold";
li[1].style.backgroundColor="yellow";

// gives error
li.style.backgroundColor="#f4f4f4";

for(var i=0 ; i< li.length ; i++)
  {
      li[i].style.backgroundColor="#568acb";
  }



//QUERY SELECTOR

var header=document.querySelector('#main-header');
header.style.borderBottom="solid 4px #ccc";
var input=document.querySelector('input');
input.value="Hello World";

var submit=document.querySelector('input[type="submit"]');
submit.value="SEND";

var item=document.querySelector('.list-group-item');
item.style.color='red';

var lastItem=document.querySelector('.list-group-item:last-child');
lastItem.style.color="blue";

var secondItem=document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color="coral";


//QUERY SELECTORALL

var titles=document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent="Hello";

var odd=document.querySelectorAll('.list-group-item:nth-child(odd)');
var even=document.querySelectorAll('.list-group-item:nth-child(even)');
for(var i=0;i<odd.length;i++)
 {
   odd[i].style.backgroundColor='#12cbaf';
    even[i].style.backgroundColor='#efacb2';
 }


// TRAVERSING THE DOM 

var itemList=document.querySelector('#items');

//parentNode
 console.log(itemList.parentNode);
 itemList.parentNode.style.backgroundColor='#f4b4f4';
 console.log(itemList.parentNode.parentNode);
 console.log(itemList.parentNode.parentNode.parentNode);

// PARENT NODE
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);

// CHILD NODES
console.log(itemList.childNodes);

console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='yellow';


// FIRST CHILD
console.log(itemList.firstChild);

//FIRST ELEMENT CHILD 
console.log(itemList.firstElementChild);
 itemList.firstElementChild.textContent="Hello 1";

// LAST CHILD
console.log(itemList.lastChild);

//LAST ELEMENT CHILD 
 console.log(itemList.lastElementChild);
 itemList.lastElementChild.textContent="Hello 4";

//  NEXT SIBLING
console.log(itemList.nextSibling);

// NEXT ELEMENT SIBLING
 console.log(itemList.nextElementSibling);

// PREVIOUS SIBLING
 console.log(itemList.previousSibling);

// PREVIOUS ELEMENT SIBLING
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.getElementsByClassName.color='green';


// CREATE ELEMENT 
 var newDiv = document.createElement('div');

// ADD CLASS
 newDiv.className='hello';
 console.log(newDiv);

// ADD ID
 newDiv.id='hello1';

// ADD ATTR
 newDiv.setAttribute('title' , 'Hello Div' );

// CREATE TEXT NODE
 var newDivText = document.createTextNode('Hello World');

// ADD TEXT TO DIV
 newDiv.appendChild(newDivText);
 console.log(newDivText);

 var container = document.querySelector('header .container');
 var h1=document.querySelector('header  h1');

 console.log(newDiv);

 newDiv.style.fontSize='30px';
 container.insertBefore(newDiv,h1);

// EVENTS 

var button=document.getElementById('button').addEventListener('click', buttonClick);

function buttonClick(e)
 {
     console.log('Button clicked');
     console.log('header-title');
     document.getElementById('header-title').textContent='Changed';
     document.querySelector('#main').style.backgroundColor='#344cba';
     console.log(e);
     console.log(e.target);
     console.log(e.target.id);
     console.log(e.target.className);
     console.log(e.target.classList);

    var output=document.getElementById('output');
    output.innerHTML='<h3>'+e.target.id+'</h3>';

     console.log(e.type);

     console.log(e.clientX);
     console.log(e.clientY);
     console.log(e.offsetX);
     console.log(e.offsetY);
     console.log(e.altKey);
     console.log(e.ctrlKey);
     console.log(e.shiftKey);


}

var button = document.getElementById('button');
var box=document.getElementById('box');
var output=document.getElementById('output');

button.addEventListener('click' , runEvent);
button.addEventListener('dbclick', runEvent);
button.addEventListener('mousedown', runEvent);
button.addEventListener('mouseuo', runEvent);
box.addEventListener('mouseenter',runEvent);
box.addEventListener('mouseleave',runEvent);
box.addEventListener('mouseover',runEvent);
box.addEventListener('mouseout',runEvent);



var itemInput=document.querySelector('input[type="text"]');
var form=document.querySelector('form');
var select=document.querySelector('select');


itemInput.addEventListener('keydown',runEvent);
itemInput.addEventListener('keyup',runEvent);
itemInput.addEventListener('keypress',runEvent);
itemInput.addEventListener('focus',runEvent);
itemInput.addEventListener('blur',runEvent);
itemInput.addEventListener('cut',runEvent);
itemInput.addEventListener('paste',runEvent);
itemInput.addEventListener('input',runEvent);

box.addEventListener('mousemove',runEvent);

select.addEventListener('change',runEvent);
select.addEventListener('input',runEvent);
form.addEventListener('submit',runEvent);
function runEvent(e)
{
    e.preventDefault();
    console.log('EVENT TYPE : ' + e.type );
    console.log(e.target.value);
    document.body.style.display='none';

    console.log(e.target.value);
    document.getElementById('output').innerHTML='<h3>'+e.target.value+'</h3>';
    output.innerHtml='<h3>MouseX:' +e.offsetX + '</h3><h3>MouseY: ' + e.offsetY + '</h3>';

    box.style.backgroundColor="rgb(" +e.offsetX +" , "+e.offsetY+ " ,40)";
    document.body.style.backgroundColor="rgb(" +e.offsetX +" , "+e.offsetY+ " ,40)";

}

