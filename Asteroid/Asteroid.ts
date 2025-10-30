namespace Asteroid {
   export class Asteroid {
position: Vector;
velocity: Vector;
type: number;
size: number;

constructor(_size: number) {
     console.log("Asteroid constructor");
     this.position = new Vector(0,0);
     this.velocity = new Vector(0, 0);
     this.velocity.random (100, 200);
}

moveBy(_timeslice: number): void{
    console.log("Asteroid Move");
}
draw(): void {
    console.log("Asteroid darw");
}

 }







    
}