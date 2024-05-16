// Создание объекта используя литерал объекта
let User =
{
    name: 'Matvey',
    second_name : 'Podborskii',
    age: 22,
    email : 'podbor250718@yandex.ru'
};


// Создание объекта используя конструктор
function User1(name, second_name, age, email)
{
    this.name = name;
    this.second_name = second_name;
    this.age = age;
    this.email = email;
}

let user1 = new User1('Matvey', 'Podborskii', 22, 'podbor250718@yandex.ru');

// Демонстрация доступа к свойствам объекта
// доступ к свойству с помощью точки
console.log(user1.name);

// доступ к свойству с помощью квадратных скобок
console.log(user1['second_name']);

// установка значения с помощью точки
user1.name = 'Danil';

// установка значения с помощью квадратных скобок
user1['second_name'] = 'Tretyakov';

console.log(user1.name);
console.log(user1['second_name']);

// удаление свойства с помощью delete
delete user1.name;

// удаление с помощью квадратных скобок
delete user1['second_name'];


console.log(user1.name);
console.log(user1['second_name']);


// расширение типа Date функцией, вычисляющей количество секунд с момента вашего рождения:
Date.prototype.secondsSinceBirth = function() {
    let now = new Date();
    let birthDate = new Date(this);
    let seconds = (now - birthDate) / 1000;
    return Math.floor(seconds);
};

let birthDate = new Date(2001, 5, 2);
console.log(birthDate.secondsSinceBirth());