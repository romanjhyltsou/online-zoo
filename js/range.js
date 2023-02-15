import blockScrolled from './blockScrolled.js';
import activeScrolled from './activeScrolled.js';
const range = () => {
const dataTestimon = [
    {   
        "photo": "user-1.png",
        "name": "Michael John ",
        "local": "Local Austria",
        "day": "Today",
        "text": `The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
        The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for `
  
    },
    {   
        "photo": "user-2.png",
        "name": "Oskar Samborsky ",
        "local": "Local Austria",
        "day": "Yesterday",
        "text": `Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. 
        The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for `
  
    },
    {   
        "photo": "user-3.png",
        "name": "Fredericka Michelin ",
        "local": "Local Austria",
        "day": "Yesterday",
        "text": `The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
        The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met.
        The best online zoo I’ve met. My son delighted very much ljves to `
  
    },
    {   
        "photo": "user-4.png",
        "name": "Mila Riksha ",
        "local": "Local Austria",
        "day": "Yesterday",
        "text": `My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.
        The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf `
  
    },
    {   
        "photo": "user-5.png",
        "name": "Mila Riksha ",
        "local": "Local Austria",
        "day": "Yesterday",
        "text": `My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.
        The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf `
  
    },
    {   
        "photo": "user-6.png",
        "name": "Mila Riksha ",
        "local": "Local Austria",
        "day": "Yesterday",
        "text": `My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.
        The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf `
  
    },
    {   
        "photo": "user-7.png",
        "name": "Mila Riksha ",
        "local": "Local Austria",
        "day": "Yesterday",
        "text": `My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.
        The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf `
  
    },
    {   
        "photo": "user-8.png",
        "name": "Mila Riksha ",
        "local": "Local Austria",
        "day": "Yesterday",
        "text": `My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.
        The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf `
  
    },
    {   
        "photo": "user-9.png",
        "name": "Mila Riksha ",
        "local": "Local Austria",
        "day": "Yesterday",
        "text": `My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.
        The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf `
  
    },
    {   
        "photo": "user-10.png",
        "name": "Mila Riksha ",
        "local": "Local Austria",
        "day": "Yesterday",
        "text": `My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.
        The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf `
  
    },
    {   
        "photo": "user-11.png",
        "name": "Mila Riksha ",
        "local": "Local Austria",
        "day": "Yesterday",
        "text": `My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.
        The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf `
  
    }
];
try{
    const testimonWrapperCard = document.querySelector('.testimon__wrapper-card'),
    testimonRange = document.querySelector('.testimon__range'),
    popUpCard = document.querySelector('.pop-up-card');


let sum = 0;

const createCard = data => {

  const photo  = data.photo,
        name  = data.name,
        local  = data.local,
        day = data.day,
        text  = data.text;

  const div = document.createElement('div');

  div.classList.add('testimon__card');

  div.innerHTML = `
                  <div class="testimon__user">
                      <img class="testimon__user-photo" src="assets/img/${photo}" alt="user">
                      <div class="testimon__user-text">
                          <div class="testimon__user-name">${name}</div>
                          <div class="testimon__user-wrapper-local">
                              <div class="testimon__user-local">${local}</div>
                              <div class="testimon__user-dot"></div>
                              <div class="testimon__user-day">${day}</div>
                          </div>
                      </div>
                  </div>
                  <div class="testimon__comment-wrapper"> 
                      <p class="testimon__comment">
                          ${text}
                      </p>
                  </div>
              `;
  return div;
};

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
  popUpCard.textContent = '';
}


function closePopUp(e){
  let target = e.target;

  if (target.classList.contains('pop-up-card') ||
  target.classList.contains('nav-mob__close-img')){ 
      popUpCard.style.display ='none';
      popUpCard.innerHTML = '';
      activeScrolled();
  }
}
const renderCard = data => {
  testimonWrapperCard.textContent = '';
  
  shuffle(data);

  data.forEach( (item, i)=> {
      let card = createCard(item);
      testimonWrapperCard.append(card);

      card.addEventListener('click', function() {
          const div = document.createElement('div');
          div.classList.add('testimon__card');
          div.classList.add('pop-up-testimon__card');

          div.innerHTML = this.innerHTML;
          div.innerHTML += `
          <div class="nav-mob__close-img-wrapper nav-mob__close-img-wrapper-pop-up">
              <img class="nav-mob__close-img nav-mob__close-img-close" src="assets/img/icon/close-pop-up.svg" alt="close">
          </div>
          `;
          popUpCard.append(div);
          document.querySelector('.pop-up-testimon__card').style.margin = '0 auto';
          popUpCard.style.display ='flex';

          let closePopUpImg = document.querySelector('.nav-mob__close-img-wrapper-pop-up');

          
          closePopUpImg.addEventListener('click', closePopUp);
          popUpCard.addEventListener('click', closePopUp);
          blockScrolled();

      });
});

};

renderCard(dataTestimon);
//--------------------------------------------------------------------------------------------------  
const cards = document.querySelectorAll('.testimon__card');
const widthCard = parseInt(window.getComputedStyle(cards[0]).maxWidth);
const fullLengthCard = widthCard * cards.length + (33 * cards.length);
testimonWrapperCard.style.width = `${fullLengthCard-1}px`;
//--------------------------------------------------------------------------------------------------
  function rangeValue(ShiftCard){
      let newValue = testimonRange.value;
      sum = ShiftCard * newValue;
      testimonWrapperCard.style.left = '-' + sum + 'px';
  }
//--------------------------------------------------------------------------------------------------
if(window.innerWidth > 1186){
  testimonRange.addEventListener("input", ()=>{
      rangeValue(298);
  });
}
else if(window.innerWidth < 1186  && window.innerWidth > 1001){
  testimonRange.addEventListener("input", ()=>{
      rangeValue(330.2);
  });
}else if(window.innerWidth <= 1001 && window.innerWidth > 995){
  testimonRange.addEventListener("input", ()=>{
      rangeValue(328.5);
  });
}else if(window.innerWidth <= 995){
  testimonWrapperCard.style.maxWidth = `918px`;
  testimonWrapperCard.style.width = `100%`;
}

window.addEventListener(`resize`, () => {
  if(window.innerWidth > 1186){
      testimonRange.addEventListener("input", ()=>{
          rangeValue(298);
      });
  }
  else if(window.innerWidth < 1186 && window.innerWidth > 1001){
      testimonRange.addEventListener("input", ()=>{
          rangeValue(330.2);
      });
  }else if(window.innerWidth <= 1001 && window.innerWidth > 995){
      testimonRange.addEventListener("input", ()=>{
          rangeValue(328.5);
      });
  }else if(window.innerWidth <= 995){
      testimonWrapperCard.style.maxWidth = `918px`;
      testimonWrapperCard.style.width = `100%`;
  }
});
}catch(err){
    console.warn(`This is not main page!:${err}`);
}

};
    
    export default range;