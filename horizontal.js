class HorizontalLog 
{
    constructor(x,y,angle) 
    {
        var options = 
        {
            isStatic:true,
            'friction':1
        }

        this.body = Bodies.rectangle(x,y,200,20);
        this.width = 200;
        this.height = 20;
        Matter.Body.setAngle(this.body,angle); 
        World.add(world,this.body);
    }

    display()
    {
        var pos = this.body.position;

        rectMode(CENTER);
        fill("red");
        rect(pos.x,pos.y,this.width,this.height);
    }
}