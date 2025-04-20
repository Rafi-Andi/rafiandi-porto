console.log('hai')

const mainImage = document.getElementById('main-image')
const thumbsImage = document.querySelectorAll('.thumb-image')

thumbsImage.forEach(thumb => {
    thumb.addEventListener('click', () => {
        mainImage.src = thumb.src
        console.log('ditekan')
        thumbsImage.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active')
        
    })
})