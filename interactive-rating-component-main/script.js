let one = document.querySelector('#one');
let two = document.querySelector('#two');
let three = document.querySelector('#three');
let four = document.querySelector('#four');
let five = document.querySelector('#five');
let ratings= document.getElementsByClassName('ratings');

let submitBtn = document.querySelector('#submit-button');
let card1 = document.querySelector('.card1');
let card2 = document.querySelector('#card2');
let rating= document.querySelector('#rating');




submitBtn.addEventListener('click', submit);

one.addEventListener('click', ()=>{
  rating.innerHTML = one.innerHTML;

})

two.addEventListener('click', ()=>{
  rating.innerHTML = two.innerHTML;
})

three.addEventListener('click', ()=>{
  rating.innerHTML = three.innerHTML;
})

four.addEventListener('click', ()=>{
  rating.innerHTML = four.innerHTML;
})

five.addEventListener('click', ()=>{
  rating.innerHTML =  five.innerHTML;
})


//Functions

function submit() {
    const visibility = card2.getAttribute('data-visible');
  if(visibility === 'false'){
    card2.setAttribute('data-visible', true);
    card2.setAttribute('aria-expanded', true);
    card2.style.display="block";
    card1.style.display='none';

  }
  else{
    card2.setAttribute('data-visible', false);
    card2.setAttribute('aria-expanded', false);

  }
}
