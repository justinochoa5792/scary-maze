const levelOne = document.querySelector(".level-one");
const levelTwo = document.querySelector(".level-two");

const nxtBtn = document.querySelector(".next-button");

const uiLevel = document.querySelector(".ui-level");
const uiMessage = document.querySelector(".ui-message");

const spookyPicture = document.querySelector(".spooky-picture");
const screamSound = document.querySelector(".scream-sound");

function collisionCheck(value) {
  if (value === "maze-border") {
    alert("You lost ... try again");
  }
  if (value === "finish") {
    nxtBtn.style.opacity = 1;
    nxtBtn.style.pointerEvents = "all";
    levelOne.style.pointerEvents = "none";
  }
  if (value === "end-game") {
    screamSound.play();
    spookyPicture.style.display = "block";
    document.body.style.background = "black";
  }
}

window.addEventListener("mousemove", (e) => {
  let check = e.target.classList.value;
  collisionCheck(check);
});

nxtBtn.addEventListener("click", () => {
  levelOne.style.display = "none";
  levelTwo.style.display = "block";
  nxtBtn.style.opacity = 0;
  nxtBtn.style.pointerEvents = "none";
  uiLevel.textContent = "Level 2";
  uiMessage.textContent = "One more to go...";
});
