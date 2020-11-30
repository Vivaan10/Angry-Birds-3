class Chain{
    constructor(someBodyA, someBodyB) {
        var options = {
            bodyA:someBodyA,
            bodyB:someBodyB,
            stiffness:0.04,
            length:10
        }

        this.chain  = Constraint.create(options);
        World.add(world,this.chain);
    }

    display(){
        //line(x1,y1,x2,y2)
        strokeWeight(4);
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y )
    }

}