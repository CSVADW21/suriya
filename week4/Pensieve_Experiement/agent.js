//Perlin noise example. Modified from:

// M_1_5_03_TOOL.pde
// Agent.pde, GUI.pde
// 
// Generative Gestaltung, ISBN: 978-3-87439-759-9
// First Edition, Hermann Schmidt, Mainz, 2009
// Hartmut Bohnacker, Benedikt Gross, Julia Laub, Claudius Lazzeroni
// Copyright 2009 Hartmut Bohnacker, Benedikt Gross, Julia Laub, Claudius Lazzeroni
//
// http://www.generative-gestaltung.de

class Agent {
  //PVector p, pOld;
  //float noiseZ, noiseZVelocity = 0.01;
  //float stepSize, angle;

  constructor() {
    this.p = createVector(random(width),random(height));
    this.pOld = createVector(this.p.x,this.p.y);
    this.stepSize = random(1,5);
    // init noiseZ
    this.noiseZ2 = random(0.4);
    //this.setNoiseZRange(0.4);
    //print(this.pOld)
  }

  update(){
    print("-----------")
    print(this.pOld)
    this.angle = noise(this.p.x/noiseScale, this.p.y/noiseScale, this.noiseZ2) * noiseStrength;
    
    print(this.p)
    print(cos(this.angle) * this.stepSize);
    this.p.x += cos(this.angle) * this.stepSize;
    this.p.y += sin(this.angle) * this.stepSize;
    this.p = createVector(this.p.x +cos(this.angle) * this.stepSize, this.p.y +sin(this.angle) * this.stepSize)
    print(this.p)
    // offscreen wrap
    /*if (this.p.x<-10) this.p.x=this.pOld.x=width+10;
    if (this.p.x>width+10) this.p.x=this.pOld.x=-10;
    if (this.p.y<-10) this.p.y=this.pOld.y=height+10;
    if (this.p.y>height+10) this.p.y=this.pOld.y=-10;*/

    strokeWeight(this.strokeWidth*this.stepSize);
    //stroke(153);
    //fill('rgba(200,169,169,0.5)');
    print(this.pOld.x,this.pOld.y, this.p.x,this.p.y)
    
    line(this.pOld.x,this.pOld.y, this.p.x,this.p.y);

    this.pOld.set(this.p);
    this.noiseZ += this.noiseZVelocity;
  }



  //setNoiseZRange(theNoiseZRange) {
    // small values will increase grouping of the agents
  //  this.noiseZ = random(theNoiseZRange);
  //}
}