const toggle = () => {
    let menuMobile = document.getElementById("menu-mobile")
    if (menuMobile.classList.contains('show')) {
        menuMobile.classList.add('hidden')
        menuMobile.classList.remove('show')
    } else {
        menuMobile.classList.add('show')
        menuMobile.classList.remove('hidden')
    }
}
let btnClose = document.getElementById('btn-close')
let btnOpen = document.getElementById('btn-open')

btnOpen.addEventListener('click', toggle, false)
btnClose.addEventListener('click', toggle, false)


function redirect(target) {
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
