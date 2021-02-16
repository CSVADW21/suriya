//Sketch by Suriya Dakshina Murthy for MAT594X inspired by Tauba Aurerbach's RGB Colorspace Atlas (2011)
//TODO:
//1. Add support for proper 3D color picker
//2. Add scaled and proper color gamut to cubes
//3. Make each cube 3D object and implement correct ray casting(ray-cube intersection)
document.oncontextmenu = () => false; //remove right click
console.log('This is a log message.'); //same as "print" above

const cubes = [];
function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	background(100);
	createEasyCam();
	//cam = createCamera();
	//delta = -0.5;
	cube_params["num_of_cubes"] = 150;
}

function draw() {
	num_of_cubes = cube_params["num_of_cubes"];
	//print(cube_params);
	//ellipse(mouseX, mouseY, 20, 20);
	background(255);
	//normalMaterial();
	//box(200);
	//lights
	lights();
	lights(-1);
	
	//ambientLight(-128, -128, -128);
	//directionalLight(-128, -128, -128, 0, 0, 1);
	/*cam.move(delta,0,0);
	// every 100 frames, switch direction
	if (frameCount % 150 === 0) {
		delta *= -1;
	}*/
	for(var i=-num_of_cubes; i<=num_of_cubes; i+=35)
	{
		for(var j=-num_of_cubes; j<=num_of_cubes; j+=35)
		{
			for(var k=-num_of_cubes; k<=num_of_cubes; k+=35)
			{
				push();
				lights();
				translate(i, j, k);
				//print(i,j,k);
				//fill(lerp(0, 255, i%255), lerp(0, 255, j%255), lerp(0, 255, k%255));
				fill(i, j, k);
				box(30);
				pop();
			}
		}
	}
}

function mousePressed()
{
	if(mouseButton === RIGHT)
	{
		print("Right Click");
		//print("Right Click");
		//translate(width/2, height/2, 0);
		var c = get(mouseX, mouseY);
		print(c);
		//set(mouseX, mouseY, color(0));
		//loadPixels();
		//print(pixels[mouseX+mouseY*width]);
		
		fill(c);
		palette["newColor"] = c;
		print(palette["newColor"]);
		gui.updateDisplay();
		//gui.addColor(palette, 'newColor');
		//square(10,10,55);
		//updatePixels();
	}
}

function keyPressed()
{
	//print("Reached key pressed()");
	if(key=='w')
	{
		print("Reached w");
		//print("Right Click");
		translate(width/2, height/2, 0);
		var c = get(mouseX, mouseY);
		print(c);
		loadPixels();
		print(pixels[mouseX+mouseY*width]);
		
		fill(c);
		palette["newColor"] = c;
		print(palette["newColor"]);
		gui.updateDisplay();
		//gui.addColor(palette, 'newColor');
		square(10,10,55);
	}
}