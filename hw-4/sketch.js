function setup() {
    // create a canvas to draw my portrait on
    createCanvas( 400, 600 );
}

function draw() {
    // set the background color
    background( '#424242' );

    // *****************************************************
    // create a sandbox for the entire character
    push();

    // move the entire grid for this character to the center of the canvas
    translate( 200, 300 );


    // ** BODY **********************************

push();
// arms start

stroke('#58FAD0');
strokeWeight(25);
line( -60, 80, -150, 130 );

stroke('#58FAD0');
strokeWeight(20);
line( -150, 130, -150, 300 );

stroke('#58FAD0');
strokeWeight(25);
line( 60, 80, 150, 130 );

stroke('#58FAD0');
strokeWeight(20);
line( 150, 130, 150, 300 );

push();
// body code goes here

noStroke();
fill('#58FAD0');
ellipse( 0, 200, 200, 400 );

pop();
// body ends

push();
// head code starts

noStroke();
fill('#00FFBF');
ellipse( 0, 0, 180, 200);

pop();
// head ends

push();
// one eye starts

noStroke();
fill('#00FFBF');
rotate( radians(60));
rect( -55, -180, 50, 100 );

pop();
// eye ends

push();
// other eye starts

noStroke();
fill('#FFFFFF');
ellipse( 150, -125, 80, 80 );

noStroke();
fill('#FF0040');
ellipse( 150, -125, 50, 50 );

noStroke();
fill('#000000');
ellipse( 150, -125, 40, 40 );

noStroke();
fill('#FFFFFF');
ellipse( -25, -40, 70, 70 );

noStroke();
fill('#FF0040');
ellipse( -25, -40, 40, 40 );

noStroke();
fill('#000000');
ellipse( -25, -40, 30, 30 );

pop();
// eye ends

push();
// mouth starts

noStroke();
fill('#000000');
arc( 35, -10, 55, 60, radians(315), radians(135) );

pop();
// mouth ends

push();
// arms start

stroke('#61210B');
strokeWeight(40);
line( -85, 250, 85, 250 );

stroke('#61210B');
strokeWeight(30);
line( -78, 90, 85, 250 );

pop();
// arms end

push();
// start moon

stroke('#000000');
fill('#FFFFFF');
ellipse( -180, -300, 200, 200 );

noStroke();
fill('#000000');
ellipse( -190, -250, 50, 50 );

noStroke();
fill('#000000');
ellipse( -160, -300, 30, 30 );

noStroke();
fill('#000000');
ellipse( -120, -270, 25, 25 );

}
