class Animal {

    static numAnimals = 0;

    constructor(id, type, points, live, size, speed, fondo) {
        this.id = id;
        this.type = type;
        this.points = points;
        this.live = live;
        this.size = size;
        this.speed = speed;
        //Aquí le pasaremos el div de fondo para mostrar los enemigos
        this.fondo = fondo;
    }
    
    setLive(live) {
        this.live = live;
    }
    
    getLive() {
        return this.live;
    }
    
    setSpeed(speed) {
        this.speed = speed;
    }
    
    getSpeed() {
        return this.speed;
    }
    
    setType(type) {
        this.type = type;
    }
    
    getType() {
        return this.type;
    }
    
    setPoints(points) {
        this.points = points;
    }
    
    getPoints() {
        return this.points;
    }
    
    show() {
        var altura = Math.floor(Math.random() * window.innerHeight);
        console.log(altura);
        
    }
    
    kill() {
        this.live = false;
        console.log("killed");
    }
    }

    function addCohete(){

        let idCohete = numAnimals + "";
    
        // Crear el nuevo elemento
        var nuevoNodo = document.createElement("div");

        // Añadir id
        nuevoNodo.id = idCohete;

        // Añadir class
        nuevoNodo.classList.add("boo");

        // Añadir el nuevo elemento al elemento padre
        fondo.appendChild(nuevoNodo);

        //para que se desplace hasta que llegue al final de la pantalla
        let intervalo = setInterval(function(){
            dist += 1;
            document.getElementById(idCohete).style.left = dist + "px";
            
            if(parseInt(document.getElementById(idCohete).style.left) >= parseInt(screen.width)){
                fondo.removeChild(nuevoNodo);
                //añade aquí cómo eliminar este setInterval
                clearInterval(intervalo);
            }
        },1);
        ++numAnimals;
    }




    /*

    pruebas:

    const lion = new Animal(1, "Enemy", 50, "Alive", "Large", 10);
    console.log(lion.getLive()); // "Alive"
    lion.kill();
    console.log(lion.getLive()); // "dead"
    lion.show();
    // Animals ID: 1, Type: Enemy, Points: 50, State: dead, Size: Large, Speed: 10

    */