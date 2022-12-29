const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu') ; 
// this is how you make an event listener
btn.addEventListener("click", ()=> 
{
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})