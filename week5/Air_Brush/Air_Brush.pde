// Using code from Daniel Shiffman for Code Train Motion Detection, improvised by Suriya Dakshina Murthy
// Borrowing colorful brush strokes from - https://www.uniquesoftwaredev.com/intro-to-processing-creating-colorful-brush-strokes/

import processing.video.*;

Capture video;
PImage prev;

float threshold = 25;
float motionX = 0;
float motionY = 0;
float lerpX = 0;
float lerpY = 0;


//colorful brush strokes
int circleSize = 0;
int red = 0;
int green = 0;
int blue = 0;
int redValue = 1;
int greenValue = 1;
int blueValue = 1;
int colorMode = 1;

void setup() {
  size(1280, 860);
  String[] cameras = Capture.list();
  printArray(cameras);
  video = new Capture(this, 100, 100, 30);
  video.start();
  prev = createImage(100, 100, RGB);
}


void mousePressed() {
}

void captureEvent(Capture video) {
  prev.copy(video, 0, 0, video.width, video.height, 0, 0, prev.width, prev.height);
  prev.updatePixels();
  video.read();
}

void draw() {
  video.loadPixels();
  prev.loadPixels();
  pushMatrix();
  //scale(-1,1); 
  image(video, width-100, height-100, 100, 100);
  popMatrix();

  //threshold = map(mouseX, 0, width, 0, 100);
  threshold = 50;


  int count = 0;
  
  float avgX = 0;
  float avgY = 0;

  loadPixels();
  // Begin loop to walk through every pixel
  for (int x = 0; x < video.width; x++ ) {
    for (int y = 0; y < video.height; y++ ) {
      int loc = x + y * video.width;
      // What is current color
      color currentColor = video.pixels[loc];
      float r1 = red(currentColor);
      float g1 = green(currentColor);
      float b1 = blue(currentColor);
      color prevColor = prev.pixels[loc];
      float r2 = red(prevColor);
      float g2 = green(prevColor);
      float b2 = blue(prevColor);

      float d = distSq(r1, g1, b1, r2, g2, b2); 

      if (d > threshold*threshold) {
        //stroke(255);
        //strokeWeight(1);
        //point(x, y);
        avgX += x;
        avgY += y;
        count++;
        pixels[loc] = color(255);
      } else {
        pixels[loc] = color(0);
      }
    }
  }
  updatePixels();

  // We only consider the color found if its color distance is less than 10. 
  // This threshold of 10 is arbitrary and you can adjust this number depending on how accurate you require the tracking to be.
  if (count > 200) { 
    motionX = avgX / count;
    motionY = avgY / count;
    
    //parameters for the brush strokes
    stroke(0, 0, 0, 50);
    fill(red, green, blue, 50);
    circleSize++;
    
    if (colorMode == 1) 
    {
      if (red == 255) {
      redValue = -1;
      } else if (red == 0) {
      redValue = 1;
      }
      red += redValue;
    }
      
    if (colorMode == 2) 
    {
      if (green == 255) {
      greenValue = -1;
      } else if (green == 0) {
      greenValue = 1;
      }
      green += greenValue;
    }
      
    if (colorMode == 3) 
    {
      if (blue == 255) {
      blueValue = -1;
      } else if (blue == 0) {
      blueValue = 1;
      }
      blue += blueValue;
    }
  }
 else {
    circleSize = 0;
  }
  
  float plerpX = lerpX;
  float plerpY = lerpY;
  
  lerpX = lerp(lerpX, motionX, 0.1); 
  lerpY = lerp(lerpY, motionY, 0.1); 
  
  //fill(255, 0, 255);
  //strokeWeight(2.0);
  //stroke(0);
  //ellipse(lerpX*width/100, lerpY*height/100, 36, 36);
  line(plerpX*width/100, plerpY*height/100, lerpX*width/100, lerpY*height/100);

  image(video, 0, 0, 100, 100);
  image(prev, 100, 0, 100, 100);

  //println(mouseX, threshold);
  
  if (colorMode > 3) {
  colorMode = 1;
  }
}

float distSq(float x1, float y1, float z1, float x2, float y2, float z2) {
  float d = (x2-x1)*(x2-x1) + (y2-y1)*(y2-y1) +(z2-z1)*(z2-z1);
  return d;
}

void keyPressed()
{
  if(key=='x')
  {
    clear();
    background(255);
  }
}
