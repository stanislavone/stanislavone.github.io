// Cлучайное значение из массива

var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
var min = arr.length - arr.length;
var max = arr.length;
var rand = min + Math.floor(Math.random() * (max + 1 - min));
console.log(arr[rand]);