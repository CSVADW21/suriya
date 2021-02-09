p5.prototype.VidaBlob=function(t){this.__sketch=t,this.normRectX=0,this.normRectY=0,this.normRectW=0,this.normRectH=0,this.normMassCenterX=0,this.normMassCenterY=0,this.normMass=0,this.approximatedPolygon=[],this.creationTime=this.__sketch.millis(),this.creationFrameCount=this.__sketch.frameCount,this.id=-1,this.__rawId=-1,this.isNewFlag=!0},p5.prototype.VidaActiveZone=function(t,s,e,o,i,r){this.normX=s,this.normY=e,this.normW=o,this.normH=i,this.isEnabledFlag=!0,this.isMovementDetectedFlag=!1,this.isChangedFlag=!1,this.changedTime=0,this.changedFrameCount=0,this.normFillFactor=0,this.normFillThreshold=.02,this.id=t,this.onChange=r},p5.prototype.Vida=function(t){this.__sketch=t,this.MIRROR_NONE=0,this.MIRROR_VERTICAL=1,this.MIRROR_HORIZONTAL=2,this.MIRROR_BOTH=3,this.mirror=this.MIRROR_NONE,this.progressiveBackgroundFlag=!0,this.currentImage=this.__sketch.createGraphics(10,10),this.backgroundImage=this.__sketch.createImage(10,10),this.differenceImage=this.__sketch.createImage(10,10),this.thresholdImage=this.__sketch.createImage(10,10),this.imageFilterFeedback=.92,this.imageFilterThreshold=.4,this.__automaticPixelsDataTransferFlag=!0,this.lastUpdateTime=0,this.lastUpdateFrameCount=0,this.__activeZonesNormFillThreshold=.02,this.handleActiveZonesFlag=!1,this.activeZones=[],this.__currentBlobsLocation=0,this.__previousBlobsLocation=1,this.__blobs=[[],[]],this.handleBlobsFlag=!1,this.REJECT_NONE_BLOBS=0,this.REJECT_INNER_BLOBS=1,this.REJECT_OUTER_BLOBS=2,this.rejectBlobsMethod=this.REJECT_NONE_BLOBS,this.trackBlobsFlag=!1,this.trackBlobsMaxNormDist=.15,this.normMinBlobMass=2e-4,this.normMaxBlobMass=.5,this.normMinBlobArea=2e-4,this.normMaxBlobArea=.5,this.approximateBlobPolygonsFlag=!1,this.pointsPerApproximatedBlobPolygon=6,this.__blobMapArray=[],this.numberOfDetectedBlobs=0,this.resizeBlobMapArray(this.thresholdImage.width,this.thresholdImage.height)},p5.prototype.Vida.prototype.resizeGraphicsWorkaround=function(t,s,e){null==t?(t=this.__sketch.createGraphics(s,e)).pixelDensity(1):(t.width=s,t.height=e,t.elt.width=s,t.elt.height=e,t.elt.style.width=s+"px",t.elt.style.height=e+"px",t.pixelDensity(1),t.loadPixels(),t.elt.setAttribute("style","display: none")),t.updatePixels(),t.background(0),t.loadPixels(),s*e!=t.pixels.length/4&&console.log("[Vida, resizeGraphicsWorkaround] _w * _h !== _g.pixels.length / 4:\n_w = "+s+" _h = "+e+"\n_g.width = "+t.width+" _g.height = "+t.height+"\n_w * _h = "+s*e+"\n_g.pixels.length / 4 = "+t.pixels.length/4)},p5.prototype.Vida.prototype.getBlobs=function(t){return 0===arguments.length?t=this.__currentBlobsLocation:t!==this.__currentBlobsLocation&&t!==this.__previousBlobsLocation&&(console.log("[Vida, getBlobs] Unhandled _location parameter value: "+t+". The _location value will be change to "+this.__currentBlobsLocation+" ("+this.__currentBlobsLocation+")."),t=this.__currentBlobsLocation),this.__blobs[t]},p5.prototype.Vida.prototype.getCurrentBlobsLocation=function(){return this.__currentBlobsLocation},p5.prototype.Vida.prototype.getPreviousBlobsLocation=function(){return this.__previousBlobsLocation},p5.prototype.Vida.prototype.resizeBlobMapArray=function(t,s){this.__blobMapArray.splice(0,this.__blobMapArray.length);for(var e=0;e<t;e++){for(var o=[],i=0;i<s;i++)o[i]=0;this.__blobMapArray[e]=o}},p5.prototype.Vida.prototype.resetBlobMapArray=function(){for(var t=0;t<this.thresholdImage.height;t++)for(var s=0;s<this.thresholdImage.width;s++)this.__blobMapArray[s][t]=0},p5.prototype.Vida.prototype.hitTestThresholdImage=function(t,s){var e=Math.floor(t*this.thresholdImage.width),o=Math.floor(s*this.thresholdImage.height);if(e<0)return!1;if(o<0)return!1;if(e>=this.thresholdImage.width)return!1;if(o>=this.thresholdImage.height)return!1;var i=4*(o*this.thresholdImage.width+e);return this.thresholdImage.pixels[i]>0},p5.prototype.Vida.prototype.setActiveZonesNormFillThreshold=function(t){t<0&&(t=0),t>1&&(t=1),this.__activeZonesNormFillThreshold=t;for(var s=0;s<this.activeZones.length;s++)this.activeZones[s].normFillThreshold=this.__activeZonesNormFillThreshold},p5.prototype.Vida.prototype.getActiveZonesNormFillThreshold=function(){return this.__activeZonesNormFillThreshold},p5.prototype.Vida.prototype.addActiveZone=function(t,s,e,o,i,r){5===arguments.length&&(r=function(t){});for(var h=0;h<this.activeZones.length;h++)t==this.activeZones[h].id&&console.log("[Vida, addActiveZone] There are already active zones with the same id: "+t);null==r&&(r=function(t){}),this.activeZones[this.activeZones.length]=new this.__sketch.VidaActiveZone(t,s,e,o,i,r)},p5.prototype.Vida.prototype.drawBlobs=function(t,s,e,o){var i,r,h,a,n,_;2===arguments.length&&(e=this.thresholdImage.width,o=this.thresholdImage.height),this.__sketch.push(),this.__sketch.translate(t,s),this.__sketch.textFont("Helvetica",10),this.__sketch.textAlign(this.__sketch.LEFT,this.__sketch.BOTTOM),this.__sketch.textStyle(this.__sketch.NORMAL);for(var l=0;l<this.__blobs[this.__currentBlobsLocation].length;l++){i=Math.floor(this.__blobs[this.__currentBlobsLocation][l].normRectX*e),r=Math.floor(this.__blobs[this.__currentBlobsLocation][l].normRectY*o),h=Math.floor(this.__blobs[this.__currentBlobsLocation][l].normRectW*e),a=Math.floor(this.__blobs[this.__currentBlobsLocation][l].normRectH*o),n=Math.floor(this.__blobs[this.__currentBlobsLocation][l].normMassCenterX*e),_=Math.floor(this.__blobs[this.__currentBlobsLocation][l].normMassCenterY*o),this.__sketch.strokeWeight(1),this.__sketch.stroke(255,255,0),this.__sketch.noFill(),this.__sketch.rect(i,r,h,a),this.__sketch.noStroke(),this.__sketch.fill(255,0,0),this.__sketch.ellipseMode(this.__sketch.CENTER),this.__sketch.ellipse(n,_,3,3),this.__sketch.noStroke(),this.__sketch.fill(255,255,0),this.__sketch.text(this.__blobs[this.__currentBlobsLocation][l].id,i,r-1),this.__sketch.strokeWeight(1),this.__sketch.stroke(255,0,0),this.__sketch.noFill(),this.__sketch.beginShape();for(var c=0;c<this.__blobs[this.__currentBlobsLocation][l].approximatedPolygon.length;c++)this.__sketch.vertex(this.__blobs[this.__currentBlobsLocation][l].approximatedPolygon[c].normX*e,this.__blobs[this.__currentBlobsLocation][l].approximatedPolygon[c].normY*o);this.__sketch.endShape(this.__sketch.CLOSE)}this.__sketch.pop()},p5.prototype.Vida.prototype.drawActiveZones=function(t,s,e,o){var i,r,h,a;2===arguments.length&&(e=this.thresholdImage.width,o=this.thresholdImage.height),this.__sketch.push(),this.__sketch.textFont("Helvetica",10),this.__sketch.textAlign(this.__sketch.LEFT,this.__sketch.BOTTOM),this.__sketch.textStyle(this.__sketch.NORMAL);for(var n=0;n<this.activeZones.length;n++)i=Math.floor(t+this.activeZones[n].normX*e),r=Math.floor(s+this.activeZones[n].normY*o),h=Math.floor(this.activeZones[n].normW*e),a=Math.floor(this.activeZones[n].normH*o),this.__sketch.strokeWeight(1),this.activeZones[n].isEnabledFlag?(this.__sketch.stroke(255,0,0),this.activeZones[n].isMovementDetectedFlag?this.__sketch.fill(255,0,0,128):this.__sketch.noFill()):(this.__sketch.stroke(0,0,255),this.activeZones[n].isMovementDetectedFlag?this.__sketch.fill(0,0,255,128):this.__sketch.noFill()),this.__sketch.rect(i,r,h,a),this.__sketch.noStroke(),this.activeZones[n].isEnabledFlag?this.__sketch.fill(255,0,0):this.__sketch.fill(0,0,255),this.__sketch.text(this.activeZones[n].id,i,r-1);this.__sketch.pop()},p5.prototype.Vida.prototype.removeActiveZone=function(t){for(var s=this.activeZones.length-1;s>=0;s--)t==this.activeZones[s].id&&list.splice(s,1)},p5.prototype.Vida.prototype.getActiveZone=function(t){for(var s=0;s<this.activeZones.length;s++)if(t==this.activeZones[s].id)return this.activeZones[s];return-1},p5.prototype.Vida.prototype.updateActiveZones=function(){for(var t,s,e,o,i,r,h,a,n=0;n<this.activeZones.length;n++)if(this.activeZones[n].isEnabledFlag){t=Math.floor(this.activeZones[n].normX*this.thresholdImage.width),s=Math.floor(this.activeZones[n].normY*this.thresholdImage.height),e=Math.floor((this.activeZones[n].normX+this.activeZones[n].normW)*this.thresholdImage.width),o=Math.floor((this.activeZones[n].normY+this.activeZones[n].normH)*this.thresholdImage.height),h=Math.floor(this.activeZones[n].normW*this.thresholdImage.width)+Math.floor(this.activeZones[n].normH*this.thresholdImage.height),r=0;for(var _=s;_<=o;_++)for(var l=t;l<=e;l++)i=4*(_*this.thresholdImage.width+l),this.thresholdImage.pixels[i]>0&&(r+=1);this.activeZones[n].normFillFactor=r/h,(a=this.activeZones[n].normFillFactor>this.activeZones[n].normFillThreshold)!=this.activeZones[n].isMovementDetectedFlag&&(this.activeZones[n].isChangedFlag=!0,this.activeZones[n].changedTime=this.__sketch.millis(),this.activeZones[n].changedFrameCount=this.__sketch.frameCount,this.activeZones[n].isMovementDetectedFlag=a,this.activeZones[n].onChange(this.activeZones[n]))}else this.activeZones[n].isChangedFlag=!1,this.activeZones[n].isMovementDetectedFlag=!1},p5.prototype.Vida.prototype.update=function(t){this.updateImageProcessor(t)?(this.handleActiveZonesFlag&&this.updateActiveZones(),this.handleBlobsFlag&&this.updateBlobs(),this.lastUpdateTime=this.__sketch.millis(),this.lastUpdateFrameCount=this.__sketch.frameCount):console.log("[Vida, update] something went wrong. Probably the updateImageProcessor function call failed.")},p5.prototype.Vida.prototype.setBackgroundImage=function(t){if(null===t)return console.log("[Vida, setBackgroundImage] error: _image === null"),!1;if(t.width<1||t.height<1)return console.log("[Vida, setBackgroundImage] possible error: resolution of the _image seems to be incorrect: _image.width = "+t.width+" _image.height = "+t.height+"."),!1;switch(t.width==this.backgroundImage.width&&t.height==this.backgroundImage.height||(console.log("[Vida, setBackgroundImage] adjusting images size to: "+t.width+" "+t.height),this.resizeGraphicsWorkaround(this.currentImage,t.width,t.height),this.backgroundImage.resize(t.width,t.height),this.differenceImage.resize(t.width,t.height),this.thresholdImage.resize(t.width,t.height),this.resizeBlobMapArray(t.width,t.height)),this.__automaticPixelsDataTransferFlag&&(t.loadPixels(),this.backgroundImage.loadPixels(),this.differenceImage.loadPixels()),this.mirror){case this.MIRROR_NONE:this.backgroundImage.copy(t,0,0,t.width,t.height,0,0,t.width,t.height);break;case this.MIRROR_HORIZONTAL:this.currentImage.push(),this.currentImage.scale(-1,1),this.currentImage.image(t,-this.currentImage.width,0),this.currentImage.pop(),this.backgroundImage.copy(this.currentImage,0,0,t.width,t.height,0,0,t.width,t.height);break;case this.MIRROR_VERTICAL:this.currentImage.push(),this.currentImage.scale(1,-1),this.currentImage.image(t,0,-this.currentImage.height),this.currentImage.pop(),this.backgroundImage.copy(this.currentImage,0,0,t.width,t.height,0,0,t.width,t.height);break;case this.MIRROR_BOTH:this.currentImage.push(),this.currentImage.scale(-1,-1),this.currentImage.image(t,-this.currentImage.width,-this.currentImage.height),this.currentImage.pop(),this.backgroundImage.copy(this.currentImage,0,0,t.width,t.height,0,0,t.width,t.height);break;default:console.log("[Vida, setBackgroundImage] unhandled mirror value: "+this.mirror)}},p5.prototype.Vida.prototype.updateImageProcessor=function(t){if(null===t)return console.log("[Vida, updateImageProcessor] error: _image === null"),!1;if(t.width<1||t.height<1)return console.log("[Vida, updateImageProcessor] possible error: resolution of the _image seems to be incorrect: _image.width = "+t.width+" _image.height = "+t.height+"."),!1;switch(t.width==this.backgroundImage.width&&t.height==this.backgroundImage.height||(console.log("[Vida, updateImageProcessor] adjusting images size to: "+t.width+" "+t.height),this.resizeGraphicsWorkaround(this.currentImage,t.width,t.height),this.backgroundImage.resize(t.width,t.height),this.differenceImage.resize(t.width,t.height),this.thresholdImage.resize(t.width,t.height),this.resizeBlobMapArray(t.width,t.height)),this.__automaticPixelsDataTransferFlag&&(t.loadPixels(),this.backgroundImage.loadPixels(),this.differenceImage.loadPixels()),this.mirror){case this.MIRROR_NONE:this.currentImage.image(t,0,0);break;case this.MIRROR_HORIZONTAL:this.currentImage.push(),this.currentImage.scale(-1,1),this.currentImage.image(t,-this.currentImage.width,0),this.currentImage.pop();break;case this.MIRROR_VERTICAL:this.currentImage.push(),this.currentImage.scale(1,-1),this.currentImage.image(t,0,-this.currentImage.height),this.currentImage.pop();break;case this.MIRROR_BOTH:this.currentImage.push(),this.currentImage.scale(-1,-1),this.currentImage.image(t,-this.currentImage.width,-this.currentImage.height),this.currentImage.pop();break;default:console.log("[Vida, updateImageProcessor] unhandled mirror value: "+this.mirror)}if(temp_imageFilterFeedback_flipped=1-this.imageFilterFeedback,this.__automaticPixelsDataTransferFlag&&this.currentImage.loadPixels(),this.progressiveBackgroundFlag)for(var s=0;s<this.backgroundImage.pixels.length;s+=4)this.backgroundImage.pixels[s]=this.backgroundImage.pixels[s]*this.imageFilterFeedback+this.currentImage.pixels[s]*temp_imageFilterFeedback_flipped,this.backgroundImage.pixels[s+1]=this.backgroundImage.pixels[s+1]*this.imageFilterFeedback+this.currentImage.pixels[s+1]*temp_imageFilterFeedback_flipped,this.backgroundImage.pixels[s+2]=this.backgroundImage.pixels[s+2]*this.imageFilterFeedback+this.currentImage.pixels[s+2]*temp_imageFilterFeedback_flipped,this.backgroundImage.pixels[s+3]=255,this.differenceImage.pixels[s]=Math.abs(this.backgroundImage.pixels[s]-this.currentImage.pixels[s]),this.differenceImage.pixels[s+1]=Math.abs(this.backgroundImage.pixels[s+1]-this.currentImage.pixels[s+1]),this.differenceImage.pixels[s+2]=Math.abs(this.backgroundImage.pixels[s+2]-this.currentImage.pixels[s+2]),this.differenceImage.pixels[s+3]=255;else for(s=0;s<this.backgroundImage.pixels.length;s+=4)this.differenceImage.pixels[s]=Math.abs(this.backgroundImage.pixels[s]-this.currentImage.pixels[s]),this.differenceImage.pixels[s+1]=Math.abs(this.backgroundImage.pixels[s+1]-this.currentImage.pixels[s+1]),this.differenceImage.pixels[s+2]=Math.abs(this.backgroundImage.pixels[s+2]-this.currentImage.pixels[s+2]),this.differenceImage.pixels[s+3]=255;return this.__automaticPixelsDataTransferFlag&&this.backgroundImage.updatePixels(),this.__automaticPixelsDataTransferFlag&&this.differenceImage.updatePixels(),this.thresholdImage.copy(this.differenceImage,0,0,this.currentImage.width,this.currentImage.height,0,0,this.differenceImage.width,this.differenceImage.height),this.thresholdImage.filter(this.__sketch.THRESHOLD,this.imageFilterThreshold),this.__automaticPixelsDataTransferFlag&&this.thresholdImage.loadPixels(),!0},p5.prototype.Vida.prototype.findBlobIndexById=function(t,s){for(var e=0;e<this.__blobs[t].length;e++)if(this.__blobs[t][e].id===s)return e;return-1},p5.prototype.Vida.prototype.findFirstFreeId=function(t){for(var s=0,e=!0;e;){e=!1;for(var o=0;o<this.__blobs[t].length;o++)if(this.__blobs[t][o].id===s){e=!0,s+=1;break}}return s},p5.prototype.Vida.prototype.trackBlobs=function(){if(this.__blobs[this.__previousBlobsLocation].length<1)for(var t=0;t<this.numberOfDetectedBlobs;t++)this.__blobs[this.__currentBlobsLocation][t].id=t;else for(t=0;t<this.__blobs[this.__previousBlobsLocation].length;t++)this.__blobs[this.__previousBlobsLocation][t].id<0&&(this.__blobs[this.__previousBlobsLocation][t].id=this.findFirstFreeId(this.__previousBlobsLocation));var s,e,o=[];for(t=0;t<this.numberOfDetectedBlobs;t++)this.__blobs[this.__currentBlobsLocation][t].id=-1,o[t]=10;for(t=0;t<this.numberOfDetectedBlobs;t++)for(var i=0;i<this.__blobs[this.__previousBlobsLocation].length;i++)(s=Math.sqrt(Math.pow(this.__blobs[this.__previousBlobsLocation][i].normMassCenterX-this.__blobs[this.__currentBlobsLocation][t].normMassCenterX,2)+Math.pow(this.__blobs[this.__previousBlobsLocation][i].normMassCenterY-this.__blobs[this.__currentBlobsLocation][t].normMassCenterY,2)))<o[t]&&s<this.trackBlobsMaxNormDist&&(o[t]=s,this.__blobs[this.__currentBlobsLocation][t].id=this.__blobs[this.__previousBlobsLocation][i].id);for(t=0;t<this.numberOfDetectedBlobs;t++)for(i=0;i<this.numberOfDetectedBlobs;i++)t!==i&&(this.__blobs[this.__currentBlobsLocation][t].id<0||this.__blobs[this.__currentBlobsLocation][i].id<0||this.__blobs[this.__currentBlobsLocation][t].id===this.__blobs[this.__currentBlobsLocation][i].id&&(o[t]>o[i]?this.__blobs[this.__currentBlobsLocation][t].id=-1:this.__blobs[this.__currentBlobsLocation][i].id=-1));for(t=0;t<this.numberOfDetectedBlobs;t++)if(!(this.__blobs[this.__currentBlobsLocation][t].id>=0)){o[t]=10;for(i=0;i<this.__blobs[this.__previousBlobsLocation].length;i++)this.findBlobIndexById(this.__currentBlobsLocation,this.__blobs[this.__previousBlobsLocation][i].id)>=0||(s=Math.sqrt(Math.pow(this.__blobs[this.__previousBlobsLocation][i].normMassCenterX-this.__blobs[this.__currentBlobsLocation][t].normMassCenterX,2)+Math.pow(this.__blobs[this.__previousBlobsLocation][i].normMassCenterY-this.__blobs[this.__currentBlobsLocation][t].normMassCenterY,2)))<o[t]&&s<this.trackBlobsMaxNormDist&&(o[t]=s,this.__blobs[this.__currentBlobsLocation][t].id=this.__blobs[this.__previousBlobsLocation][i].id)}for(t=0;t<this.numberOfDetectedBlobs;t++)for(i=0;i<this.numberOfDetectedBlobs;i++)t!==i&&(this.__blobs[this.__currentBlobsLocation][t].id<0?this.__blobs[this.__currentBlobsLocation][t].id=this.findFirstFreeId(this.__currentBlobsLocation):this.__blobs[this.__currentBlobsLocation][i].id<0?this.__blobs[this.__currentBlobsLocation][i].id=this.findFirstFreeId(this.__currentBlobsLocation):this.__blobs[this.__currentBlobsLocation][t].id===this.__blobs[this.__currentBlobsLocation][i].id&&(o[t]>o[i]?this.__blobs[this.__currentBlobsLocation][t].id=this.findFirstFreeId(this.__currentBlobsLocation):this.__blobs[this.__currentBlobsLocation][i].id=this.findFirstFreeId(this.__currentBlobsLocation)));for(t=0;t<this.numberOfDetectedBlobs;t++)(e=this.findBlobIndexById(this.__previousBlobsLocation,this.__blobs[this.__currentBlobsLocation][t].id))<0||(this.__blobs[this.__currentBlobsLocation][t].creationTime=this.__blobs[this.__previousBlobsLocation][e].creationTime,this.__blobs[this.__currentBlobsLocation][t].creationFrameCount=this.__blobs[this.__previousBlobsLocation][e].creationFrameCount,this.__blobs[this.__currentBlobsLocation][t].isNewFlag=!1)},p5.prototype.Vida.prototype.approximateBlobPolygons=function(){var t,s,e,o,i,r,h,a,n,_=2*Math.PI;this.pointsPerApproximatedBlobPolygon<3?(console.log("[Vida, approximateBlobPolygons] Minumum valid value of pointsPerApproximatedBlobPolygon is 3 (currently: "+this.pointsPerApproximatedBlobPolygon+"). The value will be set to 3"),this.pointsPerApproximatedBlobPolygon=3):Math.floor(this.pointsPerApproximatedBlobPolygon)!==Math.ceil(this.pointsPerApproximatedBlobPolygon)&&(console.log("[Vida, approximateBlobPolygons] The variable pointsPerApproximatedBlobPolygon should be of the integer type, not a float. Current value "+this.pointsPerApproximatedBlobPolygon+" will be changed to"+Math.floor(this.pointsPerApproximatedBlobPolygon)+"."),this.pointsPerApproximatedBlobPolygon=Math.floor(this.pointsPerApproximatedBlobPolygon));for(var l=0;l<this.numberOfDetectedBlobs;l++){(t=Math.sqrt(Math.pow((this.__blobs[this.__currentBlobsLocation][l].normRectX-this.__blobs[this.__currentBlobsLocation][l].normMassCenterX)*this.thresholdImage.width,2)+Math.pow((this.__blobs[this.__currentBlobsLocation][l].normRectY-this.__blobs[this.__currentBlobsLocation][l].normMassCenterY)*this.thresholdImage.height,2)))<(s=Math.sqrt(Math.pow((this.__blobs[this.__currentBlobsLocation][l].normRectX+this.__blobs[this.__currentBlobsLocation][l].normRectW-this.__blobs[this.__currentBlobsLocation][l].normMassCenterX)*this.thresholdImage.width,2)+Math.pow((this.__blobs[this.__currentBlobsLocation][l].normRectY-this.__blobs[this.__currentBlobsLocation][l].normMassCenterY)*this.thresholdImage.height,2)))&&(t=s),t<(s=Math.sqrt(Math.pow((this.__blobs[this.__currentBlobsLocation][l].normRectX+this.__blobs[this.__currentBlobsLocation][l].normRectW-this.__blobs[this.__currentBlobsLocation][l].normMassCenterX)*this.thresholdImage.width,2)+Math.pow((this.__blobs[this.__currentBlobsLocation][l].normRectY+this.__blobs[this.__currentBlobsLocation][l].normRectH-this.__blobs[this.__currentBlobsLocation][l].normMassCenterY)*this.thresholdImage.height,2)))&&(t=s),t<(s=Math.sqrt(Math.pow((this.__blobs[this.__currentBlobsLocation][l].normRectX-this.__blobs[this.__currentBlobsLocation][l].normMassCenterX)*this.thresholdImage.width,2)+Math.pow((this.__blobs[this.__currentBlobsLocation][l].normRectY+this.__blobs[this.__currentBlobsLocation][l].normRectH-this.__blobs[this.__currentBlobsLocation][l].normMassCenterY)*this.thresholdImage.height,2)))&&(t=s),t=Math.floor(t),r=Math.floor(this.__blobs[this.__currentBlobsLocation][l].normMassCenterX*this.thresholdImage.width),h=Math.floor(this.__blobs[this.__currentBlobsLocation][l].normMassCenterY*this.thresholdImage.height);for(var c=0;c<this.pointsPerApproximatedBlobPolygon;c++){e=c/this.pointsPerApproximatedBlobPolygon*_,o=Math.sin(e),i=Math.cos(e);for(var b=t;b>=0&&(a=Math.floor(r+b*i),n=Math.floor(h+b*o),a<0?a=0:a>=this.thresholdImage.width&&(a=this.thresholdImage.width-1),n<0?n=0:n>=this.thresholdImage.height&&(n=this.thresholdImage.height-1),this.__blobMapArray[a][n]!==this.__blobs[this.__currentBlobsLocation][l].__rawId);b--);this.__blobs[this.__currentBlobsLocation][l].approximatedPolygon[c]={normX:a/this.thresholdImage.width,normY:n/this.thresholdImage.height}}}},p5.prototype.Vida.prototype.rejectInnerBlobs=function(){for(var t=this.numberOfDetectedBlobs-1;t>=0;t--)for(var s=this.numberOfDetectedBlobs-1;s>=0;s--)t!=s&&(this.__blobs[this.__currentBlobsLocation][s].normRectX<this.__blobs[this.__currentBlobsLocation][t].normRectX||this.__blobs[this.__currentBlobsLocation][s].normRectY<this.__blobs[this.__currentBlobsLocation][t].normRectY||this.__blobs[this.__currentBlobsLocation][s].normRectX+this.__blobs[this.__currentBlobsLocation][s].normRectW<this.__blobs[this.__currentBlobsLocation][t].normRectX+this.__blobs[this.__currentBlobsLocation][t].normRectW||this.__blobs[this.__currentBlobsLocation][s].normRectY+this.__blobs[this.__currentBlobsLocation][s].normRectH<this.__blobs[this.__currentBlobsLocation][t].normRectY+this.__blobs[this.__currentBlobsLocation][t].normRectH||(this.__blobs[this.__currentBlobsLocation].splice(s,1),this.numberOfDetectedBlobs-=1))},p5.prototype.Vida.prototype.rejectOuterBlobs=function(){for(var t=this.numberOfDetectedBlobs-1;t>=0;t--)for(var s=this.numberOfDetectedBlobs-1;s>=0;s--)t!=s&&(this.__blobs[this.__currentBlobsLocation][s].normRectX>this.__blobs[this.__currentBlobsLocation][t].normRectX||this.__blobs[this.__currentBlobsLocation][s].normRectY>this.__blobs[this.__currentBlobsLocation][t].normRectY||this.__blobs[this.__currentBlobsLocation][s].normRectX+this.__blobs[this.__currentBlobsLocation][s].normRectW>this.__blobs[this.__currentBlobsLocation][t].normRectX+this.__blobs[this.__currentBlobsLocation][t].normRectW||this.__blobs[this.__currentBlobsLocation][s].normRectY+this.__blobs[this.__currentBlobsLocation][s].normRectH>this.__blobs[this.__currentBlobsLocation][t].normRectY+this.__blobs[this.__currentBlobsLocation][t].normRectH||(this.__blobs[this.__currentBlobsLocation].splice(s,1),this.numberOfDetectedBlobs-=1))},p5.prototype.Vida.prototype.processBlobs=function(){for(var t,s=[],e=-1,o=0,i=0;i<this.numberOfDetectedBlobs;i++)s[i]={__rawId:i+1,mass:0,normMass:0,normMassX:0,normMassY:0,normMinX:1e5,normMinY:1e5,normMaxX:-10,normMaxY:-10};for(var r=0;r<this.thresholdImage.height;r++)for(var h=0;h<this.thresholdImage.width;h++)(e=this.__blobMapArray[h][r]-1)<0||(s[e].normMassX+=h,s[e].normMassY+=r,s[e].mass+=1,h<s[e].normMinX?s[e].normMinX=h:h>s[e].normMaxX&&(s[e].normMaxX=h),r<s[e].normMinY?s[e].normMinY=r:r>s[e].normMaxY&&(s[e].normMaxY=r));this.__blobs[this.__currentBlobsLocation].splice(0,this.__blobs[this.__currentBlobsLocation].length);for(i=0;i<this.numberOfDetectedBlobs;i++)s[i].normMass=s[i].mass/(this.thresholdImage.height*this.thresholdImage.width),t=(s[i].normMaxX-s[i].normMinX)*(s[i].normMaxY-s[i].normMinY)/(this.backgroundImage.width*this.backgroundImage.height),s[i].normMass<this.normMinBlobMass||s[i].normMass>this.normMaxBlobMass||t<this.normMinBlobArea||t>this.normMaxBlobArea||(s[i].normMassX/=s[i].mass,s[i].normMassY/=s[i].mass,s[i].normMassX/=this.backgroundImage.width,s[i].normMassY/=this.backgroundImage.height,s[i].normMinX/=this.thresholdImage.width,s[i].normMinY/=this.thresholdImage.height,s[i].normMaxX/=this.thresholdImage.width,s[i].normMaxY/=this.thresholdImage.height,this.__blobs[this.__currentBlobsLocation][o]=new this.__sketch.VidaBlob(this.__sketch),this.__blobs[this.__currentBlobsLocation][o].normMassCenterX=s[i].normMassX,this.__blobs[this.__currentBlobsLocation][o].normMassCenterY=s[i].normMassY,this.__blobs[this.__currentBlobsLocation][o].normRectX=s[i].normMinX,this.__blobs[this.__currentBlobsLocation][o].normRectY=s[i].normMinY,this.__blobs[this.__currentBlobsLocation][o].normRectW=s[i].normMaxX-s[i].normMinX,this.__blobs[this.__currentBlobsLocation][o].normRectH=s[i].normMaxY-s[i].normMinY,this.__blobs[this.__currentBlobsLocation][o].normMass=s[i].normMass,this.__blobs[this.__currentBlobsLocation][o].__rawId=s[i].__rawId,this.__blobs[this.__currentBlobsLocation][o].creationTime=this.__sketch.millis(),this.__blobs[this.__currentBlobsLocation][o].creationFrameCount=this.__sketch.frameCount,o+=1);this.numberOfDetectedBlobs=o},p5.prototype.Vida.prototype.updateBlobs=function(){switch(this.__currentBlobsLocation=(this.__currentBlobsLocation+1)%2,this.__previousBlobsLocation=(this.__currentBlobsLocation+1)%2,this.numberOfDetectedBlobs=this.findBlobs(),this.processBlobs(),this.rejectBlobsMethod){case this.REJECT_NONE_BLOBS:break;case this.REJECT_INNER_BLOBS:this.rejectInnerBlobs();break;case this.REJECT_OUTER_BLOBS:this.rejectOuterBlobs();break;default:console.log("[Vida, updateBlobs] unhandled rejectBlobsMethod value: "+this.rejectBlobsMethod)}if(this.trackBlobsFlag)this.trackBlobs();else for(var t=0;t<this.numberOfDetectedBlobs;t++)this.__blobs[this.__currentBlobsLocation][t].id=t;this.approximateBlobPolygonsFlag&&this.approximateBlobPolygons()},p5.prototype.Vida.prototype.findBlobs=function(){this.findBlobs_createTemporaryIndices();for(var t=-1,s=0;t!==s;)this.findBlobs_mergerIterationA(),this.findBlobs_mergerIterationB(),t=s,s=this.findBlobs_countUnorderedIdentifiers();return this.findBlobs_optimizeIdentifiers()},p5.prototype.Vida.prototype.findBlobs_createTemporaryIndices=function(){var t,s=1,e=this.thresholdImage.width-1,o=this.thresholdImage.height-1;this.resetBlobMapArray();for(var i=1;i<o;i++)for(var r=1;r<e;r++)t=4*(i*this.thresholdImage.width+r),this.thresholdImage.pixels[t]>0?this.__blobMapArray[r][i]=s:s+=1},p5.prototype.Vida.prototype.findBlobs_mergerIterationA=function(){for(var t,s,e,o,i,r,h,a,n,_=this.thresholdImage.width-1,l=this.thresholdImage.height-1,c=1;c<l;c++)for(var b=1;b<_;b++)0!==this.__blobMapArray[b][c]&&(t=this.__blobMapArray[b][c-1],s=this.__blobMapArray[b+1][c-1],e=this.__blobMapArray[b+1][c],o=this.__blobMapArray[b+1][c+1],i=this.__blobMapArray[b][c+1],r=this.__blobMapArray[b-1][c+1],h=this.__blobMapArray[b-1][c],a=this.__blobMapArray[b-1][c-1],n=this.__blobMapArray[b][c],t>0&&t<n&&(n=t),s>0&&s<n&&(n=s),e>0&&e<n&&(n=e),o>0&&o<n&&(n=o),i>0&&i<n&&(n=i),r>0&&r<n&&(n=r),h>0&&h<n&&(n=h),a>0&&a<n&&(n=a),this.__blobMapArray[b][c]=n,this.__blobMapArray[b][c-1]>0&&(this.__blobMapArray[b][c-1]=n),this.__blobMapArray[b+1][c-1]>0&&(this.__blobMapArray[b+1][c-1]=n),this.__blobMapArray[b+1][c]>0&&(this.__blobMapArray[b+1][c]=n),this.__blobMapArray[b+1][c+1]>0&&(this.__blobMapArray[b+1][c+1]=n),this.__blobMapArray[b][c+1]>0&&(this.__blobMapArray[b][c+1]=n),this.__blobMapArray[b-1][c+1]>0&&(this.__blobMapArray[b-1][c+1]=n),this.__blobMapArray[b-1][c]>0&&(this.__blobMapArray[b-1][c]=n),this.__blobMapArray[b-1][c-1]>0&&(this.__blobMapArray[b-1][c-1]=n))},p5.prototype.Vida.prototype.findBlobs_mergerIterationB=function(){for(var t,s,e,o,i,r,h,a,n,_=this.thresholdImage.width-2,l=this.thresholdImage.height-2,c=_;c>0;c--)for(var b=l;b>0;b--)0!==this.__blobMapArray[c][b]&&(t=this.__blobMapArray[c][b-1],s=this.__blobMapArray[c+1][b-1],e=this.__blobMapArray[c+1][b],o=this.__blobMapArray[c+1][b+1],i=this.__blobMapArray[c][b+1],r=this.__blobMapArray[c-1][b+1],h=this.__blobMapArray[c-1][b],a=this.__blobMapArray[c-1][b-1],n=this.__blobMapArray[c][b],t>0&&t<n&&(n=t),s>0&&s<n&&(n=s),e>0&&e<n&&(n=e),o>0&&o<n&&(n=o),i>0&&i<n&&(n=i),r>0&&r<n&&(n=r),h>0&&h<n&&(n=h),a>0&&a<n&&(n=a),this.__blobMapArray[c][b]=n,this.__blobMapArray[c][b-1]>0&&(this.__blobMapArray[c][b-1]=n),this.__blobMapArray[c+1][b-1]>0&&(this.__blobMapArray[c+1][b-1]=n),this.__blobMapArray[c+1][b]>0&&(this.__blobMapArray[c+1][b]=n),this.__blobMapArray[c+1][b+1]>0&&(this.__blobMapArray[c+1][b+1]=n),this.__blobMapArray[c][b+1]>0&&(this.__blobMapArray[c][b+1]=n),this.__blobMapArray[c-1][b+1]>0&&(this.__blobMapArray[c-1][b+1]=n),this.__blobMapArray[c-1][b]>0&&(this.__blobMapArray[c-1][b]=n),this.__blobMapArray[c-1][b-1]>0&&(this.__blobMapArray[c-1][b-1]=n))},p5.prototype.Vida.prototype.findBlobs_optimizeIdentifiers=function(){for(var t,s=this.thresholdImage.width-1,e=this.thresholdImage.height-1,o=[],i=1;i<e;i++)for(var r=1;r<s;r++)if(0!==this.__blobMapArray[r][i]){t=!0;for(var h=0;h<o.length;h++)if(o[h]===this.__blobMapArray[r][i]){this.__blobMapArray[r][i]=h+1,t=!1;break}t&&(o[o.length]=this.__blobMapArray[r][i],this.__blobMapArray[r][i]=o.length)}return o.length},p5.prototype.Vida.prototype.findBlobs_countUnorderedIdentifiers=function(){for(var t,s=this.thresholdImage.width-1,e=this.thresholdImage.height-1,o=[],i=1;i<e;i++)for(var r=1;r<s;r++)if(0!==this.__blobMapArray[r][i]){t=!0;for(var h=0;h<o.length;h++)if(o[h]===this.__blobMapArray[r][i]){t=!1;break}t&&(o[o.length]=this.__blobMapArray[r][i])}return o.length};