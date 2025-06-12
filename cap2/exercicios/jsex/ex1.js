//captar os dados do form e h3 como resposta

const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h2");



//tratar os dados do forms

frm.addEventListener("submit", (e)=>{


    //obter os valores 

    const medicameto = frm.medicine.value;
    const valor = frm.price.value;

    const preco = Math.floor( valor );
    const total = preco * 2;
    // const cents = preco % 100;


    resp1.innerText = ` Promocao de ${medicameto}`; 
    resp2.innerText = `Leve 2 por apenas ${total}`

    e.preventDefault();


})