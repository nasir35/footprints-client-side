import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    const {user, isLoading} = useAuth();
    if(isLoading){
        return (
            <div class="flex justify-center items-center py-6">
                <div className="animate-bounce text-stromboli mr-5 font-qsand font-medium">loading...</div>
                <div class=" animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-coral"></div>
            </div>
        );
    }
    return (
        <Route
            {...rest}
            render = {({location}) => 
                user?.email ? children :
                <Redirect
                to={{
                    pathname : "/login",
                    state : {from : location}
                }}
                ></Redirect>
            }
        >            
        </Route>
    );
};

export default PrivateRoute;