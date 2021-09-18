const redirect = (target) => {
    switch(target){
        case 'devinhouse':
            window.location = 'https://meirelesdev.github.io/devinhouse/'
            break
            case 'hcodelab':
                window.location = 'https://farmaciahcode.vercel.app/'
            break
        default:
            window.location.reload()

    }
    console.log(target)
}
const toggleMenu = () => {
    document.querySelector(".menu").classList.toggle('show')
}
const toggleDarkMode = () => {
    let bodyElement = document.body
    if(bodyElement.classList.contains('dark')){
        console.log("removendo")
        saveModeOnStorage(false);
    } else {
        console.log("adicionando")
        saveModeOnStorage(true);
    }
    bodyElement.classList.toggle('dark')
}
const saveModeOnStorage = isDark => {
    localStorage.setItem('darkMode', JSON.stringify({isDark}))
}
const getModeOnStorage = () => {
    return JSON.parse(localStorage.getItem('darkMode'))
}
const getAge = () => {
    let span = document.querySelector('.anos')
    let idade = ((new Date()).getFullYear() - 1985)
    span.innerHTML = idade
}