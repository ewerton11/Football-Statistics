let body = document.querySelector('body');
let header = document.querySelector('header');

let menu = document.querySelector('.menu-box-1');
let xnavbar = document.querySelector('.x-menu')
let navmenu = document.querySelector('#nav-menu');
let team = document.querySelector('.choose-team');

let logo = document.querySelector('.box-2');

let settings = document.querySelector('.settings-nav');
let league = document.querySelector('.league');

let colorMode = document.querySelector('.color-system');
let dark = document.querySelector('.dark-mode');
let clear = document.querySelector('.clear-mode');

//segundas sessao

let sectionleft = document.querySelector('.left-arrow');
let sectionright = document.querySelector('.right-arrow')
let firstTable = document.querySelector('#table-1')
let mondayTable = document.querySelector('#table-2')
let thirdTable = document.querySelector('#table-3')


menu.addEventListener('click' , ()=> {
    navmenu.classList.toggle("active");
});

xnavbar.addEventListener('click' , ()=> {
    navmenu.classList.toggle("active");
});

logo.addEventListener('click' , ()=> {
    document.location.reload(true);
});

league.addEventListener('click' , ()=> {
    console.log('clicou')
});

var i = 0

colorMode.addEventListener('click' , function() {

    let firstelement = document.querySelector('.color-mode');

    if(i == 0) {

        ++i

        //modo de estilizar cor temporario

        firstelement.textContent = 'Clear'
        dark.style.display = 'none' ;
        clear.style.display = 'block' ;
        body.style.background = 'rgb(27, 27, 27)'
        header.style.color = 'white'
        header.style.background = 'rgb(27, 27, 27)'
        menu.style.background = 'rgb(27, 27, 27)'
        team.style.background = 'rgb(27, 27, 27)'
        logo.style.background = 'rgb(27, 27, 27)'
        settings.style.background = 'rgb(27, 27, 27)'
        league.style.background = 'rgb(27, 27, 27)'
        colorMode.style.background = 'rgb(27, 27, 27)'

    } else {

        i = 0

        firstelement.textContent = 'Dark'
        dark.style.display = 'block' ;
        clear.style.display = 'none' ;
        body.style.background = 'white'
        header.style.color = 'black'
        header.style.background = 'white'
        menu.style.background = 'white'
        team.style.background = 'white'
        logo.style.background = 'white'
        settings.style.background = 'white'
        league.style.background = 'white'
        colorMode.style.background = 'white'
    }
});