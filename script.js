const page = document.body
const Btn = document.querySelector('input')

Btn.addEventListener('click', () => {
  page.classList.toggle('nicht')
})


//burger
const burger = document.querySelector('.burger')
const menu = document.querySelector('.nav-list')


burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
    page.classList.toggle('active')

})
menu.addEventListener('click', () => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
    page.classList.toggle('active')

})
background.addEventListener('click', () => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
    page.classList.toggle('active')
})
//burger




