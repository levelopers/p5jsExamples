function setup() {
	createCanvas(windowWidth, windowHeight);


	for (var i = 0; i < 100; i++) {
		var x = floor(random(windowWidth));
		var y = floor(random(windowHeight));

		p = createA('#','apples');

		p.position(x,y);
		p.class('apples');
		p.mousePressed(changeA);
	}


	for (var i = 0; i < 100; i++) {
		var x = floor(random(windowWidth));
		var y = floor(random(windowHeight));

		p = createP('blueberry');
		p.position(x,y);
		p.class('blueberry');
	}
}

function changeA() {
	//override @ .blueberry
	this.style('background-color','yellow');
	this.class('blueberry');
}

function draw() {

}
