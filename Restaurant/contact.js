console.log("hello world");

function check(){
    console.log("inside check function");
    var name = document.getElementById("name").value
    if (name == ""){
        // getElementById('name').style.borderColor = "red";
        alert("Enter a name");
          return false;
      }
      return false;
  }
