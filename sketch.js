
var a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20;
var a21,a22,a23,a24,a25,a26,a27,a28,a29,a30,a31,a32,a33,a34,a35;

var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22,b23,b24,b25;
var b26,b27,b28,b29,b30,b31,b32,b33,b34,b35,b36,b37,b38,b39,b40,b41,b42,b43,b44,b45,b46,b47,b48,b49,b50;
var b51,b52,b53,b54,b55,b56,b57,b58,b59,b60,b61,b62,b63,b64,b65,b66,b67,b68,b69,b70;

var packman;

var m1,m2,m3,m4,m5;

var p1,p2,p3,p4;
var VV = 0,VC = 10;
var score = 0;
var flag = 0,level = 1;
var count = 0;
var time;
var gamestate = "play"

var counter=setInterval(timer, 1000); //1000 will  run it every 1 second


function preload(){

//m1imj = loadImage("m1imj.png");

packmanup = loadAnimation("packmanup.png");
packmandown = loadAnimation("packmandown.png");
packmanleft = loadAnimation("packmanleft.png");
packmanright = loadAnimation("packmanright.png");
ghost1imj = loadImage("ghost1.png");
ghost2imj = loadImage("ghost2.png");
ghost3imj = loadImage("ghost3.png");
ghost4imj = loadImage("ghost4.png");
ghost5imj = loadImage("ghost4.png");
powerimj = loadImage("powerp.png");

}

