function setup() {
createCanvas(600, 600);
}
function draw() {
background('#adefff');
noStroke();

//background
fill('#c9f2ff');
rect(0, 0, 50, 600);
rect(100, 0, 50, 600);
rect(200, 0, 50, 600);
rect(300, 0, 50, 600);
rect(400, 0, 50, 600);
rect(500, 0, 50, 600);

//hair
fill('#301300');
rect(240, 300, 120, 100);
ellipse(360, 380, 20, 20);
ellipse(360, 370, 20, 20);
ellipse(360, 360, 20, 20);
ellipse(360, 350, 20, 20);
ellipse(360, 340, 20, 20);
ellipse(360, 330, 20, 20);
ellipse(360, 400, 20, 20);
ellipse(360, 390, 20, 20);
ellipse(350, 400, 20, 20);
ellipse(365, 390, 20, 20);
ellipse(365, 380, 20, 20);
ellipse(330, 400, 20, 20);
ellipse(320, 400, 20, 20);
ellipse(310, 400, 20, 20);
ellipse(300, 400, 20, 20);
ellipse(240, 380, 20, 20);
ellipse(240, 370, 20, 20);
ellipse(240, 360, 20, 20);
ellipse(240, 350, 20, 20);
ellipse(240, 340, 20, 20);
ellipse(240, 330, 20, 20);
ellipse(240, 400, 20, 20);
ellipse(240, 390, 20, 20);
ellipse(238, 400, 20, 20);
ellipse(235, 390, 20, 20);
ellipse(235, 380, 20, 20);
ellipse(270, 400, 20, 20);
ellipse(260, 400, 20, 20);
ellipse(290, 400, 20, 20);
ellipse(300, 400, 20, 20);


//body
fill('#f2d7aa'); //neck color
rect(270, 360, 60, 80); //neck shape
fill('#281c69'); //body color
ellipse(300, 480, 300, 120); //body shape
rect(150, 480, 300, 120); //body shape 2

//head
fill('#ffe3b3'); //head color
ellipse(300, 300, 160, 200); //head shape
fill('#000000'); //beanie color
arc(300, 270, 162, 200, PI, TWO_PI); //beanie shape
rect(218, 230 , 164, 40); //beanie shape

//face
fill('#fffff'); //eye color
ellipse(270, 290, 36, 20); //eye shape
ellipse(330, 290, 36, 20); //eye shape
fill('#1875cc'); //iris color
ellipse(330, 290, 20, 20); //iris shape
ellipse(270, 290, 20, 20); //iris shape
fill('#000000'); //pupil fill
ellipse(270, 290, 10, 10); //pupil shape
ellipse(330, 290, 10, 10); //pupil shape
fill('#301300'); //Eyebrow Color
rect(250, 272, 40, 8); //Eyebrow Shape
rect(310, 272, 40, 8); //Eyebrow Shape
fill('#000000'); //mouth color
rect(270, 350, 60, 5); //mouth shape
fill('#f2d7aa');
arc(300, 325, 30, 23, 0, PI); //nose
rect(290, 300, 20, 30); //nose
}
