audio1 = document.getElementById("welcome");
function addUser(){
    username = document.getElementById("username").value;

    localStorage.setItem("Username", username);
    
    window.location = "kwitter_room.html";

    audio1.play();

    console.log("Played");
  
}