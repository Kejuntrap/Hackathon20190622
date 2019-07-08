enemy = function(type,X,Y){
    this.x=X;
    this.y=Y;
    this.type=type;
    if(this.type == 0){
        this.HP = 10;
        this.score = 100;
    }else if(this.type == 1){
        this.HP = 30;
        this.score = 300;
    }else if(this.type == 2){
        this.HP = 50;
        this.score = 500;
    }

    function draw(){
        image(teki,DrawScreenX(this.x),DrawScreenY(this.y),64,64);
    }
}