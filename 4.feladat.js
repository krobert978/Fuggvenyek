const nums = ['a', 4, 2, 2, 1, 1];
let sum = 0;
let sum1;

function osszeg() {
  for (let i = 0; i < nums.length; i++) {
    if (typeof (nums[i]) !== 'string') {
      sum = sum + nums[i];
    } else {
      console.log('A tömb ' + (i + 1) + '-ik eleme nem szám');
      sum1 = parseInt(nums[i]);
      if (isNaN(sum1) === false) {
        sum = sum + sum1;
      } else {
        console.log('Nem sikerült a konvertálás');
      }
    }
  }
  console.log('Összeg: ' + sum);
}

osszeg();
