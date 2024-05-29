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
        <div onclick="marcartarefa(${contador})" class="bolinha" >
            <i class="bi bi-circle"></i>
        </div>
        <div onclick="marcartarefa(${contador})" class="tarefa">
        ${valor}
        </div>
        <div class="deletar">
        <button onclick="apaga(${contador})" id="delete"><i class="bi bi-trash"></i> Delete </button>
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
    let sla = document.getElementById(atributo);
    sla.remove();
}function marcartarefa(id){
    var item=document.getElementById(id);
    var classe= item.getAttribute("class");
    console.log(classe);
    if(classe=="item"){
        item.classList.add("paiclick");

    }
}

