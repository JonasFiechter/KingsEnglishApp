// Here we are going to input the API that will talk to the firebase
// It needs to be exported and as the version of firebase is 9 it is not ready yet.
import { useContext } from "react"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { authentication } from "./firebase.config"

export function logInRequest(email, password) {
  console.log('Signing in...')
  console.log(`Inside logInRequest ${email}`)
  signInWithEmailAndPassword(authentication, email, password);
}

export function register(credentials) {
  createUserWithEmailAndPassword(authentication, credentials.email, credentials.password).then((re) => {
    console.log(`REGISTERING... ${credentials.email} ${credentials.password} ${re}`)
  }).catch((re) => {
    console.log(re)
  })
}