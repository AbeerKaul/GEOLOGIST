
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var rubber;
var hammer;
var stone;
var sand1,sand2,sand3,sand5;

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(0,380,2600,10);
	rubber = new Rubber(300,200);
	hammer = new Hammer(1000,1000);
	stone = new Stone(150,200);
	sand1 = new Sand(250,200);
	sand2 = new Sand(260,200);
	sand3 = new Sand(270,200);
	sand4 = new Sand(280,200);
	iron = new Iron(100,200);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("white");

  ground.display();
  rubber.display();
  hammer.display();
  stone.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  iron.display();

  drawSprites();
 
}
