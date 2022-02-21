canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
background_array=["Mars.png", "Mars_1.jpg", "Mars_1.png"]
random_number=Math.floor(Math.random()*3);
background_image=background_array[random_number];
rover_image="rover.png";
rover_x=10;
rover_y=10;
rover_width=100;
rover_height=90;
function add(){
    background_imagetag=new Image();
    background_imagetag.onload=uploadBackground;
    background_imagetag.src=background_image;
    rover_imagetag=new Image();
    rover_imagetag.onload=uploadRover;
    rover_imagetag.src=rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_imagetag, 0, 0, canvas.width, canvas.height);
}
function uploadRover(){
    ctx.drawImage(rover_imagetag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    if(keypressed=='38'){
        up();
        console.log("up");
    }
    if(keypressed=='40'){
        down();
        console.log("down");
    }
    if(keypressed=='39'){
        right();
        console.log("right");
    }
    if(keypressed=='37'){
        left();
        console.log("left");
    }
}
function down(){
    if(rover_y <=500){
        rover_y+=10;
        console.log("When the down arrow is pressed, rover_x="+ rover_x +", & rover_y="+ rover_y +".");
        uploadBackground();
        uploadRover();
    }
}
function left(){
    if(rover_x >=0){
        rover_x-=10;
        console.log("When the left arrow is pressed, rover_x="+ rover_x +", & rover_y="+ rover_y +".");
        uploadBackground();
        uploadRover();
    }
}
function up(){
    if(rover_y >=0){
        rover_y-=10;
        console.log("When the up arrow is pressed, rover_x="+ rover_x +", & rover_y="+ rover_y +".");
        uploadBackground();
        uploadRover();
    }
}
function right(){
    if(rover_x <=700){
        rover_x+=10;
        console.log("When the up arrow is pressed, rover_x="+ rover_x +", & rover_y="+ rover_y +".");
        uploadBackground();
        uploadRover();
    }
}