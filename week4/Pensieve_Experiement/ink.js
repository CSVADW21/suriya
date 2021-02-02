//class that defines the properties of ink
class Ink {
  constructor(inMX, inMY) {
    this.x = inMX//random(0, width);
    this.y = inMY//random(0, height);
    this.r = random(1, 8);
    this.xSpeed = 0//random(-2, 2);
    this.ySpeed = random(0, 1.5);
  }
  
  // creation of a particle.
  createInkDrops() {
    noStroke();
    fill('rgba(200,169,169,0.5)');
    circle(this.x,this.y,this.r);
  }
  
  moveDrops() {
    if(this.x < 0 || this.x > width)
      this.xSpeed*=-1;
    if(this.y < 0 || this.y > height)
      this.ySpeed*=0;
    this.x+=this.xSpeed;
    this.y+=this.ySpeed;
  }
}