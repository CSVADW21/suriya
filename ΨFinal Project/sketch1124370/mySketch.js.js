/*Sketch by Suriya Dakshina Murthy for MAT594X Final Project
suriya@ucsb.edu
04th-March-2021*/




let inconsolata;
function preload() { //load font
  inconsolata = loadFont('Corki-Regular.otf');
}

var cube_size;
var start_x = 0, start_y=0, start_z = 0;
var camera_orientation = 1; //default=1
function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	angleMode(DEGREES);
	background(100);
	cube_params["cube_size"]=35;
	cube_size = cube_params["cube_size"];
	isoCubes = [];
	cam = createCamera();
	//cam.setPosition(0, 0, 0);
	//ortho();
	ortho(-width / 2, width / 2, -height / 2, height / 2, -5000, 5000);
	isoCubes.push(new IsoCube(0, 0, 0));
	//isoCubes.push(new IsoCube(50, 100));
	//isoCubes.push(new IsoCube(50, 200));
	//isoCubes.push(new IsoCube(50, 300));
	//translate(0, -100, 0);
	//debugMode();
	//debugMode(1000, 10, 0, 0, 0, 50, 0, -50, 0);
	//ortho(-width / 2, width / 2, -height / 2, height / 2, -5000, 5000);
	//camera(width/2, -height/2, -1000, -width/2, height/2, +1000, 0, 1, 0);
	
	//isometric camera values - make any changes to below in Ray Tracer aswell
	cam.setPosition(30, -250, 0); //camera origin
	
	cam.pan(45); //yaw degrees
	cam.tilt(35.264); //pitch degrees - magic number
	
	/*for(var x=0; x<10; x++)
	{
		//for(var y=0; y<10; y++)
		{
			for(var z=0; z<10; z++)
			{
				isoCubes.push(new IsoCube(x*21, 0, z*21));
			}
		}
	}*/
	//cam_position = [0, 0, (height/2.0) / tan(30)];
	//print(cam_position);
	
	//set font
	textFont(inconsolata);
	textSize(20);
	textAlign(LEFT, CENTER);
}

function draw() {
	cube_size = cube_params["cube_size"];
	background(0); //pink - 255, 217, 234
	
	//text
	let s = 'Interactions -\nw,a,s,d OR up,down,left,right arrows - xy-plane\nshift/ctrl - z-axis\n1, 2 - change camera\nx - delete cube\n*don\'t change cube size middle of sketch!';
	push();
	fill(255);
	rotateY(45);
	rotateX(35);
	translate(-width/2+100, -height/2-100);
	text(s, 0, 0); // Text wraps within text box
	pop();
	
	//orbitControl();
	lights();
	//lights(-1);
	directionalLight(128, 128, 128, 500, 500, 500);
	directionalLight(128, 128, 128, 500, 500, -500);
	directionalLight(128, 128, 128, 500, -500, 500);
	directionalLight(128, 128, 128, 500, -500, -500);
	normalMaterial();
	//cam.pan(0.01);
	push();
	//translate(-300, -0, -300); //translate - change to Ray Tracer File
	//translate(-width/2, -height/2, 100);
	//translate(-width/2, 0, -width/2);
	if(keyIsDown(32))
	{
		isoCubes.push(new IsoCube(mouseX, mouseY, 0));
		//isoCube.display();
	}
	
	for(let i=0; i<isoCubes.length; i++)
	{
		isoCubes[i].display(255);
		//if(isoCubes[i].intersect(r))
		{
			//print("Cube Intersect True");
			//isoCubes[i].display(255);
		}
	}
	var last_cube = isoCubes.length-1;
	isoCubes[last_cube].cursor();
	pop();
}

function mousePressed()
{
	//print(mouseX-width/2, mouseY-height/2);
}

function keyPressed()
{
	if (keyCode === UP_ARROW || keyCode === 87) 
	{
		//print("UP arrow");
		start_y-=cube_size;
		isoCubes.push(new IsoCube(start_x, start_y, start_z));
	}
	if (keyCode === LEFT_ARROW || keyCode === 65)
	{
		//print("LEFT arrow");
		start_x-=cube_size;
		isoCubes.push(new IsoCube(start_x, start_y, start_z));
	}
	if (keyCode === RIGHT_ARROW || keyCode === 68)
	{
		//print("RIGHT arrow");
		start_x+=cube_size;
		isoCubes.push(new IsoCube(start_x, start_y, start_z));
	}
	if (keyCode === DOWN_ARROW || keyCode === 83)
	{
		//print("DOWN arrow");
		start_y+=cube_size;
		isoCubes.push(new IsoCube(start_x, start_y, start_z));
	}
	if (keyCode === SHIFT)
	{
		//print("SHIFT key");
		start_z-=cube_size;
		isoCubes.push(new IsoCube(start_x, start_y, start_z));
	}
	if (keyCode === CONTROL)
	{
		//print("CONTROL key");
		start_z+=cube_size;
		isoCubes.push(new IsoCube(start_x, start_y, start_z));
	}
	if (keyCode === 88)
	{
		//print("X key");
		var last_cube = isoCubes.length-1;
		if(last_cube==0)
		{
			print("cannot delete last cube");
			return;
		}
		isoCubes.pop();
		start_x = isoCubes[last_cube-1].x;
		start_y = isoCubes[last_cube-1].y;
		start_z = isoCubes[last_cube-1].z;
		isoCubes[last_cube-1].cursor();
	}
	if (keyCode === 49) //default camera orientation
	{
		if(camera_orientation!=1)
		{
			//cam.setPosition(30, -250, 0); //camera origin
			cam.tilt(-35.264); //pitch degrees - magic number
			cam.pan(135); //yaw degrees
			cam.pan(45);
			cam.tilt(35.264);
			camera_orientation = 1;
		}
	}
	if (keyCode === 50) //2nd camera angle
	{
		if(camera_orientation!=2)
		{
			//cam.setPosition(30, -250, 0); //camera origin
			cam.tilt(-35.264); //pitch degrees - magic number
			cam.pan(-45); //yaw degrees
			cam.pan(-135);
			cam.tilt(35.264);
			camera_orientation = 2;
		}
	}
}