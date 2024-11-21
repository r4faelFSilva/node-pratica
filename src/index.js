const fs = require('fs');


const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (erro, texto) => {
 contaPalavras(texto);
  }
)

function contaPalavras(texto){
  const paragrafos = extraiParagrafos(texto);
  const contagem = paragrafos.flatMap((paragrafos) => {
    if (!paragrafos) return [];
    return verificaPalavrasDuplicadas(paragrafos);
 })
   console.log(contagem);
}

function extraiParagrafos(texto){
  return texto.toLowerCase().split('\n');
}

function limpaTexto(palavra){
  return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

function verificaPalavrasDuplicadas(texto){
  const listaPalavras = texto.split(' ');
  const resultado = {};
  listaPalavras.forEach(palavra => {
    if (palavra.length >= 3){
      const textoLimpo = limpaTexto(palavra);
      resultado[textoLimpo] = (resultado[textoLimpo] || 0) + 1
    }
  })
    return resultado;
}