// namespace Canvas {
    window.addEventListener('load', onLoadHandler);
    function onLoadHandler(): void {
        console.log("machen Sachen?");
        const canvas: HTMLCanvasElement = document.querySelector("canvas") as HTMLCanvasElement;
        const crc2: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D;



        // /*
        // crc2.fillStyle= "#201787ff";
        // crc2.fillRect(0,0,crc2.canvas.width, crc2.canvas.height);
        // crc2.beginPath();
        // crc2.arc(crc2.canvas.width / 2, crc2.canvas.height / 2, 90, 0, 10);
        // crc2.closePath();
        // crc2.stroke();



        // // path.moveTo(crc2.canvas.width / 2, crc2.canvas.height / 2);
        // crc2.beginPath();
        // crc2.lineTo(crc2.canvas.width / 2, crc2.canvas.height / 2);
        // crc2.lineTo(crc2.canvas.width / 2+90, crc2.canvas.height / 2);
        // crc2.closePath();
        // crc2.stroke();

        // crc2.beginPath();
        // crc2.strokeText("owo",crc2.canvas.width / 2, crc2.canvas.height / 2,  20000000000000);
        // crc2.closePath();
        // console.log("AAAAAAAAaaa");

        // */


        // type Vector = {x:number,y:number}

        // function doTriangle(vectorX:number,vectorY:number):void{

        // }
        // }

        for (let i:number = 0; i <= 22; i++) {
            
console.log("Schleife laufen");
    getRandomColor();


            function getRandomColor(): string {
            console.log("getRandomColor");
    
            const letters : string = "0123456789ABCDEF";
            let color : string = "#";
            for (let i : number = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            console.log(color);
                    return color;
        
        }

        }


    //     }



    // }

}


// }