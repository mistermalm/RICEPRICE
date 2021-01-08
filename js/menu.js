let hamburger = document.querySelector('.hamburger')
let showcase = document.querySelector('.showcase')
let header = document.querySelector('.showcase header')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active')
  showcase.classList.toggle('is-active')
  header.classList.toggle('is-active')
})
