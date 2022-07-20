// Nav toggle
const navbar = document.getElementById('nav-toggle');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');


function toggleNav(){
    const visible = navbar.getAttribute('data-visible');
    if(visible == true){
        navbar.setAttribute('data-visible', false);
    } else{
        navbar.setAttribute('data-visible', true);
    }   
}

function closeNav() {
    const visible = navbar.getAttribute('data-visible');
    if(visible == true){
        navbar.setAttribute('data-visible', true);
    } else{
        navbar.setAttribute('data-visible', false);
    }   
}

menuBtn.addEventListener('click', toggleNav);
closeBtn.addEventListener('click', closeNav);


//images slide
const previous = document.getElementById('previous');
const next = document.getElementById('next');



/*count*/
const dec = document.getElementById('dec');
const inc = document.getElementById('inc');
const num = document.getElementById('num');
let count = 0;
num.textContent = count;

function increment() {
    if (count < 50) {
       count++;
    } else if (count = 50) {
        count = 0;
    }
    num.textContent = count; 
}

inc.addEventListener('click', increment);

function decrement() {
    if (count > 0) {
       count--;
    } else if (count = 50) {
        count = 0;
    }
    num.textContent = count; 
}

dec.addEventListener('click', decrement);
