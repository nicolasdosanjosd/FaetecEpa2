
// navbar transfom
let navBar = document.querySelector('#header')

document.addEventListener("scroll", () => {
    let scrollTop = window.scrollY

    if(scrollTop > 0){
        navBar.classList.add('rolar')
    } else(
        navBar.classList.remove('rolar')
    )
})

// modal
let modalSite = document.querySelector('dialog')
let btnFechar = document.querySelectorAll('dialog button')

let cont = 0;

document.addEventListener('mouseleave', ()=>{
    
    if(cont == 0){
        modalSite.showModal()
    }
    
})
btnFechar.forEach(button => {
    button.addEventListener('click',() =>{
        modalSite.close()
        cont = 1
    })
})

// card
VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 25,
    speed: 400,
    glare:true,
    "max-glare":
     0.5
});