import state from "./state.js";
import * as timer from "./timer.js";
import * as el from "./elements.js";

export function playTimer() {
  state.isRunning = true;

  timer.countdown();
}

export function stopTimer() {
  state.isRunning = false;
}

export function set() {
  el.minutes.setAttribute("contenteditable", true);
  el.minutes.focus();

  // el.seconds.setAttribute("contenteditable", true);
  // el.seconds.focus();
}
export function add() {
  state.minutes = Number(state.minutes) + 5;
  timer.updateDisplay();
}

export function minus() {
  if (state.minutes >= 5) {
    state.minutes = Number(state.minutes) - 5;
  }

  timer.updateDisplay();
}