function setup(){
  createCanvas(1000,600);
a1 = createSprite(500,100,800,10);
a2 = createSprite(500,500,800,10);
a3 = createSprite(100,300,10,410);
a4 = createSprite(900,300,10,410);
a5 = createSprite(650,300,150,10);
a6 = createSprite(580,275,10,50);
a7 = createSprite(720,275,10,50);
a8 = createSprite(600,250,50,10);
a9 = createSprite(700,250,50,10);
a10 = createSprite(650,250,50,2);
a11 = createSprite(440,450,170,10);
a12 = createSprite(600,400,500,10);
a13 = createSprite(575,470,10,50);
a14 = createSprite(737.5,450,225,10);
a15 = createSprite(845,250,10,200);
a16 = createSprite(650,350,270,10);
a17 = createSprite(460,320,10,150);
a18 = createSprite(485,295,50,10);
a19 = createSprite(790,225,10,145);
a20 = createSprite(550,200,370,10);
a21 = createSprite(650,150,160,10);
a22 = createSprite(520,130,10,50);
a23 = createSprite(315,150,315,10);
a24 = createSprite(410,300,10,110);
a25 = createSprite(520,130,10,50);
a26 = createSprite(290,445,10,100);
a27 = createSprite(255,350,205,10);
a28 = createSprite(160,250,10,105);
a29 = createSprite(310,275,10,150);
a30 = createSprite(385,300,50,10);
a31 = createSprite(335,250,50,10);
a32 = createSprite(550,250,50,10);
a33 = createSprite(225,400,10,100);
a34 = createSprite(165,450,10,100);
a35 = createSprite(235,225,10,150);

b1 = createSprite(125,125,6,6);
b2 = createSprite(125,150,6,6);
b3 = createSprite(125,175,6,6);
b4 = createSprite(125,200,6,6);
b5 = createSprite(125,225,6,6);
b6 = createSprite(125,250,6,6);
b7 = createSprite(125,275,6,6);
b8 = createSprite(125,300,6,6);
b9 = createSprite(125,325,6,6);
b10 = createSprite(125,350,6,6);
b11 = createSprite(125,375,6,6);
b12 = createSprite(125,400,6,6);
b13 = createSprite(125,425,6,6);
b14 = createSprite(125,450,6,6);
b15 = createSprite(125,475,6,6);
b31 = createSprite(325,475,6,6);
b32 = createSprite(350,475,6,6);
b33 = createSprite(375,475,6,6);
b34 = createSprite(400,475,6,6);
b35 = createSprite(425,475,6,6);
b36 = createSprite(450,475,6,6);
b37 = createSprite(475,475,6,6);
b16 = createSprite(875,125,6,6);
b17 = createSprite(875,150,6,6);
b18 = createSprite(875,175,6,6);
b19 = createSprite(875,200,6,6);
b20 = createSprite(875,225,6,6);
b21 = createSprite(875,250,6,6);
b22 = createSprite(875,275,6,6);
b23 = createSprite(875,300,6,6);
b24 = createSprite(875,325,6,6);
b25 = createSprite(875,350,6,6);
b26 = createSprite(875,375,6,6);
b27 = createSprite(875,400,6,6);
b28 = createSprite(875,425,6,6);
b29 = createSprite(875,450,6,6);
b30 = createSprite(875,475,6,6);
b38 = createSprite(475,225,6,6);
b39 = createSprite(525,225,6,6);
b40 = createSprite(550,425,6,6);
b41 = createSprite(525,425,6,6);
b42 = createSprite(250,175,6,6);
b43 = createSprite(275,175,6,6);
b44 = createSprite(350,175,6,6);
b45 = createSprite(375,175,6,6);
b46 = createSprite(525,175,6,6);
b47 = createSprite(675,175,6,6);
b48 = createSprite(725,175,6,6);
b49 = createSprite(525,375,6,6);
b50 = createSprite(550,375,6,6);
b51 = createSprite(625,375,6,6);
b52 = createSprite(675,375,6,6);
b53 = createSprite(750,375,6,6);
b54 = createSprite(400,375,6,6);
b55 = createSprite(350,375,6,6);
b56 = createSprite(300,375,6,6);
b57 = createSprite(650,475,6,6);
b58 = createSprite(700,475,6,6);
b59 = createSprite(750,475,6,6);
b60 = createSprite(850,475,6,6);
b61 = createSprite(650,425,6,6);
b62 = createSprite(700,425,6,6);
b63 = createSprite(750,425,6,6);
b64 = createSprite(485,325,6,6);
b65 = createSprite(600,325,6,6);
b66 = createSprite(750,325,6,6);
b67 = createSprite(250,125,6,6);
b68 = createSprite(400,125,6,6);
b69 = createSprite(200,325,6,6);
b70 = createSprite(250,325,6,6);

p1 = createSprite(220,165,15,15);
p2 = createSprite(185,485,15,15);
p3 = createSprite(800,485,15,15);
p4 = createSprite(735,115,15,15);

p1.addImage("pp",powerimj);
p2.addImage("pp",powerimj);
p3.addImage("pp",powerimj);
p4.addImage("pp",powerimj);

p1.scale = 0.07;
p2.scale = 0.07;
p3.scale = 0.07;
p4.scale = 0.07;

m1 = createSprite(500,275,20,20);
m2 = createSprite(200,475,20,20);
m3 = createSprite(875,125,20,20);
m4 = createSprite(550,125,20,20);
m5 = createSprite(875,125,20,20);

//m1.addImage(m1imj);
//m1.scale= 0.75;

m1.velocityX = 10;
m2.velocityY = 10;
m3.velocityY = 10;
m4.velocityY = 10;
m5.velocityY = 10;

m1.addImage("m1",ghost1imj);
m2.addImage("m2",ghost2imj);
m3.addImage("m3",ghost3imj);
m4.addImage("m4",ghost4imj);
m5.addImage("m5",ghost5imj);

m1.scale =0.052;
m2.scale = 0.09;
m3.scale = 0.07;
m4.scale = 0.15;
m5.scale = 0.15;


a1.shapeColor = ("orange");
a2.shapeColor = ("orange");
a3.shapeColor = ("orange");
a4.shapeColor = ("orange");
a5.shapeColor = ("orange");
a6.shapeColor = ("orange");
a7.shapeColor = ("orange");
a8.shapeColor = ("orange");
a9.shapeColor = ("orange");
a10.shapeColor = ("orange");
a11.shapeColor = ("orange");
a12.shapeColor = ("orange");
a13.shapeColor = ("orange");
a14.shapeColor = ("orange");
a15.shapeColor = ("orange");
a16.shapeColor = ("orange");
a17.shapeColor = ("orange");
a18.shapeColor = ("orange");
a19.shapeColor = ("orange");
a20.shapeColor = ("orange");
a21.shapeColor = ("orange");
a22.shapeColor = ("orange");
a23.shapeColor = ("orange");
a24.shapeColor = ("orange");
a25.shapeColor = ("orange");
a26.shapeColor = ("orange");
a27.shapeColor = ("orange");
a28.shapeColor = ("orange");
a29.shapeColor = ("orange");
a30.shapeColor = ("orange");
a31.shapeColor = ("orange");
a32.shapeColor = ("orange");
a33.shapeColor = ("orange");
a34.shapeColor = ("orange");
a35.shapeColor = ("orange");

packman = createSprite(600,475,20,20);
packman.addAnimation("defaultposition",packmanleft);
packman.addAnimation("right",packmanright);
packman.addAnimation("up",packmanup);
packman.addAnimation("down",packmandown);

packman.scale = 0.07;

}

