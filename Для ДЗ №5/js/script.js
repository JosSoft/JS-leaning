let menu = document.querySelector('.menu');
let menuItem = document.querySelectorAll('.menu-item');

// Восстановить порядок в меню
menu.insertBefore(menuItem[2], menuItem[1]);

// ... добавить пятый пункт
let li5 = document.createElement('li');
li5.textContent = "Пятый пункт";
li5.classList.add(menuItem[0].classList.value);
menu.appendChild(li5);
//console.log(li5);

// Поменять заголовок, добавить слово "подлинную" 
// (Получится - "Мы продаем только подлинную технику Apple")
let title = document.querySelector('#title');
//console.log(title.textContent);
title.textContent = 'Мы продаем только подлинную технику Apple';

// Удалить рекламу со страницы
let column = document.querySelectorAll('.column');
let adv = document.querySelector('.adv');

column[1].removeChild(adv);
//console.log(column);

//Спросить у пользователя отношение к технике 
//apple и записать ответ в блок на странице с id "prompt"
let q = prompt('Ваше отношение к технике Аpple?','');
let pr = document.querySelector('#prompt');
pr.textContent = q;
console.log(pr);