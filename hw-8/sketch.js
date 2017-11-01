let rows, x_space;
let cols, y_space;

function setup() {
    createCanvas( windowWidth, 600 );
    frameRate( 11 );

    x_space = 20;
    rows = floor( width / x_space );
    y_space = 20;
    cols = floor( height / y_space );
  }

function draw() {
    background( 'teal' );


    noStroke();

    let x = 5;
    let y = 5;
    while ( x != 0){
      x = floor(random() * rows);
      y = floor(random() * cols);
      fill( random(175,255), random(175,255), random(175,255) );
      ellipse( x*x_space, y*y_space, random(20, 60) );
    }
  }
