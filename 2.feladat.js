
const nums = [4, 2, 2, 1, 1];
let sum = 0;

function osszeg() {
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }
  console.log('Összeg: ' + sum);
}

osszeg();