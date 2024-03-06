import state from "./state.js";
import * as timer from "./timer.js";

export function playTimer() {
  state.isRunning = true;

  timer.countdown();
}

export function stopTimer() {
  state.isRunning = false;
}

export function set() {
  console.log("set");
}
