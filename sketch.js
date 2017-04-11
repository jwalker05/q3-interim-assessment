 var x = 50;
 var y = 90;
 var speed = 10;
 
 
 function setup(){
     createCanvas(600,400);
     
 }
 
 function display(){
      fill(91, 130, 155)
     ellipse(x, y, 80, 70);
     
     
 }
 
 
 function draw(){
     strokeWeight(6);
    background(178, 252, 143);
    display();
    move();
    bounce
    if(mouseX > 300){
        ellipse(300, 200, 50,50);
    }
    
 }

  
  function move(){
      x = x + speed;
  }
  
  function bounce(){
      if(x>600 || x <0){
          speedx = -speed;
      }
  }
  
  
     
     
         
     
     
     


     
    
     
    
 