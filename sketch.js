//o jogo sera alguns baloes caindo e voce tera que acerta-los com seu furador,
//a cada balao de diferente cor que voce estourar, voce recebera uma pontuacao diferente 
//a perspectiva do jogador sera parecida com a do angryBirds
//o furador sera parecido com o pentagono do projeto da aula da piramide colorida
var balao1;
var balaoB,balaoG,balaoP,balaoR;
var estourador;
var pedra;
var polygon_img;
var pontuacao = 0;
var palmeiras = [];

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){
  balaoB = loadImage("blue_balloon0.png");
  balaoG = loadImage("green_balloon0.png");
  balaoP = loadImage("pink_balloon0.png");
  balaoR = loadImage("red_balloon0.png");

polygon_img = loadImage("polygon.png");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;


  var config ={
    isStatic: true
  }
  poligon = Bodies.rectangle(30,30,100,100,config);
  World.add(world,poligon);

  estourador = new estilingue(this.poligon,{x:300,y:50});
}

function draw() {
  Engine.update(engine);
  background("lightblue");  
  baloes();

  textSize(20);
  strokeWeight(10);
  text("pontuacao: "+pontuacao,100,25);

  image(polygon_img,poligon.position.x,poligon.position.y,50,50);

  for(var i = 0;i < palmeiras.length;i++){
  mostrar(palmeiras[i],i);  
  balao1.velocidade();
  }

  /*for(var i = 0; i < palmeiras.length; i++){
     if(palmeiras[i] !== undefined){
       console.log(palmeiras[i].body.speed);
        if (palmeiras[i].body.velocity.x) {
             World.remove(world,palmeiras);
             }
             }
             }*/
  estourador.display();
}

function baloes(){
  var nume = Math.round(random(1,4));
  var alposX = Math.round(random(500,790));

if(frameCount%60 == 0){

  if(nume == 1){
    balao1 = new balao(alposX,50,balaoB);
    palmeiras.push(balao1);
    //Matter.Body.setVelocity(balao1.body,{x:0,y:5}); 
    
  }
  if(nume == 2){
    balao1 = new balao(alposX,50,balaoG); 
    palmeiras.push(balao1);
    //Matter.Body.setVelocity(balao1.body,{x:0,y:5}); 
    
  }
  if(nume == 3){
    balao1 = new balao(alposX,50,balaoP); 
    palmeiras.push(balao1);
    //Matter.Body.setVelocity(balao1.body,{x:0,y:5}); 
    
  }
  if(nume == 4){
    balao1 = new balao(alposX,50,balaoR); 
    palmeiras.push(balao1);
    

    console.log(balao1);
  }

} 
}

function mostrar(balao,i){
  if(balao){
balao.display();
if(balao.body.velocity.x>0 || balao.body.position.x>800){
balao.remove(i);
pontuacao++;
}
if( balao.body.position.y>400){
balao.remove(i);
}
  }
}

function mouseDragged(){
  Matter.Body.setPosition(this.poligon,{x:mouseX,y:mouseY})
}

function mouseReleased(){
estourador.fly();
Matter.Body.setStatic(this.poligon,false);
Matter.Body.setVelocity(this.poligon,{x:20,y:-10});
}

function keyPressed(){
  if(keyCode == 32){
    estourador.attach(this.poligon);
    Matter.Body.setPosition(this.poligon,{x:300,y:50});
    Matter.Body.setStatic(this.poligon,true);
    Matter.Body.setVelocity(this.poligon,{x:0,y:0});
  }
}