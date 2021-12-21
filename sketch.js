var boychacter,sky,boy,bj;
var obstaclesGroup,
redb,blueb,orangeb
var PLAY=1;
var gameState=PLAY;
var END=0;
var blocksGroup;



function preload(){
  sky=loadImage("images/sky.jpg")
  boy=loadImage("images/boy.png")
  redb=loadImage("images/red.png")
  blueb=loadImage("images/blue.png")
  orangeb=loadImage("images/orange.png")
blocksGroup=loadImage("images/box.1.jpg")
}



function setup() {
  createCanvas(displayWidth,displayHeight);

  obstaclesGroup=new Group();
  blocksGroup=new Group();
  
  bj=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
  bj.addImage("sky",sky);
  bj.velocityY=2;
boychacter=createSprite(displayWidth/2,displayHeight-78, 50, 50);
boychacter.addImage("boy",boy);
boychacter.scale=0.5

 boychacter.debug=true
 
 
invisbleGround=createSprite(displayWidth/2,displayHeight,displayWidth,10)
blocksGroup.add("block1",blocksGroup)
}

function draw() {
  background(0); 
  
 
  if(bj.y>=displayHeight-230){
bj.y=displayHeight/2
}

boychacter.bounceOff(invisbleGround)
if(gameState===PLAY){
  
  
  
    if(keyDown("space")){
      boychacter.velocityY=-10
      console.log("space Pressed")

    }
    boychacter.velocityY=boychacter.velocityY + 0.8
    if(keyDown("LEFT")){
      boychacter.x=boychacter.x-1
  
    }
    if(keyDown("RIGHT")){
      boychacter.x=boychacter.x+1
  
    }
    //if(obstaclesGroup.isTouching(boychacter)){
      //gameState=END
    //}

    if(blocksGroup.isTouching(boychacter)){
    boychacter.velocityY=0
    }
  }


  

  Balloon();
  blocks();
  
  
  
  drawSprites();
}

function Balloon(){

  if(frameCount%50==0){
    var Balloon=createSprite(random(10,displayWidth-10),0,5,5)
    Balloon.velocityY=2
    Balloon.velocityX=0;
    obstaclesGroup.add(Balloon)
    var mynumber=round(random(1,3))
    
    if(mynumber==1){
      Balloon.addImage("redb",redb)
    }
    if(mynumber==2){
      Balloon.addImage("orangeb",orangeb)
    }
    if(mynumber==3){
      Balloon.addImage("blueb",blueb)
    }
    
    Balloon.scale=0.1
    

  }
}
function blocks() {
  if(frameCount%300==0){
    var block1=createSprite(random(10,displayWidth-10),0,100,50)

    block1.debug=true
    block1.velocityY=1;

    
    
    
  }
  
}