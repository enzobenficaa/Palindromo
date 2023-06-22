// Criamos um prompt para o usuario digitar uma palavra qualquer
let palavra = prompt("Informe uma palavra:");
// Criamos uma variavel que será a palavra digitada ao contrario
let palavraInvertida = "";
// Aqui onde criamos a palavra invertida
// Onde fazemos um for "ao contrario"
// Vamos colocar que o valor do nosso contador é o tamanho da palavra digitada
// Logo o for vai criar a palavra invertida
for (let i = palavra.length - 1; i >= 0; i--) {
  palavraInvertida += palavra[i];
}
// Aqui se a palavra digitada for igual ao resultado da palavra invertida pelo for
if (palavra === palavraInvertida) {
  // Tem a mensagem que essa palavra é um palindromo
  alert(palavra + " é um palindromo");
} else {
  // Se ela não for tambem, temos uma mensagem dizendo que as palavras são diferentes
  alert(
    palavra + " não é um palindromo!\n\n" + palavra + " !== " + palavraInvertida
  );
}
