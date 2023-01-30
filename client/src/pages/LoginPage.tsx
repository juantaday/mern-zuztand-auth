import React from "react";
import { loginRequest, profileRequest } from "../api/auth"
import  {userAuthStore} from "../store/auth"
import  {useNavigate} from "react-router-dom"


function LoginPage() {

    const setToken = userAuthStore(state=>state.setToken);
    const setProfile = userAuthStore(state=>state.setProfile);
    const navigate =useNavigate();

    const handdleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        
        e.preventDefault();

        const emmail = (e.currentTarget.elements[0] as HTMLInputElement).value;
        const password = (e.currentTarget.elements[1] as HTMLInputElement).value;

        const resLogin = await loginRequest(emmail, password);
        setToken(resLogin.data.token);

        const resprofiled =  await profileRequest();
        setProfile(resprofiled.data.profile);
        navigate('/profile');

    };

    return (
        <form onSubmit={handdleSubmit}>
            <input type="email" placeholder="enter your email" />
            <input type="password" placeholder="enter password" />
            <button className="btn btn-primary">
                Login
            </button>
        </form>
    )
}

export default LoginPage;