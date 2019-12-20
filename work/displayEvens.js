function solve() {
var startNumber = Number(document.getElementById("startNumberInput").value);
var endNumber = Number(document.getElementById("endNumberInput").value);
var step = Number(document.getElementById("stepInput").value);

for(i = startNumber; i < endNumber; i = i + step) {
  if (i % 2 == 0) {
document.getElementById("results").innerHTML += i + "</br>";
    }
  }
}
