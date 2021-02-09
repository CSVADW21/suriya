//var scribble = new Scribble();              // global mode
//var scribble = new Scribble( p5Instance );  // instance mode

function setup() {
  createCanvas(800, 600);
  background(220);
}

function draw() {

  stroke(0);
  if (mouseIsPressed == true) {
    line(pmouseX, pmouseY, mouseX, mouseY);
    //scribble.scribbleLine( pmouseX, pmouseY, mouseX, mouseY );
  }

}

function keyPressed() {
  if (key == 'x')
  {
    clear();
    background(220);
  }
}