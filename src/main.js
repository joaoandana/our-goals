import * as elements from "./elements";
import { metas } from "./metas";
import { password } from "./password";

elements.showMusic.addEventListener("click", () => {
  elements.playerMusic.classList.toggle("d-none");
  elements.showMusic.classList.toggle("hidden");

  const isPlayerHidden = elements.showMusic.classList.contains("hidden");
  if (isPlayerHidden) {
    elements.showMusicIcon.setAttribute("src", "./images/show.png");
  } else {
    elements.showMusicIcon.setAttribute("src", "./images/hidden.png");
  }
});

setTimeout(() => {
  document.querySelector('[title="Play"]').click();
}, 5000);

function validateSenha() {
  const inputIdValue = elements.inputId.value;
  const inputPasswordValue = elements.inputSenha.value;

  if (inputIdValue == undefined || inputPasswordValue == false) {
    elements.statusCore.classList.add("wrong");
    elements.statusCore.textContent = "Digite os valores";
    return [];
  } else {
    elements.statusCore.classList.remove("wrong", "correct");
  }

  if (password[inputIdValue] == inputPasswordValue) {
    return [true, inputIdValue];
  } else {
    return [false];
  }
}

function showObj() {
  const [validation, objID] = validateSenha();

  if (validation == true) {
    elements.statusCore.classList.add("correct");
    elements.statusCore.textContent = metas[objID];
  } else if (validation == false) {
    elements.statusCore.classList.add("wrong");
    elements.statusCore.textContent = "Senha errada";
  }
  elements.inputSenha.value = "";
}

elements.buttonValidate.addEventListener("click", showObj);
elements.inputSenha.onkeydown = event => {
  if (event.key === "Enter") {
    showObj();
  }
};
