let navbar = document.querySelector(".nav-1-1");
let x1 = document.querySelector(".x-1");
let menuicon = document.querySelector(".menu-bar");

menuicon.addEventListener("click",function(){
    menuicon.style.display="none";
    x1.style.display="block";
    navbar.style.display="flex";
})
x1.addEventListener("click",function(){
    x1.style.display="none";
    menuicon.style.display="block";
    navbar.style.display="none";
})