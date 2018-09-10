

var s;
var f;
var scl = 20;
var li;
function preload() {
	song = loadSound('play1.mp3');
	song1 = loadSound('2.mp3');
	buton = createButton("music on");
	buton.position(600,660);
	butoff = createButton('music off');
	butoff.position(680,660);

}
var song;
function setup() {
	s = new Snake(0,0,scl);
	createCanvas(600, 600);
	buton.mousePressed(songPlay);
	butoff.mousePressed(songStop);
	score = createElement('h1','SCORE : ');
	score.position(600,600);

	 //f = createVector(random(width),random(height));
	 //food = new food(floor(random(floor(width/scl)))*scl,floor(random(rows))*scl);
	 pickLocation();

}

function draw() {
	background(100);
	if (s.collision()) {
		console.log("collision");
		noLoop();
		background(random(255),random(255),random(255));
		//var press = createP('press SPACE to restart');

	}

	frameRate(10);
	s.show();
	s.move();
	s.eat(f);

	//console.log(s.yspeed);

	fill(0,255,0);
	//rect(f.x,f.y,scl,scl);
	stroke(300);
	rect(f.x,f.y,scl,scl);

}

function keyPressed() {
	song1.stop();
	//space restart game;
	if (keyCode=== 32) {
		score.html("SCORE : ");
		li = createElement('li',s.total);
		li.parent('scoreList');
		setup();
		loop();
	}
	// if (keyCode=== UP_ARROW) {
	// 	s.xspeed = 0;
	// 	s.yspeed = -2;
	// }
	// if (keyCode=== DOWN_ARROW) {
	// 	s.xspeed = 0;
	// 	s.yspeed	 = 2;
	// }
	// if (keyCode=== RIGHT_ARROW) {
	// 	s.yspeed = 0;
	// 	s.xspeed = 2;
	// }
	// if (keyCode=== LEFT_ARROW) {
	// 	s.xspeed = -2;
	// 	s.yspeed = 0;
	// }
	if (keyCode=== UP_ARROW) {
		//console.log("up");
		if (s.total===0) {
			s.dir(0,-1);
		}else {
			if (s.yspeed===0) {
				//console.log("yspeed=0");
				s.dir(0,-1);
			}
		}
	}



	// if (keyCode=== UP_ARROW) {
	// s.dir(0,-1);
	// }
	if (keyCode=== DOWN_ARROW) {
		if (s.total===0) {
			s.dir(0,1);
		}else {
			if (s.yspeed===0) {
				//console.log("yspeed=0");
				s.dir(0,1);
			}
		}
	}
	if (keyCode=== RIGHT_ARROW) {
		if (s.total===0) {
			s.dir(1,0);
		}else {
			if (s.xspeed===0) {
				//console.log("yspeed=0");
				s.dir(1,0);
			}
		}
	}
	if (keyCode=== LEFT_ARROW) {
		if (s.total===0) {
			s.dir(-1,0);
		}else {
			if (s.xspeed===0) {
				//console.log("yspeed=0");
				s.dir(-1,0);
			}
		}
	}


}

class Snake {
	constructor(x=0,y=0,scl) {
		this.x = x;
		this.y = y;
		this.xspeed = 1;
		this.yspeed = 0;
		this.scl = scl;
		this.total = 0;
		this.tail = [];


	}

	move()	{
		//tack snake location hitstory, put last location in tail[];
		if (this.total===this.tail.length) {
			for (var i = 0; i < this.total-1; i++) {
				this.tail[i] = this.tail[i+1];
			}
		}
		this.tail[this.total-1] = createVector(this.x,this.y);

		this.x = this.x + this.xspeed*scl;
		this.y = this.y + this.yspeed*scl;

		this.x = constrain(this.x,0,width-scl);
		this.y = constrain(this.y,0,height-scl);


	}

	show()	{
		fill(255,0,0);
		noStroke();
		for (var i = 0; i < this.tail.length; i++) {
			rect(this.tail[i].x,this.tail[i].y,scl,scl);
		}

		rect(this.x,this.y,scl,scl);

	}
	//keypress to direction
	dir(x,y)	{
		this.xspeed = x;
		this.yspeed = y;
	}

	eat(f)	{
		this.f = f;
		var dis = dist(this.f.x,this.f.y,this.x,this.y);
		if (dis<scl) {
			this.total+=1;
			pickLocation();
			song1.play();
			score.html("SCORE : "+ this.total);
			score.position(600,600);

		//	console.log("got it!");
		//	console.log("food x : "+this.f.x+", food y : "+ this.f.y);
		//	console.log(dis);
		return true;

			//console.log(s.x);
		}else return false;
			// for (var i = 0; i < 3; i++) {
			// 	rect(locations[i-1].x,locations[i-1].y,scl,scl);
			// }
		}

		collision(){

			for (var i = 0; i < this.tail.length; i++) {
				var d = dist(this.x,this.y,this.tail[i].x,this.tail[i].y)
				if (d<scl) {
					//var die = createElement('h1','YOU DIED press SPACE to restart');

					return true;
				}
			}
			return false;
		}
	}

	// track(){
	// 	var L = [];
	// 	let l =  Location(this.x,this.y);
	// 	L.push(l);
	// }


//track snake location


class food {
	constructor(x,y) {
		this.x = x;
		this.y = y;
	}

}
//re-new food location
function pickLocation() {
	var col = floor(width/scl);
	var rows = floor(height/scl);
	f = new food(floor(random(col))*scl,floor(random(rows))*scl);

}

function songPlay() {
	song.play();
}
function songStop() {
	song.stop();
}
// function mousePressed() {
//
// 	song.play();
// }
// function doubleClicked() {
// 	song.stop();
// }
