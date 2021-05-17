class Iron {
    constructor(x, y) {
      var options = {
        'friction':3,
        'restitution':0.8,
        'density':30
      };
      this.body = Bodies.rectangle(x, y, 15, 15, options);
      this.width = 15;
      this.height = 15;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('white')
      fill("green")
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  