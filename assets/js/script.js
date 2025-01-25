const navbarList = document.querySelector('.list')
        const navbarMenu = document.querySelector('.menu')

        navbarMenu.addEventListener('click',  () =>  {
            navbarList.classList.toggle('aktif')
        })

        document.addEventListener('click', function(e) {
            if(!navbarList.contains(e.target) && !navbarMenu.contains(e.target)){
                navbarList.classList.remove('aktif')
            }
        })