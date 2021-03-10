# Documenting Progress of the Project

## Initial Idea: Building a Free-hand 3D Painting Tool
The idea was to build a 3D free-hand painting tool, that allows paiting in all three dimensions. But the challenges of this was two fold - building a brush that can represent a paint brush in 3D and interactivity in 3D - using mouse and keyboard.
Solution - To add constraints in terms of brush - Box/Lines and interactivity - to paint in 2D while having a rotation on the third axis.

Initial Free-hand solution - 
<img src="./screenshots/3D_boxSketch.PNG">

## Idea Pivot: Building a Isometric Painting Tool
Thinking about the adding constraints to the tool led me to think along the 2.5D direction of isometric projections - this removes the 6 Degree of Freedom in 3D to just 3 degrees of freedom. This also allows me to build a simple cube/voxel brush and allows painting in this constrained dimensions.

New Idea -
<img src="./progress/idea_sketch_isometric.jpg">

Inspiration - Minecraft - Lego - Tetris

### Update1: Challenges
Understanding the coordinate system of WebGL and understanding Isometric projection and getting it to align with mouse interactions(orbitControl())
<img src="./progress/Isometric Paint Tool - OpenProcessing — Mozilla Firefox 05-03-2021 12_08_54 PM.png">

### Update2: Got the Isometric camera position and 2D cube drawing in place
Have better understanding of isometric cameras and now able to draw cubes in a XY plane.
<img src="./progress/Isometric Paint Tool - OpenProcessing — Mozilla Firefox 05-03-2021 06_02_29 PM.png" width=49%> <img src="./progress/Isometric Paint Tool - OpenProcessing — Mozilla Firefox 05-03-2021 08_34_08 PM.png" width=49%>

### Update3: Got the correct isometric projections
Got the correct isometric projections and it is starting to look more like a 3D Tetris. Now working on interacting with the isometric cube and providing with interactivity tools - keyboard and mouse
<img src="./progress/Isometric Paint Tool - OpenProcessing — Mozilla Firefox 06-03-2021 09_36_07 PM.png">


### Update4: Working on Raytracer for Ray Cube Intersection
Building a Ray and Intersect routines to check if a ray from the camera and mouse input interacts the cubes in the scene to provide interactivity to user for painting in isometric view.
