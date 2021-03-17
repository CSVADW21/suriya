# 3D Paint Free Hand
To build a 3D painting tool, first of which is to explore a 3D brush and provides user interactivity to paint in 3D. </br>
Proposal [here](https://docs.google.com/presentation/d/1IHDXUCGRRGfJmvA7q5QQh2LCm66MGu1DnkGx56SYFtQ/edit?usp=sharing).

### Core Features -
#### Stage 1 
<ul>
<li> Automatic rotation of the camera about the y-axis and allow drawing similar to 2D but creating the sketches in 3D </li>
<li> Using basic primitives as brushes - box, line etc </li> 
</ul>

#### Stage 2
<ul>
<li>Work on interactivity and virtual camera - to provide user with the entire 6DOF in 3D similar to a video games using mouse and keyboard interactions </li>
<li>Add options to change the primitive brush options, add physics for brushes based on speed of movement of brushes* </li>
<li>Add Color Picker
</ul>

#### Stage 3*
<ul>
<li> Work on exploring brush strokes [Skeletal Strokes](https://dl.acm.org/doi/pdf/10.1145/168642.168662) [Dynamic Brushes](https://jenniferjacobs.mat.ucsb.edu/#db) </li>
<li> Producing procedural sketches in 3D </li>
</ul>

### Proof of Concept -
Simulating a 3D brush using 3D cube and Peasy Cam3D in WebGL. </br>
Challenges - 3D camera orientation and mouse interactivity overlap </br>
OpenProcessing Sketch - https://openprocessing.org/sketch/1120316

<img src="./screenshots/3D_boxSketch.PNG">

\* - based on availability of time
