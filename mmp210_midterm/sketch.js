let value = 0;

// meter class
let meter;

//page numbers
let pageNum = 1;
let numPages = 5;

// images
let img0, img1, img2, img3, img4, img5, img6;

// image settings
let setWidth, propHeight;
let isDropped = false;

let AcornY = 20;

function preload() {
  img0 = loadImage("folder/Shovel.png");
  img1 = loadImage("folder/Sapling.png");
  img2 = loadImage("folder/Acorn.png");
  img3 = loadImage("folder/rain.gif");
  img4 = loadImage("folder/sun.png");
  img5 = loadImage("folder/sunlight.png");
  img6 = loadImage("folder/watering_can.png");
  img7 = loadImage("folder/success.png");
  img8 = loadImage("folder/failure.png");
  
  song1 = loadSound("folder2/digging.mp3")
  song2 = loadSound("folder2/success.mp3")
  song3 = loadSound("folder2/watering_can.mp3")
}
function setup() {
  createCanvas(600, 400);
  meter = new Meter();
  meter2 = new Meter();
}

function draw() {

  if (pageNum == 1) {
    drawBackground();
    
    // the acorn
    push();
    let setWidth = 200;
    let propHeight = (img2.height * setWidth) / img2.width;
    image(img2, mouseX - 100, AcornY, setWidth, propHeight);
    pop();

    // acorn falling conditions
    if (mouseX > width / 2 - 50 && mouseX < width / 2 + 50) {
      isDropped = true;
    } else {
      isDropped = false;
    }
    if (isDropped) {
      AcornY++;
    }
    if (AcornY > 220) {
      pageNum++;
      song1.play();
    }

    // page 2
  } else if (pageNum == 2) {
    drawBackground();
    meter.display();

    // watering can
    let setWidth = 300;
    let propHeight = (img6.height * setWidth) / img6.width;
    if (mouseIsPressed && mouseX > 60 && mouseX < 210) {
      push();
      translate(mouseX + 20, 0);
      rotate(PI / 3);
      image(img6, -10, -75, setWidth, propHeight);
      pop();
      image(img3, mouseX - 20, 200, setWidth, propHeight);
      meter.click();
      // song3.play()
    } else {
      push();
      image(img6, mouseX - 100, -20, setWidth, propHeight);
      song3.stop()
      pop();
    }
  }

  // page 3
  else if (pageNum == 3) {
    song3.stop()
    drawBackground();
    meter2.display();

    let setWidth = 300;
    let propHeight = (img4.height * setWidth) / img4.width;

    if (mouseIsPressed && mouseX > 230 && mouseX < 340) {
      image(img4, mouseX - 150, 0, setWidth, propHeight);
      image(img5, mouseX - 160, 120, setWidth, propHeight);
      meter2.click();
    } else {
      image(img4, mouseX - 150, 0, setWidth, propHeight);
    }

    // page 4
  } else if (pageNum == 4) {

    drawBackground();
    push();
    let setWidth = 300;
    let propHeight = (img1.height * setWidth) / img1.width;
    image(img1, 125, 205, setWidth, propHeight);
    pop();

    push();
    let setWidth2 = 300;
    let propHeight2 = (img7.height * setWidth) / img7.width;
    image(img7, 150, 100, setWidth2, propHeight2);
    pop();

    //page 5 - fail page
  } else if (pageNum == 5) {
    drawBackground();
    text("page 5", 100, 100);
  }
}
// the background settings

function drawBackground() {
  background("#BBE8EE");
  push();
  let setWidth = 400;
  let propHeight = (img0.height * setWidth) / img0.width;
  image(img0, -40, 100, setWidth, propHeight);
  pop();

  push();
  noStroke();
  fill("#817416");
  rect(0, 320, 600, 400);
  pop();

  push();
  beginShape();
  strokeWeight(2);
  noFill();
  vertex(230, 346);
  quadraticVertex(235, 330, 260, 335);
  vertex(260, 335);
  quadraticVertex(280, 320, 300, 335);
  vertex(300, 335);
  quadraticVertex(330, 325, 340, 340);
  endShape();
  pop();
}

// meter for the mouseIsPressed function

class Meter {
  constructor() {
    this.rectDimy = 200;
    this.preMillis = 0;
    this.interval = 10;
  }
  display() {
    push();
    noStroke();
    fill("#F76077");
    rect(550, 20, 25, 200);
    pop();

    push();
    fill(255);
    noStroke();
    rect(550, 20, 25, this.rectDimy);
    pop();
  }
  click() {
    if (millis() - this.preMillis > this.interval && this.rectDimy > 0) {
      this.rectDimy = this.rectDimy - 1
      if (this.rectDimy == 199 && pageNum == 2){
        song3.play();
      }
      if (this.rectDimy < 1) {
        if (pageNum < numPages) {
          pageNum++;
        }
      }
    }
  }
}
