class Task {
    constructor(title = Task.getDefaultTitle()) {
        console.log('Start task.');
        this.title = title;
        this._done = false;
        Task.count += 1;
    }

    get done() {
        return this._done === true ? 'Выполнена' : 'Не выполнена'; 
    }

    set done(value) {
        if (value !== undefined && typeof value === 'boolean') {
            this._done = value;    
        } else {
            console.error('Ошибка! Укажите true или false');
        }
    }

    complete() {
        this._done = true;
        console.log(`Задача "${this.title}" выполнена`);
    } 

    static getDefaultTitle() {
        return 'Задача';
    }



}

Task.count = 0;

let task = new Task('Убрать комнату');
let task2 = new Task('Купить продукты');
let task3 = new Task();
//console.log(typeof Task);
//console.log(typeof task);
//console.log(task instanceof Task);
console.log(task.title);
console.log(task2.title);
console.log(task3.title);
console.log(Task.count);
task2.complete();

console.log(task.done, task._done);
task.done = true;
console.log(task.done, task._done);
