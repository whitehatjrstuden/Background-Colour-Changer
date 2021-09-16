function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw()   {
   background("green");

  if (keyIsDown(RIGHT_ARROW))   {
    background("red");
      }
      if (keyIsDown(LEFT_ARROW))   {
        background("yellow");
        if (keyIsDown(UP_ARROW))   {
          background("red");
          if (keyIsDown(DOWN_ARROW))   {
            background("yellow");
        
              }
            }
          }
}
