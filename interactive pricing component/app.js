
const monthly = document.querySelector('#monthly');
const yearly = document.querySelector('#yearly');
const views = document.querySelector('#views');
const price = document.querySelector('#price');
const slider = document.querySelector('#slider');
const switchValue = document.querySelector('.switch');

//switch between the two

switchValue.addEventListener('change', e => {
  if(e.target.checked === true) {
      sliderYear();
    }
    if(e.target.checked === false) {
    sliderMonth();
  }
});

//Note: create a setPrice function for the slider event listener.

slider.addEventListener('mouseup', sliderMonth);

function sliderMonth() {
    const value = parseInt(this.value);
    console.log(value);
    switch (value) {
        case 1:
            views.textContent = 10,'K';
            price.textContent = 8;
            break;
        
            case 2:
                views.textContent = 50,'K';
                price.textContent = 12;
                break;
    
                case 3:
                    views.textContent = 100,'K';
                    price.textContent = 16;
                    break;
    
                    case 4:
                        views.textContent = 500,'K';
                        price.textContent = 24;
                        break;
    
                        case 5:
                            views.textContent = 1,'M';
                            price.textContent = 36;
                            break;
    
    
                             break;
    }
}

//fix and finish this

function sliderYear(value, price) {
    switch (value) {
        case 1:
            newPrice = discount(price);
            break;
    
            break;
    }

}

function discount(price) {
    let dis = sliderV.value / 100 * 0.25;
    return `$${dis}.00`;
}