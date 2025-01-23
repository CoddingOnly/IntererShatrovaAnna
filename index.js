const burger_btn = document.querySelector('.burger__btn');
const menu = document.querySelector('.menu__header');

burger_btn.addEventListener('click', function () {
    menu.classList.toggle('menu__show');
});

const btn = document.getElementById('card');

btn.addEventListener('click', function () {
    alert('ОК');
});

btn.removeEventListener('click', function () {
    alert('ОК');
});