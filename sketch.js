const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground, arrowboardImg1, arrowboardImg2;

var arrow1

function setup(){
    var canvas = createCanvas(displayWidth, displayHeight - 100);
    engine = Engine.create();
    world = engine.world;

ground = new Ground(width/2, height-50, width, 50);
//target1 = new Target(250, 150, width/7);
target2 = new Target(width-250, 150, width/7);

arrow1=new Arrow(250,height-200);
arrow2=new Arrow(250,150);

slingshot = new SlingShot(arrow1.body, {x:250, y:height-200})
    

}

function draw(){
    background("grey");
    Engine.update(engine);

    ground.display();
    //target1.display();
    target2.display();
   fill(0);
    arrow1.display();
    arrow2.display();
    slingshot.display();
    //detectCollision(target1,arrow1);
    console.log("hi");
    ellipseMode(RADIUS);
    ellipse(250,150,width/7)
    text(mouseX+","+mouseY,mouseX,mouseY);
}
function mouseDragged(){
    Matter.Body.setPosition(arrow1.body,{x:mouseX,y:mouseY});
}


function mouseReleased()
{
    slingshot.fly();
    Matter.Body.applyForce(arrow1.body,arrow1.body.position,{x:0,y:-40});
}

function detectCollision(lmango){
	mangoBodyPosition=lmango.body.position
	 
   
	 //var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	 if(distance<=lmango.height/2+width/7){
	   Matter.Body.setStatic(lmango.body,true);
       console.log("touching");
	 }
   }