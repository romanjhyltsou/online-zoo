const pickDonate = () => {
    try{
    const pickDonatePriceBalls = document.querySelectorAll('.pick-donate__price-ball');
    let   pickDonateInput = document.querySelector('.pick-donate__input');

function switchCircle(item){
    pickDonateInput.value = item.getAttribute('data');
    pickDonatePriceBalls.forEach(item => {item.classList.remove('pick-donate__price-circle-active');});
    item.classList.add('pick-donate__price-circle-active');
}

pickDonatePriceBalls.forEach(item => {
    item.addEventListener('click', function(){
        switchCircle(item);
    });
});

    pickDonateInput.addEventListener('input', function(){
        this.value = this.value.substr(0, 4);
        pickDonatePriceBalls.forEach(item => {

            switch (pickDonateInput.value) {
                case '5000':
                    if(item.getAttribute('data') === '5000'){
                        switchCircle(item);
                    }
                  break;
                case '2000':
                    if(item.getAttribute('data') === '2000'){
                        switchCircle(item);
                    }
                  break;
                case '1000':
                    if(item.getAttribute('data') === '1000'){
                        switchCircle(item);
                    }
                  break;
                case '500':
                    if(item.getAttribute('data') === '500'){
                        switchCircle(item);
                    }
                  break;
                case '250':
                    if(item.getAttribute('data') === '250'){
                        switchCircle(item);
                    }
                break;
                case '100':
                    if(item.getAttribute('data') === '100'){
                        switchCircle(item);
                    }
                break;
                case '50':
                    if(item.getAttribute('data') === '50'){
                        switchCircle(item);
                    }
                break;
                case '25':
                    if(item.getAttribute('data') === '25'){
                        switchCircle(item);
                    }
                break;
                default:
                    pickDonatePriceBalls.forEach(item => {item.classList.remove('pick-donate__price-circle-active');});
                break;
            }

        });
    });
  
}catch(err){
    console.warn(`This is not donate page!:${err}`);
}

};   
export default pickDonate;
