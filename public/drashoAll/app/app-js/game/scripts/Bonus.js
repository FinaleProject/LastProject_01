function Bonus(type){

    this.type = type;
    var y = Math.floor((Math.random() * 460) + 25);

    var x = -100;

    this.movement = {right: true};
    this.position = new Vector2(x, y);

    this.velocity = 7;

    this.boundingBox = new Rectangle(x, y, 35, 35);
}



Bonus.prototype.update = function(){

    if(this.movement.right){
        this.position.x += this.velocity;
        this.boundingBox.x = this.position.x;
        this.boundingBox.y = this.position.y;
    }
};



Bonus.prototype.render = function(ctx){

    var img = this.createImg(this.type);
    ctx.drawImage(img, this.position.x, this.position.y, 35, 35);
};


Bonus.prototype.createImg = function(type){

    var imgName;

    if(type == 'speed'){
        imgName = 'wings02.png';
    }else if(type == 'live'){
        imgName = 'heart2.png';
    }else{
        imgName = 'clock.png'
    }

    var img = document.createElement("IMG");
    img.setAttribute("src", "app-js/game/resources/images/" + imgName);
    img.setAttribute("width", "35");
    img.setAttribute("height", "35");

    return img;
};



