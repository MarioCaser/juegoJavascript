import Animal from './Animal.js';

class Amigo extends Animal {
    constructor(size, speed, fondo) {
        super("amigo", 0, size, speed, fondo);
    }
    show(){
        let vida = this.getLive();
        let idCohete = Animal.numAnimals + "";
    
        // Crear el nuevo elemento
        var nuevoNodo = document.createElement("div");

        let muerte = () => this.setLive(false);

        nuevoNodo.onclick = () => {
            muerte();
        }

        // Añadir id
        nuevoNodo.id = idCohete + "_" + this.points;

        // Añadir clase
        nuevoNodo.classList.add("boo");
        let tam = 3 * this.size;

        nuevoNodo.style.width = tam*1.5 + "vw";
        nuevoNodo.style.height = tam + "vw";

        nuevoNodo.style.top = Math.floor(Math.random() *  window.innerHeight * 0.8 + window.innerHeight*0.05) + "px";        

        //le pongo una sombra refachera al fantasma
        nuevoNodo.style.filter = "drop-shadow(0px 0px 1vw red)";        

        // Añadir el nuevo elemento al elemento padre
        fondo.appendChild(nuevoNodo);

        let distancia = this.dist;

        let suma = true;

        //para que se desplace hasta que llegue al final de la pantalla
        let intervalo = setInterval(function(){
            if(!vida)
                clearInterval(intervalo);
            else if(nuevoNodo == undefined || nuevoNodo == null)
                clearInterval(intervalo);
            else if(nuevoNodo == null || nuevoNodo == undefined)
                clearInterval(intervalo);
            else{
                if(suma)
                    distancia += 5;
                else
                    distancia -= 5;

                    nuevoNodo.style.left = distancia + "px";
                
                if(parseInt(nuevoNodo.style.left) >= (parseInt(window.innerWidth) - parseInt(nuevoNodo.clientWidth))){
                    suma = false;
                    nuevoNodo.style.transform = "rotateY(180deg)";
                }
                if(parseInt(nuevoNodo.style.left) <=  0){
                    suma = true;
                    nuevoNodo.style.transform = "rotateY(0deg)";
                }
            }
            },this.speed);
        ++Animal.numAnimals;
        return nuevoNodo;
    }
}
export default Amigo;