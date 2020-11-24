const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var box;

function setup(){
    createCanvas(600,600);

    myEngine = Engine.create();
    myWorld = myEngine.world;

   
   
    box = new Box(300,50,100,70);
    

    ground=new Ground(300,590,600,20);
    
}

function draw(){
    background(0);
    Engine.update(myEngine);
   
    box.display();
   ground.display();
} 