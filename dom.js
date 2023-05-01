document.title='title changed from dom'
console.log(document.title)
var ht = document.getElementById("header-title")
ht.textContent="changed from dom"

var htt = document.getElementById("main-header")
htt.style.borderBottom = 'solid 3px #000'
var xy = document.getElementById("add-item")
xy.style.fontWeight='Bold'
xy.style.color='green'