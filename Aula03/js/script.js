trocaTema = () => { /*uma função*/ 
//  alert("Mudei o teme e noçe não viu")
//   const html = document.documentElement;

//   document.querySelector("body").style.background = "pink"

document.documentElement.classList.toggle("light")

const isLight = document.documentElement.classList.contains("light");

const imagem = isLight ? "./img/fotodeperfil.jpeg" : "./img/perfil (2).png";

const alert = isLight ? "uma menina na avenida paulista de calça jeans clara e blusa branca em uma foto de corpo todo" : "imagem de perfil de uma menina sorrindo para um bolo de aniversario com uma decoração em prata e branco no fundo";

document.querySelector("#perfil img").setAttribute("src", imagem);
document.querySelector("#perfil img").setAttribute("alt", alert);

}