function draw(){

  //console.log(World.frameRate);


  background("black");

  fill("white");
  textSize(25);
  text("Score = " + score ,200,50);

  if(level === 1){
    l1();
  }
  if(level === 2){
    l2();
  }
  if(level === 3){
    l3();
  }
  if(level === 4){
    l4();
  }

  drawSprites();

  if(gamestate === "lose"){

  textSize(75);
  text("you Lose",500,300);
  }

  if(gamestate === "win"){

  textSize(75);
  text("you Win",500,300);
  }

  if (count >= 0){

  textSize(25);
  text(count,500,50);
  }

  textSize(25);

  if(level === 1 || level === 2){
  text("Level = 1",850,50);
  }
  if(level === 3 || level === 4){
  text("Level = 2",850,50);
  }

}


function timer()
{
  if(frameCount % 30 === 0){
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     //counter ended, do something here
     return;
  }
}
   //console.log(count)
}


function changeM1(){
  var select = round(random(1,4));

  if (select === 1){
    m1.velocityX = VC-VV;
    m1.velocityY = -2;
  }

  if (select === 2){
    m1.velocityX = -(VC-VV);
    m1.velocityY = 2;
  }

  if (select === 3){
    m1.velocityX = -2;
    m1.velocityY = -(VC-VV);
  }

  if (select === 4){
    m1.velocityX = 2;
    m1.velocityY = VC-VV;
  }
}

function changeM2(){
  var select2 = round(random(1,4));

  if (select2 === 1){
    m2.velocityX = VC-VV;
    m2.velocityY = -2;
  }

  if (select2 === 2){
    m2.velocityX = -(VC-VV);
    m2.velocityY = 2;
  }

  if (select2 === 3){
    m2.velocityX = -2;
    m2.velocityY = -(VC-VV);
  }

  if (select2 === 4){
    m2.velocityX = 2;
    m2.velocityY = VC-VV;
  }
}

function changeM3(){
  var select3 = round(random(1,4));

  if (select3 === 1){
    m3.velocityX = VC-VV;
    m3.velocityY = -2;
  }

  if (select3 === 2){
    m3.velocityX = -(VC-VV);
    m3.velocityY = 2;
  }

  if (select3 === 3){
    m3.velocityX = -2;
    m3.velocityY = -(VC-VV);
  }

  if (select3 === 4){
    m3.velocityX = 2;
    m3.velocityY = VC-VV;
  }
}

function changeM4(){
  var select4 = round(random(1,4));

  if (select4 === 1){
    m4.velocityX = VC-VV;
    m4.velocityY = -2;
  }

  if (select4 === 2){
    m4.velocityX = -(VC-VV);
    m4.velocityY = 2;
  }

  if (select4 === 3){
    m4.velocityX = -2;
    m4.velocityY = -(VC-VV);
  }

  if (select4 === 4){
    m4.velocityX = 2;
    m4.velocityY = VC-VV;
  }
}

function changeM5(){
  var select5 = round(random(1,4));

  if (select5 === 1){
    m5.velocityX = VC-VV;
    m5.velocityY = -2;
  }

  if (select5 === 2){
    m5.velocityX = -(VC-VV);
    m5.velocityY = 2;
  }

  if (select5 === 3){
    m5.velocityX = -2;
    m5.velocityY = -(VC-VV);
  }

  if (select5 === 4){
    m5.velocityX = 2;
    m5.velocityY = VC-VV;
  }
}


