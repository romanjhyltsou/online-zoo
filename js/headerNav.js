const headerNav = () => {
const navListItems = document.querySelectorAll('.nav__list-item');
    
    navListItems.forEach( item => {
        item.addEventListener('click', ()=> {
            navListItems.forEach( (item, i) => { navListItems[i].classList.remove('nav__list-item-active');});
            item.classList.add('nav__list-item-active');
        });
        
    });
};

export default headerNav;