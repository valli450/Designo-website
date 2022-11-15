const menuBlock = document.querySelector(".header__right-side__list");
const openIcon = document.getElementById("icon-hamburger");
const closeIcon = document.getElementById("icon-close");
const backgroundBlock = document.querySelector(".bg__block"); 

function openMenu() {
    document.body.style.position = "fixed";
    menuBlock.style.zIndex = '2';
    openIcon.style.opacity = '0';
    closeIcon.style.zIndex = '1'
    closeIcon.style.opacity = '1';
    backgroundBlock.style.zIndex = '1';
    menuBlock.style.opacity = '1';
    backgroundBlock.style.opacity = '1';
    openIcon.style.zIndex = '-1';
}

function closeMenu(){
    document.body.style.position = "static";
    closeIcon.style.opacity = '0';
    openIcon.style.opacity = '1';
    closeIcon.style.zIndex = '-1';
    openIcon.style.zIndex = '1';
    backgroundBlock.style.opacity = '0';
    menuBlock.style.opacity = '0';
    setTimeout(function(){
        menuBlock.style.zIndex = '-2';
        backgroundBlock.style.zIndex = '-1';
    }, 600)
}