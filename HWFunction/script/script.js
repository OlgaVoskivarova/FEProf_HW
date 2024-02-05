// function add(){
    // alert("ok")
    // Для получения числового значение не строки нужно перед document.querySelector(".input-3") поставить +
//     let currentValue1 = +document.querySelector(".input-3").value;
//     let currentValue2 = +document.querySelector(".input-4").value;
//     let result = (currentValue1 + currentValue2)
//     console.log(result)
// }

// Функция subtract() будет выполнять вычитание двух чисел и возвращать результат.



// Получает значения из двух input-полей

// Преобразует полученные значения в числа с помощью Number() или +.

// Выполняет вычитание (-) второго числа из первого и сохраняет результат в переменную result.

// Обновляет содержимое элемента с классом result, выводя в нем выражение и результат вычитания.

// Пример если input1 = 8, input2 = 4 то результат будет: Результат: 8 - 4 = 4


function subtract() {
 
  let num1 = +document.querySelector(".input-1").value;
  let num2 = +document.querySelector(".input-2").value;
  let result = num1 - num2;
  document.querySelector(".result-1").innerText = result;
  console.log(result);
}

// Функция multiply() будет выполнять умножение двух чисел и возвращать результат.
// Получает значения из двух input-полей
// Преобразует полученные значения в числа с помощью Number() или +.
// Выполняет умножение (*) первого числа на второе и сохраняет результат в переменную result.
// Обновляет содержимое элемента с классом result, выводя в нем выражение и результат умножения.
// Пример если input1 = 3, input2 = 4 то результат будет: Результат: 3 * 4 = 12
function multiply() {
  let num1 = +document.querySelector(".input-3").value;
  let num2 = +document.querySelector(".input-4").value;
  let result = num1 * num2;
  document.querySelector(".result-2").innerText = result;
  console.log(result);
}

// Функция divide() будет выполнять деление двух чисел и возвращать результат.
// Получает значения из двух input-полей
// Преобразует полученные значения в числа с помощью Number() или +.
// Выполняет деление (/) первого числа на второе и сохраняет результат в переменную result.
// Обновляет содержимое элемента с классом result, выводя в нем выражение и результат деления.
// Пример если input1 = 8, input2 = 4 то результат будет: Результат: 8 / 4 = 2
function divide() {
  let num1 = +document.querySelector(".input-5").value;
  let num2 = +document.querySelector(".input-6").value;
  let result = num1/num2;
  document.querySelector(".result-3").innerText = result;
  console.log(result);
}


