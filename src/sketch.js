const vertices = [];
let init = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  if (init) {
    var v = createVector(mouseX, mouseY);
    vertices.push(v);
  } else {
    init = true;
  }
}

function draw() {
  background(50);

  if (init) {
    var reached = [];
    var unreached = [];

    unreached = [...vertices];

    reached.push(unreached[0]);
    unreached.splice(0, 1);

    while (unreached.length > 0) {
      var gDistance = 100000;
      var rIndex;
      var uIndex;
      
      reached.map((reachedNode , i) => {
        unreached.map((unreachedNode, j) => {
          var v1 = reachedNode;
          var v2 = unreachedNode;
          var d = dist(v1.x, v1.y, v2.x, v2.y);

          if (d < gDistance) {
            gDistance = d;
            rIndex = i;
            uIndex = j;
          }
        })
      })

      stroke(255);
      strokeWeight(3);
      line(reached[rIndex].x, reached[rIndex].y, unreached[uIndex].x, unreached[uIndex].y);
      reached.push(unreached[uIndex]);
      unreached.splice(uIndex, 1);
    }

    for (let i = 0; i < vertices.length; i++) {
      fill(255);
      stroke(255);
      ellipse(vertices[i].x, vertices[i].y, 30, 30)
    }
  } else {
    renderInitGame();
  }
}

function renderInitGame() {
  textAlign(CENTER, CENTER);
  textSize(windowWidth * 0.02);
  fill(255);
  text("Prim's algorithm", windowWidth / 2, windowHeight / 8);
  textSize(windowWidth * 0.015);
  text("Here you can dynamically see how the prim algorithm works, have fun :)", windowWidth * 0.5, windowHeight * 0.2);
  text("To add nodes in the graph, just click on the position of your new node!", windowWidth * 0.5, windowHeight * 0.3);
  textAlign(CENTER, CENTER);
  textSize(windowWidth * 0.01);
  fill(255);
  text('Click to continue...', windowWidth / 2, windowHeight * 0.9);
}