"use strict";


document.addEventListener('DOMContentLoaded', () => {

    // 1 задание 

    const shopCart = document.querySelector('.shop__cart');
    const shopCartDelete = shopCart.querySelector('.shop__cart-delete');
    const shopCartChange = shopCart.querySelector('.shop__cart-change');
    const shopCartSortUp = shopCart.querySelector('.shop__cart-sort-up');
    const shopCartSortDown = shopCart.querySelector('.shop__cart-sort-down');
    const shopCartInner = shopCart.querySelector('.shop__cart-inner');
    const shopProducts = [
        'item01',
        'item02',
        'item03',
        'item04',
        'item05',
        'item06',
        'item07',
        'item08',
        'item09',
        'item10'
    ];

    shopProducts.forEach(item => {
        let element = document.createElement('div');
        element.classList.add('shop__cart-item');
        element.textContent = item;
        shopCartInner.append(element);
    });

    // Функция по получению рандомного значения
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    // Изменение одного из элементов на другой
    shopCartChange.addEventListener('click', () => {
        if (shopProducts.length < 2) return;
        let firstItem = 0;
        let newItem = 0;
        while (firstItem == newItem) {
            newItem = getRandomInt(shopProducts.length);
        }
        [shopProducts[firstItem], shopProducts[newItem]] = [shopProducts[newItem], shopProducts[firstItem]];
        let elements = document.querySelectorAll('.shop__cart-item');
        let cnt = 0;
        elements.forEach(el => {
            el.textContent = shopProducts[cnt];
            cnt += 1;
        });
    });

    // Удаление первого элемента
    shopCartDelete.addEventListener('click', () => {
        if (shopProducts.length != 0) {
            shopProducts.splice(0, 1); // удаляем один элемент по индексу 1
            shopCart.querySelector('.shop__cart-item').remove();
        }
    });


    // 2 Фильтр
    const arr = [1, 24, 3, 5, 8, 1, 12, 32, 24, 32, 25, 7, 10, 3, 55];
    const array = document.querySelector(".array");
    const new_array = document.querySelector(".new_array");
    const array_button = document.querySelector("#ar");
    const a = document.querySelector("#a");
    const b = document.querySelector("#b");
    var array_txt = "";
    for (let i = 0; i < arr.length; i++) {
        array_txt += arr[i] + " ";
    }
    array.textContent = array_txt;

    function filterArray(arr, a, b) {
        let newArr = [];

        arr.forEach(item => {
            if (item >= a && item <= b) {
                newArr.push(item);
            }
        });

        return newArr;
    }

    array_button.addEventListener('click', () => {
        var txt_a = Number(a.value);
        console.log(txt_a);
        var txt_b = Number(b.value);
        var newArray = filterArray(arr, txt_a, txt_b);
        var txt = "";
        for (let i = 0; i < newArray.length; i++) {
            txt += newArray[i] + " ";
        }
        new_array.textContent = txt;

    })

    // 3 Сортировка на сайте по алфавиту

    shopCartSortUp.addEventListener('click', () => {
        shopProducts.sort();
        let elements = document.querySelectorAll('.shop__cart-item');
        let cnt = 0;
        elements.forEach(el => {
            el.textContent = shopProducts[cnt];
            cnt += 1;
        });
    });

    shopCartSortDown.addEventListener('click', () => {
        shopProducts.sort();
        shopProducts.reverse();
        let elements = document.querySelectorAll('.shop__cart-item');
        let cnt = 0;
        elements.forEach(el => {
            el.textContent = shopProducts[cnt];
            cnt++;
        });
    });


    // 4 задание

    const notif = document.querySelector('.notifs');
    const notifBtn = document.querySelector('.main_button');
    const notifInner = document.querySelector('.notif__inner');
    const notifCounter = document.querySelector('.notif__counter');
    const notifArr = [
        'one',
        'two',
        'boom xd',
    ];


    let numberNotif = 0;
    let counter = 0;

    function createNotif() {
        let element = document.createElement('div');
        element.classList.add('notif__item');

        if (numberNotif < notifArr.length) {
            element.textContent = notifArr[numberNotif];
            numberNotif++;
            counter++;
            notifInner.append(element);

        } else {
            numberNotif++;
            counter++;
        }
        notifCounter.textContent = counter;
    }

    let timerId = setInterval(createNotif, 3000); // вызываем функцию каждый 3с

    notifBtn.addEventListener('click', () => {
        clearInterval(timerId);
        setTimeout(function () {
            timerId = setInterval(createNotif, 3000);
        }, 10000); // метод устанавливает таймер, который выполняет функцию или указанный фрагмент кода по истечении времени таймера
    });
});
