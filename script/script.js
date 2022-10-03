let menu = document.querySelector('.menu-box-1')
let navmenu = document.querySelector('#nav-menu')
let xmenu = document.querySelector('#x-menu')
let logo = document.querySelector('.box-2');

let count = 0;




logo.addEventListener('click' , ()=> {
    document.location.reload(true);
});

menu.addEventListener('click' , ()=> {
    navmenu.classList.toggle("active");
});

xmenu.addEventListener('click' , ()=> {
    navmenu.classList.toggle("active");
})