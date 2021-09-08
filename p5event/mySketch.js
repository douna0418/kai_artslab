function setup() {
	createCanvas(windowWidth, windowHeight);
	let c1 = color(20, 25, 43);
	// let c2 = color(255, 255, 255)
	// let c = lerpColor(c1,c2, 0.5);
	background(c1);
	drawHouse();
}

function draw() {
	let c1 = color(20, 25, 33);
	// let c2 = color(255, 255, 255)
	// let c = lerpColor(c1,c2, 0.5);

	if (frameCount%200==0){
		background(c1)
		drawHouse()
	}
}

function drawHouse(){
	noStroke()
	for (let i = 0; i <= 31; i++) {
    let x = 0;
    x = x + width / 30 * i;
    let widthX = width / 30;
    let heightY = -int(random(height / 3, height / 2));
    fill('#4C4C4C');
    rect(x, height, widthX, heightY);
  }
  for (let i = 0; i <= 26; i++) {
    let x = 0;
    x = x + width / 25 * i;
    let widthX = width / 25;
    let heightY = -int(random(height / 4, height / 2));
    fill('#262626');
    rect(x, height, widthX, heightY);
  }
  for (let i = 0; i <= 21; i++) {
    let x = 0;
    x = x + width / 20 * i;
    let widthX = width / 20;
    let heightY = -int(random(height / 5, height / 2));
    fill('#000000');
    rect(x, height, widthX, heightY);
    for (let j = 1; j <= 5; j++) {
      for (let k = 1; k <= 20; k++) {
        let ax = x + j * widthX / 6;
        let ay = height + k * heightY / 21;
        fill(random(0,256));
        ellipse(ax, ay, 1, 1);
  		}
    }
  }
}