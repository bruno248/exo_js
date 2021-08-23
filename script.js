// functionnalité 1


let footer = document.querySelector("footer")
let i = 0
footer.addEventListener("click",function(){
  i++
  console.log(`clique numéro ${i}`)
})

// functionnalité 2

let hamburger = document.querySelector('.navbar-toggler')
hamburger.addEventListener("click", function() {
  let navbar = document.getElementById('navbarHeader')
  navbar.classList.toggle('collapse')
})

// functionnalité 3

let clic = document.querySelector('.card .btn-outline-secondary')
clic.addEventListener("click", function(){
  card = document.querySelector('.card')
  card.style.color = "red"
})

// functionnalité 4

let editB = document.querySelectorAll(".card .btn-outline-secondary")
let editT = document.querySelectorAll(".card .card-text")

editB[1].addEventListener("click",function(){
  if(editT[1].style.color == "green"){
    editT[1].style.color = ""
  }
  else if(editT[1].style.color != "green"){
    editT[1].style.color = "green"
  }
})

// functionnalité 5

// functionnalité 6