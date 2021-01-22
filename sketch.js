
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var dustbinImage,dustbin1
var paperObj;
function preload(){
	dustbinImage = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
    
	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperObj = new Paper(400,400,100,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  paperObj.display();
  groundObject.display();
  dustbinObj.display();
  dustin1 = createSprite(1200,520,50,20)
  dustin1.addImage("dustbin",dustbinImage)
  dustin1.scale = 0.9;
  drawSprites();

}
function keyPressed(){
  if (keyDown(UP_ARROW)){
  Matter.Body.applyForce(paperObj.body, paperObj.body.position,{x:450,y:-1000})

}
}
