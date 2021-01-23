var player1,player2;
var wall,coin1Group,coin2Group,coin3Group,coin4Group,coin5Group;
var player1Score = 0;
var player2Score = 0;
var obstacleGroup;
var player1Life = 3;
var player2Life = 3;

function preload(){
  maze = loadImage("maze.jpg");
  maze1 = loadImage("maze1.jpg");
  maze2 = loadImage("maze2.jpg");
}

function setup() {
  //createCanvas(displayWidth-15,displayHeight-130);
  createCanvas(windowWidth,windowHeight);
  console.log(innerWidth);
  console.log(innerHeight);

  wall = createGroup();
  coin1Group = createGroup();
  coin2Group = createGroup();
  coin3Group = createGroup();
  coin4Group = createGroup();
  coin5Group = createGroup();

  obstacleGroup = createGroup();

  //Horizontal walls
  wall.add(createSprite(width/2,height/4-143,width,20));
  wall.add(createSprite(width/4-240,height/2+50,150,20));
  wall.add(createSprite(width/2-60,height/1.2+20,400,20));
  wall.add(createSprite(width/2-420,height/2+120,160,20));
  wall.add(createSprite(width/4-110,height/2,150,20));
  // wall.add(createSprite(width/2,10,width,20));
  // wall.add(createSprite(width/2,10,width,20));
  
  //Vertical walls
  wall.add(createSprite(width/4-310,height/2,20,height));
  wall.add(createSprite(width-10,height/2,20,height));
  wall.add(createSprite(width/2,height/6-50,20,63));

  obstacleGroup.add(createSprite(random(100,width-50),random(100,height-50),10,10));
  obstacleGroup.add(createSprite(random(100,width-50),random(100,height-50),10,10));
  obstacleGroup.add(createSprite(random(100,width-50),random(100,height-50),10,10));
  obstacleGroup.add(createSprite(random(100,width-50),random(100,height-50),10,10));
  obstacleGroup.add(createSprite(random(100,width-50),random(100,height-50),10,10));
  obstacleGroup.setColorEach("red");

  for(var i=0;i<obstacleGroup.length;i++){
    rand = Math.round(random(1,2))
    if(rand===2){
      obstacleGroup.get(i).velocityX = Math.round(random(-5,5));
    } else{
      obstacleGroup.get(i).velocityY = Math.round(random(-5,5));
    }
  }

  player1 = new Player(width/6,height/2-200,10,10);
  player2 = new Player(width-80,height/2-200,10,10);
}

function draw() {
  background(maze); 

  push();
  fill("black");
  textSize(20);
  text(mouseX+" , "+mouseY,500,110);
  pop();

  scoringSystem();
  player1Movement();
  player2Movement();
  coins();
  coinCollection();
  obstacleMovement();
  obstacleCollision();
  
  player1.display();
  player2.display();

  drawSprites();
}

function player1Movement(){
  if(keyDown("w")){
    player1.body.y = player1.body.y-3;
  }
  if(keyDown("s")){
    player1.body.y = player1.body.y+3;
  }
  if(keyDown("a")){
    player1.body.x = player1.body.x-3;
  }
  if(keyDown("d")){
    player1.body.x = player1.body.x+3;
  }
}

function player2Movement(){
  if(keyDown(UP_ARROW)){
    player2.body.y = player2.body.y-3;
  }
  if(keyDown(DOWN_ARROW)){
    player2.body.y = player2.body.y+3;
  }
  if(keyDown(LEFT_ARROW)){
    player2.body.x = player2.body.x-3;
  }
  if(keyDown(RIGHT_ARROW)){
    player2.body.x = player2.body.x+3;
  }
}

function coins(){
  if(frameCount%60===0){
    var coin1 = createSprite(random(0,width),random(0,height),15,15);
    coin1.lifetime = 120;
    coin1.shapeColor = "yellow";
    coin1Group.add(coin1);
  }
  if(frameCount%80===0){
    var coin2 = createSprite(random(0,width),random(0,height),15,15);
    coin2.lifetime = 110;
    coin2Group.add(coin2);
  }
  if(frameCount%100===0){
    var coin3 = createSprite(random(0,width),random(0,height),15,15);
    coin3.lifetime = 100;
    coin3Group.add(coin3);
  }
  if(frameCount%50===0){
    var coin4 = createSprite(random(0,width),random(0,height),15,15);
    coin4.lifetime = 100;
    coin4Group.add(coin4);
  }
  if(frameCount%120===0){
    var coin5 = createSprite(random(0,width),random(0,height),15,15);
    coin5.lifetime = 70;
    coin5Group.add(coin5);
  }
}

function coinCollection(){
  //Coin1 Group
  for(var i=0;i<coin1Group.length;i++){
    //Player1
    if(player1.body.isTouching(coin1Group.get(i))){
      player1Score+=1;
      coin1Group.get(i).destroy();
    }
    //Player2
    if(player2.body.isTouching(coin1Group)){
      player2Score+=1;
      coin1Group.get(i).destroy();
    }
  }  

  //Coin2 Group
  for(var i=0;i<coin2Group.length;i++){
    //Player1
    if(player1.body.isTouching(coin2Group.get(i))){
      player1Score+=1;
      coin2Group.get(i).destroy();
    }
    //Player2
    if(player2.body.isTouching(coin2Group)){
      player2Score+=1;
      coin2Group.get(i).destroy();
    }
  }  

  //Coin3 Group
  for(var i=0;i<coin3Group.length;i++){
    //Player1
    if(player1.body.isTouching(coin3Group.get(i))){
      player1Score+=1;
      coin3Group.get(i).destroy();
    }
    //Player2
    if(player2.body.isTouching(coin3Group)){
      player2Score+=1;
      coin3Group.get(i).destroy();
    }
  }  

  //Coin4 Group
  for(var i=0;i<coin4Group.length;i++){
    //Player1
    if(player1.body.isTouching(coin4Group.get(i))){
      player1Score+=1;
      coin4Group.get(i).destroy();
    }
    //Player2
    if(player2.body.isTouching(coin4Group)){
      player2Score+=1;
      coin4Group.get(i).destroy();
    }
  }  

  //Coin5 Group
  for(var i=0;i<coin5Group.length;i++){
    //Player1
    if(player1.body.isTouching(coin5Group.get(i))){
      player1Score+=1;
      coin5Group.get(i).destroy();
    }
    //Player2
    if(player2.body.isTouching(coin5Group)){
      player2Score+=1;
      coin5Group.get(i).destroy();
    }
  }  
}

function obstacleMovement(){
  obstacleGroup.bounceOff(wall);
}

function scoringSystem(){
  //Player1 Score
  push();
  fill("white");
  rect(80,580,115,25);
  fill("black");
  textSize(20);
  text("Score: "+player1Score,90,599);
  pop();

  //Player2 Score
  push();
  fill("white");
  rect(970,580,115,25);
  fill("black");
  textSize(20);
  text("Score: "+player2Score,980,599);
  pop();

  //Player1 life
  push();
  fill("white");
  rect(240,580,85,25);
  fill("black");
  textSize(20);
  text("Lifes: "+player1Life,240,599);
  pop();

  //Player2 life
  push();
  fill("white");
  rect(1090,580,85,25);
  fill("black");
  textSize(20);
  text("Lifes: "+player2Life,1100,599);
  pop();
}

function obstacleCollision(){
  if(player1.body.isTouching(obstacleGroup)){
    player1.body.x = width/6;
    player1.body.y = height/2-200;
    player1Life = player1Life-1;
  }
}