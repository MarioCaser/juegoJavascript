let numCohetes = 0;


let dist = -100;
addBoo();


//setInterval(function(){
	addCohete();
//},500);


function addCohete(){

	let idCohete = "boo" + numCohetes;

	// Crear el nuevo elemento
  	var nuevoNodo = document.createElement("div");

  	// Añadir id
  	nuevoNodo.id = idCohete;

  	// Añadir class
  	nuevoNodo.classList.add("boo");

  	// Seleccionar el elemento padre donde se añadirá el nuevo elemento
  	var elementoPadre = document.getElementById("fondo");

  	// Añadir el nuevo elemento al elemento padre
  	elementoPadre.appendChild(nuevoNodo);

  	let intervalo = setInterval(function(){
		dist += 1;
		document.getElementById(idCohete).style.left = dist + "px";
		
		if(parseInt(document.getElementById(idCohete).style.left) >= parseInt(screen.width)){
			elementoPadre.removeChild(nuevoNodo);
			//añade aquí cómo eliminar este setInterval
			clearInterval(intervalo);
		}
	},1);
	++numCohetes;
}

function addBoo(){

	let idCohete = "cohetePrueba" + numCohetes;

	// Crear el nuevo elemento
  	var nuevoNodo = document.createElement("div");

  	// Añadir id
  	nuevoNodo.id = idCohete;

  	// Añadir class
  	nuevoNodo.classList.add("cohete");

  	// Seleccionar el elemento padre donde se añadirá el nuevo elemento
  	var elementoPadre = document.getElementById("fondo");

  	// Añadir el nuevo elemento al elemento padre
  	elementoPadre.appendChild(nuevoNodo);

  	let existe = true;

  	let intervalo = setInterval(function(){
		dist += 1;
		document.getElementById(idCohete).style.left = dist + "px";

		
		if(parseInt(document.getElementById(idCohete).style.left) >= parseInt(screen.width)){
			elementoPadre.removeChild(nuevoNodo);
			//añade aquí cómo eliminar este setInterval
			clearInterval(intervalo);
			existe = false;
		}
	},5);

	//para que se mueva hacia arriba y abajo
	let intervalo2 = setInterval(function(){
		if(!existe){
			clearInterval(intervalo2);
		}
		else{
			let direction = 0;
			let currentTop = parseInt(document.getElementById(idCohete).style.top);
			if (currentTop >= 200) {
				direction = -1;
			} else if (currentTop <= 0) {
				direction = 1;
			}
			document.getElementById(idCohete).style.top = currentTop + direction + "px";
		}
	}, 10);
	++numCohetes;
}