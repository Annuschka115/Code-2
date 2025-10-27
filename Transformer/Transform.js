"use strict";
var Transfuß;
(function (Transfuß) {
    window.addEventListener('load', onLoadHandler);
    function onLoadHandler() {
        const canvas = document.querySelector("canvas");
        const crc2 = canvas.getContext("2d");
        crc2.fillStyle = "#5e5ba5ff";
        crc2.fillRect(0, 0, 600, 600);
        crc2.beginPath();
        crc2.moveTo(0, 590);
        crc2.lineTo(200, 590);
        crc2.stroke();
        lTake(crc2);
    }
    function lTake(_crc2) {
    }
})(Transfuß || (Transfuß = {}));
//# sourceMappingURL=Transform.js.map