"use strict";
var Asteroid;
(function (Asteroid_1) {
    class Asteroid {
        constructor(_size) {
            console.log("Asteroid constructor");
            this.position = new Asteroid_1.Vector(0, 0);
            this.velocity = new Asteroid_1.Vector(0, 0);
            this.velocity.random(100, 200);
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
        }
        move(_timeslice) {
            // console.log("Asteroid Move");
            const offset = new Asteroid_1.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x <= 0)
                this.position.x += Asteroid_1.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += Asteroid_1.crc2.canvas.height;
            if (this.position.x > Asteroid_1.crc2.canvas.width)
                this.position.x -= Asteroid_1.crc2.canvas.width;
            if (this.position.y > Asteroid_1.crc2.canvas.height)
                this.position.y -= Asteroid_1.crc2.canvas.height;
        }
        draw() {
            // console.log("Asteroid draw");
            Asteroid_1.crc2.save();
            Asteroid_1.crc2.translate(this.position.x, this.position.y);
            Asteroid_1.crc2.scale(this.size, this.size);
            Asteroid_1.crc2.translate(-50, -50);
            Asteroid_1.crc2.stroke(Asteroid_1.asteroidPaths[this.type]);
            Asteroid_1.crc2.restore();
        }
        isHit(_hotspot) {
            const hitsize = 50 * this.size;
            const difference = new Asteroid_1.Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
        }
    }
    Asteroid_1.Asteroid = Asteroid;
})(Asteroid || (Asteroid = {}));
//# sourceMappingURL=Asteroid.js.map