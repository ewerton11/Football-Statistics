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
        i++

        firstelement.textContent = 'Clear'
    } else {
        i = 0

        firstelement.textContent = 'Dark'
    }
});


//sessao ----------------------------------------------

class Next {
    constructor() {
        this.left = document.querySelector('.left-arrow');
        this.right = document.querySelector('.right-arrow');
        this.article = document.querySelector('.first-article');
        this.t1 = document.querySelector('#table-1');
        this.t2 = document.querySelector('#table-2');
        this.t3 = document.querySelector('#table-3');
        this.count = 0

        this.leftSection();
        this.rightSection();
    }


    leftSection() {
        this.left.addEventListener('click' , ()=> {

            if(this.count == 1) {
                this.count--

                this.article.scroll({left: 178 - 178 , behavior: 'smooth'});
                this.left.style.visibility = 'hidden' ;

            } else if(this.count == 2) {
                this.count--

                this.article.scroll({left: 1096, behavior: 'smooth'});
                this.left.style.visibility = 'visible' ;
                this.right.style.visibility = 'visible' ;
            }
        });
    }

    rightSection() {
        this.right.addEventListener('click' , ()=> {

            if(this.count == 0) {
                this.count++

                this.article.scroll({left: 1096, behavior: 'smooth'})
                this.left.style.visibility = 'visible' ;

            } else if(this.count == 1) {
                this.count++

                this.article.scroll({left: 2192, behavior: 'smooth'})
                this.left.style.visibility = 'visible' ;
                this.right.style.visibility = 'hidden' ;
            }
        });
    }
}

const Tables = new Next();