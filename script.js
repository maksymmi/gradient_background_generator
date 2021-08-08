var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".button");

// Вместо "onload" в HTML также можно воспользоваться методом ниже
// body.onload = setGradient()

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);



function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//Если привязать к переменной, а не к getRandomColor() - то при повторном нажатии на кнопку ничего не произойдет, так как переменная не перезаписывает новый цвет 
// var randomCol1 = getRandomColor()
// var randomCol2 = getRandomColor()

// P.S. После выполнения функции и отображении рандомного цвета, 
// ползунки в окне для выбора цвета не отобрадабт текущий рандомно выпавший цвет

button.addEventListener("click", function () {
	body.style.background = 
	"linear-gradient(to right, " 
	+ getRandomColor() 
	+ ", " 
	+ getRandomColor() 
	+ ")";

	css.textContent = body.style.background + ";";
});