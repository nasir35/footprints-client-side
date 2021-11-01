import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle, user, isLoading} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';
    const handleLogin = () => {
        signInUsingGoogle();
        if(isLoading===false){
            history.push(redirect_url);
        }
    }
    return (
        <div id="login-page" className="grid md:grid-cols-2 grid-cols-1 bg-gray-50 align-middle justify-self-center justify-items-center items-center md:py-8 py-4 px-4 ">
            <div className="relative flex place-items-center flex-col font-roboto order-1">
                <h2 className="md:text-2xl text-xl md:mt-1 mt-8 text-center md:mb-12 mb-8 font-medium text-gray-800">Easily Login with your Google Account</h2>
                <button onClick={handleLogin} className="md:text-xl text-base py-2 px-8 rounded-md bg-blue-700 text-white"><i className="fab fa-google mr-2"></i> Login with Google</button>
                <p className="w-full text-center md:text-base text-sm mt-5 text-gray-500">We care about your privacy! Please be aware off your activity which you can find in my activity page. If you find any suspecious activity you can take necessary steps.</p>
            </div>
            <img src="https://i.ibb.co/3mYxw0m/travel-quote-memories.png order-2" className="rounded md:w-5/6 w-full" alt="" />
        </div>
    );
};

export default Login;