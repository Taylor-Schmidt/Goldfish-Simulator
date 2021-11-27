import * as ex from "excalibur";
import { Resources } from "./resources";
export class Goldfish extends ex.Actor{
    private newPos = new ex.Vector(0,0);
    private isMoving = false; 
    private deciding = 0;
    private startPosition: ex.Vector;
    private halfWay = new ex.Vector(0,0)
    private xdif = 0;
    private ydif = 0;
    constructor(){
        super({
            pos: new ex.Vector(400, 400),
            vel: new ex.Vector(0,0),
            acc: new ex.Vector(0,0),
            width: 200,
            height: 177,
        })
        this.startPosition = this.pos;
        this.body.collider.type = ex.CollisionType.Passive;
    }
    
    onInitialize(engine: ex.Engine){
        const fish = Resources.Goldfish.asSprite()
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        fish.colorize(new ex.Color(r,g,b,100));
        this.addDrawing("right", fish );
        
    }

    private onPreCollision(evt: ex.PreCollisionEvent){

    }
    onPostUpdate(engine: ex.Engine){

       
            this.deciding = Math.floor(Math.random() * 500)
            if(this.deciding === 1){
                console.log("Decided!")
                console.log(`pos: ${this.pos}`)
                this.newPos.x = Math.floor(Math.random() * (800 - this.width/2) + (this.width/2)); 
                this.newPos.y = Math.floor(Math.random() * (600 - this.height/2) + (this.height/2));
                console.log(`newPossition: ${this.newPos}`);
                this.halfWay.x = this.startPosition.x + (this.newPos.x - this.startPosition.x)/2;
                this.halfWay.y = this.startPosition.y + (this.newPos.y - this.startPosition.y)/2;
                this.xdif=(this.newPos.x - this.startPosition.x);
                this.ydif=(this.newPos.y - this.startPosition.y);
                console.log(`halfway: ${this.halfWay}`);
            }
            this.swim();


        //collide left side
        if(this.pos.x < this.width /2){
            this.vel.x *= -1;
        }
        //collide right side
        if(this.pos.y < this.height/2){
            this.vel.y *= -1;
        }
        //collide top
        if (this.pos.x + this.width / 2 > 800){
            this.vel.x *= -1;

        }
        //collide bottom
        if (this.pos.y + this.height / 2 > 600){
            this.vel.y *= -1;
        }

    }

    private swim(){
        console.log("swimming");
        if(Math.ceil(this.pos.x) === this.newPos.x && Math.ceil(this.pos.y) === this.newPos.y)
        {
            this.vel = new ex.Vector(0,0);
            this.isMoving = false;
            this.startPosition = this.pos;
            return;
        }

        //moving into positive x
        if(this.xdif > 0)
        {
            if(this.pos.x < this.halfWay.x){
                this.vel.x += 0.1;
            }
            else{
                this.vel.x -= 0.1;
            }
        }
        //moving into negative x
        else{           
            if(this.pos.x > this.halfWay.x){
                this.vel.x += 0.1;
            }
            else{
                this.vel.x -= 0.1;
            }
        }
        //moving into positive y
        if(this.ydif > 0)
        {
            if(this.pos.y < this.halfWay.y){
                this.vel.y += 0.1;
            }
            else{
                this.vel.y -= 0.1;
            }
        }
        //moving into negative y
        else{           
            if(this.pos.y > this.halfWay.y){
                this.vel.y += 0.1;
            }
            else{
                this.vel.y -= 0.1;
            }
        }
        
    }


}