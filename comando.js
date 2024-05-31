let contador = 0;
let recebe = document.getElementById("ouvinte");
let botao = document.getElementById("btn");
let corpo = document.getElementById("areatrabalho");

function tarefaExiste(valor) {
    let tarefas = document.querySelectorAll('.tarefa');
    for (let i = 0; i < tarefas.length; i++) {
        if (tarefas[i].textContent.trim() === valor.trim()) {
            return true;
        }
    }
    return false;
}

function novatarefa() {
    let valor = recebe.value;

    if ((valor !== "") && (valor !== null) && (valor !== undefined)) {
        if (tarefaExiste(valor)) {
            alert("Tarefa já existe!");
            recebe.value = "";
            recebe.focus();
            return;
        }

        contador++;
        let codigo = `
        <div id="${contador}" class="pai">
            <div onclick="marcartarefa(${contador})" class="bolinha">
                <i id="icone_${contador}" class="bi bi-circle"></i>
            </div>
            <div onclick="marcartarefa(${contador})" class="tarefa">
                ${valor}
            </div>
            <div class="deletar">
                <button onclick="apaga(${contador})" id="delete"><i class="bi bi-trash"></i> Delete </button>
            </div>
        </div>`;
        corpo.innerHTML += codigo;
        recebe.value = "";
        recebe.focus();
    } else {
        alert("Não foi adicionada nenhuma tarefa");
    }
}

recebe.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        botao.click();
    }
});

function apaga(atributo) {
    let sla = document.getElementById(atributo);
    if (sla) {
        sla.remove();
    } else {
        console.error("Elemento não encontrado para apagar");
    }
}

function marcartarefa(id) {
    var item = document.getElementById(id);
    if (item) {
        var icone = document.getElementById("icone_" + id);
        if (icone) {
            if (!item.classList.contains("paiclick")) {
                item.classList.add("paiclick");
                icone.classList.remove('bi', 'bi-circle');
                icone.classList.add('bi', 'bi-check-circle-fill');
                item.parentNode.appendChild(item);
            } else {
                item.classList.remove("paiclick");
                icone.classList.remove('bi', 'bi-check-circle-fill');
                icone.classList.add('bi', 'bi-circle');
            }
        } else {
            console.error("Ícone não encontrado");
        }
    } else {
        console.error("Elemento não encontrado para marcar tarefa");
    }
}
