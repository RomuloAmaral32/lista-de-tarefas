let contador=0;
let recebe = document.getElementById("ouvinte");
let botao = document.getElementById("btn");
let corpo = document.getElementById("areatrabalho")

function novatarefa(){
    let valor=recebe.value;

    if((valor !=="") && (valor !==null) && (valor !==undefined)){
        contador++;
        let codigo=
        `   <div id="${contador}" class="pai">
        <div class="bolinha" >
            <i class="bi bi-circle"></i>
        </div>
        <div class="tarefa">
        ${valor}
        </div>
        <div class="deletar">
        <button id="delete"><i class="bi bi-trash"></i> Delete </button>
        </div>
        </div>`;
        corpo.innerHTML +=codigo;
        recebe.value="";
        recebe.focus();

    }
    else{
        alert("nao foi adicionada nenhuma tarefa");
    }
   
}
recebe.addEventListener("keyup",function (event){
    if(event.keyCode === 13){
        event.preventDefault();
        botao.click();
    }
});
function apaga(atributo) {
    let sla = document.getElementsByClassName(atributo);
    if (sla.length > 0) {
        sla[0].remove();
    }
}
