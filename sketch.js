let gameState = 0;
let counter = 0;
let person = "Monologue";
let showBox = false;
let bg;

let sprite;
let mikeSprite;
let bossSprite;
let showSprite = false;

// SCRIPT FOR PART A:
// intro monologue scene
// BACKGROUND: office lounge
mainText[0] = "I'm so nervous for my first day of work!";
mainText[1] = "It's a new company, a new boss, and a new position, too; I'm a \ndeveloper!";
mainText[2] = "I have been coding websites during my free time for a few years \nnow, but I have never done it professionally...";
mainText[3] = "I applied for a job at this tech company because my friend told me \nto, and I guess they were impressed enough by my projects, because \nI'm here now...";
mainText[4] = "I hope everything goes well...";
mainText[5] = "...";
mainText[6] = "Oh my god, that's my new boss over there!";
mainText[7] = "I should introduce myself to him.";
// conversation with boss begins
// Boss appears
// BACKGROUND: boss' office
mainText[8] = "Hi, I'm the new employee, and its my first day here! Where can I \nstart?";
mainText[9] = "Oh, hey. Welcome to the team.";
mainText[10] = "We are working on a pretty big project right now, so it would be a \nlittle hard to squeeze you in...";
mainText[11] = "I guess for now you can help the team document the code for the\nproject.";
mainText[12] = "Oh... I thought I was going to be working on the development team?";
mainText[13] = "Hm, well, you're a little new for that, aren't you? ";
mainText[14] = "Don't want you to end up all confused.";
mainText[15] = "Maybe we can revisit that later.";
mainText[16] = "The job description said they needed a new developer because they \nneeded help with the project...";
mainText[17] = "Oh, okay. I understand...";
mainText[18] = "So, you should head on over to Mike now. He'll show you where \nto go.";
mainText[19] = "Okay! Thank you!";
// BACKGROUND: office lounge
mainText[20] = "Hmm, that was a bit disappointing. I was really excited to utilize my \nprogramming skills...";
mainText[21] = "I have a lot of experience in web dev and I was hoping I could \napply them.";
mainText[22] = "Well, hopefully I'll get to do that on the next project...";
mainText[23] = "...";
// conversation with Mike begins 
// Mike appears
mainText[24] = "Hey, could you get me a coffee?";
mainText[25] = "...What?";
mainText[26] = "Listen, I'm super stressed with this big tech project, so some \ncoffee would really hit the spot right now. Okay?";
mainText[27] = "Uh... are you Mike?";
mainText[28] = "Yeah?";
mainText[29] = "Umm... I'm supposed to be helping you with the project.";
mainText[30] = "What?";
mainText[31] = "I'm the new developer here.";
mainText[32] = "Haha, woah, really? I thought you were our new secretary.";
mainText[33] = "...I mean, I am just documenting the code...";
mainText[34] = "Oh, that seems a little more fit for you.";
mainText[35] = "...Can you still grab me that coffee, though?";
mainText[36] = "Umm... okay... sure...";
mainText[37] = "I walk away as fast as I can, trying to hold back the tears in \nmy eyes.";
// breakdown monologue begins
// BACKGROUND: all black
mainText[38] = "...";
mainText[39] = "I was so excited to work on the project...";
mainText[40] = "Maybe I should just forget about all of this...";
mainText[41] = "Applying to this job was such a stupid idea anyways, why did I \never think I could become some big-shot developer?";
mainText[42] = "I shouldn't have even bothered trying...";
mainText[43] = "I'm really not cut out for this, am I?";
mainText[44] = "...What is even the point of this...";
mainText[45] = "...";
// PART B BEGINS

function preload() {
  font = loadFont('fonts/Abaddon Bold.ttf');
  titleFont = loadFont('fonts/fibberish.ttf');
  girlImage = loadImage('assets/girl.png');
  girlCropped = loadImage('assets/girlCropped.png');
  titleScreenBackground = loadImage("assets/background.png");
  bossOfficeBackground = loadImage("assets/bossOffice.png");
  mikeBackground = loadImage("assets/mikeOffice.png");
  loseScreenBackground = loadImage("assets/loseBackground.png");
  winScreenBackground = loadImage("assets/winBackground.png");
  factScreenBackground = loadImage("assets/factScreen.png");
}

function setup() {
  createCanvas(1000, 600);

  noStroke();

  gameState = 0;

  playButton = createButton("Play");
  helpButton = createButton("Instructions");
  titleScreenButton = createButton("Back to Title Screen");
  continueButton = createButton("Continue...");

  monologue = [0, 1, 2, 3, 4, 5, 6, 7, 16, 20, 21, 22, 23, 37, 38, 39, 40, 41, 42, 43, 44, 45];
  you = [8, 12, 17, 19, 25, 27, 29, 31, 33, 36];
  boss = [9, 10, 11, 13, 14, 15, 18];
  mike = [24, 26, 28, 30, 32, 34, 35];
}

function draw() {
  checkGameState();
}

function checkGameState() {
  if (gameState == 0) {
    titleScreen();
  } else if (gameState == 1) {
    partAIInstructionsScreen();
  } else if (gameState == 2) {
    partA();
  } else if (gameState == 3) {
    partBInstructionsScreen();
  } else if (gameState == 4) {
    partB();
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

function partA() {

}

function partBInstructionsScreen() {

}

function partB() {

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
