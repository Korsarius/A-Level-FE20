document.addEventListener('DOMContentLoaded', () => {

    'use strict';

    const btnLogin = document.getElementById('check');
    const result = document.getElementById('result');

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Первое задание ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    let sum = 0;   // сумма батонов
    let value = 0; // количество батонов, введенных пользователем для расчетов

    while (true) {

        value = + prompt("Введите количество батонов", ''); // = +, чтобы преобразовать строку в число

        if (!value) break; // выход из икта, если пользователь ничего не введет (false), пока пользователь не нажмет отмену

        sum += value;

    }
    alert('Сумма: ' + sum); // вывод суммы

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Второе задание ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    let credentials = {
        login: 'admin',
        password: 'qwerty',
    };

    //функции генерирования результата проверки логина и пароля
    const generateResultTrue = () => {

        result.textContent = '';

        result.innerHTML += `
            <div style="background-color: green;">
            <span>Верно</span>
            </div>`;
    };

    const generateResultFalse = () => {

        result.textContent = '';

        result.innerHTML += `
            <div style="background-color: red;">
            <span>Неверно</span>
            </div>`;
    };

    btnLogin.addEventListener('click', (event) => {

        let login = document.getElementById('login').value;
        let password = document.getElementById('password').value;

        if (login == credentials.login && password == credentials.password)
            generateResultTrue();
        else
            generateResultFalse();
    });
});