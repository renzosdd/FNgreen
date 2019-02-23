/*firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // Hay usuario logueado
    var user = firebase.auth().currentUser;
    //console.log("Hay usuario");
    if(user != null){

      var email_id = user.email;
    }

  } else {
    // No hay usuario logueado
    //console.log("Nohayusuario" +email_id);
  }
});
*/
function login(){
  var userEmail = document.getElementById("inputEmail").value;
  var userLogin = document.getElementById('inputPassword').value; 
  window.alert(userEmail + userLogin);
  window.location.href ="./indexx.html"; 
  /*firebase.auth().signInWithEmailAndPassword(userEmail, userLogin).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error : " + errorMessage);
  });
  
  //window.alert(userEmail + " -- " + userLogin);
  */
}



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