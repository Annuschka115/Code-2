namespace Bizza {






    type Vector2 = { x: number, y: number }






    window.addEventListener('load', onLoadHandler);
    function onLoadHandler(): void {
        const canvas: HTMLCanvasElement = document.querySelector("canvas") as HTMLCanvasElement;
        const crc2: CanvasRenderingContext2D = canvas.getContext("2d")!;

        const button1: HTMLElement = document.getElementById("CallButton1") as HTMLElement;
        const derTextbox1: HTMLInputElement = document.querySelector("input#Textbox1")!;
        const derTextbox2: HTMLInputElement = document.querySelector("input#Textbox2")!;

        const r1: number = parseFloat(derTextbox1.value);
        const a: number = parseFloat(derTextbox2.value);
        const p1: Vector2 = { x: crc2.canvas.width /2 , y: crc2.canvas.height /2  };
        const p2: Vector2 = { x: crc2.canvas.width / 2 , y: crc2.canvas.height + r1  };
        const p3: Vector2 = { x: 200, y: crc2.canvas.height + r1  };

        makeTriangle(crc2, p1, p2, p3);
        if (button1) {
            // Einen Event-Listener hinzufügen, der eine Funktion ausführt, wenn der Button geklickt wird
            button1.addEventListener('click', () => {
                bizzaMaker();

            })
        }





    }

    function bizzaMaker(): void {



    }
    function makeTriangle(_crc2: CanvasRenderingContext2D, _p1: Vector2, _p2: Vector2, _p3: Vector2): void {
        _crc2.beginPath();
        _crc2.moveTo(_p1.x, _p1.y);
        _crc2.lineTo(_p2.x, _p2.y);
        _crc2.lineTo(_p3.x, _p3.y);
        _crc2.lineTo(_p1.x, _p1.y);
        _crc2.closePath();
        _crc2.fill();
    }
}