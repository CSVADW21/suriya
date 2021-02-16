# RGB Color Tesseract

This week was experimenting with 3D color space for color pallet. This is a 3D cube with each side expanding the rgb color space all the way from rgb(0) to rgb(255). The one dimension expands on gamut of red, two dimensions is gamut of red and green and the third expands it on blue to give the entire 3D rgb color space. This work was inspired from [Tauba Auerbach's RGB Colorspace Atlas.](http://taubaauerbach.com/view.php?id=286&alt=2948)

Play with the sketch here - https://openprocessing.org/sketch/1102005 </br>
**Right-click to pick a color**

TODO: There is an error with axis inversion due to coordinate space of image and 3D and sometimes the color picker chooses inverted color, working to fix it with ray casting

## Screenshots
<img src="./week6/screenshots/Color-Picker-Tesseract-OpenProce.gif">
<img src="./week6/screenshots/picker3.PNG">
<img src="./week6/screenshots/picker4.PNG">
<img src="./week6/screenshots/picker2.PNG ">

## Libraries
p5.easyCam - 3D interaction with scene </br>
dat.GUI - UI color picker interaction

## References
[Dave Briccetti's Sketches](https://www.youtube.com/channel/UCsvS1__wPMXEPbtFzgpX3nQ)
