const numero1 = document.getElementById("numero1");
const numero2=document.getElementById("numero2");
const bttsomar = document.getElementById("bttsomar")
const bttsubtrair = document.getElementById("bttsubtrair")
const bttmultiplicar = document.getElementById("bttmultiplicar")
const bttsdividir = document.getElementById("bttdividir")
const bttlimpar = document.getElementById("bttlimpar")
const resultado =document.getElementById("resultado");

bttsomar.addEventListener('click', () => {
    let a = parseFloat(numero1.value);
    let b = parseFloat(numero2.value);
    let soma = a + b;

resultado.textContent = `${a} + ${b} = ${soma}`;
})

bttsubtrair.addEventListener('click', () => {
  let a = parseFloat(numero1.value);
  let b = parseFloat(numero2.value);
  let subtrair = a - b;

resultado.textContent = `${a} - ${b} = ${subtrair}`;
})

bttmultiplicar.addEventListener('click', () => {
  let a = parseFloat(numero1.value);
  let b = parseFloat(numero2.value);
  let multiplicar = a * b;

resultado.textContent = `${a} * ${b} = ${multiplicar}`;
})

bttsdividir.addEventListener('click', () => {
  let a = parseFloat(numero1.value);
  let b = parseFloat(numero2.value);
  let dividir = a / b;

resultado.textContent = `${a} / ${b} = ${dividir}`;
})

bttlimpar.addEventListener('click', () => {
  numero1.value=" ";
  numero1.value=" ";
  resultado.textContent=" ";
})

// Copiar para o final do ficheiro script.js 

// Verifica se o navegador suporta Service Workers
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js') // Caminho para o arquivo sw.js
        .then((registration) => {
          console.log('Service Worker registado com sucesso:', registration.scope);
        })
        .catch((error) => {
          console.log('Falha ao registar o Service Worker:', error);
        });
    });
  }    

