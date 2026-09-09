    const btndeputado = document.getElementById("btn-deputado");
    if(btndeputado){btndeputado.addEventListener("click", () => {
    window.location.href = "index2.html";
});
}
    const btnvolta = document.getElementById("btn-volta");
    if(btnvolta){ btnvolta.addEventListener("click", () => {
        window.location.href = "index.html";
    });
}
    const btnavança = document.getElementById('btn-avança');
    if(btnavança){ btnavança.addEventListener('click', () => {
    window.location.href = 'index3.html';
    });
}
    const bttvolta = document.getElementById('btt-volta');
    if(bttvolta){ bttvolta.addEventListener('click', () => {
    window.location.href = 'index2.html'
    });
}
        const btndark = document.getElementById("btn-dark");
    if (btndark){ btndark.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
}
    let darkmode = false;
    function dark() {
        const icone = document.getElementById("icone");
        if (icone.src.includes("brilho-do-sol")) {
            icone.src = "../imagem/forma-de-meia-lua20x20.png";
            darkmode = true;
        } else {
            icone.src = "../imagem/brilho-do-sol20x20.png";
            darkmode = false;
        }  
    }
function abrirModal(id) {
    document.getElementById(id).style.display = "flex";
}

function fecharModal(id) {
    document.getElementById(id).style.display = "none";
}
document.getElementById('estado').addEventListener('click', () => {
    abrirModal('modalestado');
});
document.getElementById('governo').addEventListener('click', () => {
    abrirModal('modalgoverno');
});
