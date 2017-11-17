function setup() {
  createCanvas(500,400)
}

function draw() {
  var x = 50
    var count = 0;
  background(0)
  fill(250)
 
  var counter = 0 
  while (counter < 8) {
    if (counter % 2 === 0) {
      fill ('blue')
      
    } else { fill ('green')
  }
  
  rect(40 + (counter*40), 200, 40, 40)
  counter = counter =1 //counter += 1
  
 
 

