class Paper
{
    // new object created - built in initializing function is invoked
    constructor(x,y,radius)
    {
        var options = {
            'isStatic' : false,
            'restitution' : 0.3,
            'density' : 0.5,
            'friction' : 1.2
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.r = radius;
        this.image = loadImage("paper.png");
        World.add(world,this.body);
    }

    display()
    {
        var pos = this.body.position;
        //var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
    }


}