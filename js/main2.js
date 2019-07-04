var arregloSillas;
var arregloSillas2;
var y_inicio = 396;
var x_inicio = 396;

function crearsilla(){arregloSillas = new Array(
new Silla("orange", 99, 50, 50+166, y_inicio, 5, 1, 20));
var myCanvas = document.getElementById("myCanvas");
var context = myCanvas.getContext("2d");
for (var i = arregloSillas.length - 1; i >= 0; i--) {
arregloSillas[i].Dibujar(context);
}
	arregloSillas2 = new Array(
new Silla2("red", 100, 50,x_inicio,50+167, 5, 1, 20));
var myCanvas = document.getElementById("myCanvas");
var context = myCanvas.getContext("2d");
for (var i = arregloSillas2.length - 1; i >= 0; i--) {
arregloSillas2[i].Dibujar(context);
}
}

function crearPlano(){
	  
   
	
           
           arregloPlanos = new Array(
      new Plano("brown", 140, 38, 650, y_inicio, 10, 5, 3));
	var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");
  for (var i = arregloPlanos.length - 1; i >= 0; i--) {
    arregloPlanos[i].Dibujar(context);
  }
	 
} 



var id1;
var t = 0;

function iniciarAnimacion(){
	id1 = setInterval(
			animacion,
			42
		);
}
function animacion(){
	
	var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");
	context.fillStyle = "blue";
	context.fillRect(0,0,myCanvas.width,myCanvas.height);

	arregloSillas.forEach(
		function(element) {
	  		element.Y = y_inicio + (element.Velocidad*(t/1000));

		}
	);

	arregloSillas2.forEach(
		function(element) {
	  		element.X = x_inicio + (element.Velocidad*(t/-1000));
		}
	);

	arregloSillas2.forEach(
		function(element) {
	  		element.Dibujar(context);
	  		console.log(element.Color);
	  		console.log("X: " + element.X + ", X: " + element.X);	
		}
	);

	t+=42;


	arregloSillas.forEach(
		function(element) {
	  		element.Dibujar(context);
	  		console.log(element.Color);
	  		console.log("X: " + element.X + ", Y: " + element.Y);	
		}
	);

	t+=42;
}




function detenerAnimacion(){
	if(id1 != null)
		clearInterval(id1);
}
	
