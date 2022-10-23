var add = document.getElementById('add')
var add1 = document.getElementById('menu1')
var close = document.querySelector('.close')
var hello = document.querySelector('.hello')



function menu(){
 add.style.marginTop = "30px";
 menu1.classList.toggle("menuadd")
 add1.classList.toggle("rm")
 hello.classList.toggle("rm")
 
}
function closed(){
 add.style.marginTop = "-1000%";
 menu1.classList.toggle("menuadd")
 add1.classList.toggle("rm")
 hello.classList.toggle("rm")
}