// grab the buttons .open-modal and .close-modal

const overlay = document.querySelector('.overlay')

overlay.style.display = 'none'

const open =  document.querySelector('.open-modal')

const close =  document.querySelector('.close-modal')

open.addEventListener('click', function(){
    overlay.style.display = 'block'
})

close.addEventListener('click', function(){
    overlay.style.display = 'none'
})