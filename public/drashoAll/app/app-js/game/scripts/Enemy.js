function Enemy(type ,position, anim, boundingBox){

    this.type = type;
    this.position = position;
    this.velocity = 2;
    this.animation = anim;
    this.boundingBox = boundingBox;
    this.movement = {right: true, down: true};
    this.isHit = false;

}

Enemy.prototype.update = function(){

    if(this.movement.right && !this.isHit){
        this.position.x += this.velocity; //+ this.velocityModifier;
    }

    if(this.movement.down && this.isHit){
        this.position.y += this.velocity;
    }

    this.animation.position.set(this.position.x, this.position.y);
    this.boundingBox.x = this.position.x + 21;  //  !!!!!!!
    this.boundingBox.y = this.position.y + 25;

    this.animation.update();
};

Enemy.prototype.render = function(ctx){
    this.animation.draw(ctx);
    this.boundingBox.draw(ctx);


};