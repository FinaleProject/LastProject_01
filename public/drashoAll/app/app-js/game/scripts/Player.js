function Player(position, velosity, anim, boundingBox ,input){

    this.position = position;

    this.movement = {
        left: false,
        right: false,
        up: false,
        down: false
    };

    this.velocity = velosity;

    this.animation = anim;

    this.boundingBox = boundingBox;

    this.input = input;
}

Player.prototype.update = function(){

    if(this.movement.right && this.position.x < 680){
        this.position.x += this.velocity;
    }else if(this.movement.left && this.position.x > 30){
        this.position.x -= this.velocity;
    }

    if(this.movement.up && this.position.y > 10){
        this.position.y -= this.velocity;
    }else if(this.movement.down && this.position.y < 500){
        this.position.y += this.velocity;
    }


    this.animation.position.set(this.position.x, this.position.y);

    this.boundingBox.x = this.position.x + 45;
    this.boundingBox.y = this.position.y + 50;

    this.animation.update(); // updeitva informaciqta sled promqna da poziciqta

};


Player.prototype.render = function(ctx){
    this.animation.draw(ctx);
    this.boundingBox.draw(ctx);
};


Player.prototype.movePlayer = function(){
    if(this.input.right){
        this.movement.right = true;
        this.animation.setRow(2);
        this.animation.setColumn(1);
        this.animation.setLimit(8);
    }else{
        this.movement.right = false
    }

    if(this.input.left){
        this.movement.left = true;
        this.animation.setRow(0);
        this.animation.setColumn(0);
        this.animation.setLimit(8);
    }else{
        this.movement.left = false
    }

    if(this.input.up){
        this.movement.up = true;
    }else{
        this.movement.up = false
    }

    if(this.input.down){
        this.movement.down = true;
    }else{
        this.movement.down = false
    }
};










