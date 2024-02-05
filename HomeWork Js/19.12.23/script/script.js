// Написать программу, которая перебирает все комбинации целых чисел i, j и k в диапазоне от 1 до 99 и проверяет, являются ли они сторонами прямоугольного треугольника по теореме Пифагора. Если i, j и k удовлетворяют теореме Пифагора (j * j + i * i === k * k), то программа выводит их
// значения.

for (let i = 1; i <= 99; i++) {
  for (let j = 1; j <= 99; j++) {
    for (let k = 1; k <= 99; k++) {
      if (j * j + i * i === k * k) {
        console.log(i, j, k);
      }
    }
  }
}

// 1. Продолжить функцию zoom() на экране у нас есть изображение размером w = 200, h = 200. при каждом клике изображения увеличивайте
//    его размер на 50 (w+ = 50, h + = 50).
// Если в результате очередного клика размер изображения превышает 500, то во время всех последующих кликов уменьшайте размер изображения на 50.:  Если в результате очередного клика размер изображения меньше 200, то во время всех последующих кликов увеличивать размер изображения на 50.:
let img = document.querySelector(".gallery__image");
let imgWidth = 200;
let imgHeight = 200;
isToggle = false;

function zoom() {
  if (isToggle) {
    imgWidth.style.width += "50px";
    imgHeight.style.height += "50px";
  } else if (img.style.width > 500 && img.style.height > 500) {
    imgWidth.style.width -= "50px";
    imgHeight.style.height -= "50px";
    isToggle = false;
  } else img.style.width < 200 && img.style.height < 200;
  {
    imgWidth.style.width += "50px";
    imgHeight.style.height += "50px";
    isToggle = true;
  }
}
