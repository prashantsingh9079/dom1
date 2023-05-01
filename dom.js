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

var licn = document.getElementsByClassName("list-group-item")
for(let k=0; k<licn.length; k++)
{
    licn[k].style.backgroundColor='lightblue'
}

var tn = document.getElementsByTagName('li')
console.log(tn)
for(let k=0; k<tn.length; k++)
{
    tn[k].style.fontWeight='bold'
}