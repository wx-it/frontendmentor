const productBtn = document.querySelector('#product-btn');
const productDropdown= document.querySelector('.product-dropdown');
const arrow1 = document.querySelector('#arrow1');
const mobileArrow1 = document.querySelector('#mobile-arrow1');

productBtn.addEventListener('click', ()=>{
    const visibility = productDropdown.getAttribute('data-visible');
    const Avisibility = arrow1.getAttribute('data-visible');

    if(visibility === 'false' && Avisibility == 'false'){
        productDropdown.setAttribute('data-visible', true);
        productBtn.setAttribute('aria-expanded', true);
        arrow1.setAttribute('data-visible', true);
        mobileArrow1.setAttribute('data-visible', true);
      } else{
        productDropdown.setAttribute('data-visible', false);
        productBtn.setAttribute('aria-expanded', false);
        arrow1.setAttribute('data-visible', false);
        mobileArrow1.setAttribute('data-visible', false);
      }
      
});


/*......................DROPDOWN 2.............*/

const companyBtn = document.querySelector('#company-btn');
const companyDropdown= document.querySelector('.company-dropdown');
const arrow2 = document.querySelector('#arrow2');
const mobileArrow2 = document.querySelector('#mobile-arrow2');


companyBtn.addEventListener('click', ()=>{
  const visibility = productDropdown.getAttribute('data-visible');
  const Avisibility = arrow2.getAttribute('data-visible');

  if(visibility === 'false' && Avisibility == 'false'){
      companyDropdown.setAttribute('data-visible', true);
      companyBtn.setAttribute('aria-expanded', true);
      arrow2.setAttribute('data-visible', true);
      mobileArrow2.setAttribute('data-visible', true);

    } else{
      companyDropdown.setAttribute('data-visible', false);
      companyBtn.setAttribute('aria-expanded', false);
      arrow2.setAttribute('data-visible', false);
      mobileArrow2.setAttribute('data-visible', false);
    }
      
});


/*......................DROPDOWN 3.............*/

const connectBtn = document.querySelector('#connect-btn');
const connectDropdown= document.querySelector('.connect-dropdown');
const arrow3 = document.querySelector('#arrow3');
const mobileArrow3 = document.querySelector('#mobile-arrow3');

connectBtn.addEventListener('click', ()=>{
  const visibility = productDropdown.getAttribute('data-visible');
    const Avisibility = arrow3.getAttribute('data-visible');

    if(visibility === 'false' && Avisibility == 'false'){
        connectDropdown.setAttribute('data-visible', true);
        connectBtn.setAttribute('aria-expanded', true);
        arrow3.setAttribute('data-visible', true);
        mobileArrow3.setAttribute('data-visible', true);
      } else{
        connectDropdown.setAttribute('data-visible', false);
        connectBtn.setAttribute('aria-expanded', false);
        arrow3.setAttribute('data-visible', false);
        mobileArrow3.setAttribute('data-visible', false);
      }
});


/*..............MOBILE MENU...............*/

const menuBtn = document.getElementById('menu-btn');
const navBar = document.getElementById('navbar');

menuBtn.addEventListener('click', ()=>{
  const visibility = navBar.getAttribute('data-visible');
    if(visibility === 'false'){
        navBar.setAttribute('data-visible', true);
        menuBtn.setAttribute('aria-expanded', true);
      } else if(visibility === 'true'){
          navBar.setAttribute('data-visible', false);
          menuBtn.setAttribute('aria-expanded', false);
      }
});