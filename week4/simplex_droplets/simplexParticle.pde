//Reference works of Etienne Jacob - https://necessary-disorder.tumblr.com/

//----Agent Settings----
float motion_radius = 1.0;
OpenSimplexNoise noise = new OpenSimplexNoise();
int m = 3000;
float delay_factor = 1.0;
int numFrames = 100;

class simplexParticle
{
  float x, y, r;
  float xSpeed = random(-2,2);
  float ySpeed = random(-1,1.5);
  
  float ipMouseX = width/2;
  float ipMouseY = height/2;

  simplexParticle(int iMx, int iMy)
  {
    this.x = iMx;
    this.y = iMy;
    this.r = 10;
    
    this.ipMouseX = iMx;
    this.ipMouseY = iMy;
  }
  
  void createParticle()
  {
    noStroke();
    fill(200,0,0);
    circle(this.x,this.y,this.r);
  }
  
  void moveParticle()
  {
    if(this.x < 0 || this.x > width)
      this.xSpeed*=-1;
    if(this.y < 0 || this.y > height)
      this.ySpeed*=-1;
    this.x+=this.xSpeed;
    this.y+=this.ySpeed;
  }
  
  void createTwoParticles()
  {
    //this.ipMouseX = ipMouseX;
    //this.ipMouseY = ipMouseY;
    float t = 1.0*(frameCount - 1)/numFrames;
  
    ellipse(y1(t),x1(t),6,6);
    ellipse(y2(t),x2(t),6,6);
    
    pushStyle();
    strokeWeight(2);
    stroke(255,35);
    for(int i=0;i<=m;i++){
      float tt = 1.0*i/m;
      
      float x = lerp(x1(t - delay_factor*tt),x2(t - delay_factor*(1-tt)),tt);
      float y = lerp(y1(t - delay_factor*tt),y2(t - delay_factor*(1-tt)),tt);
      
      point(y,x);
    }
    popStyle();
  }
  
  void moveTwoParticles()
  {
    this.ipMouseY+=5;
  }
  
  void deleteTwoparticles()
  {
    
  }
  
  //supporting functions
  float x1(float t){
    float seed = 1337;//*this.ipMouseY;
    return this.ipMouseY + 150*(float)noise.eval(seed + motion_radius*cos(TWO_PI*t),motion_radius*sin(TWO_PI*t));
  }
  float y1(float t){
    float seed = 1515;//*this.ipMouseX;
    return this.ipMouseX + 150*(float)noise.eval(seed + motion_radius*cos(TWO_PI*t),motion_radius*sin(TWO_PI*t));
  }
  
  float x2(float t){
    return this.ipMouseY + 50*cos(2*TWO_PI*t) + height;
  }
  float y2(float t){
    return this.ipMouseX  + 50*sin(2*TWO_PI*t);
  }
}
