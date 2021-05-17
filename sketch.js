const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber1,rubber2;
var stone1,stone2;
var iron1,iron2,iron3,iron4,iron5,iron6;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);

    hammer = new Hammer(10,100);

    rubber1 = new Rubber(800,350,50);
    rubber2 = new Rubber(850,400,60);
  
    stone1 = new Stone(200,400);
    stone2 = new Stone(250,350);

    iron1 = new Iron(500,400);
    iron2 = new Iron(600,450);
    iron3 = new Iron(550,500);
    iron4 = new Iron(570,300);
    iron5 = new Iron(475,325);
    iron6 = new Iron(450,585);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();

    hammer.display();

    rubber1.display();
    rubber2.display();

    stone1.display();
    stone2.display();

    iron1.display();
    iron2.display();
    iron3.display();
    iron4.display();
    iron5.display();
    iron6.display();
}