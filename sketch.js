const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var box;

function setup(){
    createCanvas(600,600);

    myEngine = Engine.create();
    myWorld = myEngine.world;

    box = Bodies.rectangle(300,50,100,70);
    World.add(myWorld,box);

}

function draw(){
    background(0);
    Engine.update(myEngine);

    rect(box.position.x,box.position.y,100,70);
} 