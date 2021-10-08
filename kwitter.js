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
var audio1 = document.getElementById("welcome");
function addUser(){
    username = document.getElementById("username").value;

    localStorage.setItem("Username", username);
    
    window.location = "kwitter_room.html";

    audio1.play();

    console.log("Played");
  
}
function views(){
likes = document.getElementById("views").value;
updated_likes=Number(likes) + 1;
firebase.database().ref(username).child(views).update({
    likes:updated_likes
});
document.getElementById("views").innerHTML = updated_likes;
}
