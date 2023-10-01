const changeThemeBtn = document.querySelector("#change-theme");

// Criando uma função altera todas as classes para o dark quando esta ativado
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// Quando o site recarregar o site fica no modo que o usuario escolheu
function loadTheme() {
  const darkMode = localStorage.getItem("dark");

  if (darkMode) {
    toggleDarkMode();
  }
}

loadTheme();

changeThemeBtn.addEventListener("change", function () {
  toggleDarkMode();

  // Salvando o modo que o usuario escolheu
  localStorage.removeItem("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark", 1);
  }
});

function dados() {

  // Recebe a senha digitada pelo usuario no momento do cadastro
  let x = document.getElementById("senha").value;

  // Válidando a senha criada pelo usuario
  let text;
  if (isNaN(x) || x < 1000 || x > 1000000) {
    text = "Senha inválida";
  } 
  
  else {
    text = "Senha válida";
  }

  document.getElementById("resposta-senha").innerHTML = text;
}