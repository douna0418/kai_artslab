let inputElement; 
let indexsNum = 0;
let fontSize;
let horSpace;
let horOffset;
let img;
let indexs=""

function preload() {
   font1 = loadFont('itc-avant-garde-gothic-std-bold-589572c7e9955.otf');
// 	font1 = loadFont('Pilowlava-Regular.otf');
}

function setup() {
	
	textFont(font1);
	strokeWeight(3)
	
	createCanvas(windowWidth, windowHeight);
	background(255);
	
	inputElement = createInput("kai_artslab ")		
	// for (var z=0; z<width ;z+=textWidth(inputElement.value())){
	// 	indexs=indexs+inputElement.value()
	// }
	
	inputElement.position(50,50)
	inputElement.input(indexsPlus)
	
	
	fontSize = createSlider(40,80,60)
	fontSize.position(50,100)
	fontSize.style("width","120px")
	
	horSpace = createSlider(50,100,50)
	horSpace.position(50,150)
	horSpace.style("width","120px")
	
	horOffset = createSlider(-30,120,-30)
	horOffset.position(50,200)
	horOffset.style("width","120px")
	
	//背景材質
	pixelDensity(2)
  overAllTexture=createGraphics(width,height)
  overAllTexture.loadPixels()
  for(var i=0;i<width+50;i++){
    for(var o=0;o<height+50;o++){
      overAllTexture.set(i,o,color(100,noise(i/3,o/3,i*o/50)*random([0,50,100])))
    }
  }
  overAllTexture.updatePixels()
}

function indexsPlus(name){
		indexs=""
		for (var z=0; z<width ;z+=textWidth(name)){
			indexs=indexs+name
	}
}


function draw() {
	background(0)
	
	let inputWord=inputElement.value()
	let horSpaceVal=horSpace.value()
	let horOffsetVal=horOffset.value()
	
	indexsPlus(inputWord+" ")
	
	fill("#5B00AE");
	textSize(fontSize.value());
	
	for(var o = 0; o<(height/70)+10 ;o++){
		for (var i = 0; i< indexs.length; i++){
			var dx = 30*sin((i*20)*PI/180+frameCount/40)
			text(indexs[i],(horSpaceVal*i)+(horOffsetVal*o)-(indexs.length*2)+dx,o*70+i*2+-20)
		}
}
			 
	push()
    blendMode(MULTIPLY)
    image(overAllTexture,0,0)
  pop()
	
}

