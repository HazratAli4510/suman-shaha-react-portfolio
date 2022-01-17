import { useEffect, useState } from "react"
import firebaseInitialization from "../firebase/firebase.init"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, signInWithEmailAndPassword, FacebookAuthProvider } from "firebase/auth";



firebaseInitialization()

const useFirebase = () => {
    const [user, setUser] = useState(null)


    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const auth = getAuth();

    // Sign in using google
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {

            }).catch(error => {
                console.log(error)
            })
    }

    // sign out
    const signOutUser = (navigate) => {
        signOut(auth).then(() => {
            setUser(null)
            navigate("/")
        }).catch((error) => {
            // An error happened.
        });
    }

    //sign in with email and password
    const signUpWithEmail = (email, password, setError, name, setisMailSent, navigate) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    setUser(user)
                    sendEmailVerification(auth.currentUser)
                        .then(() => {
                            signOutUser()
                            setisMailSent(true)
                            setTimeout(() => {
                                navigate('/sign-in')
                            }, 4000)
                        })
                })
            })
            .catch((error) => {
                const errorMessage = error.code;
                setError(errorMessage)
            })
    }

    //Sign in with emial
    const signInWithEmail = (email, password, setIsVerified, setErrorMessage) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const user = userCredential.user
                if (!user.emailVerified) {
                    signOutUser()
                    setIsVerified(false)
                } else {
                    setIsVerified(true)
                }
            })
            .catch(error => {
                const erroCode = error.code
                setErrorMessage(erroCode)
            })
    }

    //signInWithFacebook
    const signInViaFacebook = () => {
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(err => {
                console.log(err)
            })
    }






    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {

            }
        });
    }, [auth])

    return {
        user,
        signInWithGoogle,
        signOutUser,
        signUpWithEmail,
        signInWithEmail,
        signInViaFacebook
    }
}

export default useFirebase;