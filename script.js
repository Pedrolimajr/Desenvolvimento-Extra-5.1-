
//Elemento h1.

// Criar o elemento
const hUm = document.createElement('h1');
console.log(hUm)

//Manipular o elemento
hUm.innerText = "Esse é um elemento h1."


//Adicionar o elemento ao DOM

const elementoTitulo = document.querySelector('h1')
elementoTitulo.appendChild(elementoTitulo);
console.log(elementoTitulo)

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

//Elemento a.

// Criar o elemento
const tagA = document.createElement('a');
console.log(hUm)

//Manipular o elemento
tagA.innerText = "Esse é um elemento a."

//Adicionar o elemento ao DOM

const elementoBody = document.querySelector('body')
elementoBody.appendChild(elementoBody);
console.log(elementoBody)

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

//Elemento ul.

// Criar o elemento
const listaNaoOrdenada = document.createElement('ul');
console.log(listaNaoOrdenada);

//Manipular o elemento
listaNaoOrdenada.innerHTML = `Primeiro item da lista: <li>Primeiro item</li> Segundo item da lista: <li>Segundo item</li> Terceiro item da lista: <li>Terceiro item da</li>`


//Adicionar o elemento ao DOM

const elementoUl = document.querySelector('ul')
elementoUl.appendChild(elementoUl);
console.log(elementoUl)

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

//Elemento ol.

// Criar o elemento
const listaOrdenada = document.createElement('ol');
console.log(listaOrdenada);

//Manipular o elemento
listaOrdenada.innerHTML = `<li>https://www.google.com.br/</li>
<li>https://www.w3.org/</li>
<li>https://www.youtube.com/</li>`


//Adicionar o elemento ao DOM

const elementoOl = document.querySelector('ol')
elementoOl.appendChild(elementoOl);
console.log(elementoOl)




