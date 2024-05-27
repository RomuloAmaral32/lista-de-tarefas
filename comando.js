let contador=0;
let recebe = document.getElementById("ouvinte");
let botao = document.getElementById("adiciona");
let corpo = document.getElementById("areatrabalho")

function novatarefa(){
    let valor=recebe.value;

    if((valor !=="") && (valor !==null) && (valor !==undefined)){
        contador++;
        let codigo=
        `   <div class=" ${contador}" id="pai">
        <div id="bolinha" >
            <i class="bi bi-circle"></i>
        </div>
        <div id="tarefa">
        ${valor}     
        </div>
        <div id="deletar">
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