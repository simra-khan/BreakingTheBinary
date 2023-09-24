let gameState = 0;
let counter = 0;
let person = "Monologue";
let showBox = false;
let bg;

let sprite;
let mikeSprite;
let bossSprite;
let showSprite = false;

let mainText = [];

// Define an array to store flower images
let flowerImages = [];
// Define an array to store drop images
let dropImages = [];

// Additional constructors
function Drop(x, y, img) {
  this.x = x;
  this.y = y;
  this.r = 8;
  this.toDelete = false;
  this.img = img; // Store the image for the drop

  this.show = function () {
    noStroke();
    fill(150, 0, 200);
    image(this.img, this.x, this.y, this.r * 2, this.r * 2);
  }

  this.evaporate = function () {
    this.toDelete = true;
  }

  this.hits = function (flower) {
    var d = dist(this.x, this.y, flower.x, flower.y);
    if (d < this.r + flower.r) {
      return true;
    } else {
      return false;
    }
  }

  this.move = function () {
    this.y = this.y - 7;
  }
  // ... (code for Drop constructor)
}

function Flower(x, y, img) {
  this.x = x;
  this.y = y;
  this.img = img;
  this.r = 30;
  this.toDelete = false;

  this.xdir = 1;

  this.shiftDown = function () {
    this.xdir *= -1;
    this.y += this.r;
  }

  this.evaporate = function () {
    this.toDelete = true;
  }

  this.move = function () {
    this.x = this.x + this.xdir;

  }
  this.show = function () {
    noStroke();
    fill(255, 0, 200);
    image(this.img, this.x, this.y, this.r * 2, this.r * 2);
  }
  // ... (code for Flower constructor)
}

function Ship() {
  this.x = width / 2;
  this.xdir = 0;

  this.show = function () {
    fill(255);
    rectMode(CENTER);
    image(girlImage, this.x, height - 110, 60, 120);
  }

  this.setDir = function (dir) {
    this.xdir = dir;
  }
  this.move = function (dir) {
    if (this.x < 0) {
      this.x = 0;
    } else if (this.x > 943) {
      this.x = 943;
    } else {
      this.x += this.xdir * 5;
    }
  }
  // ... (code for Ship constructor)
}

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

var ship;
var flowers = [];
var drops = [];

function preload() {
  // load fonts
  font = loadFont('fonts/Abaddon Bold.ttf');
  titleFont = loadFont('fonts/fibberish.ttf');

  // load images
  girlImage = loadImage('assets/girl.png');
  girlCropped = loadImage('assets/girlCropped.png');
  titleScreenBackground = loadImage("assets/background.png");
  bossOfficeBackground = loadImage("assets/bossOffice.png");
  mikeBackground = loadImage("assets/mikeOffice.png");
  loseScreenBackground = loadImage("assets/loseBackground.png");
  winScreenBackground = loadImage("assets/winBackground.png");
  factScreenBackground = loadImage("assets/factScreen.png");

  // load sprites
  bossSprite = loadImage('assets/boss.png');
  mikeSprite = loadImage('assets/mike.png');
  sprite = bossSprite;

  for (var i = 1; i <= 12; i++) {
    var imageName = "assets/micro" + i + ".png";
    flowerImages.push(loadImage(imageName));
  }

  // Load the two images into the dropImages array
  dropImages.push(loadImage('assets/1.png'));
  dropImages.push(loadImage('assets/2.png'));

  // Load the background image for Part B
  backgroundImage = loadImage('assets/bgB.png');
}

function setup() {
  createCanvas(1000, 600);

  noStroke();

  //gameState = 0;
  counter = 0;
  bg = titleScreenBackground;

  playButton = createButton("Play");
  helpButton = createButton("Instructions");
  titleScreenButton = createButton("Back to Title Screen");
  continueButton = createButton("Continue...");

  monologue = [0, 1, 2, 3, 4, 5, 6, 7, 16, 20, 21, 22, 23, 37, 38, 39, 40, 41, 42, 43, 44, 45];
  you = [8, 12, 17, 19, 25, 27, 29, 31, 33, 36];
  boss = [9, 10, 11, 13, 14, 15, 18];
  mike = [24, 26, 28, 30, 32, 34, 35];

  ship = new Ship();

  for (var row = 0; row < 3; row++) {
    for (var col = 0; col < 11; col++) {
      // Generate flowers for Part B
      // ...

      // Create a new Flower object for Part B
      // ...
      var flowerX = col * 80 + 80;
      var flowerY = row * 80 + 10;

      // Generate a random index to select an image from the array
      var randomIndex = floor(random(flowerImages.length));

      // Create a new Flower object with the selected image
      flowers.push(new Flower(flowerX, flowerY, flowerImages[randomIndex]));
    }
  }
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
  gameState = 0;

  bg = titleScreenBackground;
  background(bg);

  textFont(titleFont);

  playButton.show();
  helpButton.show();
  titleScreenButton.hide();
  continueButton.hide();

  playButton.position(415, 350);
  helpButton.position(370, 450);

  playButton.mouseClicked(partA);
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
  gameState = 1;

  bg = titleScreenBackground;
  background(bg);

  textFont(titleFont);

  noStroke();
  fill(255);
  textSize(150);
  text("instructions", 150, 200);

  textSize(30);
  text("Press the spacebar to move through the text.", 200, 300);

  playButton.hide();
  helpButton.hide();
  titleScreenButton.show();

  titleScreenButton.position(300, 350);

  titleScreenButton.mouseClicked(titleScreen);
}

