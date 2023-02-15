const swiperSlide = document.querySelectorAll('.swiper-slide');
const data = [
  {
      "name": "giant Pandas",
      "native": "Native to Southwest China",
      "namebg": "giant Pandas",
      "countrybg": "Southwest China",
      "photo": "slider-1.png",
      "icon": "banana-bamboo-icon.svg"

  },
  {
      "name": "Two-toed Sloth",
      "native": "Mesoamerica, America",
      "namebg": "Two-toed Sloth",
      "countrybg": "South America",
      "photo": "slider-2.png",
      "icon": "meet-fish-icon.svg"

  },
  {
      "name": "Eagles",
      "native": "Native to South America",
      "namebg": "Eagles",
      "countrybg": "South America",
      "photo": "slider-3.png",
      "icon": "meet-fish-icon.svg"

  },
  {
      "name": "cheetahs",
      "native": "Native to Africa",
      "namebg": "Alligators",
      "countrybg": "Southeastern U. S.",
      "photo": "slider-4.png",
      "icon": "meet-fish-icon.svg"
  },
  {
      "name": "Gorillas",
      "native": "Native to Congo",
      "namebg": "Gorillas",
      "countrybg": "Congo",
      "photo": "slider-5.png",
      "icon": "banana-bamboo-icon.svg"
  },
  {
      "name": "Penguins",
      "native": "Native to Antarctica",
      "namebg": "Penguins",
      "countrybg": "Antarctica",
      "photo": "slider-6.png",
      "icon": "meet-fish-icon.svg"
  }
];




const createCard = data => {

  const name  = data.name,
        native  = data.native,
        namebg  = data.namebg,
        countrybg = data.countrybg,
        photo  = data.photo,
        icon  = data.icon;

  const div = document.createElement('div');

  div.classList.add('swiper-item');

  div.innerHTML = `
  <img class="swiper-item__img" src="assets/img/${photo}" alt="">
                    
  <div class="swiper-item__discrip">
      <div class="swiper-item__discrip-text">
          <div class="swiper-item__discrip-name">${name}</div>
          <div class="swiper-item__discrip-native">${native}</div>
      </div>

      <div class="swiper-item__food">
        <img src="assets/img/icon/${icon}" alt="">
      </div>

  </div>

  <div class="swiper-item__bg">
      <div class="swiper-item__bg-wrapper">
          <div class="swiper-item__bg-name">${namebg}</div>
          <div class="swiper-item__bg-country">${countrybg}</div>
          <a class="swiper-item__btn-online" href="#">Whatch online</a>
      </div>
  </div>
  `;
  return div;
};

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

const renderCard = data => {
  swiperSlide.forEach(item => {
    item.textContent = '';
  });
    shuffle(data);
  let card = [];
  data.forEach( (item, i )=> {
   card[i] = createCard(item);
    
  });
  swiperSlide[0].append(card[0]);
  swiperSlide[0].append(card[1]);
  swiperSlide[1].append(card[2]);
  swiperSlide[1].append(card[3]);
  swiperSlide[2].append(card[4]);
  swiperSlide[2].append(card[5]);
  
};
renderCard(data)

document.querySelector('.swiper-button-prev').addEventListener('click', ()=>{
  renderCard(data);
});
document.querySelector('.swiper-button-next').addEventListener('click', ()=>{
  renderCard(data);
});



