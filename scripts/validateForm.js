const inputs_wrappers = document.querySelectorAll('.sign-up_form-input');
let errors = 0;

const input_surname = document.querySelector('#surname');
const input_name = document.querySelector('#name');
const input_patronymic = document.querySelector('#patronymic');
const input_email = document.querySelector('#email');
const input_phone = document.querySelector('#phone');
const input_place = document.querySelector('#place');
const input_region = document.querySelector('#region');
const input_city = document.querySelector('#city');
const input_checkbox = document.querySelector('#checkbox');

const inputs = {
    "surname": {
        sel: input_surname,
        err: false
    },
    "name": {
        sel: input_name,
        err: false
    },
    "patronymic": {
        sel: input_patronymic,
        err: false
    },
    "email": {
        sel: input_email,
        err: false
    },
    "phone": {
        sel: input_phone,
        err: false
    },
    "place": {
        sel: input_place,
        err: false
    },
    "region": {
        sel: input_region,
        err: false
    },
    "city": {
        sel: input_city,
        err: false
    },
    "checkbox": {
        sel: input_checkbox,
        err: false
    }
};

for (key in inputs) {
    const input_item = inputs[key];
    const input = input_item.sel;
    const input_wrapper = input_item.sel.parentElement;
    input.addEventListener('change', () => {

        input_wrapper.classList.remove('input_error');
        input_wrapper.classList.remove('input_success');

        if (input.id === "surname" || input.id === "name" || input.id === "patronymic") {
            if (input.value.length < 2) {
                input_wrapper.classList.add('input_error');
                //inputs[key].err = true;
                inputs[key].err = true;
            }
            else {
                input_wrapper.classList.add('input_success');
                inputs[key].err = false;
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
                inputs[key].err = false;
            }
            else {
                input_wrapper.classList.add('input_error');
                inputs[key].err = true;
            }
        }
        else if (input.id === "phone") {
            if (input.value.toLowerCase().match(/^((8|\+7)[\- ]?)(\(?\d{3}\)?[\- ]?)(\(?\d{3}\)?[\- ]?)(\(?\d{2}\)?[\- ]?)(\(?\d{2}\)?[\- ]?)$/)
            ) {
                input_wrapper.classList.add('input_success');
                inputs[key].err = false;
            }
            else {
                input_wrapper.classList.add('input_error');
                inputs[key].err = true;
            }

        }

    });
}

const check_inputs = () => {

    for (key in inputs) {
        const input_item = inputs[key];
        const input = input_item.sel;
        const input_wrapper = input_item.sel.parentElement;

        if (input.value.length === 0) {
            input_wrapper.classList.add('input_error');
            inputs[key].err = true;
        }
        else if (input.value.length !== 0 && input_wrapper.classList.contains('input_error')) {
        }
        else {

            input_wrapper.classList.remove('input_error');
            inputs[key].err = false;
        }
    }
};


const form = document.querySelector('.sign-up_form');
const checkbox = document.querySelector('#checkbox');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    check_inputs();
    if (!checkbox.checked) {
        alert('Пожалуйста, подтвердите согласие с обработкой персональных данных');
    }
    if (Object.values(inputs).some(input => input.err) || !checkbox.checked) {
        return;
    }

    alert('Ваша заявка принята. Скоро мы с вами свяжемся');

});

