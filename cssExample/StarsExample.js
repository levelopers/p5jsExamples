class Star {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.speed = 5;
    this.ran = random(10);
  }

  update(){

    var dir = this.direction();

    this.x += dir.x*this.speed;
    this.y += dir.y*this.speed;

  }

  show(){
    fill(255,255,255);
    noStroke();
    ellipse(this.x,this.y,this.ran,this.ran);
  }

  direction(){
    if(this.x>width/2&&this.y>height/2){
      var lt = createVector(random(-1,-0),random(-1,-0));
      return lt
    }
    if(this.x>width/2&&this.y<height/2){
      var lb = createVector(random(-1,-0),random(0,1));
      return lb
    }
    if(this.x<width/2&&this.y>height/2){
      var rt = createVector(random(0,1),random(-1,-0));
      return rt
    }
    if(this.x<width/2&&this.y<height/2){
      var rb = createVector(random(0,1),random(0,1));
      return rb
    }


  }


}