function l1(){

  VV = 5;
  if(score >= 100){
    
    level = 2;

    gamestate = "win";
    m1.setVelocity(0,0);
    m2.setVelocity(0,0);
    m3.setVelocity(0,0);
    m4.setVelocity(0,0);
    m5.setVelocity(0,0);

  }

  if(packman.isTouching(m1)||packman.isTouching(m2)||packman.isTouching(m3)||packman.isTouching(m4)||packman.isTouching(m5)){
    if(count <= 0){
    gamestate = "lose"

    m1.setVelocity(0,0);
    m2.setVelocity(0,0);
    m3.setVelocity(0,0);
    m4.setVelocity(0,0);
    m5.setVelocity(0,0);
    }
  }


  if( keyDown(UP_ARROW) && gamestate === "play"){

    packman.y -= 10;
    packman.changeAnimation("up",packmanup);
  }

  if( keyDown(DOWN_ARROW) && gamestate === "play"){

    packman.y += 10;
    packman.changeAnimation("down",packmandown);
  }

  if( keyDown(LEFT_ARROW) && gamestate === "play"){

    packman.x -= 10;
    packman.changeAnimation("defaultposition",packmanleft);
  }

  if( keyDown(RIGHT_ARROW) && gamestate === "play"){

    packman.x += 10;
    packman.changeAnimation("right",packmanright);
  }


  /*if (packman.isTouching(p1)|| packman.isTouching(p2)|| packman.isTouching(p3)|| packman.isTouching(p4)){

  timer();
  console.log (count);

  }
  */

  if (packman.isTouching(p1)){

    flag = 1;
    p1.lifetime = 0;
    count = 5;
    console.log(count);
    
  }

  if (packman.isTouching(p2)){

    flag = 1;
    p2.lifetime = 0;
    count = 5;
    console.log(count);
    
  }

  if (packman.isTouching(p3)){

    flag = 1;
    p3.lifetime = 0;
    count = 5;
    console.log(count);
    
  }

  if (packman.isTouching(p4)){

    flag = 1;
    p4.lifetime = 0;
    count = 5;
    console.log(count);
    
  }

  if(flag ===1){

    timer();
    console.log(count);

    if(packman.isTouching(m1) && count >= 0){
      m1.x = 500;
      m1.y = 275;
    }
    if(packman.isTouching(m2) && count >= 0){
      m2.x = 200;
      m2.y = 475;
    }
    if(packman.isTouching(m3) && count >= 0){
      m3.x = 875;
      m3.y = 125;
    }
    if(packman.isTouching(m4) && count >= 0){
      m4.x = 550;
      m4.y = 125;
    }
    if(packman.isTouching(m5) && count >= 0){
      m5.x = 875;
      m5.y = 125;
    }
  }

  if (frameCount % 20 === 0 && gamestate === "play"){
  changeM1();
  }
  if (frameCount % 25 === 0 && gamestate === "play"){
  changeM2();
  }
  if (frameCount % 27 === 0 && gamestate === "play"){
  changeM3();
  }
  if (frameCount % 34 === 0 && gamestate === "play"){
  changeM4();
  }
  if (frameCount % 40 === 0 && gamestate === "play"){
  changeM5();
  }

  touchDot();
  bounce();  

}

function l2(){
  text("press space key to go to next level",500,550);

      if(keyCode === 32){

        level = 3;
        gamestate = "play";
        score = 0;
        count = 0;
        flag = 0;

        p1.lifetime = -1;
        p2.lifetime = -1;
        p3.lifetime = -1;
        p4.lifetime = -1;

        m1.x = 500;
        m1.y = 275;
        m2.x = 200;
        m2.y = 475;
        m3.x = 875;
        m3.y = 125;
        m4.x = 550;
        m4.y = 125;
        m5.x = 875;
        m5.y = 125;

        b1.lifetime = -1;
        b2.lifetime = -1;
        b3.lifetime = -1;
        b4.lifetime = -1;
        b5.lifetime = -1;
        b6.lifetime = -1;
        b7.lifetime = -1;
        b8.lifetime = -1;
        b9.lifetime = -1;
        b10.lifetime = -1;
        b11.lifetime = -1;
        b12.lifetime = -1;
        b13.lifetime = -1;
        b14.lifetime = -1;
        b15.lifetime = -1;
        b16.lifetime = -1;
        b17.lifetime = -1;
        b18.lifetime = -1;
        b19.lifetime = -1;
        b20.lifetime = -1;
        b21.lifetime = -1;
        b22.lifetime = -1;
        b23.lifetime = -1;
        b24.lifetime = -1;
        b25.lifetime = -1;
        b26.lifetime = -1;
        b27.lifetime = -1;
        b28.lifetime = -1;
        b29.lifetime = -1;
        b30.lifetime = -1;
        b31.lifetime = -1;
        b32.lifetime = -1;
        b33.lifetime = -1;
        b34.lifetime = -1;
        b35.lifetime = -1;
        b36.lifetime = -1;
        b37.lifetime = -1;
        b38.lifetime = -1;
        b39.lifetime = -1;
        b40.lifetime = -1;
        b41.lifetime = -1;
        b42.lifetime = -1;
        b43.lifetime = -1;
        b44.lifetime = -1;
        b45.lifetime = -1;
        b46.lifetime = -1;
        b47.lifetime = -1;
        b48.lifetime = -1;
        b49.lifetime = -1;
        b50.lifetime = -1;
        b51.lifetime = -1;
        b52.lifetime = -1;
        b53.lifetime = -1;
        b54.lifetime = -1;
        b55.lifetime = -1;
        b56.lifetime = -1;
        b57.lifetime = -1;
        b58.lifetime = -1;
        b59.lifetime = -1;
        b60.lifetime = -1;
        b61.lifetime = -1;
        b62.lifetime = -1;
        b63.lifetime = -1;
        b64.lifetime = -1;
        b65.lifetime = -1;
        b66.lifetime = -1;
        b67.lifetime = -1;
        b68.lifetime = -1;
        b69.lifetime = -1;
        b70.lifetime = -1;

        p1 = createSprite(220,165,15,15);
        p2 = createSprite(185,485,15,15);
        p3 = createSprite(800,485,15,15);
        p4 = createSprite(735,115,15,15);

        p1.addImage("pp",powerimj);
        p2.addImage("pp",powerimj);
        p3.addImage("pp",powerimj);
        p4.addImage("pp",powerimj);
        
        p1.scale = 0.07;
        p2.scale = 0.07;
        p3.scale = 0.07;
        p4.scale = 0.07;

        createP();
        createB();
      
    }
}

