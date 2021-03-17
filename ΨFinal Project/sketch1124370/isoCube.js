//class name <nouns> - upperCase
//variable name - camelCase
//function name <verbs> - upperCase

//import * as Ray from "./rayTracer.js"

class IsoCube
{
	constructor(x, y, z)
	{
		this.x = x;
		this.y = y;
		this.z = z;
		//this.size = cube_size;
	}
	display(alpha)
	{
		//print(this.x, this.y);
		push();
		translate(this.x, this.y, this.z);
		//fill(50, 78, 168, alpha);
		fill('#7259ff'); //thanks to masood
		//box(this.size);
		box(cube_size);
		pop();
	}
	cursor()
	{
		push();
		translate(this.x, this.y, this.z);
		fill(255, 255, 255, 200);
		//box(this.size);
		box(cube_size);
		pop();
	}
	
	//checks if a Ray intersects a Cube and returns bool
	intersect(r) //takes a ray as input
	{
			//create AABB - axis aligned bounding box from the parameters
			var bounds = [createVector(this.x+this.size/2, this.y+this.size/2, this.z+this.size/2),
									createVector(this.x-this.size/2, this.y-this.size/2, this.z-this.size/2)]; //lower right corner, upper left corner

			var tmin = (bounds[0].x - r.orig.x) / r.dir.x;
			var tmax = (bounds[1].x - r.orig.x) / r.dir.x;

			if (tmin > tmax)
				[tmin, tmax] = [tmax, tmin]; //swap in JS

			var tymin = (bounds[0].y - r.orig.y) / r.dir.y;
			var tymax = (bounds[1].y - r.orig.y) / r.dir.y;

			if (tymin > tymax)
				[tymin, tymax] = [tymax, tymin]; //swap in JS

			if ((tmin > tymax) || (tymin > tmax))
					return false;

			if (tymin > tmin)
					tmin = tymin;

			if (tymax < tmax)
					tmax = tymax;

			var tzmin = (bounds[0].z - r.orig.z) / r.dir.z;
			var tzmax = (bounds[1].z - r.orig.z) / r.dir.z;

			if (tzmin > tzmax)
				[tzmin, tzmax] = [tzmax, tzmin]; //swap in JS

			if ((tmin > tzmax) || (tzmin > tmax))
					return false;

			if (tzmin > tmin)
					tmin = tzmin;

			if (tzmax < tmax)
					tmax = tzmax;

			return true;
	}
}