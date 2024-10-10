const cards = document.querySelectorAll('.card');

document.addEventListener("DOMContentLoaded", function () {
    for (let i = 6; i < cards.length; i++) {

        cards[i].style.display = 'none';
    }
});

document.querySelector('.cards_button').addEventListener('click', () => {
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = 'block';
    }


});