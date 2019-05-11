//Получить кнопку "Начать расчет" через id
let start = document.querySelector('#start');
//console.log(start);
/*Получить все блоки в правой части программы через 
классы (которые имеют класс название-value, начиная с 
<div class="budget-value"></div> и заканчивая 
<div class="yearsavings-value"></div>)*/
let rBlok = document.body.querySelector(".result-table").children;
let arr = [];
for (let i = 0; i < rBlok.length; i++) {
    if (rBlok[i].className.indexOf('value') > 0) {
        arr.push(rBlok[i].className);
        //console.log(rBlok[i].className);
    }
}
//console.log(arr);

/*Получить поля(input) c обязательными расходами 
через класс. (class=”expenses-item”)*/
let ex = document.querySelectorAll('.expenses-item');
for (let i=0; i<ex.length; i++) {
    //console.log(`${ex[i].placeholder}(${ex[i].id}) = ${ex[i].value};`);
};


//Получить кнопки “Утвердить” и “Рассчитать” через Tag, 
//каждую в своей переменной. 
let btn = document.querySelectorAll('button');
let btn1 = btn[0];
let btn2 = btn[2];
let btn3 = btn[2];
//console.log(btn1);
//console.log(btn2);
//console.log(btn3);

//Получить поля для ввода необязательных расходов 
//(optionalexpenses-item) при помощи querySelectorAll
let opt = document.querySelectorAll('.optionalexpenses-item');
//console.log(opt);

//Получить оставшиеся поля через querySelector 
//(статьи возможного дохода, чекбокс, сумма, процент, 
//год, месяц, день)
let svd = document.querySelector('input.choose-income#income');
let chk = document.querySelector('input#savings');
let sun = document.querySelector('input.choose-sum#sum');
let per = document.querySelector('input.choose-percent#percent');
let y = document.querySelector('input.year-value');
let m = document.querySelector('input.month-value');
let d = document.querySelector('input.day-value');

console.log(svd);
console.log(chk);
console.log(sum);
console.log(per);
console.log(y);
console.log(m);
console.log(d);