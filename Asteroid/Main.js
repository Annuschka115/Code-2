"use strict";
var Asteroid;
(function (Asteroid) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("asteroids starting");
        let canvas;
        null = document.querySelector("canvas");
        if (!canvas)
            return;
        Asteroid.crc2 = canvas.getContext("2D");
        Asteroid.crc2.fillStyle = "black";
        Asteroid.crc2.strokeStyle = "white";
        Asteroid.createPaths();
        console.log("Asteroid Paths: ", Asteroid.asteroidPaths);
    }
})(Asteroid || (Asteroid = {}));
