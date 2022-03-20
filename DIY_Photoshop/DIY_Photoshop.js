var img;
var initials ='rs'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('https://roman-schrock2.github.io/AdobePink.png');
  img2 = loadImage('https://roman-schrock2.github.io/AdobeRed.png');
  img3 = loadImage('https://roman-schrock2.github.io/AdobeOrange.png');
  img4 = loadImage('https://roman-schrock2.github.io/AdobeYellow.png');
  img5 = loadImage('https://roman-schrock2.github.io/AdobeGreen.png');
  img6 = loadImage('https://roman-schrock2.github.io/AdobeBlue.png');
  img7 = loadImage('https://roman-schrock2.github.io/AdobeIndigo.png');
  img8 = loadImage('https://roman-schrock2.github.io/AdobeViolet.png');
  img9 = loadImage('https://roman-schrock2.github.io/AdobeWhite.png');
  img10 = loadImage('https://roman-schrock2.github.io/AdobeBlack.png');
}

function setup() {
createCanvas(600, 600);  // canvas size
background(screenbg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {
   
   image(img, mouseX-15, mouseY-15);
    
  } else if (toolChoice == '2') {

    image(img2, mouseX-15, mouseY-15);
  } else if (toolChoice == '3') {

   image(img3, mouseX-15, mouseY-15);
  } else if (toolChoice == '4') {

    image(img4, mouseX-15, mouseY-15);
  } else if (key == '5') { 
   
    image(img5, mouseX-15, mouseY-15);
  } else if (toolChoice == '6') {

    image(img6, mouseX-15, mouseY-15);
  } else if (toolChoice == '7') {

    image(img7, mouseX-15, mouseY-15);
  } else if (toolChoice == '8') {

    image(img8, mouseX-15, mouseY-15);
  } else if (toolChoice == '9') {

    image(img9, mouseX-15, mouseY-15);
  } else if (toolChoice == '0') {
    
    image(img10, mouseX-15, mouseY-15);
  } else if (toolChoice == 'g' || toolChoice == 'G') {

    strokeWeight(10);
    stroke(0, 0, 0);
    line(mouseX, mouseY, pmouseX, pmouseY);
   
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
