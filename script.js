function abrirComprovante(caminho) {
  const modal = document.getElementById("modal");
  const imagem = document.getElementById("imagemComprovante");

  imagem.src = caminho;
  modal.style.display = "flex";
}

function fecharComprovante() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}
