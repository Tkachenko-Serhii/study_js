//ex.1
/*Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел, и рассчитывает общую сумму его элементов, которая сохраняется в переменной totalPrice и возвращается как результат работы функции.
Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.*/

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки

//   orderedItems.forEach(item => {
//     totalPrice += item;
//   });

//   // Пиши код выше этой строки
//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

//ex.2
/*Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.
Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.*/

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Пиши код ниже этой строки
//   numbers.forEach(item => {
//     if (item > value) {
//       filteredNumbers.push(item);
//     }
//   });
//   // Пиши код выше этой строки
//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([12, 24, 8, 41, 76], 38));

//ex.3
/*Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры firstArray и secondArray, и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.
Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.*/

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Пиши код ниже этой строки
//   firstArray.forEach(item => {
//     if (secondArray.includes(item)) {
//       commonElements.push(item);
//     }
//   });
//   return commonElements;
//   // Пиши код выше этой строки
// }
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

//ex.4
/*Выполни рефакторинг функции calculateTotalPrice() так, чтобы она была объявлена как стрелочная.*/
// Пиши код ниже этой строки

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Пиши код выше этой строки
//   return quantity * pricePerItem;
// };
// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));

//ex.5
/*Выполни рефакторинг функции calculateTotalPrice() так, чтобы она использовала неявный возврат.*/
// Пиши код ниже этой строки
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// // Пиши код выше этой строки
// console.log(calculateTotalPrice(4, 160));

//ex.6
/*Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её объявление на стрелочную функцию. Замени коллбек-функцию передаваемую в метод forEach() на стрелочную функцию.*/

// Пиши код ниже этой строки
// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;

//   orderedItems.forEach(item => {
//     totalPrice += item;
//   });

//   return totalPrice;
// };
// // Пиши код выше этой строки
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// ex.7
/*Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции.*/

// Пиши код ниже этой строки
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Пиши код выше этой строки
//   return filteredNumbers;
// };
// console.log(filterArray([12, 24, 8, 41, 76], 38));

//ex.8
/*Замени объявление функции getCommonElements() и коллбек для метода forEach() на стрелочные функции.*/

// Пиши код ниже этой строки
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach(element => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Пиши код выше этой строки
//   return commonElements;
// };
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));

//ex.9
/*Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, значение которого это чётное число, добавляя к нему значение параметра value.
Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а создавала, наполняла и возвращала новый массив с обновлёнными значениями.*/

// function changeEven(numbers, value) {
//   // Пиши код ниже этой строки
//   const newEven = [];
//   numbers.forEach(number => {
//     if (number % 2 === 0) {
//       newEven.push(number + value);
//     } else {
//       newEven.push(number);
//     }
//   });
//   return newEven;
//   // Пиши код выше этой строки
// }
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));

//ex.10
/*Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет. Обязательно используй метод map().*/

// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// // Пиши код ниже этой строки
// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths);
