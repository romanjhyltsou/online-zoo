import blockScrolled from './blockScrolled.js';
import activeScrolled from './activeScrolled.js';

const navMob = () => {
    
const navMobClose = document.querySelector('.nav-mob__close-img'),
      navMob = document.querySelector('.nav-mob'),
      headerBurger = document.querySelector('.header__burger'),
      navMobItem = document.querySelectorAll('.nav-mob__item a');
      document.head.nextSibling;
      
function navClose(e){
    let target = e.target;

    if (target.classList.contains('nav-mob') ||
    target.classList.contains('nav-mob__close-img')){ 
        navMob.classList.remove('nav-mob__active');
        activeScrolled();
    }
}

function navOpen(){
    navMob.classList.add('nav-mob__active');
    blockScrolled()
}

navMobItem.forEach(elem => {

    elem.addEventListener('click', (event)=> {
        navMob.classList.remove('nav-mob__active');
        navMobDonate.classList.remove('nav-mob__active');
    });
});

navMob.addEventListener('click', navClose);
headerBurger.addEventListener('click', navOpen);

};
    
export default navMob;