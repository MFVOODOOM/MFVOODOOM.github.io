function rollDice() {
    return (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6 + 1));
}

function check() {
    var bet = Number(document.getElementById("startingBet").value);
    var totalRolls = 0
    var high = 0
    var highCount = 0

    if( bet < 1) {
      document.getElementById("startingBet").value = "SPEND MONEY";
      } else {
            var gameMoney = bet;
            while( gameMoney >= 1){
              totalRolls++
              if(rollDice() == 7) {
                gameMoney= gameMoney + 4;
              }else{
                gameMoney = gameMoney -1;
              }
              if(high < gameMoney) {
                high = gameMoney
                highCount = totalRolls
              }
            }
          }
          show();
          document.getElementById("uno").innerHTML = bet;
          document.getElementById("dos").innerHTML = totalRolls;
          document.getElementById("tres").innerHTML = high;
          document.getElementById("quatro").innerHTML = highCount;
}
function show() {
  document.getElementById("meat").style.display = "block";

}
