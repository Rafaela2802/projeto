function toggleMode(){
const html=document.documentElement
html.classList.toggle('light')

// tag IMG 
const img = document.querySelector("#profile img")
// remplacer l'image 
if(html.classList.contains('light')){
  // si light mode,remplace par l'image light
img.setAttribute("src", "./Assets/Avatar.png")
} else /* Si i en a pas */

// si pas de light mode, mantenir l'image normal 

img.setAttribute("src",'./Assets/Ellipse.png')


}
