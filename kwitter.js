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

var views = 0;
var username = localStorage.getItem("Username");
function addUser(){
    username = document.getElementById("username").value;

    localStorage.setItem("Username", username);
    
    window.location = "kwitter_room.html";

    console.log("Played");
  
}
function counting_views(){
views = document.getElementById("views").value;
updated_views = Number(views) + 1;
firebase.database().ref(username).child(views).update({
   views:updated_views
});
document.getElementById("views").innerHTML = updated_views;
}
