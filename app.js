// JSON - javascript object notation

let filme1 = {
    titulo: "Jurassic Park",
    foto: "filme1.webp",
    avaliacao: "10/10",
    duracao: "1h50m"
}

let filme2 = {
    titulo: "Karate Kid Lendas",
    foto: "filme2.jpg",
    avaliacao: "06/10",
    duracao: "1h30m"
}

let filme3 = {
    titulo: "Lilo e Stitch",
    foto: "filme3.jpg",
    avaliacao: "07/10",
    duracao: "2h00m"
}

let filme4 = {
    titulo: "Pecadores",
    foto: "filme4.jpg",
    avaliacao: "05/10",
    duracao: "2h30m"
}
let filme5 = {
    titulo: "Projeto X",
    foto: "filme5.jpg",
    avaliacao: "10/10",
    duracao: "1h45m"
}

function fnMontarCartao(filmeAtual){
    document.querySelector(".lista-filmes").innerHTML += `
        <div class= "card-filme">
        <img src="img/${filmeAtual.foto}">
        <h3>${filmeAtual.titulo}</h3>
        <span>⭐${filmeAtual.avaliacao}</span>
        </div>
        `
        
}

//DOM - Document Object Model
fnMontarCartao(filme1)
fnMontarCartao(filme2)
fnMontarCartao(filme3)
fnMontarCartao(filme4)
fnMontarCartao(filme5)