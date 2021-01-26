//I (x^2 + 9/4y^2 + z^2 - 1)^3 -x^2z^3 - 9/200y^2z^3 you. Paramterized heart

var f;

function preload() {
  f = loadFont(
    "https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/font/SourceCodePro-Bold.otf"
  );
}

let detailX;
// slide to see how detailX works
function setup() {
  createCanvas(600, 600, WEBGL);
  /*scaleXY = createSlider(2, 24, 2);
  scaleXY.position(10, height + 5);
  scaleXY.style('width', '100px');*/
  
  textFont(f, 100);
  textSize(15);
  noStroke();
  //noFill();
  fill(0);

  // create sliders
  scaleXY = createSlider(2, 24, 2);
  scaleXY.position(20, 20);
  scaleXY.style('width', '100px');
  
  uSlider = createSlider(0.1, 1, 0, 0.1);
  uSlider.position(20, 50);
  uSlider.style('width', '100px');
  
  vSlider = createSlider(1, 5, 0, 0.5);
  vSlider.position(20, 80);
  vSlider.style('width', '100px');
  //colorMode(HSB);
  
  button = createButton('Fill');
  button.position(20, 100);
  button.mousePressed(changeFill);
  fillSlider = true;
}

function changeFill()
{
  if(fillSlider==true)
  {
    noFill();
    fillSlider = false;
  }
  else
  {
    fill(0);
    fillSlider = true;
  }
}

function draw() {
  background(205, 105, 94);
  /*rotateY(millis() / 1000);
  sphere(40, detailX.value(), 16);*/
  //noFill();
  stroke(255);
  strokeWeight(vSlider.value());
  //translate(width/2, height/2);
  
  translate(-width/2, -height/2);
  text('Scale', 20, 20);
  text('Parametization Step', 20, 50);
  text('Stroke Weight', 20, 80);
  translate(width/2, height/2);
  rotateY(millis() / 1000);
  
    
  //parametric surface equation of a Trefoil knot
  /*beginShape()
  for(var a=0; a<TWO_PI; a+=0.01)
  {
    var scale = 30;
    var x = scale*(sin(a) + 2*sin(2*a));
    var y = scale*(cos(a) - 2*cos(2*a));
    var z = scale*-sin(3*a);
    
    /*(2,3)-torus knot
    x = scale*(2 + cos(3*a))*cos(2*a);
    y = scale*(2 + cos(3*a))*sin(2*a);
    z = sin(3*a);
    vertex(x, y, z);
  }
  endShape()*/

  beginShape();
  for(var u=0; u<TWO_PI; u=u+uSlider.value())
  {
    for(var v=0; v<PI; v=v+0.1)
    {
      var x = sin(v)*(15*sin(u)-4*sin(3*u));
      var y = 8*cos(v);
      var z = 15*cos(u)-5*cos(2*u)-2*cos(3*u)-cos(2*u);
      
      vertex(scaleXY.value()*x, -scaleXY.value()*z, y);
    }
  }
  endShape();

}