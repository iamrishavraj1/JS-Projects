const colors = ["green" , "red" , "rgba(133,122,200)" , "#f15025" , "#4080ff" , "#008080" , "#420420" ,
"#00dead", "#eeae02" , "#c1b8e9" , "#f2e9cd" , "#ff8040" , "#ff339a" , "#98a2b2" , "#3b3b3b" , "#6c3082" ,
"yellow" , "#5ac18e" , "#996699", 	"#9966cc" ,	"#9966ff"];


const btn = document.getElementById("btn"); //Taking a Refernece of  Button.
const color = document.querySelector(".color"); // Taking a Refernce of span section.



const getColor = () => {
   const randomColor = Math.floor(Math.random()*colors.length); 
   document.body.style.backgroundColor = colors[randomColor];
   color.innerHTML = colors[randomColor];  
};

btn.addEventListener("click", getColor);

