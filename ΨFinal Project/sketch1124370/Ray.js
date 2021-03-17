//import mySketch.*;
//import * as p5 from "mySketch.js";

let alpha = 45; //yaw by alpha degrees
let beta = 35.264; //pitch by beta degrees
let gamma = 0; //roll by gamma degrees
let translateXYZ = [-200, -200, -100];
let homogeneous_tranform_matrix = [[Math.cos(alpha)*Math.cos(beta), Math.cos(alpha)*Math.sin(beta)*Math.sin(gamma) - Math.sin(alpha)*Math.cos(gamma), Math.cos(alpha)*Math.sin(beta)*Math.cos(gamma) + Math.sin(alpha)*Math.sin(gamma), translateXYZ[0]],
																	 [Math.sin(alpha)*Math.cos(beta), Math.sin(alpha)*Math.sin(beta)*Math.sin(gamma) + Math.cos(alpha)*Math.cos(gamma), Math.sin(alpha)*Math.sin(beta)*Math.cos(gamma) - Math.cos(alpha)*Math.sin(gamma), translateXYZ[1]],
																	 [-Math.sin(beta), Math.cos(beta)*Math.sin(gamma), Math.cos(beta)*Math.cos(gamma), translateXYZ[1]],
																	 [0, 0, 0, 1]];
class Ray
{
	constructor(in_MouseX, in_MouseY)
	{
		this.orig = createVector(in_MouseX, in_MouseY, eyeZ);
		push();
		/*applyMatrix(homogeneous_tranform_matrix[0][0], homogeneous_tranform_matrix[0][1], homogeneous_tranform_matrix[0][2], homogeneous_tranform_matrix[0][3],
							 homogeneous_tranform_matrix[1][0], homogeneous_tranform_matrix[1][1], homogeneous_tranform_matrix[1][2], homogeneous_tranform_matrix[1][3],
							 homogeneous_tranform_matrix[2][0], homogeneous_tranform_matrix[2][1], homogeneous_tranform_matrix[2][2], homogeneous_tranform_matrix[2][3],
							 homogeneous_tranform_matrix[3][0], homogeneous_tranform_matrix[3][1], homogeneous_tranform_matrix[3][2], homogeneous_tranform_matrix[3][3]);
		*/this.dir = createVector(in_MouseX, in_MouseY, -eyeZ);
		pop();
		//this.direction = this.direction.mult(homogeneous_tranform_matrix);
	}
}
