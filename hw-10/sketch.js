let smileys = [];
let t = 0;

function setup(){
  createCanvas( windowWidth, 600 );
  // create random smileys with sine movements
  for (var i = 0; i < 80; i++) {

    // add new smiley objects
    smileys.push(
      {
        period: { x: random(60, 240), y: random (60, 240) },
        maxSize: random(4),
        maxDist: {
          x: random(width/2),
          y: random(height/2)
        },
        pos: {
          x: random(width),
          y: random(height)
        }
      }
    );
  }
}
  function draw() {
    // set the background
    background( 'blue' );

    // determine number of smileys to draw
    // based on mouse position

    let numToDraw = map( mouseX, 0, width, 0, smileys.length );
    for ( let i = 0; i < numToDraw; i++ ) {
      // draw the smileys
      drawSmiley( smileys[i], t );
    }

    // time for sine function
    t++;

  }

  // draw smileys
  function drawSmiley( smiley, time ) {
    // determine value of individual sine functions
    let x = sinePos( smiley.period.x, time );
    let y = sinePos( smiley.period.y, time );

    let pos_x = x * smiley.maxDist.x + smiley.pos.x;
    let pos_y = y * smiley.maxDist.y + smiley.pos.y;

    // draw smiley based on data
    smileyFace(
      pos_x,
      pos_y,
      x * smiley.maxSize,
      y * smiley.maxSize
    );
  }

  /* smiley face function */
  function smileyFace( pos_x, pos_y, scale_x, scale_y ) {
    push();

    // scale and position
    translate( pos_x, pos_y );
    scale( scale_x, scale_y );

    // draw smiley face
    stroke( 0 );
    fill( 'blue' );
    ellipse( 0, 0, 100 );
    noStroke();
    fill ( 40, 255 );
    arc( 0, 15, 75, 50, 0, PI );
    ellipse( -20, -15, 20 );
    ellipse( 20, -15, 20 );
    noStroke();
    fill( 'black' );
    ellipse( -20, -5, 20 );
    ellipse( 20, -5, 20 );
    ellipse( -20, -20, 20 );
    ellipse( 20, -20, 20 );

    pop();
  }

  /* sine function */
  function sinePos( timeScale, time ) {
    let val = sin( TWO_PI * time/timeScale );
    return val;
  }
