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
document.addEventListener("DOMContentLoaded", () => {       const modais = document.querySelectorAll('.modal');
  modais.forEach(modal => document.body.appendChild(modal));
element.addEventListener('click', (e) => {
  e.preventDefault();
  abrirModal('modalestado');
});

  const btnEstado = document.getElementById('estado');
  const btnGoverno = document.getElementById('governo');

  if (btnEstado) {
    btnEstado.addEventListener('click', () => abrirModal('modalestado'));
  }

  if (btnGoverno) {
    btnGoverno.addEventListener('click', () => abrirModal('modalgoverno'));
  }
});

function abrirModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.style.display = "flex";
}

function fecharModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.style.display = "none";
}
