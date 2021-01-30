var paper;
var groundSprite, groundBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function keypressed(){
	if (keycode === UP_ARROW){
		Body.applyForce(paper.body, paper.body.position, {x:60, y:65})
	}
}

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	groundSprite=createSprite(height-50, width/2, width, 10);

	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper= new Paper(height-60, 200, 10);

	groundBody=Bodies.rectangle(height-50, width/2, width, 10, {isStatic:true});
	World.add(world, groundBody);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  paper.display();
  groundBody.display();
}



