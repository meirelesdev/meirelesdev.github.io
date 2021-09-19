getAge()
checkVieMode()
const contactForm  = document.querySelector('#contato')

contactForm.addEventListener('submit', (event)=>{
    event.preventDefault()
    const divAlert = document.querySelector('.alert')
    divAlert.innerHTML = ''
    divAlert.innerHTML = "Este formulario é um Formulario de exemplo.<br> Ao enviar Você não estará enviando nada."
})
