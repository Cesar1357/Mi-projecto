const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint;

var enemi = [];
var Suelos =[];
var jugador;
var ball;
var l1,l2,l3,l4,l5,l6,l7,l8;

var divisionHeight=300;
var score =0;
var gameState = "espera";

function setup() {
  createCanvas(800, 1300);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  l1 = new suelos(300,200,20,650,-PI/2.2);
  l2 = new suelos(500,350,20,650,PI/2.2);
  l3 = new suelos(300,500,20,650,-PI/2.2);
  l4 = new suelos(500,650,20,650,PI/2.2);
  l5 = new suelos(300,800,20,650,-PI/2.2);
  l6 = new suelos(500,950,20,650,PI/2.2);
  l7 = new suelos(300,1100,20,650,-PI/2.2);
  l8 = new suelos(500,1250,20,650,PI/2.2);
  jugador = new jugadores(100,1280,20,30);

  
    
}
 
function draw() {
  background("black");
  Engine.update(engine);
  textSize(35)
  text("Puntuación : "+score,20,40);
  fill("white");
  l1.display();
  l2.display();
  l3.display();
  l4.display();
  l5.display();
  l6.display();
  l7.display();
  l8.display();
  jugador.display();
//espera
  if(gameState === "espera"){
    text("Enseguida te podras mover",300,70);
    if(frameCount%2000===0){
      gameState = "inicio";
    }
    Matter.Body.setPosition(jugador.body,{x:100,y:1260});

  }
//espera2
  if(gameState === "espera2"){
    text("Enseguida te podras mover",300,70);
    if(frameCount%2000===0){
      gameState = "dificil";
    }
    Matter.Body.setPosition(jugador.body,{x:100,y:1260});

  }

  if(gameState === "dificil"){
    

  }

  if(score === 1){
    textSize(70);
    text("Listo!",300,80);

  }


if(gameState === "inicio"){
  if(jugador.body.position.y <  290){
    
    if(jugador.body.position.x < 30){
      gameState = "end";
      }
    }

  if(jugador.body.position.y >  1301){
    gameState = "end";
      
  }
}

if(gameState === "dificil"){
  if(jugador.body.position.y <  290){
    
    if(jugador.body.position.x < 30){
      gameState = "end2";
      }
    }

  if(jugador.body.position.y >  1301){
    gameState = "end2";
      
  }
}
 




  if(gameState === "end"){
    textSize(90);
    text("Game Over",300,120);
    enemi = [];
    textSize(40);
    text("Presiona 1 para reiniciar",320,160);
    textSize(30)
    text("Presiona 2 para más dificil",350,189);
    //numeros
  //mas dificil
  if(keyCode === 50){
    gameState = "espera2";
    Matter.Body.setPosition(jugador.body,{x:100,y:1270});
    score = 0;

  }
  if(keyCode === 49){
    gameState = "espera";
    Matter.Body.setPosition(jugador.body,{x:100,y:1270});
    score = 0;

  }
}

  if(gameState === "end2"){
    textSize(90);
    text("Game Over",300,120);
    enemi = [];
    textSize(40);
    text("Presiona 1 para reiniciar",320,160);
    textSize(30)
    text("Presiona 2 para más facil",350,189);
    //numeros
  //mas dificil
  if(keyCode === 49){
    gameState = "espera2";
    Matter.Body.setPosition(jugador.body,{x:100,y:1270});
    score = 0;

  }
  if(keyCode === 50){
    gameState = "espera";
    Matter.Body.setPosition(jugador.body,{x:100,y:1270});
    score = 0;

  }

}
  

  if(keyCode === 32){
    gameState = "end";
}


  
  console.log(gameState);
  

  for (var i = 0; i < enemi.length; i++) {
    enemi[i].display();   
  }

//spawn enemigos
if(gameState ==="inicio" || gameState === "espera" || gameState === "dificil" || gameState === "espera2"){
  if(frameCount%200===0){
  
    enemi.push(new Enemi (100, 20, 20));
  
  }
  
}

//puntaje
if(gameState ==="inicio" || gameState === "dificil"){
  if(frameCount%100===0){
    score = score +1
  }
}


}

function keyPressed(){
  if(gameState === "inicio" || gameState === "dificil"){
    if(keyCode === LEFT_ARROW){
      
      Matter.Body.setVelocity(jugador.body, {x: -5, y: 0});  
    }

    if(keyCode === RIGHT_ARROW){
      
        Matter.Body.setVelocity(jugador.body, {x: 5, y: 0});  
      }

    if(keyCode === UP_ARROW){
      
        Matter.Body.setVelocity(jugador.body, {x: 0, y: -5});  
    }

      




    }

}

