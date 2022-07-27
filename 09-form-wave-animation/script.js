const labels = document.querySelectorAll("label");
const inputs = document.querySelector("input");
let count = 1;
labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map((letter) => `<span>${letter}</span>`)
    .join("");
});

const spans = document.querySelectorAll(".form-control span");
console.log(spans);

spans.forEach((span) => {
  span.classList.toggle("up");
});

function performAnimation() {
  spans.forEach((span) => {
    setTimeout(() => {
      span.classList.toggle("up");
    }, 50 * count++);
  });
}

inputs.addEventListener("click", () => {
  performAnimation();
});
