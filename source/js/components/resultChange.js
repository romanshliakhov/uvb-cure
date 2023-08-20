const changeBlock = document.querySelector('.results__slider');
const changeBefore = changeBlock.querySelector('.results__before');
const changeBeforeImg = changeBefore.querySelector('picture');
const changeTrigger = changeBlock.querySelector('.results__change');
const body = document.body;

let isActive = false;

document.addEventListener('DOMContentLoaded', () => {
  let width = changeBlock.offsetWidth;
  changeBeforeImg.style.width = `${width}px`;
})

const beforeArterSlider = (x) => {
  let shift = Math.max(0, Math.min(x, changeBlock.offsetWidth));

  changeBefore.style.width = `${shift}px`;
  changeTrigger.style.left = `${shift}px`;

}

const pauseEvents = (e) => {
  e.stopPropagation();
  e.preventDefault();
  return false;
}

body.addEventListener('mousedown', () => {
  isActive = true;
})

body.addEventListener('mouseup', () => {
  isActive = false;
})

body.addEventListener('mouseleave', () => {
  isActive = false;
})


body.addEventListener('mousemove', (e) => {
  if (!isActive) {
    return
  }

  let x = e.pageX;

  x -= changeBlock.getBoundingClientRect().left;
  beforeArterSlider(x);
  pauseEvents(e);
})


body.addEventListener('touchstart', () => {
  isActive = true;
})

body.addEventListener('touchend', () => {
  isActive = false;
})

body.addEventListener('touchcancel', () => {
  isActive = false;
})

body.addEventListener('touchmove', (e) => {
  if (!isActive) {
    return
  }

  let x;
  let i;

  for (i = 0; i < e.changedTouches.lenght; i++) {
    x = e.changedTouches[i].pageX;
  }


  x -= changeBlock.getBoundingClientRect().left;
  beforeArterSlider(x);
  pauseEvents(e);
})

window.onresize = () => {
  let width = changeBlock.offsetWidth;
  changeBeforeImg.style.width = `${width}px`;
};
