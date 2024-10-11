const scrollToElem = (querySelector) => {
    const element = document.querySelector(querySelector);
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
};