const labels = document.querySelectorAll("label");
const inputs = document.querySelector("input");
const formControls = document.querySelectorAll(".form-control");
let count = 1;
labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, index) =>
        `<span style="transition-delay:${20 * index}ms">${letter}</span>`
    )
    .join("");

  label.addEventListener("click", () => {});
});

formControls.forEach((formControl) => {
  formControl.children[1].addEventListener("click", () => {
    formControl.children[0].focus();
  });
});
