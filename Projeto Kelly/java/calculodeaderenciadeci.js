
function porcentagemAderencia(){
    var total = document.getElementsByClassName('linha_tabela').length;
    var qtd_nao = 0;

    for(var i = 0; i < document.getElementsByClassName('linha_tabela').length; i++){

        var check_lista = document.getElementsByName("gender" + i);
        console.log(check_lista);

        if(check_lista[2].checked){
            total -=1;
        }
        else if (check_lista[1].checked){
            qtd_nao += 1;
        }
        
    }

    console.log(qtd_nao);

    if(total <= 0){
        var porcentagem_final = " ";
    }
    else{
        var porcentagem_individual = 100 / total;
        var porcentagem_nao = qtd_nao * porcentagem_individual;
        var porcentagem_adereancia = 100 - porcentagem_nao;
        var porcentagem_final = parseInt(porcentagem_adereancia);

        document.getElementById("calculoTotal").value = porcentagem_final + "%";

    }

}