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

const sertifAll = document.querySelectorAll('.sertif')
sertifAll.forEach(sertif => {
    sertif.addEventListener('mouseover', () => {
        const deskripsi = sertif.querySelector('.deskripsi')
        
        if(deskripsi){
            deskripsi.style.opacity = '80%';
        }
    })
    sertif.addEventListener('mouseout', () => {
        const deskripsi = sertif.querySelector('.deskripsi')
        
        if(deskripsi){
            deskripsi.style.opacity = '0';
        }
    })
});
