const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 120;

function shadow(e) {
  //   const width = hero.offsetWidth;
  //   const height = hero.offsetHeight;
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;
  console.log(x, y);

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / width) * walk - walk / 2);

  text.style.textShadow = `
  ${xWalk}px ${yWalk}px 0 blue,
  ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,3),
  ${xWalk}px ${yWalk * -1}px 0 pink,
  ${yWalk * -1}px ${xWalk * -1}px 0 rgba(0,255,33,0.3)

  `;
}

hero.addEventListener("mousemove", shadow);
