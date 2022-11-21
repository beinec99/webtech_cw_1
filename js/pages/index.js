window.addEventListener('scroll', () => {

    const pageYOffset = window.pageYOffset;

    const header = document.getElementById('my-header');

    if (pageYOffset > 45) {
        header.classList.add('header-scrolled');
    }else{
        header.classList.remove('header-scrolled');
    }

})