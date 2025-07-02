const form = document.querySelector('form');



let respostaMedia = document.querySelector('h3');
let repap = document.querySelector('h4');



form.addEventListener('submit', (e) =>{ 
    e.preventDefault();
    let nome = form.seuNome.value;

    let n1 = Number(form.inNota1.value);
    let n2 = Number(form.inNota2.value);

    let media = (n1 + n2) / 2;

    respostaMedia.innerHTML = `Media das notas: ${media}`

    if (media <= 5){
        repap.innerHTML = `${nome} voce esta Reprovado!`
    } else {
        repap.innerHTML = `${nome} voce esta Aprovado!`
    }

})
