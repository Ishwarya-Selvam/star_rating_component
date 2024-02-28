// Add EventListeners to parent - and utitlize bubbling
const starcontainer = document.querySelector(".star_container")
const count = document.querySelector("#count")
const star = document.querySelectorAll('.star')

starcontainer.addEventListener("click", (e) => {
    let elem = e.target
    let isRequired = elem.hasAttribute("rating")
    if(!isRequired)
        return
    let rating = elem.getAttribute("rating")
    fillStar(rating)
    count.textContent = rating
})

function fillStar(rating){
    resetToDefault()
    for(let i=0; i<rating; i++){
        star[i].classList.add("yellow")
    }
}

function resetToDefault(){
    for(let i=0; i<star.length; i++){
        star[i].classList.remove("yellow")
    }
}

starcontainer.addEventListener("mouseover", (e) => {
    let elem = e.target
    let isRequired = elem.hasAttribute("rating")
    if(!isRequired)
        return
    let rating = elem.getAttribute("rating")
    fillStar(rating)
})

starcontainer.addEventListener("mouseleave", (e) => {
    fillStar(count.textContent)
})