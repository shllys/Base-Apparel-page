const form = document.getElementById('form');
const email = document.getElementById('correo');
const parrafo = document.querySelector('.warning');
const error = document.querySelector('.error')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let warning = ''
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+/
    let entrar = false
    parrafo.innerHTML = ''
    if(!regexEmail.test(email.value)){
        error.style.display = 'block'
        warning += `<br> Please provide a valid email` 
        entrar = true 
    }
    
    if (entrar) {
        parrafo.innerHTML = warning
    }
})

