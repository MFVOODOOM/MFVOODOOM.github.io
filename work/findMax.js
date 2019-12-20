var nums = [12,233,5,59,90,614,322];

var max = 0
for( var arrayPosition = 0; arrayPosition < nums.length; arrayPosition++) {

  var currentNum = nums[arrayPosition];
  var nextNum = nums[arrayPosition + 1];

  if (max < nums[arrayPosition]){

      max = nums[arrayPosition]
    }

  // if(currentNum < nextNum){
  //   splice(currentNum);
  //   }
  //   else {
  //     splice(nextNum);
  //
    }
 console.log(max)

// console.log("hello")
