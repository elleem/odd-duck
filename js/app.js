"use-strict";

// console.log("hello world");
//global variables
let totalAnswers = 25;
let currentAnswers = 0;
priorNumbers = []; 

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

//3 random images function with no repeats for next poll
function generateUnique() {
  let uniqueNumbers = [];
  while (uniqueNumbers.length < 3) {
    let randNumber = randImage();
    if (!uniqueNumbers.includes(randNumber) && !priorNumbers.includes(randNumber)) {
      uniqueNumbers.push(randNumber);
      priorNumbers.push(randNumber); 
    }
  }
  if (priorNumbers.length === 6){
    priorNumbers.splice(0,3); 
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
//add click
function addClickHandler(n) {
  let img = document.getElementById(`img-${n}`);
  img.addEventListener("click", onClick) 
  }
//remove click
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



//list function
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
   
}

 function renderChart(){
  save(); 
  viewChart(); 
 }



let resultsLists=document.getElementById("results");
resultsLists.addEventListener("click",renderChart);

//json!
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



//chart
function viewChart(){
  let ctx = document.getElementById('chart').getContext('2d');
  let itemNames = [];
  let itemVotes = [];
  let itemViews = [];

  for(let i = 0; i < allProducts.length; i++){
    let product = allProducts[i]; 
    itemNames.push(product.name);
    itemVotes.push(product.votes);
    itemViews.push(product.views);
  }

let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: itemNames,
        datasets: [{
            label: '# of Votes',
            data: itemVotes,
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        },
        {
          label: '# of Views',
          data: itemViews,
          backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
}

