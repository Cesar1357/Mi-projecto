class Enemi {
    constructor(x, y,r) {
        var options ={
            'restitution':0.8,
            'friction':0,
            'density':5.0
        }
        this.r=r;
        //this.image = loadImage("barril.png");
        this.body = Bodies.circle(x, y, this.r,options);       
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        fill("green")
        rectMode(CENTER);
        ellipse(0,0, this.r,this.r);
        pop();
    }

};