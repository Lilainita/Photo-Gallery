const prev = document.getElementById("prev")
const next = document.getElementById("next")

const images = Array.from(document.querySelectorAll(".about__img"))
const texts = Array.from(document.querySelectorAll(".about__text"))
// las colecciones que devolveria el querySelectorAll se convierten en arrays con el Array.from

let cont = 0

/* 
if (prev) {
    prev.addEventListener("click", () => {
        images.map(img => img.classList.remove("show"))
        texts.map(txt => txt.classList.remove("show"))

        if (cont == 0) cont = images.length - 1
        else cont--
        images[cont].classList.add("show")
        texts[cont].classList.add("show")
    })
}

if (next) {
    next.addEventListener("click", () => {
        images.map(img => img.classList.remove("show"))
        texts.map(txt => txt.classList.remove("show"))

        if (cont == images.length - 1) cont = 0
        else cont++
        images[cont].classList.add("show")
        texts[cont].classList.add("show")
    })
} simplificamos este código con dos funciones setClass y setCount
*/

//prev && equivale a if(prev){}
prev && prev.addEventListener("click", () => setClass("prev"))

if (next) {
    next.addEventListener("click", () => setClass("next"))
}

const setClass = (direction) => {
    images.map(img => img.classList.remove("show"))
    texts.map(txt => txt.classList.remove("show"))
    setCount(direction)
    images[cont].classList.add("show")
    texts[cont].classList.add("show")
}

const setCount = (direction) => {
    if (direction == "next") {
        if (cont == images.length - 1) cont = 0
        else cont++
    } else {
        if (cont == 0) cont = images.length - 1
        else cont--
    }
}
