function Background(){


    var canvas = document.createElement('canvas');

    document.getElementById('gameWrapper').appendChild(canvas);
    canvas.setAttribute("id", "canvasBg");
    canvas.setAttribute("width", "800");
    canvas.setAttribute("height", "599");
    canvas.setAttribute("position", "absolute");
    canvas.setAttribute("top", "10");


    var c = canvas.getContext('2d');
    var image = document.createElement('img');
    image.setAttribute('src', 'drashoAll/app/images/gameBackground02test.jpg');

    var velocity = 10;
    var distance = 0;
    var lastFrameRepaintTime = 0;
    this.stopAnimation = false;

    var _this = this;

    this.init = function(){
        function calcOffset (time){

            var frameGapTime = time - lastFrameRepaintTime;
            lastFrameRepaintTime = time;

            var translateX = velocity * (frameGapTime/100);
            return translateX;
        }


        function draw(time){
            distance += calcOffset(time);
            if(distance > image.width){
                distance = 0;
            }

            c.clearRect(0,0, canvas.width, canvas.height);
            c.save();
            c.translate(distance,0);
            c.drawImage(image,0,0);
            c.drawImage(image, -image.width, 0);


            if(_this.stopAnimation){
     //           c.clearRect(0,0, canvas.width, canvas.height);
                return;
            }

            requestAnimationFrame(draw);

            c.restore();
        }

        function start(){

            draw(0);
            requestAnimationFrame(draw);
        }
        start()
    }
}
