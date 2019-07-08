/*
マウスでクリックしたときの関数
*/
// import isMaai from "./move"

function mouseClicked(){
    //背景
    if(isMaai&&!me.move){
        back.cx=mouseX;
        back.cy=mouseY;
        if(IsInScreen(back.cx,back.cy)){
            fixedX=back.cx-ScreenX/2;
            fixedY=back.cy-ScreenY/2;
            me.move=true;
            back.moveFrame=fps;
        }
    }
    //コマンド受付
    if(boolCommand){
        let mouse = {
            x:mouseX,
            y:mouseY,
        }
        let cercle = new Array(3);
        for(let i = 0;i < 3;i++){
            cercle[i] = {
                x:UICercle2[i].x + 28,
                y:UICercle2[i].y + 28,
            }
        }
        if(distance(mouse,cercle[0]) < UICercle.r){
            console.log("ボタン1");
            boolCommand = false;
            moveIai();
            boolCommand = !false;
            // me.move=true;
            // fixedX=0;
            // fixedY=0;
            // back.moveFrame=20;
            turn--;
        }
        if(distance(mouse,cercle[1]) < UICercle.r){
            console.log("ボタン2");
            boolCommand = false;
            moveKiai();
            me.move=true;
            fixedX=0;
            fixedY=0;
            back.moveFrame=20;
            turn--;
        }
        if(distance(mouse,cercle[2]) < UICercle.r){
            console.log("ボタン3");
            boolCommand = false;
            moveMaai();
            turn--;
        }
    }
}

var IsInScreen=(x,y)=>{
    if(x>=0 && x<=ScreenX){
        if(y>=0 && y<=ScreenY){
            return true;
        }
    }
    return false;
}