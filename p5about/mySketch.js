let param = [];
let scribble;
let span;


function setup(){
	// let s = min(windowWidth,windowHeight)*1;
	// createCanvas(s,s);
	let w = windowWidth;
	let h = windowHeight;
	createCanvas(windowWidth,windowHeight);
	frameRate(8);
	angleMode(DEGREES);
	scribble = new Scribble();
	init();
}

function init(){
	param = [];
	span = height /Math.floor(random(3,7));
	for(let x = 0; x < width ; x+=span){
		for(let y = 0; y < height ; y+=span){
			param.push({posX : x, posY : y, col : color(random(100,250)), gap : random(3,6), angle : random(-90,90)});
		}
	}
}

function draw(){
	if(frameCount%30 == 0)init();
	background('black');
	ellipseMode(CENTER);
	for(let i = 0; i < param.length; i ++){
			stroke(param[i].col);
			scribble.scribbleFilling( [param[i].posX, param[i].posX +span,  param[i].posX +span, param[i].posX], 
															 [param[i].posY, param[i].posY, param[i].posY + span, param[i].posY +span],
															 param[i].gap, param[i].angle );
	}

}