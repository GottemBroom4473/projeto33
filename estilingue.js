class estilingue{
    constructor(bodyA,pointB){
        var config = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.5,
            lenght: 10
        }
        this.body = Constraint.create(config);
        this.pointB = pointB;
        World.add(world,this.body);
    }
    display(){
        if(this.body.bodyA){
            strokeWeight(6);
            stroke(rgb(56,27,10));
            line(this.body.bodyA.position.x - 20,this.body.bodyA.position.y,this.pointB.x + 10,this.pointB.y + 10);
            line(this.body.bodyA.position.x -20,this.body.bodyA.position.y,this.pointB.x + 50,this.pointB.y + 15);
        }

    }
    fly(){
        this.body.bodyA = null;
    }

    attach(bodyA){
        this.body.bodyA = bodyA;
    }
}