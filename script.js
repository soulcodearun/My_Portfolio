const navbar= document.querySelector(".res-nav");
const header = document.querySelector(".header");
navbar.addEventListener("click",()=>{
    header.classList.toggle("active");
});
// window sroll
window.onscroll =()=>{
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
}