function l3(){
//console.log(".");
  VV = 3;
  if(score >= 700){
    
    level = 4;
    gamestate = "win";
    m1.setVelocity(0,0);
    m2.setVelocity(0,0);
    m3.setVelocity(0,0);
    m4.setVelocity(0,0);
    m5.setVelocity(0,0);

  }

  if(packman.isTouching(m1)||packman.isTouching(m2)||packman.isTouching(m3)||packman.isTouching(m4)||packman.isTouching(m5)){
    if(count <= 0){
    gamestate = "lose"

    m1.setVelocity(0,0);
    m2.setVelocity(0,0);
    m3.setVelocity(0,0);
    m4.setVelocity(0,0);
    m5.setVelocity(0,0);
    }
  }


  if( keyDown(UP_ARROW) && gamestate === "play"){

  packman.y -= 10;
  packman.changeAnimation("up",packmanup);
  }

  if( keyDown(DOWN_ARROW) && gamestate === "play"){

  packman.y += 10;
  packman.changeAnimation("down",packmandown);
  }

  if( keyDown(LEFT_ARROW) && gamestate === "play"){

  packman.x -= 10;
  packman.changeAnimation("defaultposition",packmanleft);
  }

  if( keyDown(RIGHT_ARROW) && gamestate === "play"){

  packman.x += 10;
  packman.changeAnimation("right",packmanright);
  }


  /*if (packman.isTouching(p1)|| packman.isTouching(p2)|| packman.isTouching(p3)|| packman.isTouching(p4)){

  timer();
  console.log (count);

  }
  */
  touchDot();

  if (packman.isTouching(p1)){

  flag = 1;
  p1.lifetime = 0;
  count = 5;
  console.log(count);

  }

  if (packman.isTouching(p2)){

  flag = 1;
  p2.lifetime = 0;
  count = 5;
  console.log(count);

  }

  if (packman.isTouching(p3)){

  flag = 1;
  p3.lifetime = 0;
  count = 5;
  console.log(count);

  }

  if (packman.isTouching(p4)){

  flag = 1;
  p4.lifetime = 0;
  count = 5;
  console.log(count);

  }

  if(flag ===1){

  timer();
  console.log(count);

  if(packman.isTouching(m1) && count >= 0){
    m1.x = 500;
    m1.y = 275;
  }
  if(packman.isTouching(m2) && count >= 0){
    m2.x = 200;
    m2.y = 475;
  }
  if(packman.isTouching(m3) && count >= 0){
    m3.x = 875;
    m3.y = 125;
  }
  if(packman.isTouching(m4) && count >= 0){
    m4.x = 550;
    m4.y = 125;
  }
  if(packman.isTouching(m5) && count >= 0){
    m5.x = 875;
    m5.y = 125;
  }

  }

  if (frameCount % 20 === 0 && gamestate === "play"){
  changeM1();
  }

  if (frameCount % 25 === 0 && gamestate === "play"){
  changeM2();
  }

  if (frameCount % 27 === 0 && gamestate === "play"){
  changeM3();
  }

  if (frameCount % 34 === 0 && gamestate === "play"){
  changeM4();
  }

  if (frameCount % 40 === 0 && gamestate === "play"){
  changeM5();
  }

  

  
  bounce();

}

