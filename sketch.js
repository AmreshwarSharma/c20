function setup() {
  createCanvas(800,400);
  a= createSprite(400,200,25,50);
  b= createSprite(750,200,25,100);
  a.shapeColor="blue";
  b.shapeColor="blue";
}

function draw() {
  background(255,255,255);  
  //a.x=World.mouseX;
  a.velocityX=3
  if(b.x-a.x<a.width/2+b.width/2){
    a.shapeColor="yellow";
    b.shapeColor="yellow";
    //Text("YOU WON",250,400);
    //stroke("blue");
  }
  drawSprites();
}