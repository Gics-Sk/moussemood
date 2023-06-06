let numSlices = 1000;
let angleStep;
let currentAngle = 0;

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('roulette-container');
  angleMode(DEGREES);
  angleStep = 360 / numSlices;
}

function draw() {
  background(255);
  
  translate(width / 2, height / 2);
  
  for (let i = 0; i < numSlices; i++) {
    let startAngle = i * angleStep;
    let endAngle = startAngle + angleStep;
    
    if (i % 2 === 0) {
      fill(220);
    } else {
      fill(180);
    }
    
    arc(0, 0, width - 40, width - 40, startAngle, endAngle, PIE);
  }
  
  rotate(currentAngle);
  strokeWeight(4);
  stroke(255, 0, 0);
  line(0, 0, width / 2 - 40, 0);
  
  currentAngle += 0.5;
}
