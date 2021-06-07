class Sand {
    constructor(x, y) {
      var options = {
          'restitution':1.0,
          'friction':5,
          'density':1
      }

      this.body = Bodies.circle(x,y,5,options);
      World.add(world, this.body);

    }

    display(){

      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      ellipseMode(CENTER);
      strokeWeight(3);
      fill("brown");
      ellipse(0, 0, 20);
      pop();

    }
  };
  