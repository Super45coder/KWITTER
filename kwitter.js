
var username = localStorage.getItem("Username");
function addUser(){
    username = document.getElementById("username").value;

    localStorage.setItem("Username", username);
    
    window.location = "kwitter_room.html";

    console.log("Started");
  
}

