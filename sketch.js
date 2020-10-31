var ABall;
var database;
var position

function setup(){
    database=firebase.database();
    console.log(database)
    createCanvas(500,500);
    var ABallPosition=database.ref('ball/position')
    ABallPosition.on("value",readPosition,showError)
    ABall = createSprite(250,250,10,10);
   ABall.shapeColor = "red";
}


function draw(){
    background("white");
    if(position!==undefined){
    if(keyDown(LEFT_ARROW)){
writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
writePosition(0,+1);
    }
    drawSprites();
}}

function writePosition(x,y){
database.ref('ball/position').set({
'x' : position.x+x,
'y' : position.y+y
})
}
function readPosition(data){
position=data.val();
console.log(position.x)
ABall.x=position.x
ABall.y=position.y

}
function showError(){
console.log("error in writing to the database")
}