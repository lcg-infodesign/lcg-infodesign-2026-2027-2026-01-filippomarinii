let luna = 90;

function setup() {
  createCanvas(600, 400);
  frameRate(30);
}

function draw() {
  background(15, 25, 65);
  noStroke();

  for (let i = 0; i < 35; i++) {
    let x = (i * 83 + 20) % width;
    let y = (i * 47 + 15) % 260;

    let trasparenza = random(150, 255);
    let dimensione = random(2, 5);

    if (i % 2 === 0) {
      fill(255, 245, 180, trasparenza);
    } else {
      fill(255, 255, 255, trasparenza);
    }

    circle(x, y, dimensione);
  }

  fill(255, 225, 120);
  circle(470, 95, luna);

  fill(45, 65, 95);
  triangle(-50, 400, 125, 190, 300, 400);
  triangle(160, 400, 355, 220, 550, 400);

  fill(25, 45, 75);
  triangle(330, 400, 490, 245, 650, 400);
  triangle(-120, 400, 30, 280, 180, 400);
}