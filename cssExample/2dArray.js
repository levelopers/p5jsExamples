
let cols;
let rows;
let resolution = 6;
let grid;

function drawArray(cols,rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}


function setup() {
  createCanvas(600,600);
  cols = width/resolution;
  rows = height/resolution;
    grid = drawArray(cols,rows);
   for (let i = 0; i < cols; i++) {
     for (let j = 0; j < rows; j++) {
       grid[i][j] = floor(random(2));
     }
   }
}

function draw() {
  background(0);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * resolution;
      let y = j * resolution;
      if (grid[i][j]==1) {
        fill(255);

        rect(x,y,resolution,resolution);
      }


    }
  }


}

function mousePressed() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = floor(random(2));
    }
  }
  console.log(mouseX);
}
