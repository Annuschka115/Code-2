window.addEventListener ('load',(_event:Event)=>{console.log("has loaded")});

const canvas: HTMLCanvasElement = document.querySelector("canvas") as HTMLCanvasElement;
const crc2: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D;

crc2.fillStyle= "#201787ff";
crc2.fillRect(0,0,crc2.canvas.width, crc2.canvas.height);
crc2.beginPath();
crc2.arc(crc2.canvas.width / 2, crc2.canvas.height / 2, 90, 0, 10);
crc2.closePath();
crc2.stroke();


const path: Path2D = new Path2D();
// path.moveTo(crc2.canvas.width / 2, crc2.canvas.height / 2);
crc2.beginPath();
crc2.lineTo(crc2.canvas.width / 2, crc2.canvas.height / 2);
crc2.lineTo(crc2.canvas.width / 2+90, crc2.canvas.height / 2);
crc2.closePath();
crc2.stroke();

console.log("AAAAAAAAaaa");

