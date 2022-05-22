let serial;

let inMessage = [0, 0, 0];

let previousReading = 0;
let currentReading = 0;
let threshold =  500;

let pageNum = 1;
let numPages = 4;

let sizeWidth = 20;
let sizeHeight = 20;

function setup() {
  createCanvas(sizeWidth * 30, sizeHeight * 30);
  frameRate(12);
  noCursor();
  console.log(pageNum);

  serial = new p5.SerialPort();
  let portlist = serial.list();
  serial.open("COM4");
  serial.on("connected", serverConnected);
  serial.on("data", gotData);
}

function gotData() {
  var currentString = serial.readLine();
  trim(currentString);
  if (!currentString) return;
  inMessage = split(currentString, "&");
}

function serverConnected() {
  print("We are connected!");
}

function draw() {
  background(220);
  for (y = 0; y < sizeHeight; y++) {
    for (x = 0; x < sizeHeight; x++) {
      if (getItem(pageNum + ";" + x + ";" + y) == null) {
        storeItem(pageNum + ";" + x + ";" + y, false);
      }
      if (
        map(inMessage[0], 0, 1023, 0, width) < x * 30 + 30 &&
        map(inMessage[0], 0, 1023, 0, width) > x * 30 &&
        map(inMessage[1], 0, 1023, 0, width) < y * 30 + 30 &&
        map(inMessage[1], 0, 1023, 0, width) > y * 30
      ) {
        fill(0, 150, 200);
      }
      if (getItem(pageNum + ";" + x + ";" + y) == true) {
        fill(0, 0, 0);
      }
      rect(x * 30, y * 30, 30, 30);
      noFill();
    }
  }
  
  // if statement that goes to the next page
  
  currentReading = inMessage[2];
  
  if (previousReading < threshold && currentReading > threshold){
   if (pageNum < numPages){
     pageNum++;
   }else{
     pageNum = 1;
   }}
  
  console.log(pageNum);  
  previousReading = currentReading;
  
  for (y = 0; y < sizeHeight; y++) {
    for (x = 0; x < sizeHeight; x++) {
      if (
        map(inMessage[0], 0, 1023, 0, width) < x * 30 + 30 &&
        map(inMessage[0], 0, 1023, 0, width) > x * 30 &&
        map(inMessage[1], 0, 1023, 0, width) < y * 30 + 30 &&
        map(inMessage[1], 0, 1023, 0, width) > y * 30
      ) {
        storeItem(pageNum + ";" + x + ";" + y, true);
      }
      rect(x * 30, y * 30, 30, 30);
      noFill();
    }
  }
  if (inMessage[2] > 10 && inMessage[2] < 100) {
    clearStorage();
  }
}