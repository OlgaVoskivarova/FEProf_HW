

// Домашняя работа 
function substract(){
  let num1 = +document.querySelector(".input-1").value;
  let num2 = +document.querySelector(".input-2").value;
  let result = num1 - num2;
 document.querySelector() 
}


// 1.Создать функцию checkEquality с помощью которого проверяем равны ли все 3 значение внутри input-ов или нет

 function checkEquality() {
   let num1 = +document.querySelector(".input-1").value;
   let num2 = +document.querySelector(".input-2").value;
   let num3 = +document.querySelector(".input-3").value;
   if (num1 === num2 && num1 === num3) {
     console.log("Все поля равны");
   } else {
     console.log("Поля не равны");
   }
 }
//  2.Создать функцию hasZero с помощью которого проверяем есть ли поле которое равно 0 если есть пишем "Да, есть", если нет пишем просто "Нет"
function hasZero() {
  let num1 = +document.querySelector(".input-4").value;
  let num2 = +document.querySelector(".input-5").value;
  let num3 = +document.querySelector(".input-6").value;
  if (num1 === 0 || num2 === 0 || num3 === 0) {
    console.log("Да, есть");
  } else {
    console.log("Нет");
  }
}


// 3.Создать функцию sameOne с помощью которого проверяем есть ли поле которое совпадают, если есть пишем "Да, есть", если нет пишем просто "Нет"

function sameOne() {
  let num1 = +document.querySelector(".input-7").value;
  let num2 = +document.querySelector(".input-8").value;
  let num3 = +document.querySelector(".input-9").value;
  if (num1 === num2 || num1 === num3 || num3 === num2) {
    console.log("Да, есть");
  } else {
    console.log("Нет");
  }
}





