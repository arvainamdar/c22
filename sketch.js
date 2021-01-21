const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var myeingine,myworld;
var ground;
var ball;

function setup() {
  createCanvas(1200,400);
  myengine = Engine.create();
  myworld = myengine.world;


  var ground_options = {isStatic:true }
ground =Bodies.rectangle(600,380,1200, 20,ground_options);
World.add(myworld,ground);
console.log(ground);

var ball_options = {restitution:2}
ball = Matter.Bodies.circle(800,100,40, ball_options) ;
World.add(myworld,ball);

}

function draw() {
   background(0); 
Engine.update(myengine);
rectMode(CENTER)
rect(ground.position.x,ground.position.y,1200,20);
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,40,40)







}


