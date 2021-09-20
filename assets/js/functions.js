const redirect = (target) => {
    console.log(target)
    let url = `https://meirelesdev.github.io/${target}`
    switch(target){
        case 'devinhouse':
            window.open(url)
            break
            case 'hcodelab':
                window.open('https://farmaciahcode.vercel.app/')
            break
            case 'to-do-list-devinhouse':
                window.open(url)
            break
            case 'jogodavelha':
                window.open(url)
            break
            case 'git-config':
                url = `https://meirelesdev.github.io/artigos/${target}.html`
                    // url = `http://127.0.0.1:5500/artigos/${target}.html`
                window.location.href = url
            break
        default:
            // window.location.reload()

    }
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
    return JSON.parse(localStorage.getItem('darkMode')) || {isDark: false}
}
const getAge = () => {
    let span = document.querySelector('.anos')
    let idade = ((new Date()).getFullYear() - 1985)
    span.innerHTML = idade
}
const checkVieMode = () => {
    if(getModeOnStorage().isDark) document.body.classList.add('dark')
}