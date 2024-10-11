const inputs_wrappers = document.querySelectorAll('.sign-up_form-input');
let errors = 0;
inputs_wrappers.forEach(input_wrapper => {
    const input = input_wrapper.querySelector('input');
    input.addEventListener('change', () => {

        input_wrapper.classList.remove('input_error');
        input_wrapper.classList.remove('input_success');

        if (input.id === "surname" || input.id === "name" || input.id === "patronymic") {
            if (input.value.length < 2) {
                input_wrapper.classList.add('input_error');
                errors++;
            }
            else {
                input_wrapper.classList.add('input_success');
                errors--;
            }
        }
        else if (input.id === "place" || input.id === "region" || input.id === "city") {
            if (input.value.length) {
                input_wrapper.classList.add('input_success');
            }
        }
        else if (input.id === "email") {
            if (input.value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            ) {
                input_wrapper.classList.add('input_success');
                errors--;
            }
            else {
                input_wrapper.classList.add('input_error');
                errors++;
            }
        }
        else if (input.id === "phone") {
            if (input.value.toLowerCase().match(/^((8|\+7)[\- ]?)(\(?\d{3}\)?[\- ]?)(\(?\d{3}\)?[\- ]?)(\(?\d{2}\)?[\- ]?)(\(?\d{2}\)?[\- ]?)$/)
            ) {
                input_wrapper.classList.add('input_success');
                errors--;
            }
            else {
                input_wrapper.classList.add('input_error');
                errors++;
            }

        }

    });
});

const check_inputs = () => {
    inputs_wrappers.forEach(input_wrapper => {
        const input = input_wrapper.querySelector('input');

        if (input.value.length === 0) {
            input_wrapper.classList.add('input_error');
            errors++;
        }
        else if (input.value.length !== 0 && input_wrapper.classList.contains('input_error')) {
        }
        else {

            input_wrapper.classList.remove('input_error');
            errors--;
        }
    });
};


const form = document.querySelector('.sign-up_form');
const checkbox = document.querySelector('#checkbox');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    check_inputs();
    if (!checkbox.checked) {
        alert('Пожалуйста, подтвердите согласие с обработкой персональных данных');
    }
    if (errors > 0 || !checkbox.checked) {
        return;
    }

    alert('Ваша заявка принята. Скоро мы с вами свяжемся');

});

