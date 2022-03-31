const config = {
      apiKey: "AIzaSyDPpAOuJy4HLtTrTGpAwTVE3_1fzaJSrb8",
      authDomain: "c-93kwitter-eddb8.firebaseapp.com",
      databaseURL: "https://c-93kwitter-eddb8-default-rtdb.firebaseio.com",
      projectId: "c-93kwitter-eddb8",
      storageBucket: "c-93kwitter-eddb8.appspot.com",
      messagingSenderId: "246924069712",
      appId: "1:246924069712:web:40fafce85ae8f358327a55",
    };
    
    // Initialize Firebase
    firebase.initializeApp(config);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      })

      localStorage.setItem("room_name" ,room_name)
      window.location="kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - "+ Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });
});
}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}