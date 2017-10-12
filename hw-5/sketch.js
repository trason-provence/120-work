function setup() {
  createCanvas( windowWidth, windowHeight );

}

var headAngle = 0;
var headRotation = 0;
var armAngle = 0;
var headWidth = 100;
var headHeight = 50;

function draw() {
    background( '#2eb3d0' );
    noCursor();

headRotationRate = (mouseY * 0.05) - 20;

headAngle = headAngle + headRotationRate;

armAngle = armAngle - 2;

push();

translate( mouseX, mouseY );

push();
// first forearm
  strokeWeight( 20 );
  stroke( 0 );

  push();

  translate( 60, -40 );
  rotate( radians(armAngle) );
  line( 0, 0, 60, 0 );
  fill( '#FFFFFF' );
  noStroke();
  ellipse( 70, 0, 30 );

pop();

// first upper arm
  line( 12, -30, 60, -40 );

push();
// second forearm
  translate( -10, -20 );
  rotate( radians(armAngle) );
  line( 0, 0, 180, 0 );
  fill( '#FFFFFF' );
  noStroke();
  ellipse( 180, 0, 40 );

// second upper arm
  line( 12, -30, -10, -20 );

  pop();
  pop();

// body
  fill( '#e79c0f' );
  noStroke();
  ellipse( 0, 0, 80, 180 );

// head
push();
  noStroke();
  fill( '#b5e3ed' );
  translate( 0, -80 );
  rotate( radians(headAngle) );
// skull
  ellipse( 0, 0, headWidth, headHeight );
  stroke( 0 );
  fill( 255 );
// eyes
  strokeWeight( 2 );
push();
  translate( headWidth * 0.2, headHeight * -0.2 );
  ellipse( 0, 0, headWidth * 0.33, headHeight * 0.33 );
  noStroke();
  fill( '#98e313' );
  ellipse( 0, 0, 20 );
  fill( 0 );
  ellipse( 0, 0, 15 );
pop();

push();
  translate( headWidth * -0.2, headHeight * -0.2 );
  ellipse( 0, 0, 20 );
  noStroke();
  fill( '#98e313' );
  ellipse( 0, 0, 10 );
  fill( 0 );
  ellipse( 0, 0, 5 );
pop();

push();
// mouth
  fill( 0 );
  arc( 0, headHeight * 0.2, 60, 20, 0, PI );
pop();
pop();

// legs
  fill( '#e79c0f' );
  noStroke();
  triangle( -30, 40, 5, 35, -40, height+100 );
  triangle( 30, 40, -5, 35, 40, height+100 );
pop();

}
