// humburger
const hamburger = document.querySelector('.hamburger');
const navi = document.getElementById('hamburger-navigation');
const hamburgerSections = document.querySelectorAll('.hamburger-section')

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active')
    navi.classList.toggle('active')
})

hamburgerSections.forEach((hamburgerSection) => {
    hamburgerSection.addEventListener('click', function () {
        hamburger.classList.remove('active')
        navi.classList.remove('active')
    })
})

// reason
const slideLeft = document.querySelector('.slide-left');
const slideRight = document.querySelector('.slide-right');

window.addEventListener('scroll', function(){
    const windowHeight = window.innerHeight
    const elementTop = slideLeft.getBoundingClientRect().top
    if (elementTop < windowHeight) {
        slideLeft.classList.add('fadein-left')
    }
})

window.addEventListener('scroll', function(){
    const windowHeight = window.innerHeight
    const elementTop = slideRight.getBoundingClientRect().top
    if (elementTop < windowHeight) {
        slideRight.classList.add('fadein-right')
    }
})

//voice
const voiceItems = document.querySelectorAll('.voice-item');

window.addEventListener('scroll', function(){
    const windowHeight = window.innerHeight;

    voiceItems.forEach((voiceItem) => {
        const elementTop = voiceItem.getBoundingClientRect().top;
        if (elementTop < windowHeight) {
            voiceItem.classList.add('ballon')
        }
    })
})


