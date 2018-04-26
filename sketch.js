function preload() {
  finn = loadImage("asssets/finn.jpg")
}

function setup() {
  createCanvas(635,736);
   image(finn,0,0);
}


  
function draw() {
  //background (0)
 
  //noStroke ();
  
}

function mouseDragged() {
  fill(0);
  ellipse (mouseX,mouseY,3);
  //(0)
  //line(mouseX,mouseY,10);
  //background (0)
  
}
  
  function keyPressed () {
   if (keyCode == 87) {
     noStroke();
     fill(255);
     ellipse(mouseX, mouseY,5);
   }
  }
    
 
//function mousePressed(){
 //image(finn,0,0);
//}