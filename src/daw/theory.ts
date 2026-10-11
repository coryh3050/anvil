import type { InstrumentId } from "./types";

export function uid(prefix: string): string {
  return `${prefix}_${Math.random().toString(36).slice(2, 10)}`;
}

export function midiToFreq(pitch: number): number {
  return 440 * Math.pow(2, (pitch - 69) / 12);
}

export function noteName(pitch: number): string {
  const names = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  const pc = ((pitch % 12) + 12) % 12;
  const oct = Math.floor(pitch / 12) - 1;
  return `${names[pc]}${oct}`;
}

export function formatPosition(beat: number): string {
  const safe = Math.max(0, beat);
  const bar = Math.floor(safe / 4) + 1;
  const step = Math.floor(safe % 4) + 1;
  return `${String(bar).padStart(2, "0")}.${step}`;
}

export function snapBeat(beat: number, grid = 0.25): number {
  const n = Math.round(beat / grid) * grid;
  return Math.round(n * 1000) / 1000;
}

export function clamp(n: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, n));
}

export function laneClass(instrument: InstrumentId): string {
  switch (instrument) {
    case "drums":
      return "bg-lane-drum";
    case "bass":
      return "bg-lane-bass";
    case "keys":
      return "bg-lane-keys";
    case "lead":
      return "bg-lane-lead";
    case "pad":
      return "bg-lane-pad";
    default:
      return "bg-lane-audio";
  }
}

export function instrumentLabel(instrument: InstrumentId): string {
  switch (instrument) {
    case "drums":
      return "Drums";
    case "bass":
      return "Bass";
    case "keys":
      return "Keys";
    case "lead":
      return "Lead";
    case "pad":
      return "Pad";
    default:
      return "Audio";
  }
}
