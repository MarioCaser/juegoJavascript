import Animal from './Animal.js';
import Amigo from './Amigo.js';
import Enemigo from './Enemigo.js';


class Juego {
    constructor() {
        this.animales = [];
        this.puntuacion = 0;
        this.mensajes = [];
        this.finalizacion = "";
        this.menu_niveles = [];
        this.sonidos = [];
        this.nivel_actual = 0;

        //añado el contador
        this.addContador();
    }
    addContador(){
        const contador = document.createElement("nav");
        contador.style.position = "absolute";
        contador.style.top = "0";
        contador.style.left = "0";
        contador.style.padding = "2vw";
        contador.style.backgroundColor = "transparent";
        contador.style.color = "white";
        contador.style.fontSize = "20px";
        contador.style.fontWeight = "bold";


        let texto = document.createElement("label");
        texto.id = "puntos";
        texto.innerText = "puntos: 0";
        contador.appendChild(texto);
        document.getElementById("fondo").appendChild(contador);

    }

    terminado() {
        if (this.finalizacion === "ganamos") {
            return true;
        } else if (this.finalizacion === "Game Over") {
            return true;
        } else {
            return false;
        }
    }

    mostrar_mensajes(mensaje) {
        this.mensajes.push(mensaje);
        console.log(mensaje);
    }

    mostrar_niveles() {
        for (let nivel of this.menu_niveles) {
            console.log(nivel);
        }
    }

    resetear_juego() {
        this.puntuacion = 0;
        this.enemigos = [];
        this.amigos = [];
        this.mensajes = [];
        this.finalizacion = "";
    }

    actualizar_puntuacion(puntos) {
        this.puntuacion = puntos;
        document.getElementById("puntos").innerText = "puntos: " + puntos;
    }

