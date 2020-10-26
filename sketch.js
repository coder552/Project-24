
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground,left,right,bottom;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground  = new Ground(600,650,1200,20)
paper = new Paper(300,200,50);
left = new Dustbin(840,590,20,100)
right = new Dustbin(1010,590,20,100)
bottom = new Dustbin(925,630,150,20)

	Engine.run(engine);
  keyPressed();
}


function draw() {
 
  background(0);
  Engine.update(engine);
  
 paper.display();
 ground.display();
 left.display();
 right.display();
 bottom.display();
}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:255,y:-255});
	}
}

