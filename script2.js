// Урок 2

let money = +prompt("Ваш бюджет на месяц?",'0'),
    time = prompt("Введите дату в формате YYYY-MM-DD",'2019-04-30');

let appData = {
    budjet: money, 
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let i = 0;
// FOR
for ( 0; i < 2; i++ ) {

    let a = prompt("Введите обязательную статью расходов в этом месяце",''),
        b = prompt("Во сколько обойдется?",'');

        if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50) {
        console.log("Done"); 
        appData.expenses[a] = b;
    } else {
        alert("Данные введены с ошибкой. Повторите ввод.");
        --i; continue;
    } 
} 

/* 
// WHILE
while (i < 2) {
    let a = prompt("Введите обязательную статью расходов в этом месяце",''),
        b = prompt("Во сколько обойдется?",'');

    if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50) {
        appData.expenses[a] = b;
        i++;
    } else {
        alert("Данные введены с ошибкой. Повторите ввод.");   
    }
} 
*/


/*
// DO
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце",''),
    b = prompt("Во сколько обойдется?",'');

    if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50) {
    appData.expenses[a] = b;
    i++;
    } else {
    alert("Данные введены с ошибкой. Повторите ввод.");   
    }
} while (i < 2);
*/

appData.moneyPerDay = appData.budjet / 30;
alert("Ежемесячный бюджет: " + appData.moneyPerDay);
console.log(appData);

let m = appData.moneyPerDay; // для удобства
if (m < 100) {
    console.log("Минимальный уровень достатка.");
} else if (m > 100 && m < 2000 ) {
    console.log("Средний уровень достатка.");
} else if (m > 2000) {
    console.log("Высокий уровень достатка.");
} else {
    console.log("Произошла ошибка.");
}

//Вопросы к этому заданию
//Сколько видов циклов существует в JS?
// Ответ: 3 (for, while и do)