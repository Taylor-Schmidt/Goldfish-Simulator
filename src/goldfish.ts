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
    


}