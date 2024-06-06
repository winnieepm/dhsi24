
function setup() {
    createCanvas(400, 400);
    background(255);
  }
  
  function draw() {
    background(0, 200, 150);
  
    translate(width / 2, height / 2);  // Move the origin to the center of the canvas
    let angle = 0;
    let radius = 0;
  
    stroke(0); // Set the stroke color to black
    fill(0); // Set the fill color to black
  
    for (let i = 0; i < 100; i++) {  // Number of circles in the spiral
      let x = radius * cos(angle);  // Calculate x coordinate
      let y = radius * sin(angle);  // Calculate y coordinate
      
      ellipse(x, y, 5, 20);  // Draw a circle at (x, y) with a diameter of 10
  
      angle += 0.2;  // Increase the angle
      radius += 2;  // Increase the radius
  
      let r = random(255); // Generate a random red value
      let g = random(255); // Generate a random green value
      let b = random(255); // Generate a random blue value
  
      fill(r, g, b); // Set the fill color to the random color
      noStroke(); // No stroke for the circles
      ellipse(x, y, 20, 20); // Draw a circle at (x, y) with a diameter of 20
  
    }
  }