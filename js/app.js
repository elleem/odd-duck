"use-strict";

// console.log("hello world");

let totalAnswers=25
// let currentAnswers=0

let imgBody = document.getElementById("img-Body");
let imgOne = document.getElementById ("img-one");
let imgTwo = document.getElementById ("img-two");
let imgThree = document.getElementById ("img-three");

function Product(name) {
  this.name = name;
  this.caption=caption;
  this.votes=0;
  this.views=0; 
  //itemViews.push(this);
}

let allProducts = [
  new Product("bag"),
  new Product("banana"),
  new Product("bathroom"),
  new Product("boots"),
  new Product("breakfast"),
  new Product("bubblegum"),
  new Product("chair"),
  new Product("cthulhu"),
  new Product("dog-duck"),
  new Product("dragon"),
  new Product("pen"),
  new Product("pet-sweep"),
  new Product("scissors"),
  new Product("shark"),
  new Product("sweep"),
  new Product("tauntaun"),
  new Product("unicorn"),
  new Product("water-can"),
  new Product("wine-glass"),
];
//console.log(allProducts);

function randImage() {
  let result = Math.floor(Math.random() * allProducts.length);
  return allProducts[result];
}

//let img = document.createElement('img');/try to create a function that takes an image and does these things, call that function three times with three different images. create a method which renders. 
//let productsArray=[], I need to do something with this 

allProducts.prototype.render = function(){
  while(allProducts.includes(randomNum)){
    let randomNum = randImage();
    for(let i=0; i<allProducts.length; i++){
      randImage.push(randomNum);
    }
  }

  imgOne.scr = `img/${image.name}.jpg`;
  allProducts[1].views++; //maybe push this into array

  imgTwo.src = `img/${image.name}.jpg`;
  allProducts[2].views++;


  imgThree.src = `img/${image.name}.jpg`;
  allProducts[3].views++;
}

renderImages();

function submitVote(event){
  event.preventDefault();
    if (currentAnswers ===totalAnswers){
      for(let i=0; i < productsArray.length; i++){
        let results = document.createElement("li")
        results.textContent = productsArray[i].name + 'was voted for' + productsArray[i].votes + "and was viewed" + productsArray[i].views + "."
        resultsLists.appendChild(results)
      }
    }
  }



//creates a list//loop three times to render 3 different images, if you put that thing in a function, could you call that from your eventlistener, when the pages loads and after each click