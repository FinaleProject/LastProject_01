
function scoreCanvas(takenItems){

	var newPoints = takenItems.score;
	
	
	
	function getCookie(name) {
		var value = "; " + document.cookie;
		var parts = value.split("; " + name + "=");
		if (parts.length == 2) return parts.pop().split(";").shift();
	}
	
	
	var token = getCookie('authentication');
	
	console.log(token);
	//Authorization: 'X-Api-Token ' + token,
	//
	$.ajax({
		url: 'api/v1/pointsUpdate',
		type: 'PUT',
		headers : {'Authorization' : 'X-Api-Token ' + token},
		data: {"points": newPoints, "token" : token},
		success: function(data){
			console.log(data);
		}
	});
	
	
	
	
    var canvas = document.createElement('canvas');
    document.getElementById('gameWrapper').appendChild(canvas);
    canvas.setAttribute("id", "gameCanvas");
    canvas.setAttribute("width", "700");
    canvas.setAttribute("height", "500");
    canvas.setAttribute("position", "absolute");
    canvas.setAttribute("top", "10");
    var ctx = canvas.getContext('2d');

//    var imageBg = document.createElement('img');
//    imageBg.setAttribute('src', 'drashoAll/app/images/gameBackground02test.jpg');
//
//    var imageWings = document.createElement('img');
//    imageWings.setAttribute('src', 'drashoAll/app/images/wings02.png');
//
//    var imageHeart = document.createElement('img');
//    imageHeart.setAttribute('src', 'drashoAll/app/images/heart2.png');
//
//    var imageClock = document.createElement('img');
//    imageClock.setAttribute('src', 'drashoAll/app/images/clock.png');
//
//    var imageEnemy = document.createElement('img');
//    imageEnemy.setAttribute('src', 'drashoAll/app/images/statsEnemy.png');
//
//
//    console.log(imageBg);
//    console.log(imageWings);
//    console.log(imageHeart);
//    console.log(imageEnemy);

//    ctx.drawImage(imageBg,0,0,700,500);

    console.log(takenItems);

    var endGame = 'END GAME';
    var totalScore   = 'Your score is: ' + takenItems.score;
    var wingsScore   = 'wings  : ' + takenItems.speed  + ' x  20 = ' + takenItems.speed*20    + ' points';
    var clocksScore  = 'clocks : ' + takenItems.clock  + ' x  30 = ' + takenItems.clock*30    + ' points';
    var heartsScore  = 'hearts : ' + takenItems.lives  + ' x  10 = ' + takenItems.lives*10    + ' points';
    var wrongsScore  = 'fat birds : ' + takenItems.bird02 + ' x -10 = '+ takenItems.bird02* -10 + ' points';
    var enemiesScore = '"friendly" birds: ' + takenItems.bird01 + ' x  1  = '  + takenItems.bird01      + ' points';
    var black        = 'black birds: '   + takenItems.bird03 + ' x -20 = '  + takenItems.bird03 * -20      + ' points';

    ctx.font = 'italic 45px bold Helvetica sans-serif';
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.globalAlpha=0.6;
    ctx.lineWidth = 10;
    ctx.fillRect(50,50,600,400);
    ctx.globalAlpha = 1;
    ctx.fillStyle = 'rgb(225, 225, 225)';
    ctx.fillText(endGame , 250, 100);
    ctx.font = 'italic 25px bold Helvetica sans-serif';

    ctx.fillText(heartsScore, 60,140);
    ctx.fillText(wingsScore,  60,180);
    ctx.fillText(clocksScore, 60,220);
    ctx.fillText(wrongsScore, 60,260);
    ctx.fillText(enemiesScore,60,300);
    ctx.fillText(black, 60, 340);
    
    
    ctx.font = 'italic 45px bold Helvetica sans-serif';
    ctx.fillText(totalScore,60,420);
//    ctx.beginPath();
//    ctx.drawImage(imageHeart,90,115,40,40);
//    ctx.beginPath();
//    ctx.drawImage(imageWings,90,165,40,40);
//    ctx.beginPath();
//    ctx.drawImage(imageClock,90,215,40,40);
//    ctx.beginPath();
//    ctx.drawImage(imageEnemy,90,265,40,40);


}





function startGame (){


    var background = new Background();
    background.stopAnimation = false;
    background.init();
    var frontStage = new FrontStage();

    function gameLoop(){
        if(frontStage.checkForEndGame()){

            background.stopAnimation = true;
            var btn = document.getElementById('startGame');
            btn.setAttribute('style', 'display:inline-block;');
            var parent = document.getElementById('gameWrapper');
            var child1 = document.getElementById('gameCanvas');
            var child2 = document.getElementById('canvasBg');

            parent.removeChild(child1);

            parent.removeChild(child2);

            var takenItems = frontStage.takenItems;

            scoreCanvas(takenItems);

            return
        }



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

        var xBomb = 400;
        var yBomb = 300;



        test.position.set(xBomb, yBomb);
        test.update();
        test.draw(frontStage.ctx);



        frontStage.ctx.clearRect(0,0,frontStage.canvas.width, frontStage.canvas.height);
        frontStage.player.movePlayer();
        frontStage.createBonus();
        frontStage.AddEnemy();
        frontStage.modifyEnemySpeed();
        frontStage.flyingItems.forEach(function(item){
            frontStage.checkForHit(item);
            item.update();
            item.render(frontStage.ctx);
            frontStage.checkForEndStage(item);
        });
        frontStage.drawScore();
        frontStage.drawLives();
        frontStage.drawSpeedLevel();
        frontStage.player.update();
        frontStage.player.render(frontStage.ctx);


        requestAnimationFrame(gameLoop)
    }
    gameLoop();
}