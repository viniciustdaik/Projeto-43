var bg1, bg2, form, system, code, security;
var score = 0;

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

function preload() {
  bg1 = loadImage("aladdin_cave.jpg");

  // Adicione código para carregar imagem do plano de fundo do tesouro
  bg2 = loadImage("treasure.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);//1000, 500
  security = new Security();
  system = new System();

}

function draw() {
  background(bg1);
  clues();
  security.display();
  push();
  textSize(20);
  //fill("white");
  fill("gold");
  stroke("green");
  text("Pontuação: " + score, width / 2 - 50, 50);//450, 50
  pop();

  if (score === 3) {
    clear();
    //security.hide();
    // Adicione código para alterar o plano de fundo para o plano de fundo do tesouro
    background(bg2);
    //fill("white");
    push();
    textAlign("center");
    textSize(40);
    fill('gold');
    stroke('green');
    // Adicione código para exibir texto "TESOURO ENCONTRADO"
    text("Tesouro Encontrado.", width / 2, height / 2);
    pop();
  }
  
  security.fixPosSec();

  drawSprites();
}

function windowResized() {
  if(!isMobile && windowWidth < width){
    resizeCanvas(width, windowHeight);
  }else if(!isMobile && windowWidth > width){
    resizeCanvas(windowWidth, windowHeight);
  }
  else if(!isMobile && height !== windowHeight){
    resizeCanvas(width, windowHeight);
  }
  else if(isMobile){
    resizeCanvas(windowWidth, windowHeight);
  }
  else{

  }
  



  //FixPositions();

}

//function FixPositions(){
//  security.fixPosSec();
//  fixPosCode();
//}