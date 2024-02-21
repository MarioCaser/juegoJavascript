import Animal from './Animal.js';

class Enemigo extends Animal {
    constructor(points, size, speed, fondo) {
        super("enemigo", points, size, speed, fondo);
    }
    show(){
        let vida = () => {return this.getLive()};
        let idCohete = Animal.numAnimals + "";
    
        // Crear el nuevo elemento
        var nuevoNodo = document.createElement("div");

        let muerte = () => this.setLive(false);

        // Añadir id
        nuevoNodo.id = idCohete + "_" + this.points;

        // Añadir clase
        nuevoNodo.classList.add("cohete");
        let tam = 3*this.size;

        nuevoNodo.style.width = tam*1.5 + "vw";
        nuevoNodo.style.height = tam + "vw";

        nuevoNodo.style.top = Math.floor(Math.random() *  window.innerHeight * 0.8 + window.innerHeight*0.05) + "px";

        nuevoNodo.onclick = () => {            
            fondo.removeChild(nuevoNodo);
            clearInterval(intervalo);
        }

        // Añadir el nuevo elemento al elemento padre
        fondo.appendChild(nuevoNodo);

        let distancia = this.dist;

        let suma = true;

        //para que se desplace hasta que llegue al final de la pantalla
        let intervalo = setInterval(function(){
            if(!vida()){
                //if(nuevoNodo != null && nuevoNodo != undefined) fondo.removeChild(nuevoNodo);
                clearInterval(intervalo);
            }
            else if(nuevoNodo == null || nuevoNodo == undefined)
                clearInterval(intervalo);
            else{
                if(suma)
                    distancia += 5;
                else
                    distancia -= 5;

                nuevoNodo.style.left = distancia + "px";
                
                if(parseInt(nuevoNodo.style.left) >= parseInt(window.innerWidth)){
                    suma = false;
                    muerte();
                    
                    //compruebo si existe el nodo (puede darse el caso de que lo hayan borrado)
                    if(document.getElementById(nuevoNodo.id)) fondo.removeChild(nuevoNodo);

                    //añade aquí cómo eliminar este setInterval
                    clearInterval(intervalo);
                }
            }
        },this.speed);
        ++Animal.numAnimals;
        return nuevoNodo;
    }
}
export default Enemigo;