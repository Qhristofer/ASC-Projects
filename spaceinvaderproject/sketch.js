//VARIABLES
let playerX = 255
let playerY = 550
let shoot = undefined
let tri_X = 0
let tri_Y = 0


function setup(){
    createCanvas(600,765);
    background("cyan");
}

function draw(){
    player1()
    bullet()
}

/*const bullet=()=> {
    if (tri_Y!=0 && doo == 1) {
    tri_Y -= 5
    background("cyan");
    fill("red")
    triangle(tri_X-5,tri_Y, tri_X,tri_Y-5, tri_X+5,tri_Y)
    }
    else{doo = 0; tri_Y = playerY; tri_X = playerX}}

/*function keyPressed(){
    if (keyCode === UP_ARROW && doo == 0){bullet();}
}*/

const bullet =()=>{
tri_X = playerX + 50
tri_Y = playerY

    if (shoot == true){
    for (i=0;i<600;i++){
        triangle( tri_X-10,tri_Y, tri_X,tri_Y-10, tri_X+10,tri_Y)
        tri_Y = tri_Y - 1
         rect(tri_X-10)
    } shoot = false
    }
    } 

function mouseClicked(){
    if (shoot === false || shoot === undefined ){shoot = true}
    else{shoot = false}
    //BAM_text()
}

function BAM_text(){
    //FILL IN
}





const player1=()=> {
    if (keyIsDown(RIGHT_ARROW)){playerX += 5}
    if (keyIsDown(LEFT_ARROW)){playerX -= 5}
    background("cyan")
    noStroke();
    fill(0,0,255);
    rect(playerX, playerY, 75, 10)
}



