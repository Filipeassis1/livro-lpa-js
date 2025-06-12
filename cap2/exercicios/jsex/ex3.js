const frm = document.querySelector("form");
const rsp1 = document.querySelector("h2");
const rsp2 = document.querySelector("h3");



frm.addEventListener("submit", (e) =>{

    const item = frm.product.value;
    const valor = Number(frm.price.value);


    const promo = (valor / 2 );

    const prod = (valor * 2) + promo;


    rsp1.innerText =`${item} - Promo: Leve 3 e pague R$: ${prod.toFixed(2)}`
    rsp2.innerText =`O terceiro produto sai por R$: ${promo.toFixed(2)}`

    e.preventDefault();


})