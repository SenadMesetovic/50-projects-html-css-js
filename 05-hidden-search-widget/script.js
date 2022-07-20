const btn = document.querySelector("button");
const input = document.querySelector("input");

btn.addEventListener("click", () => {
  input.classList.toggle("active");
  input.focus();
});
