'use strict';

let money, time;

function start() {
    money = +prompt ("Ваш бюджет на месяц?", "1000000");
    time = prompt ("Введите дату в формате YYYY-MM-DD", "2019-05-01");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt ("Ваш бюджет на месяц?", "10000"); 
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt ("Введите обязательную статью расходов в этом месяце", 
            "Статья №" + (i + 1)),
            b = prompt ("Во сколько обойдется?", 1000 * (i + 1));
    
        if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
            appData.expenses[a] = b;
        } else {
            i--;
        }
    };
}
chooseExpenses();

function detectDayBudget() {                                            // Расчет дневного бюджета
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
}
detectDayBudget();

function detectLevel(Per) {                                                // Расчет уровня достатка
    if (Per < 100) {return "Это минимальный уровень достатка!";} 
    else if (Per > 100 && Per < 2000) {return "Это средний уровень достатка!";} 
    else if (Per > 2000) {return "Это высокий уровень достатка!";} 
    else {return "Ошибочка...!";}
}
console.log(detectLevel(appData.moneyPerDay));


function checkSavings(flag) {
    if (flag == true) {
        let save = +prompt("(checkSavings) Какова сумма накоплений?", "10000"),
            percent = +prompt("(checkSavings) Под какой процент?", "13");
            return save/100/12*percent;
    }
}
appData.monthIncome = checkSavings(appData.savings);
alert("Доход с Вашего депозита в месяц: " + appData.monthIncome);

function chooseOptExpenses(count) {                             // Функция для определения необязательных расходов

    for (let i = 1; i <= count; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?", 
        "Статья №" + (i * 34 / 5).toFixed());
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log("optionalExpenses[" + i + "] = " + questionOptExpenses);
    }
}
chooseOptExpenses(3);

console.log(appData);