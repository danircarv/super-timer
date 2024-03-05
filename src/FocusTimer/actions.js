import state from "./state.js";
import * as timer from "./timer.js";

export function toggleRunning() {
  state.isRunning = !state.isRunning;

  timer.countdown();
}

export function set() {
  console.log("set");
}
