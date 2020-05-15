
//  inicio do codigo para o menu mobile

    let btnClose = document.getElementById('btn-close')
    let btnOpen = document.getElementById('btn-open')

    
    btnOpen.addEventListener('click', toggle,false)
    btnClose.addEventListener('click', toggle,false)
    // função para mostrar e esconder o menu-mobile
    function toggle() {
        
        let menuMobile = document.getElementById("menu-mobile")
        
        if(menuMobile.classList.contains('show')){
            menuMobile.classList.add('hidden')
            menuMobile.classList.remove('show')
        }else{
            menuMobile.classList.add('show')
            menuMobile.classList.remove('hidden')
        }
        
    }    

//  fim do cobido para o menu mobile
