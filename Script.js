// Mostrar alerta ao clicar em alguma fruta
document.addEventListener("DOMContentLoaded", () => {
  const frutas = document.querySelectorAll(".fruta");

  frutas.forEach(fruta => {
    fruta.addEventListener("click", () => {
      alert(`Você clicou em: ${fruta.textContent}`);
    });
  });
});
