
const names = ['István', 'Katalin', 'Attila', 'Gábor', 'Péter', 'Anna', 'Kitti'];
let j = 0;

function nameCheck() {
  for (let i = 0; i < names.length; i++) {
    if (names[i] === 'Gábor') {
      j = 1;
      console.log('A tömbben van Gábor.');
      console.log('A tömb ' + (i + 1) + '-ik eleme Gábor');
    }
  }
  if (j === 0) {
    console.log('A tömbben nincs Gábor.');
  }
}

nameCheck();