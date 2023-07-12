function setup() {
  createCanvas(windowWidth, windowHeight);
  
  colBG = color(150,200,10);
  colFill = color(200,150,10);
}

function changeBG(){
  if(Loop()) {
    colBG = color(random(255),random(255),random(255));
    colFill = color(random(255),random(255),random(255));
  }
}

function draw() {
  background(colBG);

  fill(60,10,220,600);
  ellipse(frameCount % width, height / 2, 1000);
  fill(100,50,100,90);
  ellipse(frameCount % width, height / 4, 850);
  fill(100,50,190);
  ellipse(frameCount % width, height / 1, 500);
  fill(colFill);
  ellipse(frameCount % width, height / 2, 100);
  fill(170,20,60);
  ellipse(frameCount % width, height / 7, 70);
  fill(150,120,10,80);
  ellipse(frameCount % width, height / 10, 50);
  fill(10,130,100,80);
  ellipse(frameCount % width, height / 15, 60);
  fill(10,130,100,50);
  ellipse(frameCount % width, height / 3, 60);
  fill(10,250,20,80);
  ellipse(frameCount % width, height / 1.5, 200);
  fill(160,20,10,200);
  ellipse(frameCount % width, height / 1.3, 100);
  fill(200,60,10,900);
  ellipse(frameCount % width, height / 1.2, 40);
  fill(220,120,200,100);
  ellipse(frameCount % width, height / 1.2, 70);
  fill(220,120,100,500);
  ellipse(frameCount % width, height / 1.1, 30);
  fill(200,10,200,1000);
  ellipse(frameCount % width, height / 1, 100);
}