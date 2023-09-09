//DOM Manipulation 

//GetElementById()
// const title = document.getElementById('main-heading');

// console.log(title)



//GetElementByClassName()

// const listItem = document.getElementsByClassName('list-items');
// console.log(listItem)


//GetElementsbyTagName()
// const listPara = document.getElementsByTagName('p');
// console.log(listPara)


//querySelector()
// const container = document.querySelector('div');
// console.log(container) 

// const title = document.querySelector("main-heading")

// title.style.color = 'blue'

//querySelectorAll()

// const containerAll = document.querySelectorAll('div');
// console.log(container) //this one selects all the divs 



//  STYLING an Element
// const title = document.querySelector("#main-heading")

// title.style.color = 'green' //this only works on a single element.


const listItems = document.querySelectorAll('list-items');


for ( i = 0; i <listItems.length; i++) {
    listItems[i].style.fontSize = '5rem';
}



// CREATING ELEMENT

const ul = document.querySelector('ul');
const li = document.createElement('li');
//adding elements
ul.append(li)
//modifying the text
li.innerText = 'X-men';
//modifying Attributes & Classes
li.setAttribute('id', 'main-heading');
li.removeAttribute('id');

const title = document.querySelector('#main-heading');
console.log(title.getAttribute('id'));