function partA() {
  gameState = 2;

  if (counter == 0) {
    bg = mikeBackground;
  }
  background(bg);

  noStroke();

  playButton.hide();
  helpButton.hide();

  // text boxes colour
  fill(57, 0, 64, 200);

  // main text box
  rect(0, 400, 1000, 200);

  // sprite
  if (showSprite) {
    image(sprite, 350, 100, 300, 300);
  }

  // character name box (doesn't show when protagonist is monologuing)
  if (showBox) {

    //character name rectangle
    fill(115, 0, 113, 200);
    rect(50, 350, 200, 50);

    // character name text
    // character name box font colour
    fill(255, 255, 255)
    textFont(titleFont);
    textSize(40);
    text(person, 115, 385);
  }

  // main font colour
  fill(255, 255, 255);
  // main text 
  textFont(font);
  textSize(30);
  text(mainText[counter], 50, 465);

  if (counter > 45) {
    gameState = 4;
    partB();
  }

}

function partBInstructionsScreen() {
  gameState = 3;

  bg = titleScreenBackground;
  background(bg);

}

function partB() {
  gameState = 4;

  // Code for Part B
  // ...

  // Draw the background image for Part B
  image(backgroundImage, 0, 0, width, height);

  ship.show();
  ship.move();
  for (var i = 0; i < drops.length; i++) {
    drops[i].show();
    drops[i].move();
    for (var j = 0; j < flowers.length; j++) {
      if (drops[i].hits(flowers[j])) {
        drops[i].evaporate();
        flowers[j].evaporate();
      }
    }
  }

  var edge = false;

  for (var i = 0; i < flowers.length; i++) {
    flowers[i].show();
    flowers[i].move();
    if (flowers[i].x + 60 > width || flowers[i].x < 0) {
      edge = true;
    }
    // Check if a flower's too low (LOSE CONDITION)
    if (flowers[i].y > height - 110) {
      gameState = 5;
      loseScreen();
    }
  }

  // Check if there are no more flowers left (WIN CONDITION)
  if (flowers.length === 0) {
    gameState = 6;
    winScreen();
  }

  if (edge) {
    for (var i = 0; i < flowers.length; i++) {
      flowers[i].shiftDown();
    }
  }
  for (var i = drops.length - 1; i >= 0; i--) {
    if (drops[i].toDelete) {
      drops.splice(i, 1);
    }
  }
  for (var i = flowers.length - 1; i >= 0; i--) {
    if (flowers[i].toDelete) {
      flowers.splice(i, 1);
    }
  }
}

function loseScreen() {
  gameState = 5;

  bg = loseScreenBackground;
  background(bg);

  rectMode(CORNER);

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
  gameState = 6;

  bg = winScreenBackground;
  background(bg);

  rectMode(CORNER);

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
  gameState = 7;

  bg = factScreenBackground;
  background(bg);

  continueButton.hide();
  titleScreenButton.show();
  titleScreenButton.position(550, 475);
  titleScreenButton.mouseClicked(resetVariables);

  noStroke();
  fill(255);
  textFont(titleFont);
  textSize(40);
  text("Women in tech face a range of challenges, including \ngender bias, stereotyping, lack of representation, \nand unequal pay.", 75, 175);
  text("50% of women said they had experienced gender \ndiscrimination at work [in tech], while \nonly 19% of men said the same.", 75, 350);
  text("Something needs to change.", 75, 525);

}

function resetVariables() {
  gameState = 0;
  counter = 0;
  person = "Monologue";
  showBox = false;
  showSprite = false;

  ship = new Ship();

  for (var row = 0; row < 3; row++) {
    for (var col = 0; col < 11; col++) {
      // Generate flowers for Part B
      // ...

      // Create a new Flower object for Part B
      // ...
      var flowerX = col * 80 + 80;
      var flowerY = row * 80 + 10;

      // Generate a random index to select an image from the array
      var randomIndex = floor(random(flowerImages.length));

      // Create a new Flower object with the selected image
      flowers.push(new Flower(flowerX, flowerY, flowerImages[randomIndex]));
    }
  }
}

function keyReleased() {
  if (key != ' ') {
    ship.setDir(0);
  }
}

function keyPressed() {
  // On space press
  if (gameState == 2) {
    if (keyCode === 32) {
      counter++;

      for (let i = 0; i < mainText.length; i++) {
        // change name text
        if (counter === monologue[i]) {
          person = "Monologue";
          showBox = false;
        }
        else if (counter === you[i]) {
          person = "You";
          showBox = true;
          showSprite = true;
        }
        else if (counter === boss[i]) {
          person = "Boss";
          showBox = true;
          showSprite = true;
        }
        else if (counter === mike[i]) {
          person = "Mike";
          showBox = true;
          showSprite = true;
          sprite = mikeSprite;
        }
        // change backgrounds
        if (counter == 8) {
          bg = bossOfficeBackground;
          sprite = bossSprite;
          showSprite = true;
        }
        else if (counter === 20) {
          bg = mikeBackground;
          showSprite = false;
        }
        else if (counter === 37) {
          showSprite = false;
        }
        else if (counter === 38) {
          bg = (0, 0, 0);
        }
      }
    }
  }

  if (key === ' ') {
    var randomIndex = floor(random(dropImages.length));
    var drop = new Drop(ship.x, height - 70, dropImages[randomIndex]); // Pass the selected image to the Drop constructor
    drops.push(drop);
  }
  if (keyCode === RIGHT_ARROW) {
    ship.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.setDir(-1);
  }
}
