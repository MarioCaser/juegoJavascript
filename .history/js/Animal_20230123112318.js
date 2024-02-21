class Animal {
    constructor(id, type, points, state, size, speed) {
    this.id = id;
    this.type = type;
    this.points = points;
    this.state = state;
    this.size = size;
    this.speed = speed;
    }
    
    setState(state) {
    this.state = state;
    }
    
    getState() {
    return this.state;
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
    console.log("datos del animal");
    }
    
    kill() {
    this.state = "dead";
    console.log("killed");
    }
    }
    
    const lion = new Animal(1, "Enemy", 50, "Alive", "Large", 10);
    console.log(lion.getState()); // "Alive"
    lion.kill();
    console.log(lion.getState()); // "dead"
    lion.show();
    // Animals ID: 1, Type: Enemy, Points: 50, State: dead, Size: Large, Speed: 10