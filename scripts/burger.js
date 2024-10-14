const button_open = document.querySelector('.burger');
const button_close = document.querySelector('.burger_menu-close');
const menu = document.querySelector('.burger_menu');

const open = () => {
    menu.style.display = 'flex';
    button_open.style.display = 'none';
    button_close.style.display = 'block';
    document.querySelector('body').style.overflow = 'hidden';
};

const close = () => {
    menu.style.display = 'none';
    button_open.style.display = 'block';
    button_close.style.display = 'none';
    document.querySelector('body').style.overflow = 'auto';
};

button_open.addEventListener('click', () => {
    open();
});

button_close.addEventListener('click', () => {
    close();
});

for (let element of menu.children[1].children) {
    element.addEventListener('click', () => {
        setTimeout(() => {
            close();
        }, 200);
    });
}

for (let element of menu.children[2].children) {
    element.addEventListener('click', () => {
        setTimeout(() => {
            close();
        }, 200);
    });
}
