// Nav toggle
const navbar = document.getElementById('nav-toggle');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');


function toggleNav(){
    const visible = navbar.getAttribute('data-visible');
    if(visible == 'true'){
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

//cart

const cartBtn = document.getElementById('cart-btn');
const cartToggle = document.getElementById('cart-toggle');

function toggleCart(){
    const toggle = cartToggle.getAttribute('data-toggle');
    if(toggle == 'true'){
        cartToggle.setAttribute('data-toggle', false);
    } else{
        cartToggle.setAttribute('data-toggle', true);
    }   
}

cartBtn.addEventListener('click', toggleCart)

//images slide
const previous = document.getElementById('previous');
const next = document.getElementById('next');
const products = document.querySelectorAll('#img-display');
console.log(products)
function nextImage() {
    products.forEach((img)=>{
     img.style.transform='translatex(100%)';
    })
}
next.addEventListener('click', nextImage)



function prevImage() {
    products.forEach((img)=>{
        img.style.transform='translatex(-100%)';
  })
}
previous.addEventListener('click', prevImage)



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


//add items to cart 

const addCart = document.getElementById('add-cart');
const n = document.getElementById('n');
const multiply = document.getElementById('multiply');
const output = document.getElementById('output');
const emptyCart = document.getElementById('empty-cart');
const fullCart = document.getElementById('full-cart');


n.style.display='none';

function incrementCart() {
    if(n.textContent = count){
        n.style.display='block';
    }
    if(n.textContent == 0){
        n.style.display='none';
    }

    multiply.textContent = count;
    output.textContent = count * 125;


    if(count == 0 ){
        fullCart.style.display="none";
    } else if(count > 0){
        emptyCart.style.display="none";
        fullCart.style.display="flex";
    }
}

addCart.addEventListener('click', incrementCart)

//delete cart from checkout

const deleteBtn = document.getElementById('delete');

function deleteCart() {
    setTimeout(() => {
        fullCart.style.display="none";
        emptyCart.style.display="block";
        n.style.display='none';
    }, 500);
}

deleteBtn.addEventListener('click', deleteCart)


