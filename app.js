
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");


/*=============== SHOW MENU ===============*/
/* validate if constant exists*/
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

/*=============== HIDDEN MENU ===============*/
if (navClose) {
  navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu')
  })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')
const linkAction = () =>{
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}
navLink.forEach( n => n.addEventListener('click' , linkAction))




let pbch_1 = document.getElementById("pbch_1");
let pbcl_1 = document.getElementById("pbcl_1");
let pbch_2 = document.getElementById("pbch_2");
let pbcl_2 = document.getElementById("pbcl_2");
let pbch_3 = document.getElementById("pbch_3");
let pbcl_3 = document.getElementById("pbcl_3");








pbch_1.addEventListener('mouseover' , function(){
  pbch_1.style.backgroundColor = "#2b076E"
  pbcl_1.style.backgroundColor = "#0000ff"
  pbcl_1.style.color = "#fff"
  pbcl_1.style.border = "none"
})
pbch_1.addEventListener('mouseout' , function(){
  pbch_1.style.backgroundColor = "#2b076E"
  pbcl_1.style.backgroundColor = "#fff"
  pbcl_1.style.color = "#0000ff"
})




pbch_2.addEventListener("mouseover" , function(){
  pbch_2.style.backgroundColor = "#2B076E"
  pbch_2.style.color = "#fff"
  pbcl_2.style.color = "#000"
  pbcl_2.textContent = "start mining"
  pbcl_2.style.border = "none"
  pbcl_2.style.color = "white"
  pbcl_2.style.backgroundColor = "blue"
})

pbch_2.addEventListener("mouseout" , function(){
  pbch_2.style.backgroundColor = "#fff"
  pbch_2.style.color = "#000"
  pbcl_2.textContent = ">"
  pbcl_2.style.border = "1px solid lightgrey"
  pbcl_2.style.padding = "20px 22px"
  pbcl_2.style.backgroundColor = "#fff"
  pbcl_2.style.color = "#000"
})



pbch_3.addEventListener("mouseover" , function(){
  pbch_3.style.backgroundColor = "#2B076E"
  pbch_3.style.color = "#fff"
  pbcl_3.style.color = "#000"
  pbcl_3.textContent = "start mining"
  pbcl_3.style.border = "none"
  pbcl_3.style.color = "white"
  pbcl_3.style.backgroundColor = "blue"
})

pbch_3.addEventListener("mouseout" , function(){
  pbch_3.style.backgroundColor = "#fff"
  pbch_3.style.color = "#000"
  pbcl_3.style.border = "1px solid lightgrey"
  pbcl_3.textContent = ">"
  pbcl_3.style.padding = "20px 22px"
  pbcl_3.style.backgroundColor = "#fff"
  pbcl_3.style.color = "#000"
})


/*
pbch_3.addEventListener('mouseover' , function(){
  pbch_3.style.backgroundColor = "#fff"
  pbch_3.style.color = "black"
  pbcl_3.textContent = "start mining >"
  pbcl_3.style.backgroundColor = "#3b82f6"
  pbcl_3.style.width = "180px"
  pbcl_3.style.borderRadius ="50px"
  pbcl_3.style.color = "black"
  pbcl_3.style.padding = "20px"
})
pbch_3.addEventListener('mouseout' , function(){
  pbch_3.style.backgroundColor = "purple"
  pbch_3.style.color = "#000"
  pbcl_3.textContent = ">"
  pbcl_3.style.backgroundColor = "#fff"
  pbcl_3.style.width = "180px"
  pbcl_3.style.color = "#000"
})

pbch_1.addEventListener('mouseover' , function(){
  pbch_1.style.backgroundColor = "#2b076E"
  pbch_1.style.color = "#fff"
  pbcl_1.textContent = "start mining"
  pbcl_1.style.backgroundColor = "#3b82f6"
  
  pbcl_1.style.borderRadius ="50px"
  pbcl_1.style.color = "#fff"
  pbcl_1.style.padding = "20px"
})
pbch_1.addEventListener('mouseout' , function(){
  pbch_1.style.backgroundColor = "#fff"
  pbch_1.style.color = "#000"
  pbcl_1.textContent = ''
  pbcl_1.style.backgroundColor = "#fff"
  pbcl_1.style.padding = "20px"
  pbcl_1.style.color = "#000"
  pbcl_1.style.borderRadius = "50%"
  pbcl_1.style.width = "0"
})

pbch_2.addEventListener('mouseover' , function(){
  pbch_2.style.backgroundColor = "#2b076E"
  pbch_2.style.color = "#fff"
  pbcl_2.textContent = "start mining >"
  pbcl_2.style.backgroundColor = "#3b82f6"
  pbcl_2.style.width = "180px"
  pbcl_2.style.borderRadius ="50px"
  pbcl_2.style.color = "#fff"
  pbcl_2.style.padding = "20px"
})
pbch_2.addEventListener('mouseout' , function(){
  pbch_2.style.backgroundColor = "#fff"
  pbch_2.style.color = "#000"
  pbcl_2.textContent = ">"
  pbcl_2.style.backgroundColor = "#fff"
  pbcl_2.style.width = "180px"
  pbcl_2.style.color = "#3B82F6"
})
*/