

//header

fetch('./components/header.html')
    .then(data => data.text())
    .then(html => document.querySelector('header').innerHTML = html)   





//header

//scroll titulo
window.addEventListener('scroll', () => {
    const parallaxElement = document.querySelector('.scroll')
    const parallaxElement2 = document.querySelector('.scroll__dos')
    const scrollPosition = window.scrollY 
    const parallaxSpeed = 0.02
    const parallaxSpeed2 = 0.02


    parallaxElement.style.transform = `translateX(${scrollPosition * parallaxSpeed}px)`
    parallaxElement2.style.transform = `translateX(${scrollPosition * parallaxSpeed2}px)`
})

//scroll titulo









