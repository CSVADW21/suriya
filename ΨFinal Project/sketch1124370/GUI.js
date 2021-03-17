// Creating a GUI with options.
var gui = new dat.GUI({name: 'My GUI'});
// Add a controller slider.
var cube_params = {cube_size: 25};
gui.add(cube_params, 'cube_size', 10, 100);