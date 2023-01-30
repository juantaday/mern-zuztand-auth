import axios from "axios";
import  {userAuthStore} from "../store/auth"

const token = userAuthStore.getState().token

const authApi = axios.create({
  
    baseURL :"http://localhost:3000", 
    withCredentials :true,
    headers :{Authorization: `Bearer ${token}`}
})

export default  authApi;