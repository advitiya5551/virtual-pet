var foods
var dog
function preload() {
  dogStanding = loadImage("images/dogImg.png")
  dogSiting = loadImage("images/dogImg1.png")
}


function setup() {
  createCanvas(500, 500);

  database = firebase.database()


  dog = createSprite(200, 200, 20, 20)
  dog.addImage(dogStanding)
  dog.scale = 0.2
  foodStock = database.ref('food')
  foodStock.on("value", readStock);

}

function draw() {
  background("46, 139, 87");
  createCanvas(500, 500);


  if (keyWentDown(UP_ARROW)) {
    writeStock(foods);
    dog.addImage(dogSiting)
  }
  text("note (press ^ up arrow to feed the dog)", 150, 10);
  
  drawSprites();
}


function readStock(data) {
  foods = data.val();
  console.log(foods)
}
function writeStock(x) {

  if (x <= 0) {
    x = 0;
  }
  else {
    x = x - 1
  }
  database.ref('/').update({
    food: x

  })




}



