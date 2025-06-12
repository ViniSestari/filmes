
async function fnPegarFilmes(){
let filmes = await fetch ("dados-filmes.json")
let filmesTratados = await filmes.json()
dilmesTratados.forEach((filmeAtual)=>{
    console.log(filmeAtual)
})

fnPegarFilmes()
console.log("oi")