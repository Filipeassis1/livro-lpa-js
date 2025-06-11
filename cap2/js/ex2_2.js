// converter a duracao de um filme





//referencias ao formulario e as tags h3 e h4

const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");



//criar a acao quando o submit for clicado.

frm.addEventListener("submit", (e) => {

    //obtem os valores dos campos 

    const titulo = frm.filmeId.value;
    const time = Number(frm.duracaoId.value);


    //converter o tempo do filme 

    const horas = Math.floor(time/60);
    const minutos = time % 60

    resp1.innerText = titulo;
    resp2.innerText = `${horas} Hora(s) e ${minutos} minuto(s)`

    e.preventDefault();



})

