class balao{
    constructor(x,y,image){
        var config = {
            fricctionAir: 0.5
        }

        this.body = Bodies.circle(x,y,5,config);

        this.image_ = image;
    }
    display(){
        imageMode(CENTER);
        image(this.image_,this.body.position.x,this.body.position.y,90,90);
}
    velocidade(){
        var velocity = p5.Vector.fromAngle(2);
        velocity.mult(0.5);
        Matter.Body.setVelocity(this.body,{x:0,y:velocity.y*2});
    }
}
