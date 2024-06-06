// grammerSource is generated using:
// http://tracery.io/ 
// See the tutorial here: http://www.crystalcodepalace.com/traceryTut.html
var grammarSource = {
    "origin": [
      "#section1# #section2# #section3# #section4#"
    ],
    "section1": [
      "Departmental #recommendations# for #changes# to #curricular changes#, #changes to policy or governance#, new #faculty hires#, #joint appointments#, and #courtesy appointments# require a simple majority vote of #T/TT Faculty# by anonymous ballot. The ballots will be received by a designated member of the #faculty# (e.g., #Chair#, #Ombudsperson#)."
    ],
    "section2": [
      "Departmental #recommendations# for #promotion# or #renewal# require a simple majority vote following the guidelines on #promotion#. See “#Promotion and Tenure#” below."
    ],
    "section3": [
      "Other #motions# are adopted by a simple majority. Voting on such #motions# may be done by show of hands, unless any member of the voting #faculty# requests an anonymous ballot."
    ],
    "section4": [
      "The total vote is defined as the number of #affirmative# and #dissenting# votes. Abstentions and votes not submitted do not contribute to the total but will be recorded."
    ],
    "nouns": [
      "recommendations",
      "changes",
      "curricular changes",
      "changes to policy or governance",
      "faculty hires",
      "joint appointments",
      "courtesy appointments",
      "T/TT Faculty",
      "faculty",
      "Chair",
      "Ombudsperson",
      "promotion",
      "renewal",
      "Promotion and Tenure",
      "motions",
      "affirmative",
      "dissenting"
    ]
  };
  
  let particles = [];
  
  function setup() {
    createCanvas(windowWidth, windowHeight);
    background(50);
  }
  
  function draw() {
    // This overlay will always take us back to black - try changing it
    // The alpha of 3 controls the speed of the fade - try raising and lowering it
    // This moves the particles
    for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].update();
      particles[i].show();
      if (particles[i].finished()) {
        // remove this particle
        particles.splice(i, 1);
      }
    }
    background(50, 50, 50, 50);
  }
  
  // This draws the word with each mouse click
  function mouseClicked() {
    var grammar = tracery.createGrammar(grammarSource); // set up tracery library
    grammar.addModifiers(tracery.baseEngModifiers); // set up English grammar properly (capitals and a/an)
    var output = grammar.flatten("#origin#"); // creates sentence from grammar source
  
    // Split the output into sections
    let sections = output.split(' ');
    let angleStep = TWO_PI / sections.length;
  
    for (let i = 0; i < sections.length; i++) {
      let angle = i * angleStep;
      let x = mouseX + cos(angle) * 100; // 100 is the radius of the circle
      let y = mouseY + sin(angle) * 100;
      let p = new Particle(x, y, sections[i]);
      particles.push(p);
    }
  }
  
  class Particle {
    constructor(x, y, text) {
      // This sets the x value to mouse position
      this.x = x;
      // This keeps the y at mouse position
      this.y = y;
      // This sets the range of x movement - try limiting it to + or -
      this.vx = random(-1, 1);
      // This sets the range of y movement - try limiting it to + or -
      this.vy = random(-1, 1);
      // This sets the text size to be consistent
      this.size = random(15, 20);
      // This sets the current line to the particle
      this.text = text;
    }
  
    finished() {
      // Change this to 255 if you reverse the fade
      return (this.width < 0 || this.width > windowWidth);
    }
  
    update() {
      this.x += this.vx;
      this.y += this.vy;
    }
  
    show() {
      noStroke();
      textSize(this.size);
      // Try any web safe font
      textFont("Courier");
      // This centers the text on the click
      textAlign(CENTER, CENTER);
      // This sets the fill to a static color - can you make it random?
      // You can also add the outline
      // stroke(255);
      // This keeps R and G values at 255 to allow for yellows
      // Try changing it!
      fill("orange");
      // This positions the text
      text(this.text, this.x, this.y);
    }
  }
  