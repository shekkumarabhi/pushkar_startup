const nav = document.querySelector('nav')
const icons = document.querySelectorAll('.icon')
const descriptions = document.querySelectorAll('.description')
const arrowSigns = document.querySelectorAll('.arrow-sign')
const arrowSignIcon = document.querySelectorAll('.arrow-sign > i')
const hiddenMenuUnorderedList = document.querySelector('.nav-lists > ul')
const hiddenMenuList = document.querySelectorAll('.nav-lists > ul > li')
const hiddenList = document.querySelectorAll('.hidden-list')
const hiddenListMenu = document.querySelectorAll('.hidden-list>ul>li')
const hiddenListsContainer = document.querySelectorAll('.hidden-lists-container')

nav.addEventListener('mouseenter', () => {
    for (let i = 0; i <= descriptions.length - 1; i++) {
        icons[i].style.width = '19%'
        descriptions[i].classList.remove('display-none')
        descriptions[i].classList.add('display-inline-block')
    }
    for (let i = 0; i <= arrowSigns.length - 1; i++) {
        arrowSigns[i].style.width = '19%'
    }
    for(let i = 0; i<=hiddenListMenu.length-1; i++){
        hiddenListMenu[i].style.visibility='visible'
    }
})



nav.addEventListener('mouseleave', () => {
    for (let i = 0; i <= descriptions.length - 1; i++) {
        icons[i].style.width = '49%'
        descriptions[i].classList.remove('display-inline-block')
        descriptions[i].classList.add('display-none')
    }
    for (let i = 0; i <= arrowSigns.length - 1; i++) {
        arrowSigns[i].style.width = '49%'
    }
    for(let i = 0; i<=hiddenListMenu.length-1; i++){
        hiddenListMenu[i].style.visibility='hidden'
    }
})




for (let i = 0; i <= arrowSigns.length - 1; i++) {
    arrowSigns[i].addEventListener('click', () => {
        hiddenList[i].classList.toggle('display-none')
        hiddenList[i].classList.toggle('display-inline-block')
        arrowSignIcon[i].classList.toggle('rotate-ninety')
    })
}

for (let i = 0; i <= hiddenListsContainer.length - 1; i++) {
    arrowSigns[i].addEventListener('click', () => {
        hiddenListsContainer[i].classList.toggle('height-max-content')
    })
}




