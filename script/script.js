let menu = document.querySelector('.menu-box-1');
let navmenu = document.querySelector('#nav-menu');

let logo = document.querySelector('.box-2');

let colorMode = document.querySelector('.color-system');
let dark = document.querySelector('.dark-mode');
let clear = document.querySelector('.clear-mode');




logo.addEventListener('click' , ()=> {
    document.location.reload(true);
});

menu.addEventListener('click' , ()=> {
    navmenu.classList.toggle("active");
});

var i = 0

colorMode.addEventListener('click' , function() {

    let firstelement = document.querySelector('.color-mode');

    if(i == 0) {

        dark.style.display = 'none' ;
        clear.style.display = 'block' ;
        firstelement.textContent = 'Clear'

        ++i

    } else {

        dark.style.display = 'block' ;
        clear.style.display = 'none' ;
        firstelement.textContent = 'Dark'

        i = 0
    }
});