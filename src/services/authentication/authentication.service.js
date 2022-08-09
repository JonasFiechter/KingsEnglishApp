// Here we are going to input the API that will talk to the firebase
// It needs to be exported and as the version of firebase is 9 it is not ready yet.
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { authentication } from "./firebase.config"

export function signIn() {
  console.log('Signing in')
}

export function register(credentials) {
  createUserWithEmailAndPassword(authentication, credentials.email, credentials.password).then((re) => {
    console.log(`REGISTERING... ${credentials.email} ${credentials.password} ${re}`)
  }).catch((re) => {
    console.log(re)
  })
}