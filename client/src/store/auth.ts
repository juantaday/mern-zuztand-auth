import axios from "axios";
import create from "zustand";
import { persist } from "zustand/middleware"

type State = {
    token: string,
    profile :any,
    isAuth : boolean
};

type Actions = {
    setToken: (token: string) => void;
    setProfile:(profile:any) =>void;
    logout: ()=>void;
};

export const userAuthStore = create(persist<State & Actions>((set) =>
({
    token: "",
    profile:null,
    isAuth : false,
    setToken: (token: string) => set((state) => ({ 
        token,
        isAuth : true,
     })),
    setProfile :(profile:any) => set(state=>({
        profile
    })),
    logout : ()=>set(x=>({
        token:'',
        isAuth :false,
        profile :null
    }))
}),
    { name: 'auht' }
));
