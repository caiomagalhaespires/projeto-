var seaImage
var shipImage





function preload(){
  
  seaImage=loadImage("sea.png")
  ship1Image=loadImage("ship-1.png")





}

function setup(){
  createCanvas(400,400);
    
  sea=createSprite(200,190,400,10)
  sea.addImage("sea",seaImage)
  sea.x = sea.width /2;
  sea.velocityX = -4;

 ship1=createSprite(200,200,400,10)
 ship1.addAnimation("ship1",shipImage)
 ship1.scale=1
 
}




function draw() {
  background("blue");
    drawSprites();

    if (sea.x < 0){
      sea.x=sea.width/2
  

}
}
