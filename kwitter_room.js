
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDM7gZQpHHs2UoXyv-F4Po9aHkzc2mFoLA",
      authDomain: "kwitter-database-dc2be.firebaseapp.com",
      databaseURL: "https://kwitter-database-dc2be-default-rtdb.firebaseio.com",
      projectId: "kwitter-database-dc2be",
      storageBucket: "kwitter-database-dc2be.appspot.com",
      messagingSenderId: "1014999291327",
      appId: "1:1014999291327:web:b1fd5986014a12461d3d0a"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
    username = localStorage.getItem("Username");
 
function welcome(){
      audio1 = document.getElementById("welcome_message");
      document.getElementById("username").innerHTML = "Welcome " + username + "!!!";
      audio1.play();
}
    function addRoom(){
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose : "adding room name"
        });
        localStorage.setItem("room_name", room_name);
        window.location = "kwitter_page.html";
    }

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot) {
                  childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room name - " + Room_names);
      row = "<div class = 'room_name' id=" + Room_names + "onclick = 'RedirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function RedirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("Username");
      window.location = "index.html";
}