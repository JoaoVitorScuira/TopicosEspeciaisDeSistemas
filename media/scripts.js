function calcularMedia(){

    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let media = (nota1+nota2)/2;

    const para = document.createElement('div');

    para.textContent = media;

    document.getElementById("resultado").appendChild(para);

    if (media>=6){
        para.textContent = "Aprovado! Média: " + media;
        document.getElementById("resultado").appendChild(para);
    }else{
        para.textContent = "Reprovado! Média: " + media;
        document.getElementById("resultado").appendChild(para);
    }


}