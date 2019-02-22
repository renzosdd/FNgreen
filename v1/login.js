var inputEmail = document.getElementById('inputEmail').nodeValue;
var inputLogin = document.getElementById('inputPassword').nodevalue;  
alert(inputEmail + inputLogin + "hola");

function myFunction(){
    alert(inputEmail + inputLogin + "Nono");
}

/* firebase.auth().signInWithEmailAndPassword(inputEmail, inputLogin).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
      }); */

/* function verBtn(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log("El user está autenticado con identificador: ", user.uid);
        } else {
            console.log("No hay usuario logueado")
        }
      }); 
} */

/* function salirBtn(){
    firebase.auth().signOut().then(function() {
        console.log("Salio")
      }).catch(function(error) {
        console.log("Error")
      });
} */

