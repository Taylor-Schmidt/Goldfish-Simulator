import * as ex from "excalibur";
import { Resources } from "./resources";
import Config from "./config";

export class Goldfish extends ex.Actor{
    private newPos = new ex.Vector(200,200);
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
        });
        this.startPosition = this.pos;
        this.body.collider.type = ex.CollisionType.Passive;
    }
    
    onInitialize(engine: ex.Engine){
        const fishLeft = Resources.goldfishLeft.asSprite()
        const fishRight = Resources.goldfishRight.asSprite()
        const color = this.setRandomColor();
        fishLeft.colorize(color);
        fishRight.colorize(color);
        this.addDrawing("left", fishLeft );
        this.addDrawing("right", fishRight );       
    }

    private onPreCollision(evt: ex.PreCollisionEvent){

    }
    onPostUpdate(engine: ex.Engine){
        if(this.vel.x > 0)
        {
            this.setDrawing("right");
        }
        else{
            this.setDrawing("left");
        }
        this.randomMove();
        this.checkCollision();
        this.swim();
    }
    private checkCollision(){
        //collide left side
        if(this.pos.x < this.width /2){
            this.vel.x *= -0.9;
        }
        //collide top 
        if(this.pos.y < this.height/2){
            this.vel.y *= -0.9;
        }
        //collide right side
        if (this.pos.x + this.width / 2 > Config.GameWidth){
            this.vel.x *= -0.9;
        }
        //collide bottom
        if (this.pos.y + this.height / 2 > Config.GameHeight){
            this.vel.y *= -0.9;
        }
    }

    private randomMove(){
        this.deciding = Math.floor(Math.random() * 1000)
        if(this.deciding === 1){
            this.newPos.x = Math.floor(Math.random() * (Config.GameWidth - this.width/2) + (this.width/2)); 
            this.newPos.y = Math.floor(Math.random() * (Config.GameHeight - this.height/2) + (this.height/2));
            this.halfWay.x = (this.newPos.x + this.startPosition.x)/2;
            this.halfWay.y = (this.newPos.y + this.startPosition.y)/2;
            this.xdif=(this.newPos.x - this.startPosition.x);
            this.ydif=(this.newPos.y - this.startPosition.y);
        }  
    }
    private randomColorValue(){
        return Math.floor(Math.random() * 255);
    }
    private setRandomColor(){
        let r = this.randomColorValue();
        let g = this.randomColorValue();
        let b = this.randomColorValue();

        return new ex.Color(r,g,b,100);
    }
    private swim(){
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
                 this.vel.x -= 0.1;
             }
             else{
                 this.vel.x += 0.1;
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
                 this.vel.y -= 0.1;
             }
             else{
                 this.vel.y += 0.1;
             }
         }
       
        
    }



}