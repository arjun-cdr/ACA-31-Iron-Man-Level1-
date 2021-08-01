var bg, backgroundImg;
var ironMan, ironManImg;
var diamondImage, diamondGroup;
var restart;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironManImg = loadImage("images/iron.png");
  diamondImage=loadImage("images/diamond.png");
  spikes=loadImage("images/spikes.png");
  stone=loadImage("images/stone.png");
  restart=loadImage("images/restart.png");

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
function generatediamonds(){
  if (frameCount%40===0){
   diamond=createSprite(1200,120,40,10);
   diamond.addImage(diamondImage);
   diamond.velocityX=-4;
   diamond.y=random(50,450);
   diamond.scale=0.5;
   diamond.lifetime=250;
   diamondGroup.add(diamond);
  }
}