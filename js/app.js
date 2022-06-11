"use-strict";

// console.log("hello world");
//global variables
let totalAnswers = 25;
let currentAnswers = 0;


function Product(name) {
  this.name = name;
  this.votes = 0;
  this.views = 0;
  
}

Product.prototype.render = function (i) {
  let img = document.getElementById(`img-${i}`);
  img.src = `img/${this.name}.jpg`;
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
//random image function
function randImage() {
  let randProduct = Math.floor(Math.random() * allProducts.length);
  return allProducts[randProduct];
}

//3 random images function
function generateUnique() {
  let uniqueNumbers = [];
  while (uniqueNumbers.length < 3) {
    let randNumber = randImage();
    if (!uniqueNumbers.includes(randNumber)) {
      uniqueNumbers.push(randNumber);
    }
  }
  return uniqueNumbers;
}
//console.log(generateUnique()); //should see the same and clicks, and views in console

let currentProducts = [];
function showRandomImages() {
  currentProducts = generateUnique();
  for (let i = 0; i < currentProducts.length; i++) {
    let currentProduct = currentProducts[i];
    currentProduct.views++;
    currentProduct.render(i);
  }
}
showRandomImages();

function addClickHandler(i) {
  let img = document.getElementById(`img-${i}`);
  img.addEventListener("click", showRandomImages) 
    console.log(`Clicked item ${i}`);
  currentProducts[i].clicks++; 
    showRandomImages();
  };


addClickHandler(0);
addClickHandler(1);
addClickHandler(2);

// function submitVote(event) {
//   event.preventDefault();
//   if (currentAnswers === totalAnswers) {
//     for (let i = 0; i < itemViews.length; i++) {
//       let results = document.createElement("li");
//       results.textContent =
//         itemViews[i].name +
//         "was voted for" +
//         itemViews[i].votes +
//         "and was viewed" +
//         itemViews[i].views +
//         ".";
//       resultsLists.appendChild(results);
//     }
//   }
// }

//creates a list//loop three times to render 3 different images, if you put that thing in a function, could you call that from your eventlistener, when the pages loads and after each click
