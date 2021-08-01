var bg, backgroundImg;
var ironMan, ironManImg;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironManImg = loadImage("images/iron.png");

}

function setup() {
  createCanvas(1000, 600);

  bg = createSprite(580,300);
  bg.addImage(backgroundImg);
  bg.scale=2;
  bg.velocityY=-3;

  ironMan=createSprite(200,350,20,50);
  ironMan.scale=0.3;
  ironMan.addImage(ironManImg);

  diamondGroup=new Group();
}

function draw() {
  if (bg.y<50){
    bg.y=bg.width/4;
  }

  if(keyDown("up")){
    ironMan.velocityY=-10;
  }
  if(keyDown("left")){
    ironMan.x=ironMan.x-5;
  }
  if(keyDown("right")){
    ironMan.x=ironMan.x+5;
  }
    
    drawSprites();
   
}