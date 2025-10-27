namespace Transfuß {
    window.addEventListener('load', onLoadHandler);
    function onLoadHandler(): void {
        const canvas: HTMLCanvasElement = document.querySelector("canvas") as HTMLCanvasElement;
        const crc2: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D;

        crc2.fillStyle = "#5e5ba5ff";
        crc2.fillRect(0, 0, 600, 600);

        crc2.beginPath();
        crc2.moveTo(0, 590);
        crc2.lineTo(200, 590);
        crc2.stroke();
        
        lTake(crc2);
    }

    function lTake(_crc2: CanvasRenderingContext2D): void {



    }
}