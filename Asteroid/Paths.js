"use strict";
var Asteroid;
(function (Asteroid) {
    Asteroid.shapesAsteroids = [
        [
            [30, 1], [50, 15], [71, 1], [88, 31], [67, 40], [84, 63], [59, 93], [30, 79], [19, 87], [2, 63]
        ],
        [
            [39, 1], [72, 22], [55, 13], [82, 23], [13, 24], [44, 60], [56, 67], [11, 26]
        ],
        [
            [30, 0], [45, 23], [64, 12], [45, 2], [4, 34], [13, 19], [44, 77], [25, 23]
        ],
        [
            [22, 5], [11, 27], [33, 15], [48, 3], [66, 9], [26, 3], [20, 22], [49, 26]
        ]
    ];
    {
        Asteroid.asteroidPaths = createAsteroidPaths(shapeAsteroids);
        Asteroid.ufoPath = createUfoPath();
    }
    function createAsteroidPaths(_shapes) {
        let paths = [];
        for (let type of _shapes) {
            let path = new Path2D();
            let first = true;
            for (let coordinates of type) {
                if (first)
                    path.lineTo(coordinates[0], coordinates[1]);
                else
                    path.lineTo(coordinates[0]);
                first = false;
            }
            path.closePath();
            paths.push(path);
        }
        return paths;
    }
})(Asteroid || (Asteroid = {}));
