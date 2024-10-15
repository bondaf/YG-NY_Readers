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

    console.log(window.innerWidth);
    if (window.innerWidth < 1439) {
        document.querySelector('.cards_to-top').style.display = 'none';
    }
});