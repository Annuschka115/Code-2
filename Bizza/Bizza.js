"use strict";
var Bizza;
(function (Bizza) {
    window.addEventListener('load', onLoadHandler);
    function onLoadHandler() {
        const canvas = document.querySelector("canvas");
        const crc2 = canvas.getContext("2d");
        const button1 = document.getElementById("CallButton1");
        const derTextbox1 = document.querySelector("input#Textbox1");
        const derTextbox2 = document.querySelector("input#Textbox2");
        const r1 = parseFloat(derTextbox1.value);
        const a = parseFloat(derTextbox2.value);
        const p1 = { x: crc2.canvas.width / 2, y: crc2.canvas.height / 2 };
        const p2 = { x: crc2.canvas.width / 2, y: crc2.canvas.height + r1 };
        const p3 = { x: 200, y: crc2.canvas.height + r1 };
        makeTriangle(crc2, p1, p2, p3);
        if (button1) {
            // Einen Event-Listener hinzufügen, der eine Funktion ausführt, wenn der Button geklickt wird
            button1.addEventListener('click', () => {
                bizzaMaker();
            });
        }
    }
    function bizzaMaker() {
    }
    function makeTriangle(_crc2, _p1, _p2, _p3) {
        _crc2.beginPath();
        _crc2.moveTo(_p1.x, _p1.y);
        _crc2.lineTo(_p2.x, _p2.y);
        _crc2.lineTo(_p3.x, _p3.y);
        _crc2.lineTo(_p1.x, _p1.y);
        _crc2.closePath();
        _crc2.fill();
    }
})(Bizza || (Bizza = {}));
//# sourceMappingURL=Bizza.js.map