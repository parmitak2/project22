var star, starImg;
var bgImg, fairy ,fairyImg;
var fairySound;

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
  starImg= loadAnimation("images/star.png")
  bgImg= loadImage("images/starNight.png")
  fairyImg= loadAnimation("images/fairyImage1.png","images/fairyImage2.png")
 fairySound = loadSound("sound/JoyMusic.mp3");
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  fairy=createSprite(130,270);
  fairy.addAnimation("fairy",fairyImg)
  fairy.scale=0.2; 

  star=createSprite(700,80);
  star.addAnimation("star",starImg);
  star.scale=0.25;

fairySound.play();

starBody = Bodies.circle(630 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}

function draw() {
 background(bgImg);
 Engine.update(engine);
star.x = starBody.position.x;
star.y = starBody.position.y;

 if(star.y>470 && starBody.position.y > 470){
    Matter.Body.setStatic(starBody,true);
 }
 
  drawSprites();
}
function keyPress(){

  if(keyCode === RIGHT_ARROW){
    fairy.x=  fairy.x+20;
  }

  if(keyCode === LEFT_ARROW){
    fairy.x=  fairy.x-20;
  }

  if(keyCode === DOWN_ARROW){
    Matter.Body.setStatic(starBody,false);
  }
}