var trex, trex_running, trex_collided;


function preload(){
  //animação t-rex
  trex_running = loadAnimation("./images/trex1.png","./images/trex3.png","./images/trex4.png");

  //adicionar imagem

}

function setup(){
  createCanvas(600,200)
   
  //sprite de trex
   trex = createSprite(50,150,20,50);
   trex.addAnimation("running", trex_running);
 
   //sprite chão
}

function draw(){
  background("white")
  
  drawSprites();

}
