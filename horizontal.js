class HorizonatalLog 
{
    constructor(x,y,angle) 
    {
        var options = 
        {
            isStatic:true,
            'friction':1
        }

        this.body = Bodies.Rectangle(x,y,200,20);
        this.width = 200;
        this.height = 20;
        Matter.body.setAngle(this.body,angle); 
        World.add(world,this.body);
    }

    diplay()
    {
        var pos = this.body.position;

        RectMode(CENTER);
        fill("red");
        rect(x,y,this.width,this.height);
    }
}