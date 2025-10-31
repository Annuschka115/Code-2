"use strict";
var Asteroid;
(function (Asteroid) {
    window.addEventListener("load", handleLoad);
    const asteroids = [];
    function handleLoad(_event) {
        console.log("Asteroids starting");
        const canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Asteroid.crc2 = canvas.getContext("2d");
        Asteroid.crc2.fillStyle = "black";
        Asteroid.crc2.strokeStyle = "#63d7e6ff";
        Asteroid.crc2.fillRect(0, 0, Asteroid.crc2.canvas.width, Asteroid.crc2.canvas.width);
        Asteroid.createPaths();
        console.log("Asteroids paths: ", Asteroid.asteroidPaths);
        createAsteroids(5);
        //createShip();
        const asteroid = new Asteroid.Asteroid(1);
        console.log(asteroid);
        for (let i = 0; i < 100; i++) {
            Asteroid.crc2.fillRect(0, 0, Asteroid.crc2.canvas.width, Asteroid.crc2.canvas.width);
            asteroid.draw();
            asteroid.move(0.1);
        }
        // canvas.addEventListener("mousedown", loadLaser);
        canvas.addEventListener("mouseup", shootLaser);
        // canvas.addEventListener("keypress", handleKeypress);
        // canvas.addEventListener("mousemove", setHeading);
        window.setInterval(update, 20);
    }
    function shootLaser(_event) {
        console.log("Shoot laser");
        let hotspot = new Asteroid.Vector(_event.clientX - Asteroid.crc2.canvas.offsetLeft, _event.clientY - Asteroid.crc2.canvas.offsetTop);
        let asteroidHit = getAsteroidHit(hotspot);
        console.log(asteroidHit);
        if (asteroidHit)
            breakAsteroid(asteroidHit);
    }
    function getAsteroidHit(_hotspot) {
        for (let asteroid of asteroids) {
            if (asteroid.isHit(_hotspot))
                return asteroid;
        }
        return null;
    }
    function breakAsteroid(_asteroid) {
        if (_asteroid.size > 0.3) {
            for (let i = 0; i < 2; i++) {
                let fragment = new Asteroid.Asteroid(_asteroid.size / 2, _asteroid.position);
                fragment.velocity.add(_asteroid.velocity);
                asteroids.push(fragment);
            }
        }
        //     let index: number = asteroids.indexOf(_asteroid);
        //     asteroids.splice(index, 1);
    }
    function createAsteroids(_nAsteroids) {
        console.log("Create asteroids");
        for (let i = 0; i < _nAsteroids; i++) {
            let asteroid = new Asteroid.Asteroid(1.0);
            asteroids.push(asteroid);
        }
    }
    function update() {
        console.log("Update");
        Asteroid.crc2.fillRect(0, 0, Asteroid.crc2.canvas.width, Asteroid.crc2.canvas.height);
        for (let asteroid of asteroids) {
            asteroid.move(1 / 50);
            asteroid.draw();
        }
        //     // ship.draw();
        //     // handleCollisions();
    }
})(Asteroid || (Asteroid = {}));
//# sourceMappingURL=Main.js.map