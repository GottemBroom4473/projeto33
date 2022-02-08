//o jogo sera alguns baloes caindo e voce tera que acerta-los com seu furador,
//a cada balao de diferente cor que voce estourar, voce recebera uma pontuacao diferente 
//a perspectiva do jogador sera parecida com a do angryBirds
//o furador sera parecido com o pentagono do projeto da aula da piramide colorida
var balao1;
var balaoB,balaoG,balaoP,balaoR;
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
}

function setup() {
  createCanvas(800,400);
}

function draw() {
  background("lightblue");  
  baloes();

  for(var i = 0;i < palmeiras.length;i++){
  mostrar(palmeiras[i],i);  
  balao1.velocidade();
  }
}

function baloes(){
  var nume = Math.round(random(1,4));
  var alposX = Math.round(random(500,790));

if(frameCount%60 == 0){

  if(nume == 1){
    balao1 = new balao(alposX,200,balaoB);
    palmeiras.push(balao1);
    //Matter.Body.setVelocity(balao1.body,{x:0,y:5}); 
    
  }
  if(nume == 2){
    balao1 = new balao(alposX,200,balaoG); 
    palmeiras.push(balao1);
    //Matter.Body.setVelocity(balao1.body,{x:0,y:5}); 
    
  }
  if(nume == 3){
    balao1 = new balao(alposX,200,balaoP); 
    palmeiras.push(balao1);
    //Matter.Body.setVelocity(balao1.body,{x:0,y:5}); 
    
  }
  if(nume == 4){
    balao1 = new balao(alposX,200,balaoR); 
    palmeiras.push(balao1);
    

    console.log(balao1);
  }

} 
}

function mostrar(balao,i){
balao.display();

}