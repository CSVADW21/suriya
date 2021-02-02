//Sketch created by Suriya
//Generativity Design - 
//Randomness - Mouse Input
//Generativity - Perlin Noise

ipMouseX = -100
ipMouseY = -100

//let noiseScale=0.02;
overlayAlpha = 10
agentsAlpha = 90
noiseScale = 100
noiseStrength = 10
noiseZRange = 0.4;

function setup() {
  createCanvas(400, 600);
  
  fluid = new Fluid(2, 0, 0.1);
}

function draw() {
  background(237, 34, 93);
  //rect(rectX, rectY, 20, 20, 7)
  //circle(rectX, rectY, 30)
  //touchStarted()
  //pattern()
  
  background('#0f0f0f');
  
  fill(255, overlayAlpha);
  noStroke();
  rect(0,0,width,height);
  stroke(255, 10);
  for(let i = 0;i<inkDrops.length;i++) {
    inkDrops[i].createInkDrops();
    inkDrops[i].moveDrops();
    
    //agents[i].update();
    //particles[i].joinParticles(particles.slice(i));
  }
  
  //FLuids Simulation
  /*stroke(51);
  strokeWeight(2);

  let cx = int((0.5 * width) / SCALE);
  let cy = int((0.5 * height) / SCALE);
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      fluid.addDensity(cx + i, cy + j, random(50, 150));
    }
  }

  for (let i = 0; i < 2; i++) {
    let angle = noise(t) * TWO_PI * 2;
    let v = p5.Vector.fromAngle(angle);
    v.mult(0.2);
    t += 0.01;
    fluid.addVelocity(cx, cy, v.x, v.y);
  }

  fluid.step();
  fluid.renderD();*/
}

function mouseClicked()
{
  ipMouseX = mouseX;
  ipMouseY = mouseY;
  print(ipMouseX, ipMouseY)
  pattern(ipMouseX, ipMouseY)
}

/*function touchStarted() {
  //circle(mouseX, mouseY, 20);
  // prevent default
  //pattern(mouseX, mouseY)
  return false;
}*/