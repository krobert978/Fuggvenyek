const nums = ['a', 4, 2, 2, 1, 1];
let sum = 0;

function osszeg() {
  for (let i = 0; i < nums.length; i++) {
    if (typeof (nums[i]) !== 'string') {
      sum = sum + nums[i];
    } else {
      console.log('A tömb ' + (i + 1) + '-ik eleme nem szám');
    }
  }
  console.log('Összeg: ' + sum);
}

osszeg();
