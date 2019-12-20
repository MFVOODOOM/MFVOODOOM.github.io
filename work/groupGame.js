
// var i = 0;
function start() {
  document.getElementById("quiz").style.display = "block";
}

// function tryAgain(){
  // for (var i = 0; i <= 3; i++){
    // if(count < 3)

function check1() {
  var ans1 = Number(document.getElementById("answer1").value);

   for(var i = 0; i < 3; i++){
    if(ans1 != 5040){
      alert ("You have " + i + "tries  ")
    }else (ans1 == 5040) {
     alert ("YOU GOT IT!")
      // alert ("The answer is ")

    }
}





 function check2() {
  var ans2 = Number(document.getElementById("answer2").value);
  if(ans2 == 21 ) {
     alert("YOU GOT IT!")
  } else {
    alert("Try Again!!.")
  }
}

function check3() {
  var ans3 = Number(document.getElementById("answer3").value);
  if(ans3 == 6 ) {
     alert("YOU GOT IT!")
  } else {
    alert("Try Again!!.")
  }
}


function clears() {
  document.getElementById("quiz").style.display = "none";
}
