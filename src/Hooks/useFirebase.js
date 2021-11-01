import AuthenticationInitializer from "../Firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

const useFirebase = () => {

    AuthenticationInitializer();

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth()
    const provider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        signInWithPopup(auth, provider)
        .then(result => {
            setUser(result.user);
            console.log(result.user);
        })
        .finally( () => setIsLoading(false))
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
            })
            .finally( () => setIsLoading(false))
    }

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
             setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])
    
    return {user, signInUsingGoogle, isLoading, logOut}
}
export default useFirebase;