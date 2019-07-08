/*
画面描画の関数
*/


function draw(){
    switch(scene){
        case "game":
    if(me.move){       //「間合い」で移動するときのモーション
        if(back.moveFrame>0){
            let bgx=DrawScreenX(me.x+fixedX*(fps-back.moveFrame)/fps);
            let bgy=DrawScreenY(0);
            let tmp=bg.get(bgx,bgy,ScreenX,ScreenY);
            // console.log(bgx+" "+bgy);       //デバッグ出力
            image(tmp,0,0,ScreenX,ScreenY);
            back.moveFrame--;
        }
        if(back.moveFrame==0){       //間合いアニメーション終了
            me.move=false;
            isMaai=false;
            boolCommand=true;
            me.x+=fixedX;
            me.y+=fixedY;
            // console.log(me.x+" "+me.y);       //デバッグ出力
        }
    }
    else{       //アニメーションがないときは普通に描写
        let bgx=DrawScreenX(me.x);
        let bgy=DrawScreenY(0);
        let tmp=bg.get(bgx,bgy,ScreenX,ScreenY);
        image(tmp,0,0,ScreenX,ScreenY);
        drawenemies();//敵表示
    }
    image(jiki,512/2-32,512/2-32);//自機表示
    drawCommand();//コマンドUI
    
    textSize(32);
    textFont('HGS行書体');
    textAlign(CENTER);
    text('残り場数:' + turn, 400, ScreenY - 16);
            if(turn==0){
                scene="end"
            }
            break;
        case "end":
            let bgx=DrawScreenX(me.x);
            let bgy=DrawScreenY(0);
            let tmp=bg.get(bgx,bgy,ScreenX,ScreenY);
            image(tmp,0,0,ScreenX,ScreenY);
            textSize(75);
            textFont('HGS行書体');
            textAlign(CENTER);
            text("終",256,256);
            text("得点:"+score,256,330);
            break;
    }
}

var DrawScreenX=(coordx)=>{             //背景の画像のｘ座標をどのくらい動かすかを計算する関数
    var center=ScreenX*1.5;//背景を動かすには描写の3倍の領域がいる（多分もっとかしこい方法はあると思うけどわからない）
    if(coordx>=0){
        coordx%=ScreenX;
        return center+coordx;
    }
    else{
        coordx=abs(coordx);
        coordx%=ScreenX;
        return center-coordx;
    }

}

var DrawScreenY=(coordy)=>{     //背景の画像のｙ座標をどのくらい動かすかを計算する関数
    var center=ScreenY*1.5;//背景を動かすには描写の3倍の領域がいる（多分もっとかしこい方法はあると思うけどわからない）
    if(coordy>=0){
        coordy%=ScreenY;
        return center+coordy;
    }
    else{
        coordy=abs(coordy);
        coordy%=ScreenY;
        return center-coordy;
    }

}


function drawenemies(){
    for(let i=0;i<enemies.length;i++){
        image(teki[enemies[i].type],enemies[i].x-me.x,enemies[i].y);
    }
}

//背景画像は、描写スクリーンの3倍（辺あたり）必要で、
//背景の1単位は描写スクリーンと同じで
//その4枚は
//(x/2,y/2)(3x/2,y/2)(x/2,3y/2)(3x/2,3y/2)にないといけない


function drawCommand(){
    if(boolCommand){
        for(let i = 0;i < 3;i++){
            image(button[i],UICercle2[i].x,UICercle2[i].y);
        }
    }else{
        tint(UICercle.tint);
        for(let i = 0;i < 3;i++){
            image(button[i],UICercle2[i].x,UICercle2[i].y);
        }
        noTint();
    }
}

