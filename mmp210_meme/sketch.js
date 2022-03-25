let song;
let t = "POV";
let b = "You are my friend";
function preload() {
  song = loadSound("myfriend.mp3");
}

function setup() {
  createCanvas(500, 500);
  song.loop();
}

function draw() {
  // console.log(mouseX + "," + mouseY);

  background(0);

  // the right arm

  push();
  noStroke();
  fill("#68CC4A");
  strokeWeight(3);
  beginShape();
  vertex(100, 200);
  quadraticVertex(70, 280, 70, 330);
  quadraticVertex(65, 370, 65, 420);
  quadraticVertex(55, 450, 55, 485);
  vertex(68, 500);
  vertex(115, 500);
  quadraticVertex(115, 485, 110, 475);
  quadraticVertex(110, 450, 95, 440);
  quadraticVertex(85, 430, 80, 430);
  quadraticVertex(90, 355, 90, 325);
  quadraticVertex(105, 280, 110, 240);
  quadraticVertex(115, 205, 100, 200);
  endShape();
  pop();
  // the left arm

  push();
  noStroke();
  fill("#68CC4A");
  strokeWeight(3);
  beginShape();
  vertex(405, 195);
  quadraticVertex(425, 200, 430, 215);
  quadraticVertex(445, 270, 455, 320);
  quadraticVertex(470, 380, 460, 440);
  quadraticVertex(475, 460, 465, 500);
  vertex(435, 500);
  vertex(435, 480);
  vertex(425, 485);
  vertex(420, 500);
  vertex(410, 500);
  quadraticVertex(420, 460, 435, 440);
  vertex(440, 425);
  quadraticVertex(430, 360, 435, 335);
  quadraticVertex(420, 290, 415, 250);
  vertex(405, 195);
  endShape();
  pop();
  // the right leg

  push();
  noStroke();
  fill("#68CC4A");
  // noFill();
  strokeWeight(3);
  beginShape();
  vertex(150, 350);
  quadraticVertex(145, 395, 145, 440);
  vertex(145, 500);
  vertex(170, 500);
  vertex(165, 455);
  quadraticVertex(175, 410, 185, 360);
  vertex(150, 350);
  endShape();
  pop();

  // the left leg

  push();
  noStroke();
  fill("#68CC4A");
  // noFill();
  strokeWeight(3);
  beginShape();
  vertex(365, 355);
  quadraticVertex(360, 410, 360, 450);
  vertex(355, 500);
  vertex(330, 500);
  vertex(335, 445);
  quadraticVertex(340, 405, 330, 370);
  vertex(365, 355);
  endShape();
  pop();

  // the right horn

  push();
  noStroke();
  fill("#FFF6CE");
  strokeWeight(3);
  beginShape();
  vertex(175, 120);
  quadraticVertex(165, 100, 160, 65);
  quadraticVertex(190, 80, 200, 100);
  vertex(175, 120);
  endShape();
  pop();

  // the left horn

  push();
  noStroke();
  fill("#FFF6CE");
  strokeWeight(3);
  beginShape();
  vertex(320, 90);
  quadraticVertex(335, 75, 330, 65);
  quadraticVertex(355, 80, 355, 115);
  vertex(320, 90);
  endShape();
  pop();

  // the main body

  push();
  noStroke();
  fill("#61BD45");
  // noFill();
  strokeWeight(3);
  beginShape();
  vertex(105, 200);
  quadraticVertex(150, 130, 190, 100);
  quadraticVertex(215, 80, 265, 80);
  quadraticVertex(300, 80, 335, 95);
  quadraticVertex(365, 115, 410, 210);
  quadraticVertex(425, 260, 410, 305);
  quadraticVertex(385, 360, 335, 380);
  quadraticVertex(290, 400, 240, 400);
  quadraticVertex(160, 375, 120, 330);
  quadraticVertex(90, 260, 105, 200);
  endShape();
  pop();

  // right eye

  push();
  stroke(225);
  fill(225);
  strokeWeight(3);
  beginShape();
  vertex(200, 150);
  quadraticVertex(225, 130, 260, 140);
  quadraticVertex(255, 170, 235, 175);
  quadraticVertex(205, 175, 200, 150);
  endShape();
  pop();

  // left eye

  push();
  stroke(225);
  fill(225);
  strokeWeight(3);
  beginShape();
  vertex(270, 140);
  quadraticVertex(300, 125, 325, 150);
  quadraticVertex(320, 175, 295, 175);
  quadraticVertex(270, 165, 270, 140);
  endShape();
  pop();

  // the nose

  push();
  noStroke();
  fill("#4B8639");
  strokeWeight(3);
  beginShape();
  vertex(260, 170);
  quadraticVertex(290, 175, 305, 200);
  vertex(295, 210);
  quadraticVertex(280, 205, 275, 210);
  vertex(245, 210);
  quadraticVertex(235, 200, 225, 205);
  vertex(215, 200);
  quadraticVertex(230, 175, 260, 170);
  endShape();
  pop();

  push();
  noStroke();
  fill(0);
  ellipse(235, 150, 20, 20);
  ellipse(290, 150, 20, 20);
  pop();

  push();
  textFont("Impact");
  fill(255);
  noStroke();
  textSize(40);
  text(t, 220, 20, 0, 50);
  pop();

  push();
  textFont("Impact");
  textAlign(CENTER);
  fill(225);
  noStroke();
  textSize(40);
  text(b, 125, 400, 250, 100);
  pop();

  noStroke();
  fill("#396E39");
  strokeWeight(3);
  beginShape();
  vertex(190, 290);
  vertex(330, 285);
  quadraticVertex(255, 305, 190, 290);
  endShape();
}
