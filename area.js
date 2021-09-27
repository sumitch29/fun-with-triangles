const firstSide = document.querySelector("#base");
const secondSide= document.querySelector("#height");
const calculateArea = document.querySelector("#calculate")
const outputEl = document.querySelector("#output");

function calculateAreaOfTriangle(){
     const sumOfSquares = (Number(firstSide.value) * Number(secondSide.value))/2;
     outputEl.innerText = "The Area of traiangle is " + sumOfSquares
}

calculateArea.addEventListener('click',calculateAreaOfTriangle);

