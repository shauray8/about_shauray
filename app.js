const logo = document.querySelector('#logo')
const hamburger = document.querySelector('.hamburger')

const tl = new TimelineMax();

    tl.fromTo(logo, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=1.5")
    .fromTo(hamburger, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=1.5")

function init() {
    
    const hamburger = document.querySelector(".hamburger")
    const hamburgerLines = document.querySelectorAll(".hamburger line")
    const navOpen = document.querySelector(".nav-open")
    const contact = document.querySelector(".contact")
    const social = document.querySelector(".social")
    const logo = document.querySelector('#logo')
    const about = document.querySelector('.About')

    const Hl = new TimelineMax({ paused: true, reversed: true })

    Hl.to(navOpen, 0.5, { y: 0 })
        .fromTo(contact, 0.5, { opacity: 0, y: 10 }, { opacity: 1, y: 0 }, '-=.1')
        .fromTo(social, 0.5, { opacity: 0, y: 10 }, { opacity: 1, y: 0 }, '-=0.5')
        .fromTo(about, 0.5, { opacity: 0, y: 10 }, { opacity: 1, y: 0 }, '-=0.5')
        .fromTo(logo, 0.2, { color: "white" }, { color: "#333a33" }, '-=1')
        .fromTo(hamburgerLines, 0.2, { stroke: "white" }, { stroke: "#333a33" }, "-=.5")


    hamburger.addEventListener('click', () => {
        Hl.reversed() ? Hl.play() : Hl.reverse();
    })

}

init()
