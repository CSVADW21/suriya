rwidth = 600;
rheight = 600;
var pattern = [0, 90, 190, 270];

function setup() {
  createCanvas(rwidth, rheight);
  background(220);

  //var i;
  for (var i = 0; i < rwidth; i++) {
    for (var j = 0; j < rheight; j++) {
      var rand = Math.floor(Math.random() * 4);
      //print(rand);
      if (i % 80 == 0 && j % 80 == 0) {
        pattern1(i, j, rand);
      }
    }
  }
}

function draw() {

}

//single tile pattern
function pattern1(i, j, rand) {
  let c = color(255, 204, 0);
  fill(c);
  noStroke();
  ellipse(i+25, j+25, 80, 80); // Draw left circle
  //triangle(i + 25, j + 25, 
  //         i + 80 + pattern[rand] % 25, j + 25, 
  //         i + 25, j + 80 + pattern[rand] % 25);

  // Using only one value generates a grayscale value.
  c = color(65);
  fill(c);
  ellipse(i + 75, j + 75, 80, 80);
}