trocaTema = () => { /*uma função*/ 
//  alert("Mudei o teme e noçe não viu")
//   const html = document.documentElement;

//   document.querySelector("body").style.background = "pink"

document.documentElement.classList.toggle("light")

const isLight = document.documentElement.classList.contains("light");

const imagem = isLight ? "./img/perfil.png" : "./img/perfil (2).png";

document.querySelector("#perfil img").setAttribute("src", imagem)
};