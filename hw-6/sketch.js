// define frowny variable
// instantiate the varibale as an object
var frowny = {};

// frowny qualities
frowny.size = 200;
frowny.eye_mouth_y = -30;
frowny.color = 'blue';
frowny.mouth_h = 60;
frowny.pos_x = 0;
frowny.pos_y = 0;

function setup() {
  createCanvas( windowWidth, windowHeight );
  background( 'orange' );

  frowny.pos_x = width/2
  frowny.pos_y = height/2

}

function draw() {
  // frowny
  translate( frowny.pos_x, frowny.pos_y );
  fill( frowny.color );
    ellipse( 0, 0, frowny.size );

  fill( 'black' );
    ellipse( frowny.eye_mouth_y, frowny.eye_mouth_y, frowny.size * 0.25 );
    ellipse( -frowny.eye_mouth_y, frowny.eye_mouth_y, frowny.size * 0.25 );

  fill( 'orange' );
    ellipse( frowny.eye_mouth_y, frowny.eye_mouth_y, frowny.size * 0.10 );
    ellipse( -frowny.eye_mouth_y, frowny.eye_mouth_y, frowny.size * 0.10 );

  fill( 'black' );
    arc( 0, -frowny.eye_mouth_y, frowny.size * 0.6, frowny.mouth_h, PI, 0 );
    ellipse( frowny.eye_mouth_y, frowny.eye_mouth_y, frowny.size * 0.05 );
    ellipse( -frowny.eye_mouth_y, frowny.eye_mouth_y, frowny.size * 0.05 );

  fill( 'orange' );
    arc( 0, -frowny.eye_mouth_y, frowny.size * 0.5, frowny.mouth_h, PI, 0 );

  // update pos
  frowny.pos_x += random( -4, 4 );
  frowny.pos_y += random( -4, 4 );
}
