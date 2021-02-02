function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  //face
  fill(255,224,196);
  triangle(100,200, 290,130, 220,300);
  
  //eyes
  fill(255);
  circle(180,170, 40);
  fill(0,0, 150);
  circle(190,175,20); //left pupil
  noFill();
  fill(255);
  circle(210,155, 40);
  fill(0,0, 150);
  circle(220,160,20);//right pupil
  noFill();
  //ears
  fill(255,220,177);
  circle(270,180, 15);
  
  //mouth
  noFill();
  arc(200, 225, 50, 50, 0, HALF_PI); //smile
  //line(200,250, 230,230); //frown
}