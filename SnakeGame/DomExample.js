var input;
var slider;
var button;
var co;
function setup() {
  createCanvas(500,500);
  co = color(100);

  button = createButton('button',30);
  slider = createSlider(10,100,50);
  input = createInput("");
  h1 = createElement('h1','header');
 button.mousePressed(changeColor);

}
function draw() {
  background(co);
  text(input.value(),10,20);
  h1.html(input.value());
  h1.style("color","blue");
  h1.style("background-color","red");
  fill(255,0,0);
  ellipse(300,300,slider.value(),slider.value());
}

function changeColor() {
  co = color(random(255));
}
