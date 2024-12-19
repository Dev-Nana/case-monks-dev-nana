document.getElementById("verifyButton").addEventListener("click", function () {
  const num1 = parseInt(document.getElementById("num1").textContent, 10);
  const num2 = parseInt(document.getElementById("num2").textContent, 10);
  const correctResult = num1 + num2;

  const userResult = parseInt(document.getElementById("userResult").value, 10);
  const resultado = document.getElementById("resultado");

  if (userResult === correctResult) {
    resultado.textContent = "Resposta correta!";
    resultado.style.color = "green";
  } else {
    resultado.textContent = "Resposta incorreta.";
    resultado.style.color = "red";
  }
});

const menuToggle = document.getElementById("menu-toggle");
const headerMenu = document.getElementById("header-menu");

menuToggle.addEventListener("click", () => {
  headerMenu.classList.toggle("active");
});

