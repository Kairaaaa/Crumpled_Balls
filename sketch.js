var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,box;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1300,450);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(600,height,1400,20)


	//Create the Bodies Here.

	box1=createSprite(431,652,120,15);
	box1.shapeColor=color(400)
	box2=createSprite(500,600,15,120);
	box2.shapeColor=color(400)
	box3=createSprite(362,600,15,120);
	box3.shapeColor=color(400)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground.display();

 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paperObject,body,paperObject,body.position,{x:85,y:-85})
	}
}