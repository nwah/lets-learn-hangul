import { isArray } from 'lodash';
import { Howl } from 'howler';

const basePath = '/audio/';

const cache = {};
const sprite = new Howl({
  urls: [`${basePath}sprite.mp3`],
  volume: 0.2,
  sprite: {
    wrong: [0, 600],
    correct: [1000, 1150],
    ready: [3000, 2000],
    complete: [6000, 1850]
  }
});

export function playEffect(name) {
  sprite.play(name);
}

export function play(file) {
  let cached = cache[file];
  if (cached) cached.play();
  else preload(file, /*autoplay=*/true);
}

export function isPlaying(file) {
  if (!cache[file]) return false;
  return cache[file].isPlaying;
}

export function preload(file, autoplay = false) {
  if (isArray(file)) return file.map(preload);
  cache[file] = new Howl({
    urls: [`${basePath}${file}`],
    autoplay: autoplay === true,
    onplay: () => cache[file].isPlaying = true,
    onend: () => cache[file].isPlaying = false,
  });
}