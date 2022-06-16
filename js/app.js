"use-strict";

// console.log("hello world");
//global variables
let totalAnswers = 5;
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

//render function
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

function addClickHandler(n) {
  let img = document.getElementById(`img-${n}`);
  img.addEventListener("click", onClick) 
  }

  function onClick(event){
    let id = event.target.id
   if(currentAnswers === totalAnswers){
     for(let i=0; i < 2; i++){
       let img=document.getElementById(`img-${i}`);
       img.removeEventListener("click", addClickHandler);
     }
     return;
   } else{
    currentAnswers++;
    currentProducts[`${id[4]}`].votes++; //literal id of 4
    showRandomImages();
   }
  }

addClickHandler(0);
addClickHandler(1);
addClickHandler(2);




function submitVote() {
  let bodyContainer=document.getElementById("results-list");
  

  for (let i = 0; i < allProducts.length; i++) {   
    let product=allProducts[i];
    let results = document.createElement("li");
      results.innerText =
        product.name +
        " was voted for " +
        product.votes +
        " times and was viewed " +
        product.views +
        " times.";
      bodyContainer.appendChild(results); 
    }
    save(); 
  loadProducts(); 
}



let resultsLists=document.getElementById("results");
resultsLists.addEventListener("click",submitVote);


function save(){
  if (localStorage.getItem("products") === null){
  let stringify = JSON.stringify(allProducts);
  localStorage.setItem("products", stringify);
  
} else { 
  let retrievedProducts = localStorage.getItem("products");
  let parsedData = JSON.parse(retrievedProducts);
  for (let i = 0; i < allProducts.length; i++){
  allProducts[i].votes = allProducts[i].votes + parsedData[i].votes
  allProducts[i].views = allProducts[i].views + parsedData[i].views
  let stringify = JSON.stringify(allProducts);
  localStorage.setItem("products", stringify);
  }
}
}