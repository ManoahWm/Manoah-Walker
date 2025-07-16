// Variaveis para as opções
var quantidade_a = 0;
var quantidade_b = 0;
var quantidade_c = 0;
var quantidade_d = 0;
var quantidade_e = 0;

// Função para cada select
function contarOpcao(select) {
    if (select.value == 'a') {
        quantidade_a++;
    }else if (select.value == 'b') {
        quantidade_b++;
    }else if (select.value == 'c') {
        quantidade_c++;
    }else if (select.value == 'd') {
        quantidade_d++;
    }else if (select.value == 'e') {
        quantidade_e++;
}
}
function lerSelects(){
    // Pega todos os <select> da página e guarda em uma variavel
    const selects = document.querySelectorAll('select');
    // Percorre cada select usando forEach (parecido com loop)
    selects.forEach(contarOpcao);
    

    atualizarPorcentagem();
    
}

function atualizarPorcentagem(){
    const skillBar = document.getElementById('exatas');
    const skillBar2 = document.getElementById('artes');
    const skillBar3 = document.getElementById('saude');
    const skillBar4 = document.getElementById('ciencias');
    const skillBar5 = document.getElementById('gestao');
    // Multiplicando por 10 pq temos 10 questões, mudem se tiverem números diferentes.
    skillBar.style.width = quantidade_a*10+'%';
    skillBar.innerHTML = quantidade_a*10+'%';

    skillBar2.style.width = quantidade_b*10+'%';
    skillBar2.innerHTML = quantidade_b*10+'%';

    skillBar3.style.width = quantidade_c*10+'%';
    skillBar3.innerHTML = quantidade_c*10+'%';

    skillBar4.style.width = quantidade_d*10+'%';
    skillBar4.innerHTML = quantidade_d*10+'%';

    skillBar5.style.width = quantidade_e*10+'%';
    skillBar5.innerHTML = quantidade_e*10+'%';
}