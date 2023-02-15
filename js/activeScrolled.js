const activeScrolled = () => {
    const enableScroll = ()=> {
        document.body.style.cssText = '';
        window.scroll({
            top:document.body.dataset.scrollY
        });
    };
    enableScroll();

};
    
export default activeScrolled;