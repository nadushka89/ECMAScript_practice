// Напишите функцию getPrototypeChain(obj), которая будет
// возвращать цепочку прототипов для заданного объекта
// obj. Функция должна вернуть массив прототипов, начиная
// от самого объекта и заканчивая глобальным объектом
// Object.prototype.

const proto = getPrototypeChain({ name: 'John' });
console.log(proto);

function getPrototypeChain(obj) {
  let currentObject = obj;
  const arrObj = [currentObject];
  while (currentObject != null) {
    currentObject = Object.getPrototypeOf(currentObject);
    arrObj.push(currentObject);
  }
  return arrObj;
}
// Напишите конструктор объекта Person, который принимает два аргумента:
// name (строка) и age (число). Конструктор должен создавать объект с
// указанными свойствами name и age и методом introduce(), который
// выводит в консоль строку вида "Меня зовут [name] и мне [age] лет.".
// // Пример:
// const person1 = new Person("John", 25);
// person1.introduce(); // Вывод: Меня зовут John и мне 25 лет.

// Создайте класс Animal, который будет представлять животное. У
// класса Animal должны быть следующие свойства и методы:
// ● Свойство name (строка) - имя животного.
// ● Метод speak() - выводит в консоль звук, издаваемый животным.
// Создайте подкласс Dog, который наследует класс Animal. Для
// подкласса Dog добавьте дополнительное свойство и метод:
// ● Свойство breed (строка) - порода собаки.
// ● Метод fetch() - выводит в консоль сообщение "Собака [name]
// принесла мяч.".
// Задание 5 (Пример использования)

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} provides sound`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  fetch() {
    console.log(`Dog of breed ${this.breed} with nam ${this.name} has brought a ball`);
  }
}

const animal1 = new Animal('Животное');
animal1.speak(); // Вывод: Животное издает звук.
const dog1 = new Dog('Бобик', 'Дворняжка');
dog1.speak(); // Вывод: Животное Бобик издает звук.
console.log(dog1.breed); // Вывод: Дворняжка
dog1.fetch(); // Вывод: Собака Бобик принесла мяч.

// Создать класс "Пользователь" с приватными полями "имя", "возраст" и "электронная почта". Класс должен иметь публичные методы "изменить имя", "изменить возраст" и "изменить электронную почту", которые будут изменять соответствующие поля объекта. Также класс должен иметь статическое поле "максимальный возраст", которое будет задавать максимально допустимый возраст для всех создаваемых объектов.
class User {
  #name;
  #age;
  #email;
  static #maxAge = 120;

  constructor(name, age, email) {
    this.setAge(age);
    this.#email = email;
    this.#name = name;
    // this.setName(name);
    // this.setAge(age);
    // this.setEmail(email);
  }

  setName(value) {
    this.#name = value;
  }

  setAge(value) {
    if (value > User.#maxAge) {
      console.error('Привышен максимально допустимы возраст, пришлите копию паспорта');
    } else {
      this.#age = value;
    }
  }

  setEmail(value) {
    this.#email = value;
  }
}

const Bob = new User('Bob', 125, 'email');
console.log(Bob);
Bob.setAge(24);
console.log(Bob);

// Создать класс "Товар" с приватными полями "название", "цена" и "количество". Класс должен иметь публичные методы "изменить цену", "изменить количество" и "получить стоимость", которые будут изменять соответствующие поля объекта и возвращать стоимость товара соответственно. Также класс должен иметь статическое поле "максимальное количество", которое будет задавать максимально допустимое количество товара для всех создаваемых объектов.

class Goods {
  #name;
  #price;
  #quantity;
  static maxQuantity = 1000;

  constructor(name, price, quantity) {
    this.#name = name;
    this.#price = price;
    this.setQuantity(quantity);
  }

  getName() {
    return this.#name;
  }
  getPrice() {
    return this.#price;
  }
  getQuantity() {
    return this.#quantity;
  }

  setQuantity(value) {
    if (value > Goods.maxQuantity) {
      console.error(`max quantity reached (${Goods.maxQuantity})`);
    } else {
      this.#quantity = value;
    }
  }
}
const good1 = new Goods('BMW', 25000, 1);
const good2 = new Goods('Matches', 0.1, 2000);
console.log(good1);
console.log(good2);

// Создать класс "Калькулятор" с приватными полями "последний результат" и "текущее значение". Класс должен иметь публичные методы "сложить", "вычесть", "умножить" и "разделить", которые будут изменять значение текущего значения в соответствии с выбранной операцией. Также класс должен иметь статическое поле "точность", которое будет задавать количество знаков после запятой при выводе результата.

class Calculator {
  #lastResult = 0;
  #presentValue = 0;
  static accuracy = 2;

  #round(num) {
    return num.toFixed(Calculator.accuracy);
  }

  getPresentValue() {
    return this.#round(this.#presentValue);
  }

  sum(num) {
    this.#lastResult = this.#presentValue;
    this.#presentValue = this.#presentValue + num;
  }

  difference(num) {
    this.#lastResult = this.#presentValue;
    this.#presentValue -= num;
  }

  multiplication(num) {
    this.#lastResult = this.#presentValue;
    this.#presentValue *= num;
  }

  division(num) {
    if (num === 0) {
      console.error(`На ноль делить нельзя`);
    } else {
      this.#lastResult = this.#presentValue;
      this.#presentValue /= num;
    }
  }
}

const Canc = new Calculator();
Canc.sum(1);
console.log(Canc.getPresentValue());
Canc.division(1);
console.log(Canc.getPresentValue());
Canc.sum(3);
console.log(Canc.getPresentValue());
