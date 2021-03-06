var sounds={};


// explosion
addSound(0, [3,0.03,0.3876,0.55,0.3,0.1,,,-0.12,,,,,,,,-0.0569,-0.2958,1,,,,,0.3]);
addSound(0, [3,0.03,0.06,0.12,0.47,0.1,,-0.16,0.12,,,,,,,,-0.0569,-0.2958,1,,,,,0.3]);

// select friendly
addSound(1, [2,,0.183,,0.1518,0.2249,,,,,,,,0.5797,,,,,1,,,0.1,,0.8]);
addSound(1, [2,,0.183,,0.18,0.17,,,,,,,,0.5797,,,,,1,,,0.1,,0.8]);
addSound(1, [2,,0.183,,0.18,0.26,,,,,,,,0.5797,,,,,1,,,0.1,,0.8]);

// select enemy
addSound(2, [0,0.14,0.24,0.58,0.2,0.25,0.06,0.02,0.02,,,,,0.29,-0.1999,,-0.3399,,1,,,0.1,,0.3]);
addSound(2, [0,0.14,0.24,0.58,0.2,0.35,0.17,0.02,0.02,,,,,0.29,-0.1999,,-0.3399,,1,,,0.1,,0.3]);
addSound(2, [0,0.14,0.24,0.58,0.2,0.2,0.09,0.02,0.02,,,,,0.29,-0.1999,,-0.3399,,1,,,0.1,,0.3]);

// planet changed owner
addSound(3, [0,,0.0625,,0.4129,0.2503,,0.391,,,,,,0.4643,,0.6535,,-0.54,1,-0.6599,,,0.76,0.5]);

// fleet send
addSound(4, [0,,0.0199,0.3684,0.3875,0.4292,,,,,,,,,,,,,1,,,,,0.52]);
addSound(4, [0,,0.0199,0.3684,0.3875,0.33,,,,,,,,,,,,,1,,,,,0.52]);

// option on
addSound(5, [0,,0.1777,,0.0022,0.5486,,,,,,,,0.0087,,,,,1,,,0.1,,0.3]);

// option off
addSound(6, [0,,0.1757,,0.0042,0.26,0.18,,,,,,,0.2,,,,,1,,,0.07,,0.3]);
function addSound(key, config) {
  var player = new Audio();
  player.src = jsfxr(config);
  if (typeof sounds[key]==="undefined") {
    sounds[key]=[];
  }
  sounds[key].push(player);
}


function playSnd(sound) {
  if (localStorage.soundOn == 1) {
    var snd = sounds[sound][rndI(0,sounds[sound].length-1)]; // get a random sound
    snd.play();
  }
}
