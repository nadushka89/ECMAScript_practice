// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки

const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

function createCounter() {
  let counter = 0;

  return {
    increment: function () {
      counter++;
    },
    decrement: function () {
      counter--;
    },
    getValue: function () {
      return counter;
    },
  };
}

const counterObj = createCounter();

counterObj.increment();
counterObj.increment();
console.log(counterObj.getValue());

counterObj.decrement();
counterObj.decrement();
console.log(counterObj.getValue());

// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

function findElementByClass(root, targetClass) {
  if (!root) {
    return console.log('Нет такого элемента');;
  }

  if (root.classList.contains(targetClass)) {
    return root;
  }

  for (let i = 0; i < root.children.length; i++) {
    const childResult = findElementByClass(root.children[i], targetClass);
    if (childResult) {
      return childResult;
    }
  }

  return null;
}

const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);