function l4(){
  console.log(".");
}


function bounce(){

  packman.bounceOff(a1);
  packman.bounceOff(a2);
  packman.bounceOff(a3);
  packman.bounceOff(a4);
  packman.bounceOff(a5);
  packman.bounceOff(a6);
  packman.bounceOff(a7);
  packman.bounceOff(a8);
  packman.bounceOff(a9);
  packman.bounceOff(a10);
  packman.bounceOff(a11);
  packman.bounceOff(a12);
  packman.bounceOff(a13);
  packman.bounceOff(a14);
  packman.bounceOff(a15);
  packman.bounceOff(a16);
  packman.bounceOff(a17);
  packman.bounceOff(a18);
  packman.bounceOff(a19);
  packman.bounceOff(a20);
  packman.bounceOff(a21);
  packman.bounceOff(a22);
  packman.bounceOff(a23);
  packman.bounceOff(a24);
  packman.bounceOff(a25);
  packman.bounceOff(a26);
  packman.bounceOff(a27);
  packman.bounceOff(a28);
  packman.bounceOff(a29);
  packman.bounceOff(a30);
  packman.bounceOff(a31);
  packman.bounceOff(a32);
  packman.bounceOff(a33);
  packman.bounceOff(a34);
  packman.bounceOff(a35);
  
  
  m1.bounceOff(a1);
  m1.bounceOff(a2);
  m1.bounceOff(a3);
  m1.bounceOff(a4);
  m1.bounceOff(a5);
  m1.bounceOff(a6);
  m1.bounceOff(a7);
  m1.bounceOff(a8);
  m1.bounceOff(a9);
  m1.bounceOff(a10);
  m1.bounceOff(a11);
  m1.bounceOff(a12);
  m1.bounceOff(a13);
  m1.bounceOff(a14);
  m1.bounceOff(a15);
  m1.bounceOff(a16);
  m1.bounceOff(a17);
  m1.bounceOff(a18);
  m1.bounceOff(a19);
  m1.bounceOff(a20);
  m1.bounceOff(a21);
  m1.bounceOff(a22);
  m1.bounceOff(a23);
  m1.bounceOff(a24);
  m1.bounceOff(a25);
  m1.bounceOff(a26);
  m1.bounceOff(a27);
  m1.bounceOff(a28);
  m1.bounceOff(a29);
  m1.bounceOff(a30);
  m1.bounceOff(a31);
  m1.bounceOff(a32);
  m1.bounceOff(a33);
  m1.bounceOff(a34);
  m1.bounceOff(a35);
  
  m2.bounceOff(a1);
  m2.bounceOff(a2);
  m2.bounceOff(a3);
  m2.bounceOff(a4);
  m2.bounceOff(a5);
  m2.bounceOff(a6);
  m2.bounceOff(a7);
  m2.bounceOff(a8);
  m2.bounceOff(a9);
  m2.bounceOff(a10);
  m2.bounceOff(a11);
  m2.bounceOff(a12);
  m2.bounceOff(a13);
  m2.bounceOff(a14);
  m2.bounceOff(a15);
  m2.bounceOff(a16);
  m2.bounceOff(a17);
  m2.bounceOff(a18);
  m2.bounceOff(a19);
  m2.bounceOff(a20);
  m2.bounceOff(a21);
  m2.bounceOff(a22);
  m2.bounceOff(a23);
  m2.bounceOff(a24);
  m2.bounceOff(a25);
  m2.bounceOff(a26);
  m2.bounceOff(a27);
  m2.bounceOff(a28);
  m2.bounceOff(a29);
  m2.bounceOff(a30);
  m2.bounceOff(a31);
  m2.bounceOff(a32);
  m2.bounceOff(a33);
  m2.bounceOff(a34);
  m2.bounceOff(a35);
  
  m3.bounceOff(a1);
  m3.bounceOff(a2);
  m3.bounceOff(a3);
  m3.bounceOff(a4);
  m3.bounceOff(a5);
  m3.bounceOff(a6);
  m3.bounceOff(a7);
  m3.bounceOff(a8);
  m3.bounceOff(a9);
  m3.bounceOff(a10);
  m3.bounceOff(a11);
  m3.bounceOff(a12);
  m3.bounceOff(a13);
  m3.bounceOff(a14);
  m3.bounceOff(a15);
  m3.bounceOff(a16);
  m3.bounceOff(a17);
  m3.bounceOff(a18);
  m3.bounceOff(a19);
  m3.bounceOff(a20);
  m3.bounceOff(a21);
  m3.bounceOff(a22);
  m3.bounceOff(a23);
  m3.bounceOff(a24);
  m3.bounceOff(a25);
  m3.bounceOff(a26);
  m3.bounceOff(a27);
  m3.bounceOff(a28);
  m3.bounceOff(a29);
  m3.bounceOff(a30);
  m3.bounceOff(a31);
  m3.bounceOff(a32);
  m3.bounceOff(a33);
  m3.bounceOff(a34);
  m3.bounceOff(a35);
  
  m4.bounceOff(a1);
  m4.bounceOff(a2);
  m4.bounceOff(a3);
  m4.bounceOff(a4);
  m4.bounceOff(a5);
  m4.bounceOff(a6);
  m4.bounceOff(a7);
  m4.bounceOff(a8);
  m4.bounceOff(a9);
  m4.bounceOff(a10);
  m4.bounceOff(a11);
  m4.bounceOff(a12);
  m4.bounceOff(a13);
  m4.bounceOff(a14);
  m4.bounceOff(a15);
  m4.bounceOff(a16);
  m4.bounceOff(a17);
  m4.bounceOff(a18);
  m4.bounceOff(a19);
  m4.bounceOff(a20);
  m4.bounceOff(a21);
  m4.bounceOff(a22);
  m4.bounceOff(a23);
  m4.bounceOff(a24);
  m4.bounceOff(a25);
  m4.bounceOff(a26);
  m4.bounceOff(a27);
  m4.bounceOff(a28);
  m4.bounceOff(a29);
  m4.bounceOff(a30);
  m4.bounceOff(a31);
  m4.bounceOff(a32);
  m4.bounceOff(a33);
  m4.bounceOff(a34);
  m4.bounceOff(a35);
  
  m5.bounceOff(a1);
  m5.bounceOff(a2);
  m5.bounceOff(a3);
  m5.bounceOff(a4);
  m5.bounceOff(a5);
  m5.bounceOff(a6);
  m5.bounceOff(a7);
  m5.bounceOff(a8);
  m5.bounceOff(a9);
  m5.bounceOff(a10);
  m5.bounceOff(a11);
  m5.bounceOff(a12);
  m5.bounceOff(a13);
  m5.bounceOff(a14);
  m5.bounceOff(a15);
  m5.bounceOff(a16);
  m5.bounceOff(a17);
  m5.bounceOff(a18);
  m5.bounceOff(a19);
  m5.bounceOff(a20);
  m5.bounceOff(a21);
  m5.bounceOff(a22);
  m5.bounceOff(a23);
  m5.bounceOff(a24);
  m5.bounceOff(a25);
  m5.bounceOff(a26);
  m5.bounceOff(a27);
  m5.bounceOff(a28);
  m5.bounceOff(a29);
  m5.bounceOff(a30);
  m5.bounceOff(a31);
  m5.bounceOff(a32);
  m5.bounceOff(a33);
  m5.bounceOff(a34);
  m5.bounceOff(a35);

}
function touchDot(){

  if(packman.isTouching(b1)){
    b1.lifetime = 0;
    score+=10;
  }
  
  if(packman.isTouching(b2)){
    b2.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b3)){
    b3.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b4)){
    b4.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b5)){
    b5.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b6)){
    b6.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b7)){
    b7.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b8)){
    b8.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b9)){
    b9.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b10)){
    b10.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b11)){
    b11.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b12)){
    b12.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b13)){
    b13.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b14)){
    b14.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b15)){
    b15.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b16)){
    b16.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b17)){
    b17.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b18)){
    b18.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b19)){
    b19.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b20)){
    b20.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b21)){
    b21.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b22)){
    b22.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b23)){
    b23.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b24)){
    b24.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b25)){
    b25.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b26)){
    b26.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b27)){
    b27.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b28)){
    b28.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b29)){
    b29.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b30)){
    b30.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b31)){
    b31.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b32)){
    b32.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b33)){
    b33.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b34)){
    b34.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b35)){
    b35.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b36)){
    b36.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b37)){
    b37.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b38)){
    b38.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b39)){
    b39.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b40)){
    b40.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b41)){
    b41.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b42)){
    b42.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b43)){
    b43.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b44)){
    b44.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b45)){
    b45.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b46)){
    b46.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b47)){
    b47.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b48)){
    b48.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b49)){
    b49.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b50)){
    b50.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b51)){
    b51.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b52)){
    b52.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b53)){
    b53.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b54)){
    b54.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b55)){
    b55.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b56)){
    b56.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b57)){
    b57.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b58)){
    b58.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b59)){
    b59.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b60)){
    b60.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b61)){
    b61.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b62)){
    b62.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b63)){
    b63.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b64)){
    b64.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b65)){
    b65.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b66)){
    b66.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b67)){
    b67.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b68)){
    b68.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b69)){
    b69.lifetime = 0;
    score+=10;
  }
  if(packman.isTouching(b70)){
    b70.lifetime = 0;
    score+=10;
  }

}
function createB(){

  b1 = createSprite(125,125,6,6);
  b2 = createSprite(125,150,6,6);
  b3 = createSprite(125,175,6,6);
  b4 = createSprite(125,200,6,6);
  b5 = createSprite(125,225,6,6);
  b6 = createSprite(125,250,6,6);
  b7 = createSprite(125,275,6,6);
  b8 = createSprite(125,300,6,6);
  b9 = createSprite(125,325,6,6);
  b10 = createSprite(125,350,6,6);
  b11 = createSprite(125,375,6,6);
  b12 = createSprite(125,400,6,6);
  b13 = createSprite(125,425,6,6);
  b14 = createSprite(125,450,6,6);
  b15 = createSprite(125,475,6,6);
  b31 = createSprite(325,475,6,6);
  b32 = createSprite(350,475,6,6);
  b33 = createSprite(375,475,6,6);
  b34 = createSprite(400,475,6,6);
  b35 = createSprite(425,475,6,6);
  b36 = createSprite(450,475,6,6);
  b37 = createSprite(475,475,6,6);
  b16 = createSprite(875,125,6,6);
  b17 = createSprite(875,150,6,6);
  b18 = createSprite(875,175,6,6);
  b19 = createSprite(875,200,6,6);
  b20 = createSprite(875,225,6,6);
  b21 = createSprite(875,250,6,6);
  b22 = createSprite(875,275,6,6);
  b23 = createSprite(875,300,6,6);
  b24 = createSprite(875,325,6,6);
  b25 = createSprite(875,350,6,6);
  b26 = createSprite(875,375,6,6);
  b27 = createSprite(875,400,6,6);
  b28 = createSprite(875,425,6,6);
  b29 = createSprite(875,450,6,6);
  b30 = createSprite(875,475,6,6);
  b38 = createSprite(475,225,6,6);
  b39 = createSprite(525,225,6,6);
  b40 = createSprite(550,425,6,6);
  b41 = createSprite(525,425,6,6);
  b42 = createSprite(250,175,6,6);
  b43 = createSprite(275,175,6,6);
  b44 = createSprite(350,175,6,6);
  b45 = createSprite(375,175,6,6);
  b46 = createSprite(525,175,6,6);
  b47 = createSprite(675,175,6,6);
  b48 = createSprite(725,175,6,6);
  b49 = createSprite(525,375,6,6);
  b50 = createSprite(550,375,6,6);
  b51 = createSprite(625,375,6,6);
  b52 = createSprite(675,375,6,6);
  b53 = createSprite(750,375,6,6);
  b54 = createSprite(400,375,6,6);
  b55 = createSprite(350,375,6,6);
  b56 = createSprite(300,375,6,6);
  b57 = createSprite(650,475,6,6);
  b58 = createSprite(700,475,6,6);
  b59 = createSprite(750,475,6,6);
  b60 = createSprite(850,475,6,6);
  b61 = createSprite(650,425,6,6);
  b62 = createSprite(700,425,6,6);
  b63 = createSprite(750,425,6,6);
  b64 = createSprite(485,325,6,6);
  b65 = createSprite(600,325,6,6);
  b66 = createSprite(750,325,6,6);
  b67 = createSprite(250,125,6,6);
  b68 = createSprite(400,125,6,6);
  b69 = createSprite(200,325,6,6);
  b70 = createSprite(250,325,6,6);

}
function createP(){

  p1 = createSprite(220,165,15,15);
  p2 = createSprite(185,485,15,15);
  p3 = createSprite(800,485,15,15);
  p4 = createSprite(735,115,15,15);
  
  p1.addImage("pp",powerimj);
  p2.addImage("pp",powerimj);
  p3.addImage("pp",powerimj);
  p4.addImage("pp",powerimj);
  
  p1.scale = 0.07;
  p2.scale = 0.07;
  p3.scale = 0.07;
  p4.scale = 0.07;

}