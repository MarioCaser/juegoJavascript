console.log("juefo");
class Juego {
    constructor() {
        this.enemigos = [];
        this.amigos = [];
        this.puntuacion = 0;
        this.mensajes = [];
        this.finalizacion = "";
        this.menu_niveles = [];
        this.sonidos = [];
        this.nivel_actual = 0;
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
        this.puntuacion += puntos;
    }

    iniciar_juego() {
        let fondo = document.getElementById("fondo");
        crear_animales(this.nivel_actual);
    }
    crear_animales(nivel){
        
        //para que se desplace hasta que llegue al final de la pantalla
        //let intervalo = setInterval(function(){
            let fondo = document.getElementById("fondo");
            let animal = new Animal("Enemy", 50, "Large", 10, fondo);
            
            animal.show();
        //},1);
    }

    set enemigos(enemigos) {
        this._enemigos = enemigos;
    }

    get enemigos() {
        return this._enemigos;
    }

    set amigos(amigos) {
        this._amigos = amigos;
    }

    get amigos() {
        return this._amigos;
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