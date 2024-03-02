import { auth } from "./firebase";

import {
  createUserWithEmailAndPassword as _createUserWithEmailAndPassword,
  signInWithEmailAndPassword as _signInWithEmailAndPassword,
} from "firebase/auth";

const createUserWithEmailAndPassword = (email: string, password: string) =>
  _createUserWithEmailAndPassword(auth, email, password);

const signInWithEmailAndPassword = (email: string, password: string) =>
  _signInWithEmailAndPassword(auth, email, password);

const signOut = () => auth.signOut();

export { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut };
