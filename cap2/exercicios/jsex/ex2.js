const frm = document.querySelector("form");
const rsp = document.querySelector("h3");


frm.addEventListener("submit", (e) => {

    let valor = Number(frm.priceMinute.value);
    let uso = Number(frm.useTime.value);



    const bloco15 = Math.ceil(uso/15);


    let total = bloco15 * valor;


    rsp.innerText = `Valor a pagar R$: ${total.toFixed(2)}`

    e.preventDefault();
})