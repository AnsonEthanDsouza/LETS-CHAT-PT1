
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBJxhr_cWuMp3ojmZ5_J2rb1K2fvjmXGMk",
      authDomain: "kwitter-database-c1424.firebaseapp.com",
      databaseURL: "https://kwitter-database-c1424-default-rtdb.firebaseio.com",
      projectId: "kwitter-database-c1424",
      storageBucket: "kwitter-database-c1424.appspot.com",
      messagingSenderId: "413695109158",
      appId: "1:413695109158:web:f88af49f324120c6491ee7"
    };
     firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