    iniciar_juego() {
        let fondo = document.getElementById("fondo");
        crear_animales(this.nivel_actual);
    }
    crear_animales(nivel){
        let fondo = document.getElementById("fondo");
        for (let i = 0; i < fondo.children.length; i++)
            if (fondo.children[i].nodeName === "DIV") {
                location.reload();
                break;
            }
        let animales = this.animales;
        let finalizado = () => {return this.finalizacion;}
        let terminar = (texto) => { this.final(texto);}
        let maximoPuntos = 0;

        //obtener el número de puntos que quedan por conseguir
        function getMaxPuntos(node) {
            const cohetes = Array.from(node.children).filter(hijo => hijo.classList.contains('cohete'));
            let childIds = [];
            for (let i = 0; i < cohetes.length; i++)
               childIds.push(cohetes[i].id);
               
            //el número de puntos
            const sum = childIds.reduce((total, current) => {
                const parts = current.split("_");
                return total + parseInt(parts[1]);
            }, 0);
            return sum;
        }
        let actualizador = (puntos) => this.actualizar_puntuacion(puntos);
        
        if(nivel >= 1 && nivel <= 5){
            
            //mientras más alto sea el nivel, más animales saldrán
            let salidas = 7 + nivel * 2;

            //la frecuencia de salida. Mientras más alto sea el nivel, mayor será la frecuencia de salida
            let velocidadSalida = 800 - nivel*50;
            let intervalo = setInterval(function(){
                if(finalizado() != "")
                    clearInterval(intervalo);
                --salidas;
                let fondo = document.getElementById("fondo");

                //variavle-función que cada vez que se llame, generará una velocidad diferente. Mientras más alto sea el nivel,
                //más probable es que toque una velocidad más alta
                function getRandomNumber(min, max) {
                    return Math.floor(Math.random() * (max - min + 1) + min);
                }
                  
                var randomVelocity = getRandomNumber(30 - nivel * 4, 50);

                //Si todavía quedan animales por salir
                if(salidas >= 0){
                    //el número de amigos será aleatorio pero mientras más alto sea el nivel, más amigos habrá
                    for(let i=1;i<=nivel;i++)
                        if(Math.floor(Math.random() * (2)) + 1 == 2){
                            let tam = Math.floor(Math.random() * (4)) + 1;
                            let amigo = new Amigo(tam, randomVelocity, fondo);
                            animales.push(amigo);
                            amigo.show();
                        }
                    let tamEnemigo = Math.floor(Math.random() * (4)) + 2;
                    let puntos = Math.ceil(50/tamEnemigo);
                    maximoPuntos += puntos;
                    
                    randomVelocity = getRandomNumber(30 - nivel * 4, 50);
                    let enemigo = new Enemigo(puntos, tamEnemigo, randomVelocity, fondo);
                    animales.push(enemigo);
                    enemigo.show();
                }                
                
                
                const childrenWithClassRocket = fondo.querySelectorAll(".cohete");
                const numberOfElements = childrenWithClassRocket.length;
                if(salidas<=0 && numberOfElements == 0){
                    eliminador();
                    clearInterval(intervalo);
                    terminar("Has ganado");
                }
                else
                    for(let i=0;i<animales.length;i++)
                        if (typeof animales[i] == 'object' && (animales[i].constructor.name == 'Enemigo' || animales[i].constructor.name == 'Amigo'))
                            if(animales[i].getLive() == false){
                                clearInterval(intervalo);
                                terminar("Has perdido");
                                eliminador();
                            }
                            actualizador(maximoPuntos - getMaxPuntos(fondo));
            },velocidadSalida);
        }
        let eliminador = () => this.eliminaAnimales();
    }
    eliminaAnimales(){
        let elements = document.getElementById("fondo").querySelectorAll("div");
        for(let i = 0; i < elements.length; i++)
            elements[i].remove();
    }
    final(resultado) {
        // Create the square element
        let square = document.createElement("h3");
        square.style.width = "13vw";
        square.style.height = "100px";
        square.style.background = "transparent";
        square.style.color = "white";
        square.style.fontWeight = "bold";
        square.style.textAlign = "center";
        square.style.lineHeight = "100px";
        square.style.borderRadius = "3px";
        square.style.border = "3px solid white";
        square.style.margin = "0";

        square.innerHTML = resultado;
    
        // Create the button element
        let button = document.createElement("button");
        button.innerHTML = "Volver a jugar";
        button.onclick = () => location.reload();
        //le pongo unos estilos refacheros al botón
        button.style.width = "13vw";
        button.style.margin = "0";
        button.style.border = "2px solid white";
        button.style.padding = "1vw";
        button.style.borderRadius = "0.4vw";
        button.style.backgroundColor = "transparent";
        button.style.fontWeight = "bold";
        button.style.color = "white";
        button.style.fontSize = "large";
        button.style.transition = "box-shadow 0.3s linear";

        //creo un div en el que voy a meter el square y el botón
        let container = document.createElement("div");
        container.appendChild(square);
        container.appendChild(button);
        container.style.position = "fixed";
        container.style.top = "50%";
        container.style.left = "50%";
        container.style.transform = "translate(-50%, -50%)";
        
        // Append the square and button to the node
        document.getElementById("fondo").appendChild(container);
    }
    

    set animales(animales) {
        this._animales = animales;
    }

    get animales() {
        return this._animales;
    }

    set puntuacion(puntuacion) {
        this._puntuacion = puntuacion;
    }

    get puntuacion() {
        return this._puntuacion;
    }

    set mensajes(mensajes) {
        this._mensajes = mensajes;
    }

    get mensajes() {
        return this._mensajes;
    }

    set finalizacion(finalizacion) {
        this._finalizacion = finalizacion;
    }

    get finalizacion() {
        return this._finalizacion;
    }

    set menu_niveles(menu_niveles) {
        this._menu_niveles = menu_niveles;
    }

    get menu_niveles() {
        return this._menu_niveles;
    }

    set sonidos(sonidos) {
        this._sonidos = sonidos;
    }

    get sonidos() {
        return this._sonidos;
    }

    set nivel_actual(nivel_actual) {
        this._nivel_actual = nivel_actual;
    }

    get nivel_actual() {
        return this._nivel_actual;
    }
}
export default Juego;