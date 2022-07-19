var firebaseConfig = {
    apiKey: "AIzaSyD7sYHoE8Zpe0taQ92UI130bPUi0IcXBe4",
    authDomain: "twittersonproject.firebaseapp.com",
    databaseURL: "https://twittersonproject-default-rtdb.firebaseio.com",
    projectId: "twittersonproject",
    storageBucket: "twittersonproject.appspot.com",
    messagingSenderId: "405569287006",
    appId: "1:405569287006:web:347d9ce7309e7b096315cf",
    measurementId: "G-60GFEXX0D3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
         
   user_name = localStorage.getItem("user_name");

   document.getElementById("user_name").innerHTML = "Welcome" + user_name +"!";

   function addRoom(){
         room_name = document.getElementById("room_name").value;

         firebase.database().ref("/").child(room_name).update({
               purpose: "adding room name"
         });

         localStorage.setItem("room_name" , room_name);

         window.location  = "kwitter_page.html";
   }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("Room Name -" + Room_names);
row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location = "kwitter_page.html";
}
function logout (){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}