var canvas= new fabric.Canvas("myCanvas");
var player_x=10;
var player_y=10;
var blockImgHei=30;
var blockImgWid=30;
var player_object="";
var block_ImgObject="";
function player_update() {
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(160);
        player_object.scaleToHeight(135);
        player_object.set({
            top:player_y,
            left:player_x
        });
       canvas.add(player_object); 
    })
}
function new_Img(getImage) {
    fabric.Image.fromURL(getImage,function(Img){
        block_ImgObject=Img;
        block_ImgObject.scaleToWidth(blockImgWid);
        block_ImgObject.scaleToHeight(blockImgHei);
        block_ImgObject.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_ImgObject);
    })
}  
window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed=="80") {
        console.log("shift+p pressed");
        blockImgHei=blockImgHei+10;
        blockImgWid=blockImgWid+10;
        document.getElementById("Span_Width").innerHTML=blockImgWid;
        document.getElementById("Span_Height").innerHTML=blockImgHei;
    }
    if(e.shiftKey == true && keyPressed=="77") {
        console.log("shift+m pressed");
        blockImgHei=blockImgHei-10;
        blockImgWid=blockImgWid-10;
        document.getElementById("Span_Width").innerHTML=blockImgWid;
        document.getElementById("Span_Height").innerHTML=blockImgHei;
    }
    if(keyPressed=="37"){
        left();
        console.log("left");
    }
    if(keyPressed=="38"){
        up();
        console.log("up");
    }
    if(keyPressed=="39"){
        right();
        console.log("right");
    }
    if(keyPressed=="40"){
        down();
        console.log("down");
    }
    if(keyPressed=="87"){
        new_Img("wall.jpg");
        console.log("w");
    }
    if(keyPressed=="89"){
        new_Img("yellow_wall.png");
        console.log("y");
    }
    if(keyPressed=="85"){
        new_Img("unique.png");
        console.log("u");
    }
    if(keyPressed=="84"){
        new_Img("trunk.jpg");
        console.log("t");
    }
    if(keyPressed=="82"){
        new_Img("roof.jpg");
        console.log("r");
    }
    if(keyPressed=="76"){
        new_Img("light_green.png");
        console.log("l");
    }
    if(keyPressed=="71"){
        new_Img("ground.png");
        console.log("g");
    }
    if(keyPressed=="68"){
        new_Img("dark_green.png");
        console.log("d");
    }
    if(keyPressed=="67"){
        new_Img("cloud.jpg");
        console.log("c");
    }
}
function up(){
    if(player_y>=0){
        player_y=player_y-blockImgHei;
        console.log("block image height=" +blockImgHei);
        console.log("when up arrow key is Pressed,x="+player_x+",y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if(player_y<=650){
        player_y=player_y+blockImgHei;
        console.log("block image height=" +blockImgHei);
        console.log("when down arrow key is Pressed,x="+player_x+",y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if(player_x>=0){
        player_x=player_x-blockImgWid;
        console.log("block image Width=" +blockImgWid);
        console.log("when left arrow key is Pressed,x="+player_x+",y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if(player_x<=1250){
        player_x=player_x+blockImgWid;
        console.log("block image Width=" +blockImgWid);
        console.log("when right arrow key is Pressed,x="+player_x+",y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}