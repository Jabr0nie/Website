// To access the show button element 
let showbtn = document.getElementById("showbtn"); 
  
// To access the Close button element 
let closebtn = document.getElementById("closebtn"); 
  
// To acces the popup element 
let popup = document.querySelector(".popup"); 

  
// To show the popup on click 
showbtn.addEventListener("click", () => { 
    popup.style.display = "block"; 
    showbtn.style.display = "none"; 
    subp.style.display = "none"; 
}); 
  
// To close the popup on click 
closebtn.addEventListener("click", () => { 
    popup.style.display = "none"; 
    showbtn.style.display = "block"; 
    subp.style.display = "block"; 
});