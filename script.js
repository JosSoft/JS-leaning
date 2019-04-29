/* 1) Создать HTML страницу и подключить к ней файл скрипта */

/* 2) В файле скрипта создать 2 переменные (money и time), которые будут получать данные от пользователя:
    · Первая будет спрашивать "Ваш бюджет на месяц?"
    · Вторая "Введите дату в формате YYYY-MM-DD"*/

var money = prompt("Ваш бюджет на месяц?");
var time = prompt("Введите дату в формате YYYY-MM-DD");

/* 3) Создать объект appData, который будет содержать такие данные:
    ·      бюджет (передаем сюда переменную из п.2)
    ·      данные времени - timeData (передаем сюда переменную из п.2)
    ·      объект с обязательными расходами - expenses (смотри пункт 4)
    ·      объект с необязательными расходами - optionalExpenses (оставляем пока пустым)
    ·      массив данных с доп. доходом - income (оставляем пока пустым)
    ·      свойство savings (выставляем его как false) */

var appData = {};
appData.money = money;
appData.timeData = time;
appData.expenses = {};
appData.optionalExpenses = {};
appData.income = [];
appData.savings = false;

/* 4) Задать пользователю по 2 раза вопросы:
    “Введите обязательную статью расходов в этом месяце”
    “Во сколько обойдется?”
    Записать ответы в объект expenses в формате: 
    expenses: {
    “ответ на первый вопрос” : “ответ на второй вопрос”
    } */

    var e1 = prompt("Введите обязательную статью расходов в этом месяце");
    var e2 = prompt("Во сколько обойдется?");
    appData.expenses[e1] = e2;
   
/* 5) Вывести на экран пользователя бюджет на 1 день (брать месяц за 30 дней, использовать alert)*/

// Не совсем понял, что нужно сделать. Пока вариант такой:
var budjet1 = appData.money / 30;
alert("Бюджет на 1 день: " + budjet1);

/* 6) Проверить, чтобы все работало без ошибок в консоли*/
// Ответ: ОК.

/* 7) Создать свой репозиторий на GitHub и поместить туда папку с первым заданием */
// Ответ: Не думал, что это будет для меня таааак сложно :(


// Вопросы к этому заданию
//Сколько типов данных существует в JS? 
// Ответ: 6 типов.

//Как вывести информацию в консоль?
console.log(appData);

//Какая функция операторов || и &&? 
//Ответ: Логические операторы, || - или, && - и.