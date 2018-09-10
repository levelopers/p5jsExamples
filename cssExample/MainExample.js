
var stars = [];

function setup() {
  createCanvas(600,600);
  for (var i = 0; i < 500; i++) {
    s = new Star(random(width),random(height));
    stars.push(s);
  }
}
function draw() {
  background(0);
  // translate(width/2,height/2);
   frameRate(10);
  for (var i = 0; i < stars.length; i++) {
    stars[i].show();
    stars[i].update();
    // if (stars[i].y<0||stars[i].y>height) {
    //   s = new Star(random(0,width),random(0,height));
    //   stars.push(s);
    // }


  }

  if (this.x===width/10) {
    s = new Star(random(0,width),random(0,height));
    stars.push(s);
  }

}
