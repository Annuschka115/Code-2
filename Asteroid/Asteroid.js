"use strict";
var Asteroid;
(function (Asteroid_1) {
    class Asteroid {
        constructor(_size) {
            console.log("Asteroid constructor");
            this.position = new Asteroid_1.Vector(0, 0);
            this.velocity = new Asteroid_1.Vector(0, 0);
            this.velocity.random(100, 200);
        }
        moveBy(_timeslice) {
            console.log("Asteroid Move");
        }
        draw() {
            console.log("Asteroid darw");
        }
    }
    Asteroid_1.Asteroid = Asteroid;
})(Asteroid || (Asteroid = {}));
