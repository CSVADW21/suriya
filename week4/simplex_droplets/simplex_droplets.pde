//MAT594X - Suriya Dakshina Murthy Generative design
//input from mouse for randomness and generativity using perlin noise/simplex noise


import controlP5.*;

// ------ ControlP5 ------
ControlP5 controlP5;
boolean showGUI = false;
Slider[] sliders;

void setup(){
  size(1000,1000,P3D);
  
  stroke(255);
  fill(255);
  
  setupGUI();
}

void draw(){
  background(0);
  
  
  //println("saving frame " + frameCount + "/" + numFrames);
  //if(frameCount<=numFrames) saveFrame("fr###.png");
  //if(frameCount == numFrames) stop();
  //twoParticles(mouseX, mouseY);
  //print(particles.size());
  for(int i=0; i<particles.size(); i++)
  {
    particles.get(i).createTwoParticles();
    particles.get(i).moveTwoParticles();
  }
  
  //clearing out of frameparticles
  run();
  
  drawGUI();
}

void mouseClicked()
{
  pattern(mouseX, mouseY);
}
