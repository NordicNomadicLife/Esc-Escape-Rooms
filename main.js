const menuBtn = document.querySelector(".menuBtn")
const closeBtn = document.querySelector(".closeBtn")
const navLink = document.querySelector(".navLink")

menuBtn.addEventListener("click", ()=>{
    navLink.style.display = "flex"
})

closeBtn.addEventListener("click", ()=>{
    navLink.style.display = "none"
})