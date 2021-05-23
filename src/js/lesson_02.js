//ex.1
/*Запиши условие в инструкции if так, чтобы функция работала правильно.*/

// function checkAge(age) {
//   if (age >= 18) {
//     // Change this line
//     return 'You are an adult';
//   }
//   return 'You are a minor';
// }
// console.log(checkAge(18));

//ex.2
/*Функция checkPassword получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения.
Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат»:
удали переменную message
удали else
код должен работать так же, как и до оптимизации.*/

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   // Change code below this line
//   if (password === ADMIN_PASSWORD) {
//     return 'Welcome!';
//   }
//   return 'Access denied, wrong password!';
// }
// // Change code above this line
// console.log(checkPassword('jqueryismyjam'));

//ex.3
/*Функция checkStorage проверяет возможность оформления заказа и возвращает сообщение о результате. Она принимает два параметра, значения которых будут задаваться во время её вызова.
available - доступное количество товаров на складе
ordered - количество единиц товара в заказе
Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат».*/

// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return 'Your order is empty!';
//   }
//   if (ordered < available) {
//     return 'The order is accepted, our manager will contact you';
//   }
//   return 'Your order is too large, not enough goods in stock!';
// }
// console.log(checkStorage(300, 310));

//ex.4
/*Объяви переменную fruits и присвой ей массив фруктов - строк "apple", "plum", "pear" и "orange".*/
// const fruits = ['apple', 'plum', 'pear', 'orange'];
// console.table(fruits);

//ex.5
/*Объяви три переменные и присвой каждой из них значение, используя нотацию квадратных скобок.*/

// const fruits = ['apple', 'plum', 'pear', 'orange'];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];
// console.log(firstElement, secondElement, lastElement);

//ex.6
/*Переопредели значения элементов с индексами 1 и 3. Замени "plum" на "peach", а "orange" на "banana".*/

// const fruits = ['apple', 'plum', 'pear', 'orange'];
// fruits[1] = 'peach';
// fruits[3] = 'banana';
// console.table(fruits);

//ex.7
/*Объяви переменную fruitsArrayLength и присвой ей длину массива fruits используя свойство length.*/

// const fruits = ['apple', 'peach', 'pear', 'banana'];
// const fruitsArrayLength = fruits.length;
// console.log(fruitsArrayLength);

//ex.8
/*Объяви две перемнные:
Имя переменной	Ожидаемое значение
lastElementIndex	Мндекс последнего элемента масcива fruits через длина_массива - 1
lastElement	Значение последнего элемента массива*/

// const fruits = ['apple', 'peach', 'pear', 'banana'];
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];
// console.log(lastElementIndex);
// console.log(lastElement);

//ex.9
/*Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины. Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.*/

// function getExtremeElements(array) {
//   const lastElementIndex = array.length - 1;
//   const lastElement = array[lastElementIndex];
//   const newArray = [];
//   newArray.splice(0, 0, array[0], lastElement);
//   return newArray;
// }
// console.log(getExtremeElements(['apple', 'peach', 'pear', 'banana']));

//ex.10
/*Дополни код функции splitMessage(message, delimeter) так, чтобы она возвращала в переменной words результат разделения строки message по разделителю delimeter - массив строк.*/

// function splitMessage(message, delimeter) {
//   let words;
//   words = message.split(delimeter);
//   return words;
// }
// console.log(splitMessage('Mango hurries to the train', ' '));

//ex.11
/*