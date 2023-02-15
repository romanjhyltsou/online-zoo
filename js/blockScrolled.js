const blockScrolled = () => {
    const disableScroll = ()=> {
        document.body.dataset.scrollY = window.scrollY;
        const scrollWidth = window.innerWidth - document.body.offsetWidth
    
        document.body.style.cssText = `
        position:relative;
        left:0;
        width:100%;
        overflow:hidden;
        padding-right:${scrollWidth}px;
        `;
    };
    
    disableScroll();

};
    
export default blockScrolled;