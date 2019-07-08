/*
Setup関係
最初に起動
*/

let bg;
let jiki;
let teki = new Array(5);
let button = new Array(3);
const NUMBER_OF_ENEMIES = 50;
let enemies = new Array(NUMBER_OF_ENEMIES);

let score = 0;


let back = {
    x: 0,
    y: 0,
    
    cx: 0,
    cy: 0,
    moveFrame: 0
}

let me = {
    x: 0,
    y: 0,
    move: false,
    attack:10,
    kiaiTurn:0
}

let turn = 20;

let ScreenX = 512;
let ScreenY = 512 + 64;       //描写するスクリーンの大きさ（正方形じゃないとバグるので正方形でお願いします）
let fps = 30;
let fixedX, fixedY;

let UICercle = {
    x:4,
    y:ScreenY - 60,
    r:30,//半径
    dis:64,//円同士の距離
    tint: [255, 255, 255, 50],
}

let UICercle2 = [
    {//コマンドUIの円1
        x: UICercle.x,
        y: UICercle.y,
    }, {//コマンドUIの円2
        x: UICercle.x + UICercle.dis,
        y: UICercle.y,
    }, {//コマンドUIの円3
        x: UICercle.x + UICercle.dis * 2,
        y: UICercle.y,
    }
]

let boolCommand = true;//コマンド入力を受け付けているかどうか

function setup() {
    frameRate(fps);
    createCanvas(ScreenX, ScreenY);
    bg = loadImage("img/bg.png");     //背景
    jiki = loadImage("img/jiki.png");     //自機
    teki = loadImage("img/teki.png");     //てき
    scene="game"
    button[0] = loadImage("img/button1.png");//ボタン1
    button[1] = loadImage("img/button2.png");//ボタン2
    button[2] = loadImage("img/button3.png");//ボタン3
    teki[0] = loadImage("img/daifuku.png");     //てき
    teki[1] = loadImage("img/dango.png");     //てき
    teki[2] = loadImage("img/mamedaifuku.png");     //てき
    teki[3] = loadImage("img/blue.png");     //てき
    teki[4] = loadImage("img/red.png");     //てき
    enemysetup();
}

function enemysetup(){
    for(var i = 0;i<NUMBER_OF_ENEMIES;i++){
        let _t = floor(Math.random() * 5);
        let _hp = [10,20,30,40,50];
        let _score = [100,200,300,400,500];
        enemies[i]={
            type:_t,
            x:Math.random() * 6000 - 3000,
            y:Math.random()*50 + 200,
            hp:_hp[_t],
            score:_score[_t],
        };
    }
}


//bonc3
//mazrean
//maz2
//敵関数実装
//oisu---------------
