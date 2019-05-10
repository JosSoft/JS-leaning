'use strict';

let money, time;

function start() {
    money = +prompt ("Ваш бюджет на месяц?", "1000000");
    time = prompt ("Введите дату в формате YYYY-MM-DD", "2019-05-09");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt ("Ваш бюджет на месяц?", "10000"); 
    }
}
//start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt ("Введите обязательную статью расходов в этом месяце", "Статья №" + (i + 1)),
                b = prompt ("Во сколько обойдется?", 1000 * (i + 1));
            
            if ( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
                appData.expenses[a] = b;
            } else {
                i--;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
    },

    detectLevel: function() {
        if (appData.moneyPerDay < 100) {return "Это минимальный уровень достатка!";} 
        else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {return "Это средний уровень достатка!";} 
        else if (appData.moneyPerDay > 2000) {return "Это высокий уровень достатка!";} 
        else {return "Ошибочка...!";}
    },

    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("(checkSavings) Какова сумма накоплений?", "10000"),
                percent = +prompt("(checkSavings) Под какой процент?", "13");
            
            appData.monthIncome = save/100/12*percent;
            alert("Доход с Вашего депозита в месяц: " + appData.monthIncome);
        }
    },

    chooseOptExpenses: function() {
        for (let i = 1; i <= 3; i++) {
            let Opt = prompt("Статья необязательных расходов?", 
            "Статья №" + (i * 34 / 5).toFixed());
            appData.optionalExpenses[i] = Opt;
        }
    },

    shooseIncome: function() {
        let items = prompt('Что принесет дополнительный доход? (перечислить через запятую)','');

        /*1) Написать проверку, что пользователь может:
        · Ввести в дополнительных доходах (chooseIncome) только строку
        · Не может оставить строку пустой
        · Не может отменить вопрос*/
        if (typeof(items) != 'string' || items.length == 0 || typeof(items) == '' || items == null) {
            alert('Cтрока не может быть пустой');
        } else {
            appData.income = items.split(',');
            appData.income.push(prompt('Можеть еще?',''));
            appData.income.sort();
        }

        /*2) При помощи метода перебора массива(forEach) вывести на экран сообщение "Способы доп. заработка: " 
        и полученные способы (внутри chooseIncome)
        · Товары должны начинаться с 1, а не с 0. Выполняем этот пункт в chooseIncome.*/
        let sum = 'Способы доп. заработка:\n';
        appData.income.forEach(function(value, index) {
            sum += (index + 1) + ': ' + value + '\n';
        });
        alert(sum);
    }
};

/*3) Используя цикл for in для объекта (appData) вывести в консоль сообщение 
"Наша программа включает в себя данные: " (вывести весь appData)*/
console.log('Наша программа включает в себя данные: ');
for (let i in appData) {
    console.log(i + ': ' + appData[i]);
};



