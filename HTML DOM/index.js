//Method getElementById
document.getElementById("a").innerHTML = "haha";

//Method getElementsByTagName
const paragraphs = document.getElementsByTagName("h5");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "gold";
  paragraphs[i].style.fontStyle = "italic";
}

//Method getElementsByClassName

// collection of all elements with the class 'product-card'
const productCards = document.getElementsByClassName('product-card');


for (let i = 0; i < productCards.length; i++) {
  productCards[i].style.backgroundColor = 'lightblue';
  productCards[i].style.margin = '20px';
}

// CHANGING HTML ELEMENTS

// element.innerHTML =  new html content
// Change the inner HTML of an element
const bago = document.getElementById("haha");
//  element.innerHTML =  new html content
bago.innerHTML = '<h2>New <br> Content <br> HTML</h2>';

// element.attribute = new value
// Change the attribute value of an HTML element
function applyStyle(){

  const btnElement = document.getElementById("btn");

  if (btnElement.className === "default"){
    // element.attribute = new value
    btnElement.className = "active";
    btnElement.textContent = "the active style";
  } else {
    // element.attribute = new value
    btnElement.className = "default";
    btnElement.textContent = "click me to change style"
  }
}
document.getElementById("btn").addEventListener("click", applyStyle);

//  element.style.property = new style
//  Change the style of an HTML element
const styling = document.getElementById("stylish");
function gold(){
  // element.style.property = new style
  styling.style.color = "gold";
}
function diamond(){
  // element.style.property = new style
  styling.style.color = "lightblue";
}
function black(){
  // element.style.property = new style
  styling.style.color = "black";
}

// element.setAttribute(attribute, value)
// Change the attribute value of an HTML element
const link = document.getElementById("mylink");

link.setAttribute("href", "https://www.google.com");
// element.setAttribute(attribute, value)
link.setAttribute("target", "_blank");

// Adding Events Handlers

// document.getElementById(id).onclick = function(){code}
// Adding event handler code to an onclick event

const changebutton = document.getElementById("changebtn");
const defaultbutton = document.getElementById("defaultbtn");

const istg = document.getElementById("mymsg");

changebutton.onclick = function(){
  istg.textContent = "NEW MESSAGE";
};
defaultbutton.onclick = function(){
  istg.textContent = "OLD MESSAGE";
};


const highlightButton = document.querySelector('#highlightBtn');

highlightButton.addEventListener('click', () => {

    const taskElements = document.querySelectorAll('li.task');

    taskElements.forEach(task => {
        task.style.backgroundColor = 'lightgreen'; 
        task.style.fontWeight = 'bold';
        task.style.border = '1px solid black';
    });
});