const scrollToElem = (querySelector) => {
    const element = document.querySelector(querySelector);
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        document.querySelector('.cards_to-top').style.display = 'block';
    } else {
        document.querySelector('.cards_to-top').style.display = 'none';
    }
    if (window.innerWidth < 1024) {
        document.querySelector('.cards_to-top').style.display = 'none';
    }
});