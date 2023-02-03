const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');

function error(input, message) {
    input.className = 'form-control is-invalid';
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';


}

function success(input) {
    input.className = 'form-control is-valid';
}

function checkEmail(input) {
    const re =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


    if (re.test(input.value)) {
        success(input);
    } else {
        error(input, 'hatali bir mail adresi');
    }
};

function checkRequired(input) {
    input.forEach(function (input) {
        if (input.value === '') {
            error(input, `${input.id} is required.`);
        } else {
            success(input);
        }
    });

}

function checkLength(input, min, max) {
    if (input.value.length < min) {/* input value değerinin .length özellikli (eğer gelen bilgi min küçükse,bu durumda bir hata gösterebiliriz).*/
        error(input, `${input.id} en az ${min} karakter olmalidir`)
    } else if (input.value.length > max) {
        error(input, `${input.id} en fazla ${max} karakter olmalidir`)
    } else {
        success(input);
    }
}
function checkPasswords(input1, input2) {
    if (input1.value !== input2.value) {
        error(input2, 'Parolalar eşleşmiyor');
    }
}


form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkRequired([username, email, password, repassword]);
    checkEmail(email);
    checkLength(username, 7, 15);
    checkLength(password, 7, 12);
    checkPasswords(password, repassword);





});