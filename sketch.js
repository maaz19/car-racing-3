var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var car1im, car2im, car3im, car4im, trackim, groundim;

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function preload(){

  car1im = loadImage("images/car1.png");
  car2im = loadImage("images/car2.png");
  car3im = loadImage("images/car3.png");
  car4im = loadImage("images/car4.png");

  groundim = loadImage("images/ground.png");
  trackim = loadImage("images/track.jpg");

}

function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
