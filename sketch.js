let bgpicker= Xrandom(0,1);
let boxStyle=Xrandom(0,1);

let leadCames=Xrandom(2.1,5.1);

function Xrandom(x,y){
  return (y-x)*fxrand()+x;
}

window.$fxhashFeatures = {
  "YOUR WORLD BLEND": getBGStyle(bgpicker),
  "tea hut blend": getBoxStyle(boxStyle),
}

console.log(getBoxStyle(boxStyle))
console.log(getBGStyle(bgpicker))


function getBGStyle(value){
  if (value<0.05) return 'SCREEN';
  else if (value<0.15) return 'ADD'
  else if (value<0.45) return 'DIFFERENCE'
  else return 'OVERLAY'
}

function getBoxStyle(value){
  if (value<0.1) return 'ADD';
  else if (value<0.3) return 'OVERLAY'
  else return 'LIGHTEST'
}



const coloring={
	color1: '#bfb8c2',
	color2: '#d0dbd8',
	color3: '#c2740c',
}


const colors = {
  main: "#f1f1f1",
  bg: "#02040a",
  doorknob: "#fdb827",
  sea: '#52c2eb',
  sand:'#a18360',
  roof:'#b03737',
  door:'#5ead80',
skin:'#f5dba4',
body1:'#c5e6d5',
body2:'#70cfc4'
};

let  ground = 800 * 0.95;
let rc;

function setup() {
randomSeed(int(fxrand()*100000000))
  const canvas = createCanvas(3001, 3001);

  rc = rough.canvas(canvas.canvas);
  background(colors.main);
  noLoop();

}

function draw() {
blendMode(BLEND)


for (let k=0;k<80;k++){

		carve()
	//print(k)
	}

hachangle=random(0,90)
drawFrames()
push()
translate(0,500)
drawMountainLine(hachangle)
drawMountainLine(hachangle)
pop()
drawFrames(colors.main,2)
drawFrames(colors.sand,1)
drawFrames(colors.sand,1)
drawFrames(colors.sand,1)
}

function exportImage() {
  save(`mumountain_${fxhash}.png`)
}



function keyReleased() {
  "1" == key && exportImage()
}
//
function drawFrames(coloring,thick){
  framepoints=[
    [0,0],
    [0,3000],
    [3000,3000],
    [3000,2400],
    [200,2400],
    [200,600],
    [2800,600],
    [2800,2400],
    [3000,2400],
    [3000,0],
    [0,0]
  ]
  rc.polygon(framepoints, {
    fill: coloring,
    fillStyle: random(["hachure"]),
    fillWeight: thick*random(1,1.3),
    hachureAngle: random(0,180),
    stroke: "solid",
  });
}

function carve(){

  let width =2400
  	let height = 2400

  	left_x = int(width * -0.5)
  	right_x = int(width * 1.5)
  	top_y = int(height * -0.5)
  	bottom_y = int(height * 1.5)
  	resolution = int(width * 0.01)


  	num_columns = 3*int((right_x - left_x) / resolution)
  	num_rows = 3*int((bottom_y - top_y) / resolution)
  	//	print('num_columns'+ num_columns)
  	//	print('num_rows'+ num_rows)


	// initialise field
	let Array2D = (r,c) => [...Array(r)].map(x=>Array(c).fill(0));
	let m = Array2D(num_columns,num_rows);

	//print("m length "+m.length)

	gain=int(random(-3.1,3.1));
	bend=random(0.2,0.3);
	offset=random(0,num_rows)
	if (random(0,1)<1) {
		quantum=1;
		for (let column=0; column<num_columns; column++) {
			for (row=0; row<num_rows; row++) {

				angle = (quantum*(row-offset-gain*bend*column) / (num_rows*bend))/quantum * PI*gain
				// print('angle'+angle)
				m[column][row] = angle
			}
		}
	}
	else{
		quantum=random(2,3);
		for (let column=0; column<num_columns; column++) {
			for (row=0; row<num_rows; row++) {

				angle = int(quantum*((row-offset-gain*bend*column) / (num_rows*bend))/quantum) * PI*gain
				// print('angle'+angle)
				m[column][row] = angle
			}
		}
	}

	//print("angle"+m[100][100])

	let	x = 100+random(-100,2000)
	let y = 100+random(-100,2000)
	let num_steps=100

	strokeWeight(0.1)
	dice=random(0,1)
	if (dice<0.95){
		noFill()
		stroke(random([coloring.color1,coloring.color2,coloring.color3]))
	}
	else if (dice>0.999995){
		//fill(random([coloring.color1,coloring.color2,coloring.color3]))
		noStroke();
	}
	else {
		//fill(random([coloring.color1,coloring.color2,coloring.color3]))
		stroke(random([coloring.color1,coloring.color2,coloring.color3]))
	}

	//vertex(100,100)
	//vertex(1100,1300)
	beginShape()
	let dice2=random(0,1)
	let shapesize=random(30,700);
	let stepsize=random(0.1,0.5);
	stroke(random([coloring.color1,coloring.color2,coloring.color3]))
	for (k=0;k<50+random(1050,35000);k+=1+random(0,3)) {
		strokeWeight(0.1+random(0,0.5))


		x_offset = x - left_x
		y_offset = y - top_y
		if (x_offset<3800 && y_offset< 3800 && x_offset>0 && y_offset>0  ) {
			column_index = int(x_offset / resolution)
			row_index = int(y_offset / resolution)
			//	print(column_index,row_index)
			// NOTE: normally you want to check the bounds here
			grid_angle = m[column_index][row_index]
			x_step = stepsize*resolution * cos(grid_angle)
			y_step = stepsize*resolution * sin(grid_angle)
			//	vertex(x, y)

			//draw shapes
			if (dice2>0.50){
				stroke(random([coloring.color1,coloring.color2,coloring.color3]))
				noFill()
				rect(x,y,shapesize,shapesize)
				vertex(x, y)
			}
			else if (dice2<0.20 && dice2>0.185){
				stroke(random([coloring.color1,coloring.color2,coloring.color3]))
				//fill(random([coloring.color1,coloring.color2,coloring.color3]))
				//	ellipse(x,y,shapesize,shapesize)
				rect(x,y,shapesize,shapesize)
				vertex(x, y)

			}
			else if (dice2<0.30 && dice2>0.265){
				stroke(random([coloring.color1,coloring.color2,coloring.color3]))
				//	fill(255)
			//	fill(random([coloring.color1,coloring.color2,coloring.color3]))
				//	ellipse(x,y,shapesize,shapesize)
				rect(x,y,shapesize,random(1,1)*shapesize)
			}
			else if (dice2<0.62){
				stroke(random([coloring.color1,coloring.color2,coloring.color3]))
				//				fill(0)
				noFill()

				vertex(x, y)


			}
			else {
				//	noFill()
				stroke(random([coloring.color1,coloring.color2,coloring.color3]))
				//fill(0)
				noFill()
				rect(x,y,random(1,1)*shapesize,shapesize)

				//	vertex(x, y)

			}
			//
			//pop()
			x = x + x_step+int(random(0,1))
			y = y + y_step+int(random(0,1))


			circle(x,y,3)
		}

		endShape()
	}

}
