// an array to add multiple particles
let inkDrops = [];
let agents = [];

function pattern(inMouseX, inMouseY)
{
  //perlin noise
  inkDrops.push(new Ink(inMouseX, inMouseY))
  //agents.push(new Agent())
}