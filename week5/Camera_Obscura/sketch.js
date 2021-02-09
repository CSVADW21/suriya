
var myCapture, // camera
    myVida;    // VIDA
var synth = [];

/*
  Here we are trying to get access to the camera.
*/
function initCaptureDevice() {
  try {
    myCapture = createCapture(VIDEO);
    myCapture.size(150, 150);
    myCapture.elt.setAttribute('playsinline', '');
    myCapture.hide();
    console.log(
      '[initCaptureDevice] capture ready. Resolution: ' +
      myCapture.width + ' ' + myCapture.height
    );
  } catch(_err) {
    console.log('[initCaptureDevice] capture error: ' + _err);
  }
}

function setup() {
  createCanvas(800, 600); // we need some space...
  initCaptureDevice(); // and access to the camera

  myVida = new Vida(this); // create the object
  myVida.progressiveBackgroundFlag = true;
  myVida.imageFilterFeedback = 0.92;
  myVida.imageFilterThreshold = 0.15;
  
  //active zones converted into sound
  myVida.handleActiveZonesFlag = true;
  myVida.setActiveZonesNormFillThreshold(0.02);
  var padding = 0.07; var n = 5;
  var zoneWidth = 0.1; var zoneHeight = 0.5;
  var hOffset = (1.0 - (n * zoneWidth + (n - 1) * padding)) / 2.0;
  var vOffset = 0.25;
  for(var i = 0; i < n; i++) {
    myVida.addActiveZone(
      i,
      hOffset + i * (zoneWidth + padding), vOffset, zoneWidth, zoneHeight,
    );
    var osc = new p5.Oscillator();
    osc.setType('sine');
    osc.freq(440.0 * Math.pow(2.0, (60 + (i * 4) - 69.0) / 12.0));
    osc.amp(0.0); osc.start();
    synth[i] = osc;
  }

  frameRate(120); // set framerate
  
  //canvas setting
  background(220);
}

function draw() {
  if(myCapture !== null && myCapture !== undefined) { // safety first
    //background(0, 0, 255);
    myVida.update(myCapture);
    //image(myCapture, 0, 0);
    //image(myVida.backgroundImage, 320, 0);
    //image(myVida.differenceImage, 0, 240);
    offset = 150
    image(myVida.thresholdImage, width-offset, height-offset, offset, offset);
    // let's also describe the displayed images
    noStroke(); fill(255, 255, 255);
    //text('camera', 20, 20);
    //text('vida: progressive background image', 340, 20);
    //text('vida: difference image', 20, 260);
    text('vida: threshold image', width-offset, height-offset);
    
    // defint size of the drawing
    var temp_drawing_w = width / 2;  var temp_drawing_h = height / 2;
    // offset from the upper left corner
    var offset_x = 320; var offset_y = 240;
    // pixel-based zone's coords
    var temp_x, temp_y, temp_w, temp_h;
    //push(); // store current drawing style and font
    //translate(offset_x, offset_y); // translate coords
    // set text style and font
    textFont('Helvetica', 10); textAlign(LEFT, BOTTOM); textStyle(NORMAL);
    for(var i = 0; i < myVida.activeZones.length; i++) {
      temp_x = Math.floor(myVida.activeZones[i].normX * temp_drawing_w);
      temp_y = Math.floor(myVida.activeZones[i].normY * temp_drawing_h);
      temp_w = Math.floor(myVida.activeZones[i].normW * temp_drawing_w);
      temp_h = Math.floor(myVida.activeZones[i].normH * temp_drawing_h);
      // draw zone rect (filled if movement detected)
      strokeWeight(1);
      if(myVida.activeZones[i].isEnabledFlag) {
        stroke(255, 0, 0);
        if(myVida.activeZones[i].isMovementDetectedFlag) fill(255, 0, 0, 128);
        else noFill();
      }
      else {
        stroke(0, 0, 255);
        if(myVida.activeZones[i].isMovementDetectedFlag) fill(0, 0, 255, 128);
        else noFill();
      }
      
      //rect(temp_x, temp_y, temp_w, temp_h);
      // print id
      noStroke();
      if(myVida.activeZones[i].isEnabledFlag) fill(255, 0, 0);
      else fill(0, 0, 255);
      //text(myVida.activeZones[i].id, temp_x, temp_y - 1);
      /*
        Using the isChangedFlag flag is very important if we want to trigger an
        behavior only when the zone has changed status.
      */
      if(myVida.activeZones[i].isChangedFlag) {
        // print zone id and status to console ...
        console.log(
          'zone: ' + myVida.activeZones[i].id +
          ' status: ' + myVida.activeZones[i].isMovementDetectedFlag
        );
        //... and use this information to control the sound.
        //synth[myVida.activeZones[i].id].amp(
        //  0.1 * myVida.activeZones[i].isMovementDetectedFlag
        //);
      }
    }
    
    //drawing
    stroke(0);
    print(myVida.activeZones[0].isMovementDetectedFlag);
    if (mouseIsPressed == true) {
    line(pmouseX, pmouseY, mouseX+100*myVida.activeZones[0].isMovementDetectedFlag, mouseY);
    //scribble.scribbleLine( pmouseX, pmouseY, mouseX, mouseY );
    }
    //translate(-offset_x, -offset_y);
    //pop();
  }
  else {
    /*
      If there are problems with the capture device (it's a simple mechanism so
      not every problem with the camera will be detected, but it's better than
      nothing) we will change the background color to alarmistically red.
    */
    background(255, 0, 0);
  }
}

function keyPressed() {
  if (key == 'x')
  {
    clear();
    background(220);
  }
}
