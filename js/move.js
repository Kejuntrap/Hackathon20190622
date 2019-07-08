
/*
コマンドでキャラを動かす関数
*/
// import {me,enemies} from "./prog";
const attackableRange=256;
const upRate=2;
const kiaiTurnNum=3;
const moveDistance=256;
let kiaiTurn=0;
let isMaai=false;

//居合
function moveIai(){
    if(kiaiTurn!=0){
        me.attack*=upRate;
        let i=-1;
        enemies.forEach((enemy)=>{
            i++
            let _enemy = {
                x:enemy.x - 256,
                y:enemy.y - 256
            }
            if(distance(_enemy,me)<=attackableRange){
                enemy.hp-=me.attack;
                //alert(enemy.hp);
                if(enemy.hp <= 0){
                    score+=enemies[i].score;
                    enemies.splice(i,1);
                }
            }
            
        })
        me.attack/=2;
        kiaiTurn-=1;
    }else{
        let i=-1;
        let index=-1;
        let minDistance=attackableRange;
        enemies.forEach((enemy)=>{
            index++;
            let _enemy = {
                x:enemies[index].x - 256,
                y:enemies[index].y - 256
            }
            if(distance(_enemy,me)<minDistance){
                i=index;
                minDistance=distance(_enemy,me);
            }
        })
        if(i!=-1){
            enemies[i].hp-=me.attack;
            //alert(enemies[i].hp);
            if(enemies[i].hp <= 0){
                score=score+enemies[i].score;
                enemies.splice(i,1);
            }
        }
    }
}


//気合
function moveKiai(){
    kiaiTurn=kiaiTurnNum;
}


//間合い
function moveMaai(moveDirection){
    isMaai=true;
}

function distance(target1,target2){
    return Math.pow(Math.pow(target1.x-target2.x,2)+Math.pow(target1.y-target2.y,2),1/2);
    enemies.forEach((enemy)=>{
        //bonc領域
        //if(enemy.x=jiki.x&&)
    })
}

// export default {moveIai,moveKiai,moveMaai,isMaai};