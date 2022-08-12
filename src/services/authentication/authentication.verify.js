import React from "react";
import { AuthenticationContext } from "./authentication.context";

//  This module should receive the credentials for authentication and return any kind of typo error
// or correct then right away if they are uppercase on email or some space or anything like that
export function verifyCredentials(credentials) {
    console.log(credentials)
}