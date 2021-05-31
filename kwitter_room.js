
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCryquNXKLSjghXkQ4ddBwZ6OOVQnavvOE",
      authDomain: "let-s-chat-19ce6.firebaseapp.com",
      projectId: "let-s-chat-19ce6",
      storageBucket: "let-s-chat-19ce6.appspot.com",
      messagingSenderId: "194534086657",
      appId: "1:194534086657:web:f1dda659ce47fabece0800"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
