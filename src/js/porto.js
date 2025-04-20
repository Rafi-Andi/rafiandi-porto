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

const contentWebsite = document.querySelector('.content-website')
const contentApi = document.querySelector('.content-api')
const projekWebsite = document.querySelector('.website')
const projekApi = document.querySelector('.api')


contentWebsite.addEventListener('click', () => {
    contentWebsite.classList.add('aktif')
    projekApi.classList.add('hidden')
    projekWebsite.classList.remove('hidden')
    console.log('website ditekan')

    if(contentApi.classList.contains('aktif')){
        contentApi.classList.remove('aktif')
    }
})

contentApi.addEventListener('click', () => {
    contentApi.classList.add('aktif')
    projekWebsite.classList.add('hidden')
    projekApi.classList.remove('hidden')
    console.log('api ditekan')

    if(contentWebsite.classList.contains('aktif')){
        contentWebsite.classList.remove('aktif')
    }
})
