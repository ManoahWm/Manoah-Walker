var num1 = null, num2 = null, opc = null, num3 = null, num4 = null, opc2 = null;


// numeros//
function adicionarNaTela9(valor){
    document.getElementById("tela").value += valor;
}
function adicionarNaTela8(valor){
    document.getElementById("tela").value += valor;
}
function adicionarNaTela7(valor){
    document.getElementById("tela").value += valor;
}
function adicionarNaTela6(valor){
    document.getElementById("tela").value += valor;
}
function adicionarNaTela5(valor){
    document.getElementById("tela").value += valor;
}
function adicionarNaTela4(valor){
    document.getElementById("tela").value += valor;
}
function adicionarNaTela3(valor){
    document.getElementById("tela").value += valor;
}
function adicionarNaTela2(valor){
    document.getElementById("tela").value += valor;
}
function adicionarNaTela1(valor){
    document.getElementById("tela").value += valor;
}
function adicionarNaTela0(valor){
    document.getElementById("tela").value += valor;
}



// escolher operação//
function escolherOperacao(operacaoEscolhida){
    num1 = parseFloat(document.getElementById("tela").value);
    opc = operacaoEscolhida;
    limpartela();
}

// limpar tela
function limpartela(){
    document.getElementById("tela").value = "";
}

// calcular
function calcularResultado(){
    num2 = parseFloat(document.getElementById("tela").value);
    var resultado = null;

    if(opc == '+'){
        resultado = num1 + num2;
    }
    else if(opc == '-'){
        resultado = num1 - num2;
    }
    else if(opc == '*'){
        resultado = num1 * num2;
    }
    else if(opc == '/'){
        resultado = num1 / num2;
    }
    

    document.getElementById("tela").value = resultado;
}
// apagar//

function apagar(){
    document.getElementById("tela").value = null;
}
function adicionarNaTelaPonto(){
    document.getElementById("tela").value += '.';
}

// calculadora 2//

function adicionarNaTela29(valor){
    document.getElementById("tela2").value += valor;
}
function adicionarNaTela28(valor){
    document.getElementById("tela2").value += valor;
}
function adicionarNaTela27(valor){
    document.getElementById("tela2").value += valor;
}
function adicionarNaTela26(valor){
    document.getElementById("tela2").value += valor;
}
function adicionarNaTela25(valor){
    document.getElementById("tela2").value += valor;
}
function adicionarNaTela24(valor){
    document.getElementById("tela2").value += valor;
}
function adicionarNaTela23(valor){
    document.getElementById("tela2").value += valor;
}
function adicionarNaTela22(valor){
    document.getElementById("tela2").value += valor;
}
function adicionarNaTela21(valor){
    document.getElementById("tela2").value += valor;
}
function adicionarNaTela20(valor){
    document.getElementById("tela2").value += valor;
}

// escolher operação//
function escolherOperacao2(operacaoEscolhidadasegunda){
    num3 = parseFloat(document.getElementById("tela2").value);
    opc2 = operacaoEscolhidadasegunda;
    limpartela2();
}
// limpar tela 2 
function limpartela2(){
    document.getElementById("tela2").value = "";
}
// calcular2
function calcularResultado2(){
    num4 = parseFloat(document.getElementById("tela2").value);
    var resultado2 = 0;

    if(opc2 == '+'){
        resultado2 = num3 + num4;
    }
    else if(opc2 == '-'){
        resultado2 = num3 - num4;
    }
    else if(opc2 == '*'){
        resultado2 = num3 * num4;
    }
    else if(opc2 == '/'){
        resultado2 = num3 / num4;
    }
    document.getElementById("tela2").value = resultado2;
}  

// apagar//

function apagar2(){
    document.getElementById("tela2").value = null;
}
function adicionarNaTelaPonto2(){
    document.getElementById("tela2").value += '.';
}
