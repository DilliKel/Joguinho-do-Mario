const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");

const jump = () => {
  mario.classList.add("jump"); //adiciona a class jump ao mario pra fazer ele pular

  setTimeout(() => {
    mario.classList.remove("jump"); // remove a class pra ele poder pular dnv
  }, 500);
};

const loop = setInterval(() => {

    console.log('loop')

  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = "${pipePosition}px";

    mario.style.animation = "none";
    mario.style.bottom = "${marioPosition}px";

    mario.src = "./src/images/game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";

    clearInterval(loop);
  }
}, 10);

document.addEventListener("keydown", jump);
