import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/Firebase.Config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [loading, setloading] = useState(true);
  const [Doctors, setDoctors] = useState([]);
  const [Speciality, setSpeciality] = useState([]);
  const [user, setuser] = useState();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const emailAndPasswordLogin = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    setloading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const githubLogin = () => {
    setloading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const logOut = () => {
    setloading(true);
    return signOut(auth);
  };

  // update profile
  const updateUserProfile = (obj) => {
    setloading(true);
    return updateProfile(auth.currentUser, obj);
  };

  const ResetPassword = (email) => {
    setloading(true);
    return sendPasswordResetEmail(auth, email);
  };

  const url = "http://localhost:5000/doctors";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, [url]);

  useEffect(() => {
    fetch("http://localhost:5000/speciality")
      .then((res) => res.json())
      .then((data) => setSpeciality(data));
  }, []);

  useEffect(() => {
    const unsebscribe = onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser);
      setloading(false);
    });

    return () => {
      unsebscribe();
    };
  }, []);

  const Info = {
    updateUserProfile,
    ResetPassword,
    loading,
    setloading,
    user,
    createUser,
    githubLogin,
    googleLogin,
    emailAndPasswordLogin,
    logOut,
    Doctors,
    Speciality,
  };

  return <AuthContext.Provider value={Info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
