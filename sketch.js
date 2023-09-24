let gameState = 0;
let titleScreenBackground;

function setup() {
  createCanvas(1000, 600);

  noStroke();

  font = loadFont('fonts/Abaddon Bold.ttf');
  titleFont = loadFont('fonts/fibberish.ttf');
  girlImage = loadImage('assets/girl.png');
  girlCropped = loadImage('assets/girlCropped.png');
  titleScreenBackground = loadImage("assets/background.png");
  loseScreenBackground = loadImage("assets/loseBackground.png");
  winScreenBackground = loadImage("assets/winBackground.png");
  factScreenBackground = loadImage("assets/factScreen.png");

  playButton = createButton("Play");
  helpButton = createButton("Instructions");
  titleScreenButton = createButton("Back to Title Screen");
  continueButton = createButton("Continue...");
}

function draw() {
  checkGameState();
}

function checkGameState() {
  if (gameState == 0) {
    titleScreen();
  } else if (gameState == 1) {
    partAIInstructionsScreen();
  } else if (gameState == 5) {
    loseScreen();
  } else if (gameState == 6) {
    winScreen();
  }
}

function titleScreen() {
  background(titleScreenBackground);

  gameState = 0;

  textFont(titleFont);

  playButton.show();
  helpButton.show();
  titleScreenButton.hide();
  continueButton.hide();

  playButton.position(415, 350);
  helpButton.position(370, 450);

  playButton.mouseClicked(winScreen);
  helpButton.mouseClicked(partAInstructionsScreen);

  noStroke();
  // title text colour
  fill(255);
  textSize(150);
  textFont(titleFont);
  text("Breaking", 240, 200);
  text("the Binary", 170, 300);

  image(girlImage, 100, 380);

}

function partAInstructionsScreen() {
  background(titleScreenBackground);

  gameState = 1;

  textFont(titleFont);

  playButton.hide();
  helpButton.hide();
  titleScreenButton.show();

  titleScreenButton.position(300, 350);

  titleScreenButton.mouseClicked(titleScreen);

  noStroke();
  fill(255);
  textSize(150);
  text("instructions", 150, 200);

  textSize(30);
  text("Press the spacebar to move through the text.", 200, 300);

}

function loseScreen() {
  background(loseScreenBackground);

  gameState = 5;

  playButton.hide();
  helpButton.hide();
  continueButton.show();
  continueButton.position(600, 520);
  continueButton.mouseClicked(factScreen);

  noStroke();
  fill(255);
  rect(100, 100, 800, 500);

  fill(57, 0, 64)
  textSize(60);
  textFont(titleFont);

  text("LETTER OF RESIGNATION", 205, 190);

  textSize(30);
  textFont(font);

  text("To whom it may concern,", 175, 250);
  text("I am writing to let you know that I am formally \nresigning as a web developer. I do not think I am \nfit for this position, and I believe that I am \nbringing down the team. I do not believe that I \nbelong in this industry. Thank you for the \nopportunity and I apologize for my abrupt \nresignation.", 175, 300);
  
}

function winScreen() {
  background(winScreenBackground);

  gameState = 6;

  playButton.hide();
  helpButton.hide();
  continueButton.show();
  continueButton.position(600, 500);
  continueButton.mouseClicked(factScreen);

  noStroke();
  fill(0);
  rect(80, 80, 840, 540, 20);
  fill(255);
  rect(100, 100, 800, 480, 20);
  fill(0);
  rect(425, 90, 150, 30, 10);

  fill(57, 0, 64);
  rect(0, 0, 400, 70);

  textSize(40);
  textFont(titleFont);
  fill(255);
  text("5 years later...", 50, 45);

  textFont(font);
  textSize(30);
  fill(57, 0, 64);
  text("news.com", 150, 150);
  text("Technology company XX just \nelected a woman as their CEO, \nshattering a glass ceiling. This \nis truly an instance of breaking \nthe binary in tech.", 150, 350);
  textSize(60);
  text("FIRST FEMALE CEO AT \nXX COMPANY", 150, 220);

  stroke(0);
  strokeWeight(8);
  fill(255);
  rect(620, 250, 200, 200);
  image(girlCropped, 640, 260);

}

function factScreen() {
  background(factScreenBackground);

  gameState = 7;

  continueButton.hide();
  titleScreenButton.show();
  titleScreenButton.position(550, 475);

  noStroke();
  fill(255);
  textFont(titleFont);
  textSize(40);
  text("Women in tech face a range of challenges, including \ngender bias, stereotyping, lack of representation, \nand unequal pay.", 75, 175);
  text("50% of women said they had experienced gender \ndiscrimination at work [in tech], while \nonly 19% of men said the same.", 75, 350);
  text("Something needs to change.", 75, 525);

}
