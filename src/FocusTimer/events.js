import { controls } from "./elements.js";
import * as actions from "./actions.js";
import * as el from "./elements.js";
import state from "./state.js";
import { updateDisplay } from "./timer.js";

export function registerControls() {
  controls.addEventListener("click", (event) => {
    const action = event.target.dataset.action;
    if (typeof actions[action] != "function") {
      return;
    }

    actions[action]();
  });
}

export function setMinutes() {
  el.minutes.addEventListener("focus", () => {
    el.minutes.textContent = "";
  });

  el.minutes.addEventListener("keydown", (event) => {
    if (!/\d/.test(event.key) && event.key !== "Backspace") {
      event.preventDefault();
    }
  });

  el.minutes.addEventListener("blur", (event) => {
    let time = event.currentTarget.textContent;
    time = time > 60 ? 60 : time;

    state.minutes = time;
    state.seconds = 0;
  });
}

// export function setSeconds() {
//   el.seconds.addEventListener("focus", () => {
//     el.seconds.textContent = "";
//   });

//   el.seconds.addEventListener("keydown", (event) => {
//     if (!/\d/.test(event.key) && event.key !== "Backspace") {
//       event.preventDefault();
//     }
//   });

//   el.seconds.addEventListener("blur", (event) => {
//     let timeS = event.currentTarget.textContent;
//     timeS = timeS > 60 ? 60 : timeS;

//     state.seconds = timeS;
//   });
// }
