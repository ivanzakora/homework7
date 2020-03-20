// Плитка
// Напишите приложение, которое раз в секунду добавляет на экран квадрат случайного цвета. Выделите на экране область размером 600 на 600. Разделите область на квадраты по 60 пикселей. Раз в секунду в одной из областей(случайно) появляется квадрат случайного цвета. Когда все области(100 квадратов - 100 секунд) заполнятся - закончите выполнение и выведите текст "Заполнение завершено" в заголовок второго уровня. Каждый новый квадрат должен ложиться в отдельное, незанятое другим квадратом, место.
// Входные данные:
// Нет
// Выходные данные:
// Плитка

// let i=0;

// window.onload = timer;



// function generateSquare(){
//     const d = document.createElement('DIV');
//     //d.attr("class","cell");
//     d.innerText = 10;
//     d.style.backgroundColor = `rgba(${getRandom()},${getRandom()},${getRandom()},.3)`;
//     return d;
// }

// function getRandom(min = 0, max = 255){
//     return Math.floor(Math.random() * (max - min) + min + 1);//0.378475
// }



// function addSquare(){
//     i++;
//     if (i <= 100){
//     grid.appendChild(generateSquare());
//     }
//     // console.dir(chain);
// }

// function timer() {
//     myVar = setInterval(addSquare, 1000);
//     console.log(myVar);
// }




//Недоделано
// Математический тренажер
// Напишите приложение, которое помогает пользвателю натренироваться в простых математических операциях(сложение/вычитание/деление для чисел от 10 до 100, и умножение для чисел от 2 до 30). При заходе на страницу пользователю генерируется математическое выражение. Пользователь должен ввести результат в поле ввода и нажать на кнопку "Проверить". Если все верно - генерируется новое выражение, а пользователь получает сообщение "Все верно".
// Входные данные:
// Число - решение математического выражения
// Выходные данные:
// Строка - "A операция В = "
// Строка - "Все верно" в случае правильного решения
// Строка - "Подумай еще" в случае неправильного решения
// Примеры:
// #
// IN
// OUT
// 1
// 72
// 6 * 12 =
// Все правильно
// 2
// 25
// 7 - 9 =
// Подумай еще
// 3
// Кактус
// 7 / 14 =
// Подумай еще


// i = getRandomInt(1,4);
// console.log([i]);

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min; 
// }

// a = getRandomInt(10,100);
// b = getRandomInt(10,100);




// switch (i) {
// case 1:
//     document.getElementById("tab").innerText = String(a) + "+" + String(b) + "=";
//     rightansw1 = a + b;
//     console.log(rightansw1);
//     break;
// case 2:
//     document.getElementById("tab").innerText = String(a) + "-" + String(b) + "=";
//     rightansw2 = a - b;
//     console.log(rightansw2);
//     break;
// case 3:
//     document.getElementById("tab").innerText = String(a) + "/" + String(b) + "=";
//     rightansw3 = a / b;
//     console.log(rightansw3);
//     break;
// }



// getRandomInt(10,100))









