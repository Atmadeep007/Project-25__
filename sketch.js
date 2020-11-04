const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world; 
var ground, ball;
var box1, box2,box3;
var paper1;

function setup()
{
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    //ground
    ground = new Ground(width/2,height-20,width,20);

    //boxes for dustbin
    box1 = new Box(800,275);
    //box2 = new Box(845,365);
    //box3 = new Box(880,345);

    paper1 = new Paper(275,200,40);

    /*var options = {
        'isStatic' : false,
        'restitution' : 0.3,
        'friction' : 0.5,
        'density': 1.2
    }
    Matter.Bodies.circle(150,150,30,options);

    ellipse(150,150,20,30);*/
}

function draw()
{
    background(255);
    Engine.update(engine);
    ground.display();
    box1.display();    
    //box2.display();
    //box3.display();
    paper1.display();
}

function keyPressed() 
{
    if (keyCode===UP_ARROW)
    {
        Matter.Body.applyForce(paper1.body,paper1.position,{x:100,y:-135});
    }
}