let menuBtn = document.querySelector('.menu-toggle')
let menuDrop = document.querySelector('.menu')

menuBtn.addEventListener('click', function () {
    menuDrop.classList.toggle('drop-active')
    menuBtn.classList.toggle ('toggle-active')
})