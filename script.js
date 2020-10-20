// 0 = Online and Open 1 = Whitelisted 2 = In Development 3 = Offline
var status = 0;
function statButton(){
  if(status == 0){
    document.getElementById("status").innerHTML = "Online and Open";
    document.getElementById("status").style.backgroundColor = "grey";
    document.getElementById("status").style.borderBottom = "6px solid green";
}
  if(status == 1){
    document.getElementById("status").innerHTML = "WhiteListed";
    document.getElementById("status").style.backgroundColor = "grey";
    document.getElementById("status").style.borderBottom = "6px solid white";
  }
  if(status == 2){
    document.getElementById("status").innerHTML = "In Development";
    document.gteElementById("status").style.backgroundColor = "grey";
    document.getElementById("status").style.borderBottom = "6px solid orange";
  }
  if(status == 3){
    document.getElementById("status").innerHTML = "Offline";
    document.getElementById("status").style.backgroundColor = "grey";
    document.getElementById("status").style.borderBottom = "6px solid red";
  }
  document.getElementById("undostat").innerHTML = "Hide Status";
  document.getElementById("undostat").style.color = "white";
}
function undoStat(){
  document.getElementById("status").innerHTML = "Click For Server Status";
  document.getElementById("status").style.color = "white";
  document.getElementById("undostat").innerHTML = "";
  document.getElementById("status").style.backgroundColor = "black";
  document.getElementById("status").style.borderBottom = "0px solid white";
}
