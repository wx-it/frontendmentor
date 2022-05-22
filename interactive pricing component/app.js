
const views = document.querySelector('#views');
const price = document.querySelector('#price');
const priceDesktop = document.querySelector('#price-desktop');
const slider = document.querySelector('#slider');
const switchValue = document.querySelector('#switch');

window.addEventListener("DOMContentLoaded", priceSet, changeState);
let yearSwitch = true;


switchValue.addEventListener('click', ()=>{changeState();});
slider.addEventListener('change', priceSet);


function changeState() {
    if (switchValue.checked) {
        yearSwitch = false;
        priceSet();
    }
     if(!switchValue.checked){
        yearSwitch = true;
        priceSet();
    }
}



function getPrice(state, value, price) {
    let newPrice;
    if (state) {
        switch (value) {
            case 1:
                newPrice = `$${price}.00`;
                break;
            case 2:
                newPrice = `$${price}.00`;
                break;
            case 3:
                newPrice = `$${price}.00`;
                break;
            case 4:
                newPrice = `$${price}.00`;
                break;
            case 5:
                newPrice = `$${price}.00`;
                break;

            default:
                break;
        }
    }
    if (!state) {
        switch (value) {
            case 1:
                newPrice = discount(price);
                break;
            case 2:
                newPrice = discount(price);
                break;
            case 3:
                newPrice = discount(price);
                break;
            case 4:
                newPrice = discount(price);
                break;
            case 5:
                newPrice = discount(price);
                break;

            default:
                break;
        }
    }
    return newPrice;
}

function priceSet() {
    let value = parseInt(slider.value);
        switch (value) {
            case 1:
                views.textContent = '10K';
                price.textContent =  getPrice(yearSwitch ,value, 8);
                priceDesktop.textContent = price.textContent;
                break;
            
            case 2:
                views.textContent = '50K';
                price.textContent = getPrice(yearSwitch, value, 12);
                priceDesktop.textContent = price.textContent;
                break;
        
            case 3:
                views.textContent = '100K';
                price.textContent = getPrice(yearSwitch, value, 16);
                priceDesktop.textContent = price.textContent;
                break;
        
            case 4:
                views.textContent = '500K';
                price.textContent = getPrice(yearSwitch, value, 24);
                priceDesktop.textContent = price.textContent;
                break;
        
            case 5:
                views.textContent = '1M';
                price.textContent = getPrice(yearSwitch, value, 36);
                priceDesktop.textContent = price.textContent;
                break;
        
            default:
            break;
        }
    

       
    
}

function discount(price) {
    money = price - price * 0.25;
    return `$${money}.00`;
}

slider.value = 3;
switchValue.checked = false;
