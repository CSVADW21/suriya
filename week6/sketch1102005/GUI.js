// Creating a GUI with options.
var gui = new dat.GUI({name: 'My GUI'});
// Add a controller slider.
var cube_params = {num_of_cubes: 100};
gui.add(cube_params, 'num_of_cubes', 100, 500);

var palette = {
  color1: '#FF0000', // CSS string
  color2: [ 0, 128, 255 ], // RGB array
  color3: [ 0, 128, 255, 0.3 ], // RGB with alpha
  color4: { h: 350, s: 0.9, v: 0.3 }, // Hue, saturation, value
	newColor: [255, 255, 255]
};
//gui.addColor(palette, 'color1');
//gui.addColor(palette, 'color2').updateDisplay();
//gui.addColor(palette, 'color3');
//gui.addColor(palette, 'color4');
gui.addColor(palette, 'newColor');
//gui.listen();