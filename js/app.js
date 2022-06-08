"use-strict"; 

// let totalAnswers=25
// let currentAnswers=0

let imgBody = document.getElementById ("img-Body");
let imgOne = document.getElementById ("img-one");
let imgTwo = document.getElementById ("img-two");
let imgThree = document.getElementById ("img-three"); 

let image_array=["bag.jpg", "banana.jpg","bathroom.jpg", "boots.jpg", "breakfast.jpg", "bubblegum.jpg", "chair.jpg", "cthulhu.jpg", "dog-duck.jpg", "dragon.jpg", "pen.jpg", "pet-sweep.jpg", "scissors.jpg", "shark.jpg", "sweep.jpg", "tauntaun.jpg", "unicorn.jpg", "water-can.jpg", "wine-glass.jpg"]


function Store (name) {
  this.name=name;
  this.images=image_array;
  this.count=0;
}

function randImage (){
 let result= Math.floor(Math.random() *image_array.length);
 return result
}