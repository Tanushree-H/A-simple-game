// use slider to change y co-ordinate of center of ellipse

function setup() {
  createCanvas(600, 600);
  slider = createSlider(0, 255, 100);
  slider.position(10, 10);
  slider.style('width', '80px');

}

function draw() {
  background(0, 20);
  let y = slider.value(); // value of y = value in the slider
  translate(width / 2, height / 2);

  noFill();
  stroke(255);

  //ellipse series 1
  for (let i = 0; i < 10; i++) {
    rotate(frameCount * 0.0008);
    ellipse(0, y, 20, 80);
    rotate(PI / 5);
  }

  //ellipse series 2
  for (let i = 0; i < 10; i++) {
    rotate(frameCount * 0.0008);
    ellipse(20, y, 100, 120);
    rotate(PI / 5);
  }
  //ellipse series 3
  for (let i = 0; i < 10; i++) {
    rotate(frameCount * 0.0008);
    ellipse(40, y, 100, 120);
    rotate(PI / 5);
  }

}