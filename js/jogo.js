﻿/**THIS GAME WAS NOT MY IDEA AND MOST OF THE LEVELS ARE NOT THE BRAIN CHILD OF ME, BRAINS... HOWEVER, ALL OF THE CODE IS 100% MINE AND ONLY THE IDEA OF THE GAME WAS TAKEN FROM "THE WORLDS HARDEST GAME" BY SNUBBY LAND!**/

//like my stuff?! subscribe to me at the link below! thank you!
/**https://www.khanacademy.org/computer-programming/suscribe-to-brains-maybe/5676318368333824**/


//PLEASE check out this remake of "Plants Vs. Zombies"! It is my goal to have a single game reach 500 votes... and this one is 30 votes away! hope you like it! 
/**https://www.khanacademy.org/computer-programming/plants-vs-zombies/4702495853**/




//i have wanted to make this for a LONG time, but messing around with sin and cos gave me the key i needed! i kinda want to make a version 2.0........................................................................







var currentGameInput = "menu";
var currentLevel = 0;
var coins = 0;

var w = 'wall';
var W = 'WIN';
var S = 'save';
var C = 'top-left coin';
var c = 'center coin';

var maps = [
    [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,w,w,w,1,1,1,1,1,1,1,1,1,1,w,w,w,1,1,1,1],
        [1,w,2,2,2,w,w,w,w,w,w,w,w,w,w,0,0,W,2,2,1,1],
        [1,w,2,2,2,w,0,0,0,0,0,0,0,0,0,0,w,2,2,2,1,1],
        [1,w,2,2,2,w,0,0,0,0,0,0,0,0,0,0,w,2,2,2,1,1],
        [1,w,2,2,2,w,0,0,0,0,0,0,0,0,0,0,w,2,2,2,1,1],
        [1,w,2,2,2,w,0,0,0,0,0,0,0,0,0,0,w,2,2,2,1,1],
        [1,w,2,2,2,0,0,w,w,w,w,w,w,w,w,w,w,2,2,2,1,1],
        [1,1,w,w,w,w,w,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ],
    [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,w,w,w,w,w,w,w,w,w,w,w,w,1,1,1,1,1],
        [1,1,1,1,w,0,0,0,0,0,0,0,0,0,0,0,0,w,1,1,1,1],
        [1,1,w,w,w,0,0,0,0,0,0,0,0,0,0,0,0,w,w,w,1,1],
        [1,w,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,W,2,2,w,1],
        [1,w,2,2,2,0,0,0,0,0,0,C,0,0,0,0,0,W,2,2,w,1],
        [1,1,w,w,w,0,0,0,0,0,0,0,0,0,0,0,0,w,w,w,1,1],
        [1,1,1,1,w,0,0,0,0,0,0,0,0,0,0,0,0,w,1,1,1,1],
        [1,1,1,1,1,w,w,w,w,w,w,w,w,w,w,w,w,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ],
    [
        [1,1,1,1,1,1,1,1,1,1,w,w,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,w,S,S,w,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,w,S,S,w,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,w,S,S,w,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,w,0,0,0,0,w,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,w,0,0,0,C,0,0,w,1,1,1,1,1,1,1],
        [1,1,1,1,w,1,w,0,0,0,0,0,0,0,0,w,1,1,1,1,1,1],
        [1,1,1,w,2,2,W,0,0,0,0,0,0,0,0,w,1,1,1,1,1,1],
        [1,1,1,w,2,2,W,0,0,0,0,0,0,0,C,w,1,1,1,1,1,1],
        [1,1,1,1,w,w,w,0,0,0,0,0,0,0,0,w,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,w,0,0,0,0,0,0,w,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,w,0,0,C,0,w,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,w,w,w,w,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ],
    [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,1,1,1],
        [1,w,S,S,0,0,0,0,0,0,0,0,0,0,0,0,0,0,S,w,1,1],
        [1,1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,0,w,1,1,1],
        [1,w,S,0,0,0,0,0,0,0,0,0,0,0,0,0,w,0,w,1,1,1],
        [1,1,w,w,0,w,w,w,w,w,w,w,w,w,w,0,w,0,w,1,1,1],
        [1,1,1,w,0,w,0,0,0,0,0,0,0,W,w,0,w,0,w,1,1,1],
        [1,1,1,w,0,w,0,w,0,0,0,0,0,W,w,0,w,0,w,1,1,1],
        [1,1,1,w,0,w,0,w,w,w,w,w,w,w,w,0,w,0,w,1,1,1],
        [1,1,1,w,0,w,0,0,0,0,0,0,0,0,0,0,w,0,w,1,1,1],
        [1,1,1,w,0,w,w,w,w,w,w,w,w,w,w,w,w,0,w,1,1,1],
        [1,1,1,w,0,0,0,0,0,0,0,0,0,0,0,0,0,0,w,1,1,1],
        [1,1,1,1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ],
    [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,1,1],
        [1,w,S,S,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,w,1],
        [1,w,S,S,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,w,1],
        [1,1,w,w,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,w,1],
        [1,1,1,w,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,w,1],
        [1,1,1,1,w,w,w,w,w,w,w,w,w,w,w,w,S,S,S,S,w,1],
        [1,1,1,1,w,w,w,w,w,w,w,w,w,w,w,w,S,S,S,S,w,1],
        [1,1,1,w,c,0,0,0,c,0,0,0,c,0,0,0,c,0,0,0,w,1],
        [1,1,w,w,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,w,1],
        [1,w,W,W,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,w,1],
        [1,w,W,W,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,w,1],
        [1,1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ],
    [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,w,w,w,w,w,w,w,w,w,w,w,w,1,1,1,1,1],
        [1,1,1,1,w,c,0,0,0,0,0,0,0,0,0,0,c,w,1,1,1,1],
        [1,1,1,1,w,0,0,0,0,0,0,0,0,0,0,0,0,w,1,1,1,1],
        [1,1,w,w,w,0,0,0,0,0,0,0,0,0,0,0,0,w,w,w,1,1],
        [1,w,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,W,2,2,w,1],
        [1,w,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,W,2,2,w,1],
        [1,1,w,w,w,0,0,0,0,0,0,0,0,0,0,0,0,w,w,w,1,1],
        [1,1,1,1,w,0,0,0,0,0,0,0,0,0,0,0,0,w,1,1,1,1],
        [1,1,1,1,w,c,0,0,0,0,0,0,0,0,0,0,c,w,1,1,1,1],
        [1,1,1,1,1,w,w,w,w,w,w,w,w,w,w,w,w,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ],
    [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,w,w,w,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,w,2,2,2,w,2,2,2,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,w,2,2,2,w,W,2,2,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,w,0,w,w,w,0,w,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,w,0,0,w,0,0,w,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,w,0,0,w,0,0,w,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,w,w,0,0,w,0,0,w,w,1,1,1,1,1,1,1,1],
        [1,1,1,1,w,0,0,0,0,w,0,0,0,0,w,1,1,1,1,1,1,1],
        [1,1,1,1,w,0,0,w,w,w,w,w,0,0,w,1,1,1,1,1,1,1],
        [1,1,1,1,w,0,0,0,0,0,0,0,0,0,w,1,1,1,1,1,1,1],
        [1,1,1,1,1,w,w,0,0,0,0,0,w,w,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,w,w,w,w,w,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ],
    [
        [1,1,w,w,w,w,w,w,1,w,w,w,w,1,w,w,w,w,w,w,1,1],
        [1,w,c,0,0,0,0,0,w,2,2,2,2,w,0,0,0,0,0,c,w,1],
        [1,w,0,0,0,0,0,0,w,2,2,2,2,w,0,0,0,0,0,0,w,1],
        [1,w,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,w,1],
        [1,w,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,w,1],
        [1,w,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,w,1],
        [1,w,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,w,1],
        [1,w,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,w,1],
        [1,w,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,w,1],
        [1,w,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,w,1],
        [1,w,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,w,1],
        [1,w,0,0,0,0,0,0,w,W,W,W,W,w,0,0,0,0,0,0,w,1],
        [1,w,c,0,0,0,0,0,w,2,2,2,2,w,0,0,0,0,0,c,w,1],
        [1,1,w,w,w,w,w,w,1,w,w,w,w,1,w,w,w,w,w,w,1,1]
    ],
    [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,2,1,1],
        [1,1,1,0,1,1,1,1,1,0,1,2,1,1,1,1,1,1,1,2,1,1],
        [1,1,1,0,1,1,1,1,1,0,1,2,1,1,1,1,1,1,1,2,1,1],
        [1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,2,1,1],
        [1,1,1,1,0,1,0,1,0,1,1,2,1,0,0,1,1,0,1,2,1,1],
        [1,1,1,1,0,1,0,1,0,1,1,2,1,0,1,1,1,0,1,2,1,1],
        [1,1,1,1,1,0,1,0,1,1,1,2,1,0,1,1,1,0,1,1,1,1],
        [1,1,1,1,1,0,1,0,1,1,1,2,1,0,1,1,1,0,1,2,1,1],
        [1,1,1,1,1,0,1,0,1,1,1,2,1,0,1,1,1,0,1,2,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ]
    
];
var s2sObPerLevel = [4,5,0,0,0,5,19,0];
var coinsNeeded = [0,1,3,0,4,4,0,4];

var deaths = 0;

var player = {
    x: 110,
    y: 195,
    w: 15,
    speed: 1.5,
    
    startX: 110,
    startY: 190
};

var firstStartX = [0,115,290,90,90,115,235,300];
var firstStartY = [0,195,100,90,90,195,100,75];


var keys = [];
var keyPressed = function(){
    keys[keyCode]=true;  
};
var keyReleased = function(){
    keys[keyCode]=false;  
};



var rot = 0;

var obImg = createGraphics(30,30,JAVA2D);
if(obImg){
        obImg.background(0,0,0,0);
        obImg.fill(0, 13, 255);
        obImg.strokeWeight(2.5);
        obImg.ellipse(15,15,10,10);
    }
var obstacle = function(x,y){
    image(obImg,x,y);
    if(dist(player.x,player.y,x+15,y+15)<15){
        player.x=player.startX;
        player.y=player.startY;
        deaths++;
        coins=0;
        maps = [
    [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,w,w,w,1,1,1,1,1,1,1,1,1,1,w,w,w,1,1,1,1],
        [1,w,2,2,2,w,w,w,w,w,w,w,w,w,w,0,0,W,2,2,1,1],
        [1,w,2,2,2,w,0,0,0,0,0,0,0,0,0,0,w,2,2,2,1,1],
        [1,w,2,2,2,w,0,0,0,0,0,0,0,0,0,0,w,2,2,2,1,1],
        [1,w,2,2,2,w,0,0,0,0,0,0,0,0,0,0,w,2,2,2,1,1],
        [1,w,2,2,2,w,0,0,0,0,0,0,0,0,0,0,w,2,2,2,1,1],
        [1,w,2,2,2,0,0,w,w,w,w,w,w,w,w,w,w,2,2,2,1,1],
        [1,1,w,w,w,w,w,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ],
    [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,w,w,w,w,w,w,w,w,w,w,w,w,1,1,1,1,1],
        [1,1,1,1,w,0,0,0,0,0,0,0,0,0,0,0,0,w,1,1,1,1],
        [1,1,w,w,w,0,0,0,0,0,0,0,0,0,0,0,0,w,w,w,1,1],
        [1,w,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,W,2,2,w,1],
        [1,w,2,2,2,0,0,0,0,0,0,C,0,0,0,0,0,W,2,2,w,1],
        [1,1,w,w,w,0,0,0,0,0,0,0,0,0,0,0,0,w,w,w,1,1],
        [1,1,1,1,w,0,0,0,0,0,0,0,0,0,0,0,0,w,1,1,1,1],
        [1,1,1,1,1,w,w,w,w,w,w,w,w,w,w,w,w,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ],
    [
        [1,1,1,1,1,1,1,1,1,1,w,w,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,w,S,S,w,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,w,S,S,w,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,w,S,S,w,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,w,0,0,0,0,w,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,w,0,0,0,C,0,0,w,1,1,1,1,1,1,1],
        [1,1,1,1,w,1,w,0,0,0,0,0,0,0,0,w,1,1,1,1,1,1],
        [1,1,1,w,2,2,W,0,0,0,0,0,0,0,0,w,1,1,1,1,1,1],
        [1,1,1,w,2,2,W,0,0,0,0,0,0,0,C,w,1,1,1,1,1,1],
        [1,1,1,1,w,w,w,0,0,0,0,0,0,0,0,w,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,w,0,0,0,0,0,0,w,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,w,0,0,C,0,w,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,w,w,w,w,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ],
    [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,1,1,1],
        [1,w,S,S,0,0,0,0,0,0,0,0,0,0,0,0,0,0,S,w,1,1],
        [1,1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,0,w,1,1,1],
        [1,w,S,0,0,0,0,0,0,0,0,0,0,0,0,0,w,0,w,1,1,1],
        [1,1,w,w,0,w,w,w,w,w,w,w,w,w,w,0,w,0,w,1,1,1],
        [1,1,1,w,0,w,0,0,0,0,0,0,0,W,w,0,w,0,w,1,1,1],
        [1,1,1,w,0,w,0,w,0,0,0,0,0,W,w,0,w,0,w,1,1,1],
        [1,1,1,w,0,w,0,w,w,w,w,w,w,w,w,0,w,0,w,1,1,1],
        [1,1,1,w,0,w,0,0,0,0,0,0,0,0,0,0,w,0,w,1,1,1],
        [1,1,1,w,0,w,w,w,w,w,w,w,w,w,w,w,w,0,w,1,1,1],
        [1,1,1,w,0,0,0,0,0,0,0,0,0,0,0,0,0,0,w,1,1,1],
        [1,1,1,1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ],
    [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,1,1],
        [1,w,S,S,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,w,1],
        [1,w,S,S,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,w,1],
        [1,1,w,w,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,w,1],
        [1,1,1,w,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,w,1],
        [1,1,1,1,w,w,w,w,w,w,w,w,w,w,w,w,S,S,S,S,w,1],
        [1,1,1,1,w,w,w,w,w,w,w,w,w,w,w,w,S,S,S,S,w,1],
        [1,1,1,w,c,0,0,0,c,0,0,0,c,0,0,0,c,0,0,0,w,1],
        [1,1,w,w,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,w,1],
        [1,w,W,W,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,w,1],
        [1,w,W,W,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,w,1],
        [1,1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ],
    [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,w,w,w,w,w,w,w,w,w,w,w,w,1,1,1,1,1],
        [1,1,1,1,w,c,0,0,0,0,0,0,0,0,0,0,c,w,1,1,1,1],
        [1,1,1,1,w,0,0,0,0,0,0,0,0,0,0,0,0,w,1,1,1,1],
        [1,1,w,w,w,0,0,0,0,0,0,0,0,0,0,0,0,w,w,w,1,1],
        [1,w,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,W,2,2,w,1],
        [1,w,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,W,2,2,w,1],
        [1,1,w,w,w,0,0,0,0,0,0,0,0,0,0,0,0,w,w,w,1,1],
        [1,1,1,1,w,0,0,0,0,0,0,0,0,0,0,0,0,w,1,1,1,1],
        [1,1,1,1,w,c,0,0,0,0,0,0,0,0,0,0,c,w,1,1,1,1],
        [1,1,1,1,1,w,w,w,w,w,w,w,w,w,w,w,w,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ],
    [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,w,w,w,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,w,2,2,2,w,2,2,2,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,w,2,2,2,w,W,2,2,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,w,0,w,w,w,0,w,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,w,0,0,w,0,0,w,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,w,0,0,w,0,0,w,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,w,w,0,0,w,0,0,w,w,1,1,1,1,1,1,1,1],
        [1,1,1,1,w,0,0,0,0,w,0,0,0,0,w,1,1,1,1,1,1,1],
        [1,1,1,1,w,0,0,w,w,w,w,w,0,0,w,1,1,1,1,1,1,1],
        [1,1,1,1,w,0,0,0,0,0,0,0,0,0,w,1,1,1,1,1,1,1],
        [1,1,1,1,1,w,w,0,0,0,0,0,w,w,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,w,w,w,w,w,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ],
    [
        [1,1,w,w,w,w,w,w,1,w,w,w,w,1,w,w,w,w,w,w,1,1],
        [1,w,c,0,0,0,0,0,w,2,2,2,2,w,0,0,0,0,0,c,w,1],
        [1,w,0,0,0,0,0,0,w,2,2,2,2,w,0,0,0,0,0,0,w,1],
        [1,w,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,w,1],
        [1,w,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,w,1],
        [1,w,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,w,1],
        [1,w,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,w,1],
        [1,w,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,w,1],
        [1,w,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,w,1],
        [1,w,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,w,1],
        [1,w,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,w,1],
        [1,w,0,0,0,0,0,0,w,W,W,W,W,w,0,0,0,0,0,0,w,1],
        [1,w,c,0,0,0,0,0,w,2,2,2,2,w,0,0,0,0,0,c,w,1],
        [1,1,w,w,w,w,w,w,1,w,w,w,w,1,w,w,w,w,w,w,1,1]
    ],
    [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,2,1,1],
        [1,1,1,0,1,1,1,1,1,0,1,2,1,1,1,1,1,1,1,2,1,1],
        [1,1,1,0,1,1,1,1,1,0,1,2,1,1,1,1,1,1,1,2,1,1],
        [1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,2,1,1],
        [1,1,1,1,0,1,0,1,0,1,1,2,1,0,0,1,1,0,1,2,1,1],
        [1,1,1,1,0,1,0,1,0,1,1,2,1,0,1,1,1,0,1,2,1,1],
        [1,1,1,1,1,0,1,0,1,1,1,2,1,0,1,1,1,0,1,1,1,1],
        [1,1,1,1,1,0,1,0,1,1,1,2,1,0,1,1,1,0,1,2,1,1],
        [1,1,1,1,1,0,1,0,1,1,1,2,1,0,1,1,1,0,1,2,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ]
    
];
        
    }
};

var coinImg = createGraphics(30,30,JAVA2D);
if(coinImg){
    coinImg.background(0,0,0,0);
    coinImg.fill(255, 213, 0);
    coinImg.strokeWeight(2.5);
    coinImg.ellipse(15,15,10,10);
}
var coin = function(x,y){
    image(coinImg,x,y);
};

var spinny = function(x,y,size,rotation,rotSpeed,dbtw){
    
        
        for(var i = -size*dbtw; i<(size+1)*dbtw; i+=dbtw){
            obstacle(x+cos(rotation+(rot*rotSpeed))*i,y+sin(rotation+(rot*rotSpeed))*i);
            obstacle(x+cos(rotation+(rot*rotSpeed)+90)*i,y+sin(rotation+(rot*rotSpeed)+90)*i);
        }
    //point(200,200);
    
};

var backgroundImg = createGraphics(450,300,JAVA2D);
if(backgroundImg){
    backgroundImg.background(204, 205, 217);
    for(var i = 0; i<500; i+=50){
        for(var q = 0; q<300; q+=50){
            backgroundImg.fill(219, 219, 219);
            backgroundImg.noStroke();
            backgroundImg.rect(i,q,25,25);
            backgroundImg.rect(i+25,q+25,25,25);
        }
    }
}


var wall = function(x,y,w,h){
    
    if(player.x-player.w/2<x+w&&player.x>x&&player.y+player.w/2>y+2&&player.y-player.w/2<y+h-2){
        player.x=x+w+player.w/2;   
    }
    if(player.x+player.w/2+2>x&&player.x<x+w&&player.y+player.w/2>y+2&&player.y-player.w/2<y+h-2){
        player.x=x-player.w/2-2;   
    }
    
    if(player.y-player.w/2<y+h+1&&player.y>y&&player.x+player.w/2>x+2&&player.x-player.w/2<x+w-2){
        player.y=y+h+player.w/2+1;   
    }
    if(player.y+player.w/2+2>y&&player.y<y+h&&player.x+player.w/2>x+2&&player.x-player.w/2<x+w-2){
        player.y=y-player.w/2-2;   
    }
    
};



var SAVE = function(x,y,w,h){
    
    if(player.x+player.w/2>x&&player.x-player.w/2<x+w&&player.y+player.w/2>y&&player.y-player.w/2<y+h){
        player.startX=x+w-player.w/2-6;
        player.startY=y+h-player.w/2-6;
    }
    
    
};

var sideToSide = function(x,y,x1,x2,lr,speed){
    this.x = x;
    this.y = y; 
    this.x1 = x1;
    this.x2 = x2;
    this.lr = lr;
    this.speed=speed;
};
sideToSide.prototype.draw = function(){
    //obstacle(this.x-15,this.y-15);
};
sideToSide.prototype.moveRight = function(){
    this.x+=this.speed;
    obstacle(this.x-15,this.y-15);
    if(this.x>this.x2){
        this.lr="left";
    }
};
sideToSide.prototype.moveLeft = function(){
    this.x+=-this.speed;
    obstacle(this.x-15,this.y-15);
    if(this.x<this.x1){
        this.lr="right";
    }
};
sideToSide.prototype.moveDown = function(){
    this.y+=this.speed;
    obstacle(this.x-15,this.y-15);
    if(this.y>this.x2){
        this.lr="up";
    }
};
sideToSide.prototype.moveUp = function(){
    this.y+=-this.speed;
    obstacle(this.x-15,this.y-15);
    if(this.y<this.x1){
        this.lr="down";
    }
};
sideToSide.prototype.switching = function(variable,num){
    if(this.lr==="left"){
        variable[num].moveLeft();   
    }
    if(this.lr==="right"){
        variable[num].moveRight();   
    }
    if(this.lr==="up"){
        variable[num].moveUp();   
    }
    if(this.lr==="down"){
        variable[num].moveDown();   
    }
};
var news2s = [];
var s2sOb = function(x,y,l,r,lr,speed){
    news2s.push(new sideToSide(x,y,l,r,lr,speed));
};

var portal = function(x,y,w,h){
    
    if(player.x+player.w/2>x&&player.x-player.w/2<x+w&&player.y+player.w/2>y&&player.y-player.w/2<y+h&&coins===coinsNeeded[currentLevel]){
        news2s=[];
        currentLevel++;
        player.x=firstStartX[currentLevel];
        player.y=firstStartY[currentLevel];
        player.startX=firstStartX[currentLevel];
        player.startY=firstStartY[currentLevel];
        coins=0;
    }
    
    
};

var draw = function() {
    textAlign(CENTER,CENTER);
    if(currentGameInput === "game"){
    background(0, 0, 0);
    image(backgroundImg,75,50);
    for(var y = 0; y<maps[currentLevel].length; y++){
        for(var x = 0; x<maps[currentLevel][y].length; x++){
            switch(maps[currentLevel][y][x]){
                case 0: 
                    noFill();
                break;
                case 1: 
                    fill(168, 167, 219);
                    noStroke();
                    rect(x*25+25,y*25+25,25,25);
                break;
                case 2: 
                    fill(168, 224, 181); 
                    noStroke();
                    rect(x*25+25,y*25+25,25,25);
                break;
                case W: 
                    fill(168, 224, 181); 
                    noStroke();
                    rect(x*25+25,y*25+25,25,25);
                    portal(x*25+25,y*25+25,25,25);
                break;
                case w: 
                    fill(168, 167, 219);
                    noStroke();
                    rect(x*25+25,y*25+25,25,25);
                    wall(x*25+25,y*25+25,25,25);
                break;
                case S: 
                    fill(167, 217, 167); 
                    noStroke();
                    rect(x*25+25,y*25+25,25,25);
                    SAVE(x*25+25,y*25+25,25,25);
                break;
                case C:
                    coin(x*25+10,y*25+10);   
                break;
                case c:
                    coin(x*25+22,y*25+22);   
                break;
            }
            if(dist(player.x,player.y,x*25+25,y*25+25)<15&&maps[currentLevel][y][x]===C){
                maps[currentLevel][y][x]=0;
                coins++;
            }
            if(dist(player.x,player.y,x*25+37,y*25+37)<15&&maps[currentLevel][y][x]===c){
                maps[currentLevel][y][x]=0;
                coins++;
            }
        }
    }
    
    
    //background(168, 167, 219);
    stroke(0, 0, 0);
    fill(255, 0, 0);
    strokeWeight(3);
    rect(player.x-player.w/2,player.y-player.w/2,player.w,player.w);
    //point(player.x,player.y);
    if(keys[87]||keys[UP]){player.y+=-player.speed;}
    if(keys[83]||keys[DOWN]){player.y+=player.speed;}
    if(keys[65]||keys[LEFT]){player.x+=-player.speed;}
    if(keys[68]||keys[RIGHT]){player.x+=player.speed;}
    
    fill(255, 255, 255);
    textSize(20);
    text("Deaths: "+deaths,80,15);
    text((currentLevel+1)+"/"+maps.length,300,15);
    
    if(currentLevel===2){
        spinny(285,210,5,90,1.8,18);
    }
    if(currentLevel===3){
        spinny(285,185,4,90,1,49);
    }
    if(currentLevel===4){
        for(var x = 160; x<550; x+=100){
            spinny(x,110,2,90,2.2,21);
            spinny(x,260,2,90,2.2,21);
        }
    }
    if(currentLevel===7){
        spinny(136,112,4,90,1.8,17);
        spinny(436,112,4,90,1.8,17);
        spinny(136,112+150,4,90,1.8,17);
        spinny(436,112+150,4,90,1.8,17);
        spinny(285,185,1,90,0.5,82);
        spinny(285,185,1,90,0.5,82*3);
    }
    
    if(news2s.length<s2sObPerLevel[currentLevel]){
        if(currentLevel === 0){
            s2sOb(300,187,190,410,"right",3);
            s2sOb(300,237,190,410,"right",3);
            s2sOb(300,212,190,410,"left",3);
            s2sOb(300,162,190,410,"left",3);
        }
        if(currentLevel===1){
            for(var q = 163; q<430; q+=50){
                s2sOb(q,200,135,265,"down",2);   
                s2sOb(q+25,200,135,265,"up",2);   
            }
        }
        if(currentLevel===5){
            for(var q = 163; q<430; q+=50){
                s2sOb(q,200,110,285,"down",5);   
                s2sOb(q+25,200,110,285,"up",5);   
            }
        }
        if(currentLevel===6){
            for(var i = 162; i<250; i+=50){
                s2sOb(222,i,208,238,"right",1);   
                s2sOb(222,i+25,208,238,"left",1);   
                
                s2sOb(222+75,i,283,285+28,"left",1);   
                s2sOb(222+75,i+25,283,285+28,"right",1); 
                
                s2sOb(222+130,i+75,338,340+28,"right",1); 
                s2sOb(100+72,i+75,156,158+28,"left",1);
            }
            for(var i = 212; i<300; i+=50){
                s2sOb(i,300,256+28,258+56,"up",1);
                s2sOb(i+25,300,256+28,258+56,"down",1);
            }
            s2sOb(312,300,256+28,258+56,"up",1);
            s2sOb(222+130,262,338,340+28,"left",1);
            s2sOb(100+72,262,156,158+28,"right",1);
        }
    }
    
    for(var i = 0; i<news2s.length; i++){
        news2s[i].draw();
        news2s[i].switching(news2s,i);
    }
    
    
    rot+=1;
    }
    
    if(currentGameInput ==="menu"){
        background(168, 167, 219);
        fill(0, 0, 0);
        textSize(30);
        text("The World's...",165,20);
        textSize(80);
        text("Hardest Game",300,70);
        fill(255, 0, 0);
        textSize(80);
        text("Hardest Game",304,74);
        
        fill(0, 0, 0);
        textSize(30);
        text("version 1.0",455,120);
        
        fill(255, 255, 255);
        text("This game and code is owned by Brains",300,380);
        
        fill(168, 224, 181);
        rect(200,200,200,100,5);
        if(mouseX>200&&mouseX<400&&mouseY>200&&mouseY<300){
            fill(0, 0, 0,40);
            rect(200,200,200,100,5);
        }
        
        mousePressed = function(){
            if(mouseX>200&&mouseX<400&&mouseY>200&&mouseY<300){
                currentGameInput = "instructions";   
            }
        };
        
        fill(0, 0, 0);
        textSize(60);
        text("Play!",300,250);
        
        
    }
    
    if(currentGameInput === "instructions"){
        background(54, 54, 54);
        fill(202, 136, 235);
        textSize(30);
        text("You are the red square.\nAvoid the blue circles and collect the\nyellow circles. Once you have collected\nall of the yellow circles, move to the\ngreen beacon to complete the level.  Some\nlevels consist of more than one beacon;\nthe intermediate beacons act as \ncheck points. Play through the 7 levels!\n\nClick to play...",300,200);
        mousePressed = function(){
            currentGameInput = "game";  
        };
        
    }
    
};













