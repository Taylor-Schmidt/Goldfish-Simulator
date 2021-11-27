import * as ex from "excalibur";
import { Resources } from "./resources";
export class Goldfish extends ex.Actor{
    constructor(){
        super({
            pos: new ex.Vector(400, 400),
            vel: new ex.Vector(100,100),
            width: 200,
            height: 177,
        })
        this.body.collider.type = ex.CollisionType.Passive;
    }
    
    onInitialize(engine: ex.Engine){
        this.addDrawing(Resources.Goldfish);
    }

    private onPreCollision(evt: ex.PreCollisionEvent){

    }
    onPostUpdate(engine: ex.Engine){

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
        if (this.pos.y + this.height / 2 > 800){
            this.vel.y *= -1;
        }

    }


}