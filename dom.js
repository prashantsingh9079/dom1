// document.title='title changed from dom'
// console.log(document.title)
// var ht = document.getElementById("header-title")
// ht.textContent="changed from dom"
// //ht.innerText=<h1>rahuk </h1>
// var htt = document.getElementById("main-header")
// htt.style.borderBottom = 'solid 3px #000'
// var xy = document.getElementById("add-item")
// xy.style.fontWeight='Bold'
// xy.style.color='green'



// var item = document.getElementsByClassName("list-group-item")
// console.log(item)
// item[2].style.backgroundColor='green'

// for(let i=0;i<item.length;i++)
// {
//     item[i].style.fontWeight='bold'
// }

// var licn = document.getElementsByClassName("list-group-item")
// for(let k=0; k<licn.length; k++)
// {
//     licn[k].style.backgroundColor='lightblue'
// }

// var tn = document.getElementsByTagName('li')
// console.log(tn)
// for(let k=0; k<tn.length; k++)
// {
//     tn[k].style.fontWeight='bold'
// }

// var i2 = document.querySelectorAll('.list-group-item');
// i2[1].style.backgroundColor='green'
// i2[2].innerText=''

// var o = document.querySelectorAll('li:nth-child(odd)');
// for(let k=0; k<o.length;k++ )
// {
//     o[k].style.backgroundColor='#90EE90';
// }

var x = document.querySelector('#items')
// console.log(x.parentElement)
x.parentElement.style.backgroundColor='pink'

// var y = document.querySelector('#items')
// var z=y.children
// z[1].style.backgroundColor='#ccc'
var y = document.querySelector('#items')
//console.log(y.lastElementChild)
y.lastElementChild.textContent='lucky'
console.log(y.lastChild)

console.log(y.firstChild)
y.firstElementChild.textContent='ITEM-1(ONE)'
console.log(y.nextSibling)
var l = document.querySelector('#add-item')
console.log(l.nextElementSibling)
l.nextElementSibling.style.backgroundColor='#ccc'
console.log(y.previousSibling)
y.previousElementSibling.style.color='red'

var elem = document.createElement('h1');

elem.className='hello';
elem.id='hello1'

//elem.setAttribute('title','hello div')
var newDiv = document.createTextNode("HEllo")
elem.appendChild(newDiv)
console.log(elem)

var cont = document.querySelector('#main')
console.log(cont)
var h2 = document.querySelector('#main #abc')
cont.insertBefore(elem,h2)

var cont2 = document.querySelector('.container')
var h1 = document.querySelector('.container #header-title')
cont2.insertBefore(elem,h1)
