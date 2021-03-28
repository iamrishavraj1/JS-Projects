let start = document.querySelector(".start");
let count = document.querySelectorAll(".Count");
let one = 0;

// 1st Option using multple function and comment this code for using 2nd option.


let countIncrease = () => {
  one++;
  start.innerHTML = one;
};

let countDecrease = () => {
  one--;
  start.innerHTML = one;
};

let countReset = () => {
    one = 0;
  start.innerHTML = one ;
};


// //2nd option using forEach() uncomment this and use.

// count.forEach((btn)=>{  //Using forEach for get the all buttons details from count. 

//         btn.addEventListener("click", (item)=>{   //add Event listner to all button.

//             const selectBtn = item.currentTarget.classList;  // select all button using their class
                
//                 if(selectBtn.contains("Increase")) //Give a condition in which button do which work using their class.

//                 {
//                     one++; //Increase
//                 } 
                
//                 else if ( selectBtn.contains("Decrease")) //Give a condition in which button do which work using their class.
                
//                 {
//                     one--; //Decrease
//                 }
                
//                 else // Rest is left.
//                 {
//                     one = 0; // Rest

//                 }

//             start.innerHTML = one; // Change the Inner HTML.

//     });

// });