class Box{
    constructor(x,y,width,height){

        var home={
            restitution:1
        }

        this.body = Bodies.rectangle(x,y,width,height,home);
        this.width = width;
        this.height = height;
        World.add(myWorld,this.body);
    }

    display(){
        var pos = this.body.position;
        fill("pink");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
} 