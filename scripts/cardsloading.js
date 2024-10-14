const cards = document.querySelectorAll('.card');

document.addEventListener("DOMContentLoaded", function () {
    // 3 4 6
    const cards_count = window.innerWidth <= 960 ? 3 : window.innerWidth < 1440 ? 4 : 6;
    for (let i = cards_count; i < cards.length; i++) {

        cards[i].style.display = 'none';
    }
});

document.querySelector('.cards_button').addEventListener('click', () => {
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = 'block';
    }

    document.querySelector('.cards_button').style.display = 'none';


});