


var dog,doganimation,happyDog;
var database;
var foodS,foodStock;

function preload()
{
	doganimation=loadImage("Dog.png");
	happyDog=loadImage("happydog.png");
}

function setup() {
	database=firebase.database();
	createCanvas(500, 500);
	
	dog=createSprite(200,200,5,5);
	dog.addImage(doganimation);
	dog.scale=0.25;
   // happyDog.addAnimation(happyDog);

   foodStock=database.ref();
   foodStock.on('value',readStock);

	

	//Create the Bodies Here.


	
}


function draw() {
  rectMode(CENTER);
  background(46,139,87);
 // text("Food remaining :"+x,100,300);
 //textSize(12);
  foodStock=database.ref("Food");
  foodStock.on("value",readStock);
  
  drawSprites();

 
}
function readStock(data){
	foodS=data.val();

}
function writeStock(x){
	if(x<=0){
		x=0;
	}else{
		x=x-1;
	}

	database.ref('/').update({
		Food:x
	})
}
if(keyWentDown(UP_ARROW)){
	writeStock(foodS);
	dog.addImage(happyDog);
}





