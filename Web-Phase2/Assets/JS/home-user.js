const left1 = document.querySelector("#left1")
const right1 = document.querySelector("#right1")
const slides1 = document.querySelector("#slides-container1")
left1.addEventListener("click", () => {
    slides1.scrollLeft -=640
})
right1.addEventListener("click", () => {
    slides1.scrollLeft +=640
})


const left2 = document.querySelector("#left2")
const right2 = document.querySelector("#right2")
const slides2 = document.querySelector("#slides-container2")
left2.addEventListener("click", () => {
    slides2.scrollLeft -=640
})
right2.addEventListener("click", () => {
    slides2.scrollLeft +=640
})


const left3 = document.querySelector("#left3")
const right3 = document.querySelector("#right3")
const slides3 = document.querySelector("#slides-container3")
left3.addEventListener("click", () => {
    slides3.scrollLeft -=640
})
right3.addEventListener("click", () => {
    slides3.scrollLeft +=640
})

6
const left4 = document.querySelector("#left4")
const right4 = document.querySelector("#right4")
const slides4 = document.querySelector("#slides-container4")
left4.addEventListener("click", () => {
    slides4.scrollLeft -=640
})
right4.addEventListener("click", () => {
    slides4.scrollLeft +=640
})


const left5 = document.querySelector("#left5")
const right5 = document.querySelector("#right5")
const slides5 = document.querySelector("#slides-container5")
left5.addEventListener("click", () => {
    slides5.scrollLeft -=640
})
right5.addEventListener("click", () => {
    slides5.scrollLeft +=640
})


const left6 = document.querySelector("#left6")
const right6 = document.querySelector("#right6")
const slides6 = document.querySelector("#slides-container6")
left6.addEventListener("click", () => {
    slides6.scrollLeft -=640
})
right6.addEventListener("click", () => {
    slides6.scrollLeft +=640
})


const active = document.getElementById("active")

function notActive(){
    active.classList.toggle("active")
}