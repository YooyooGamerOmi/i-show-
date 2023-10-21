

function preload(){
 img=loadImage("dog_cat.jpg");





}

function setup() {
    canvas = createCanvas(640,420);
    canvas.center();




}


function draw(){
    image(img ,0,0,640,420)
    fill("rgb(69,45,169)")
    text("Dog",45,75);
    noFill()
    stroke("rgb(25,45,8)")
    rect(30,60,450,350);
    
    

}