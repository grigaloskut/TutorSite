let slide_index = 0

show_slides(slide_index)

function prev_slide(n){
    slide_index+=n
    show_slides(slide_index)
}

function next_slide(n){
    slide_index+=n
    show_slides(slide_index)
}

function show_slides(n){
    let slides = document.getElementsByClassName("directions__slide")
    let slides__headers = document.getElementsByClassName('slide__header')
    for (let i = 0; i < slides.length; i++){
        slides[i].style.display = "none"
        slides__headers[i].style.display = "none"
    }
    if (n < 0){
        slide_index = slides.length - 1
    }
    if (n > slides.length-1){
        slide_index = 0
    }
    slides[slide_index].style.display = "block"
    slides__headers[slide_index].style.display = "block"
}

let menuBtn = document.querySelector('.menu__btn');
let menu = document.querySelector('.menu__burger');

document.addEventListener("DOMContentLoaded", function(){
    


    if(window.innerWidth > 1024){
        menuBtn.classList.remove('menu__btn')
        menu.classList.add('header__list')
        menu.classList.remove('menu__burger')
        let links= document.querySelectorAll('.header-link-burger')
        for (i = 0; i < links.length; i ++){
            links[i].classList.remove('header-link-burger')
        }
    }
    link_anchor()


})
window.addEventListener('scroll' , function(){
    if (this.window.innerWidth < 480){
        if (this.window.pageYOffset > 80){
            this.document.getElementById('header-bg').classList.add('header-scrolling')
            this.document.getElementById("header").style.height = 65 + 'px'
        }
        if (this.window.pageYOffset < 80){
            this.document.getElementById('header-bg').classList.remove('header-scrolling')
            this.document.getElementById("header").style.height = 70 + 'px'
        }
    }else{
        if (this.window.pageYOffset > 100){
            this.document.getElementById('header-bg').classList.add('header-scrolling')
            this.document.getElementById("header").style.height = 65 + 'px'
        }
        if (this.window.pageYOffset < 100){
            this.document.getElementById('header-bg').classList.remove('header-scrolling')
            this.document.getElementById("header").style.height = 90 + 'px'
        }
    }
    
})

menuBtn.addEventListener('click', function(){
    setTimeout(ifClass(),100)
})
function ifClass (){
    if (menu.classList.contains('active'))
    {
        menu.classList.remove('active')
    }else menu.classList.add('active')
}

function link_anchor(){
    let nav = document.querySelectorAll(".header-link, .btn-link");
    for (let i = 0; i < nav.length; i++) {
        nav[i].onclick = function(){
            let where = document.getElementById(nav[i].getAttribute("data-to"));
            window.scrollBy(0, where.getBoundingClientRect().top - 100);  
            if(!nav[i].classList.contains('btn-link')){
                setTimeout(ifClass(),100)  
            }
            
            
        };
    }    
}
