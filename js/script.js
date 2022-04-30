
const fdowns = document.querySelectorAll('.fdown');



observer = new IntersectionObserver((entries) =>{
  
  entries.forEach(entry => {
  if(entry.intersectionRatio > 0){
    entry.target.style.animation = `float-down 1.7s forwards ease-in-out`;
     // ${entry.target.dataset.delay}
  }
  else {
     entry.target.style.animation = 'none';
  }
  })

})
// observer.observe(imgs);
fdowns.forEach(fdown => {
  observer.observe(fdown)
})

const fups = document.querySelectorAll('.fup');
observer = new IntersectionObserver((entries) =>{
  
  entries.forEach(entry => {
  if(entry.intersectionRatio > 0){
    entry.target.style.animation = `float-up 1s forwards ease-in-out`;
  }
  else {
     entry.target.style.animation = 'none';
  }
  })

})
fups.forEach(fup => {
  observer.observe(fup)
})


const flefts = document.querySelectorAll('.fleft');
observer = new IntersectionObserver((entries) =>{
  
  entries.forEach(entry => {
  if(entry.intersectionRatio > 0){
    entry.target.style.animation = `float-left 1s forwards ease-in-out`;
  }
  else {
     entry.target.style.animation = 'none';
  }
  })

})
flefts.forEach(fleft => {
  observer.observe(fleft)
})

const frights = document.querySelectorAll('.fright');
observer = new IntersectionObserver((entries) =>{
  
  entries.forEach(entry => {
  if(entry.intersectionRatio > 0){
    entry.target.style.animation = `float-right 1s forwards ease-in-out`;
  }
  else {
     entry.target.style.animation = 'none';
  }
  })

})
frights.forEach(fright => {
  observer.observe(fright)
})


let openBtn = document.querySelector(".openSideNav");
openBtn.addEventListener("click", () => {
  showNav();
});
let closeBtn = document.querySelector(".closeBtn");
closeBtn.addEventListener("click", () => {
  hideNav();
});
function showNav(){
  document.querySelector("#about").style.opacity = "100%";
}
function hideNav(){
  document.querySelector("#about").style.opacity = "0";
}