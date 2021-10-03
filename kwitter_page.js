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

room_name = localStorage.getItem("room_name");
username = localStorage.getItem("Username");
like = 0;

function send_message(){
    if (msg != ""){
      msg = document.getElementById("msg").value;
      document.getElementById("msg").value = "";
      firebase.database().ref(room_name).push({
            name: username,
            message:msg, 
            like:0
          });
    }
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { 
      document.getElementById("output").innerHTML = ""; 
      snapshot.forEach(function(childSnapshot) { 
            childKey  = childSnapshot.key; 
            childData = childSnapshot.val(); 
            if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
name = message_data["name"]; 
msg = message_data["message"]; 
like = message_data["like"];
nametag = "<h4>" + name + "<img src='tick.png' class='user_tick'></h4>";
message_tag = "<h4>" + msg + "</h4>";
like_tag = "<button id=" + firebase_message_id + " value = " + like + " onclick='like_function(this.id)'>Like = " + like + "</button></hr>";
row = nametag + message_tag + like_tag;
document.getElementById("output").innerHTML += row + "<hr/>";
//End code
      } });  }); }
getData();

//Like function
function like_function(message_id){
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    console.log(updated_likes);
    firebase.database().ref(room_name).child(message_id).update({
      like:updated_likes
    });
}
function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("Username");
      window.location = "index.html";
}