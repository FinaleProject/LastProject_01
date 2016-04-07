function FrontStage(){

    var canvas = document.createElement('canvas');

    document.getElementById('gameWrapper').appendChild(canvas);
    canvas.setAttribute("id", "gameCanvas");
    canvas.setAttribute("width", "800");
    canvas.setAttribute("height", "600");
    canvas.setAttribute("position", "absolute");
    canvas.setAttribute("top", "10");

    this.endGameFlag = false;


    this.canvas = canvas;

    this.ctx   = this.canvas.getContext('2d');
    this.input = new Input();

    attachListeners(this.input);

    this.createPlayer = function(){

        var animWidth  = 184;
        var animHeight = 184;
        var startCol   = 0;
        var startRow   = 0;
        var frameCount = 7;
        var fps        = 8;
        var allRows    = 5;
        var allCols    = 5;
        var imgPat     = 'drashoAll/app/images/player1.png';

        var playerAnim = new Animation(animWidth,animHeight,startRow,startCol,
            frameCount,imgPat,fps,allRows,allCols);


        var rectX = 100;
        var rectY = 100;
        var rectW = 100;
        var rectH = 55;

        var boundingBox = new Rectangle(rectX,rectY,rectW,rectH);
        boundingBox.color = new Color(0,0,0,0);


        var playerPosition = new Vector2(500,200);
        var velocity   = 4;

        var payer = new Player(playerPosition, velocity, playerAnim, boundingBox, this.input);

        return payer;
    };
    this.createEnemy1 = function(velocityModifier){

        var animWidth  = 76;
        var animHeight = 85;
        var startCol   = 0;
        var startRow   = 0;
        var frameCount = 8;
        var fps        = 8;
        var allRows    = 3;
        var allCols    = 3;
        var imgPat     = 'drashoAll/app/images/bird.png';

        var Enemy01_Anim = new Animation(animWidth,animHeight,startRow,startCol,
            frameCount,imgPat,fps,allRows,allCols);


        var rectX = 800;
        var rectY = 400;
        var rectW = 53;
        var rectH = 48;

        var boundingBox = new Rectangle(rectX,rectY,rectW,rectH);
        boundingBox.color = new Color(0,225,0,0);

        var y = Math.floor((Math.random() * 500) + 1);

        var x = -100;
        var Enemy01_position = new Vector2(x, y);


        var Enemy01 = new Enemy('01', Enemy01_position,Enemy01_Anim, boundingBox);
        Enemy01.velocity += velocityModifier;

        return Enemy01;
    };
    this.createEnemy2 = function(){
        var animWidth  = 110;
        var animHeight = 101;
        var startCol   = 0;
        var startRow   = 0;
        var frameCount = 10;
        var fps        = 8;
        var allRows    = 3;
        var allCols    = 3;
        var imgPat     = 'drashoAll/app/images/enemy1.png';

        var Enemy02_Anim = new Animation(animWidth,animHeight,startRow,startCol,
            frameCount,imgPat,fps,allRows,allCols);


        var rectX = 800;
        var rectY = 400;
        var rectW = 85;
        var rectH = 70;

        var boundingBox = new Rectangle(rectX,rectY,rectW,rectH);
        boundingBox.color = new Color(225,0,0,0);

        var y = Math.floor((Math.random() * 500) + 1);

        var x = -100;
        var Enemy02_position = new Vector2(x, y);


        var Enemy02 = new Enemy('02', Enemy02_position,Enemy02_Anim, boundingBox);

        return Enemy02;
    };
    this.createEnemy3 = function(){
        var animWidth  = 121.2;
        var animHeight = 113.17;
        var startCol   = 0;
        var startRow   = 4;
        var frameCount = 9;
        var fps        = 5;
        var allRows    = 5;
        var allCols    = 4;
        var imgPat     = 'drashoAll/app/images/bomb.png';

        var Enemy03_Anim = new Animation(animWidth,animHeight,startRow,startCol,
            frameCount,imgPat,fps,allRows,allCols);


        var rectX = 800;
        var rectY = 400;
        var rectW = 63;
        var rectH = 68;

        var boundingBox = new Rectangle(rectX,rectY,rectW,rectH);
        boundingBox.color = new Color(0,0,0,0);

        var y = Math.floor((Math.random() * 470) + 15);

        var x = -100;
        var Enemy03_position = new Vector2(x, y);


        var Enemy03 = new Enemy('03', Enemy03_position,Enemy03_Anim, boundingBox);

        return Enemy03;

    };

    this.createBonus  = function createBonus(){
        var now = Date.now();
        var deltaTime =  Math.abs(now - this.lastBonusCreating) /1000;

        if(deltaTime >= this.newBonusTime){

            var type = this.generateBonusType();

            deltaTime = 0;
            this.lastBonusCreating = now;
            //this.bonuses.push(new Bonus(type));
            this.flyingItems.push(new Bonus(type));
        }
    };


    this.player            = this.createPlayer();
    this.flyingItems       = [];

    this.score             = 0;
    this.level             = 1;
    this.lives             = 10;
    this.speedBonusCounter = 0;
    this.previousTime      = Date.now();
    this.velocityEnemies   = 0;
    this.newEnemyTime1     = 3;
    this.newEnemyTime2     = 3.4;
    this.newEnemyTime3     = 7;
    this.lastEnemyTime1    = Date.now();
    this.lastEnemy2Time    = Date.now();
    this.lastEnemy3Time    = Date.now();
    this.newBonusTime      = 7;
    this.lastBonusCreating = Date.now();
    this.difficulty        = 1;


    this.takenItems = {
        score : 0,
        bird01: 0,
        bird02: 0,
        bird03: 0,
        clock : 0,
        speed : 0,
        lives : 0,
        time:   0
    };

    this.drawScore        = function drawScore(){
        var scoreText = 'SCORE: ' + this.score;
        this.ctx.font = 'italic 20px bold Helvetica sans-serif';
        this.ctx.fillStyle = 'rgb(225, 225, 225)';

        this.ctx.lineWidth = 10;
        this.ctx.fillText(scoreText , 10, 30);

    };

    this.drawLives        = function drawLives(){

        var imageHeart = document.createElement('img');
        imageHeart.setAttribute('src', 'drashoAll/app/images/heart2.png');
        this.ctx.drawImage(imageHeart,130,10,25,25);

        var scoreText = 'x ' + this.lives;
        this.ctx.font = '20px bold Helvetica sans-serif';
        this.ctx.fillStyle = 'rgb(255, 255, 255)';
        this.ctx.lineWidth = 10;
        this.ctx.fillText(scoreText , 160, 30);


    };

    this.drawEndGame      = function drawEndGame(){
        var endGame = 'END GAME';
        var scoreText = 'Your score is: ' + this.score;
        this.ctx.font = 'italic 50px bold Helvetica sans-serif';
        this.ctx.fillStyle = 'rgb(0, 0, 0)';
        this.ctx.lineWidth = 10;
        var rect = new Rectangle(180,180,460,300);
        rect.color = new Color(0,0,0,1);
        rect.draw(this.ctx);
        this.ctx.fillText(endGame , 280, 300);
        this.ctx.fillText(scoreText , 210, 400);
    };

    this.drawSpeedLevel   = function drawSpeedLevel(){
        var imageWinks = document.createElement('img');
        imageWinks.setAttribute('src', 'drashoAll/app/images/wings02.png');
        this.ctx.drawImage(imageWinks,210,10,25,25);

        var speed = 'x ' + this.speedBonusCounter;
        this.ctx.font = '20px bold Helvetica sans-serif';
        this.ctx.fillStyle = 'rgb(255, 255, 255)';

        this.ctx.lineWidth = 10;
        this.ctx.fillText(speed , 240, 30);
    };

    this.checkForHit      = function checkForHit(item){

        if(this.player.boundingBox.intersects(item.boundingBox)){

            if(item.type == '01' && !item.isHit){
                this.score++;
                item.isHit = true;
                item.animation.setRow(2);
                item.animation.setColumn(2);
                item.animation.setLimit(1);

                this.takenItems.bird01++;
                this.takenItems.score = this.score;

            }
            if(item.type == '02' && !item.isHit){
                this.lives--;
                this.score -= 10;
                item.isHit = true;
                item.animation.setRow(2);
                item.animation.setColumn(2);
                item.animation.setLimit(1);
                this.takenItems.bird02++;
                this.takenItems.score = this.score;
            }

            if(item.type == '03' && !item.isHit){
                this.lives = 1;
                this.score -= 20;
                this.speedBonusCounter = 0;
                this.player.velocity = 4;
                item.isHit = true;
                item.animation.setRow(0);
                item.animation.setColumn(0);
                item.animation.setLimit(7);
                this.takenItems.bird03++;
                this.takenItems.score = this.score;




                var animWidth  = 192;
                var animHeight = 192;
                var startCol   = 0;
                var startRow   = 0;
                var frameCount = 6;
                var fps        = 2;
                var allRows    = 2;
                var allCols    = 2;
                var imgPat     = 'drashoAll/app/images/booom.png';

                var test = new Animation(animWidth,animHeight,startRow,startCol,frameCount,imgPat,fps,allRows,allCols);

                var xBomb = item.position.x - 50;
                var yBomb = item.position.y - 10;

                console.log(xBomb,yBomb);


                test.position.set(xBomb, yBomb);
                test.update();
                test.draw(this.ctx);
            }

            if(item.type == 'live'){
                this.lives++;
                this.score += 10;
                console.log('get Live');
                var x = this.flyingItems.indexOf(item);
                this.flyingItems.removeAt(x);
                this.takenItems.lives++;
                this.takenItems.score = this.score;

            }else if(item.type == 'speed'){
                this.speedBonusCounter++;
                console.log('get Speed');
                this.player.velocity += 1;
                this.score += 20;
                var y = this.flyingItems.indexOf(item);
                this.flyingItems.removeAt(y);
                this.takenItems.speed++;
                this.takenItems.score = this.score;

            }else if(item.type == 'time'){
                console.log('get Time');
                this.velocityEnemies = 0.55;
                this.score += 30;
                var z = this.flyingItems.indexOf(item);
                this.flyingItems.removeAt(z);
                this.takenItems.clock++;
                this.takenItems.score = this.score;
            }

        }

    };

    this.modifyEnemySpeed = function modifyEnemySpeed(){
        var now = Date.now();
        var deltaTime =  Math.abs(now - this.previousTime) /1000;

        if(deltaTime >= 1){
            //console.log(this.newEnemyTime1);
            this.velocityEnemies += 0.1;
            deltaTime = 0;
            this.previousTime = now;


            //console.log(this.newEnemyTime1);

            if(this.newEnemyTime1 > 1){
                this.newEnemyTime1 -= 0.047;
            }
        }

    };

    this.AddEnemy         = function AddEnemy(){

        var now = Date.now();
        var deltaTime =  Math.abs(now - this.lastEnemyTime1) /1000;

        if(deltaTime >= this.newEnemyTime1){
            deltaTime = 0;
            this.lastEnemyTime1 = now;
            var enemy1 = new this.createEnemy1(this.velocityEnemies);
            this.flyingItems.push(enemy1);
        }

        var deltaTime2 = Math.abs(now - this.lastEnemy2Time) /1000;

        if(deltaTime2 >= this.newEnemyTime2){
            deltaTime2 = 0;
            this.lastEnemy2Time = now;
            var enemy2 = new this.createEnemy2();
            this.flyingItems.push(enemy2);
        }
        var deltaTime3 = Math.abs(now - this.lastEnemy3Time) /1000;

        if(deltaTime3 >= this.newEnemyTime3){
            deltaTime3 = 0;
            this.lastEnemy3Time = now;
            var enemy3 = new this.createEnemy3();
            this.flyingItems.push(enemy3);
        }
    };

    this.checkForEndStage = function checkForEndStage(item){
        var n = this.flyingItems.indexOf(item);
        if(item.position.x > 850){
            this.flyingItems.removeAt(n);
            if(item.type == '01'){
                this.lives--;
            }

        }
        if(item.position.y > 610){
            this.flyingItems.removeAt(n);
        }
    };

    this.generateBonusType= function generateBonusType(){

        var rndNumb = Math.floor((Math.random() * 10) + 1);

        if(rndNumb <= 3){
            return 'time';
        }else if(rndNumb > 3 && rndNumb <= 6 && this.speedBonusCounter <= 3){
            return 'speed';
        }else{
            return 'live';
        }
    };

    this.checkForEndGame  = function checkForEndGame(){
        this.endGameFlag = false;

        if(this.lives <= 0){
            this.endGameFlag = true;
            this.drawEndGame();
            var _this = this;
            this.flyingItems.clear();


            this.flyingItems.forEach(function(item){
                this.checkForHit(item);
                item.update();
                item.render(FrontStage.ctx);
                this.checkForEndStage(item);
            });

        }
        return this.endGameFlag
    };



}