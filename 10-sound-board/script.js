import Sounds from "./sounds.json" assert { type: "json" };
const body = document.querySelector("body");
body.innerHTML = Sounds.map(
  (sound) => `<button>${sound.name}<audio src=${sound.path}></audio></button>`
).join("");

const buttons = document.querySelectorAll("button");
const audios = document.querySelectorAll("audio");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    audios.forEach((audio) => {
      audio.pause();
      audio.currentTime = 0;
    });
    button.children[0].play();
  });
});
