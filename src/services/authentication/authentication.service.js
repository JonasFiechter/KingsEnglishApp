// Here we are going to input the API that will talk to the firebase
// It needs to be exported and as the version of firebase is 9 it is not ready yet.

const loginRequest = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);