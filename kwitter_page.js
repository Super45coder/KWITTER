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
function send_message(){
      msg = document.getElementById("msg").value;
    if (msg != ""){
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

//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("Username");
      window.location = "index.html";
}