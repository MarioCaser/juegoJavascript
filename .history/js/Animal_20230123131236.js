class Animal {
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
        console.log(randomNumber);
    }
    
    kill() {
        this.live = false;
        console.log("killed");
    }
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