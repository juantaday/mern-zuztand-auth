import  {userAuthStore} from "../store/auth"
import {useNavigate} from "react-router-dom";

function ProfilePage() {
     
   const logout =  userAuthStore(x=>x.logout);
   const profile =  userAuthStore(x=>x.profile);
    const navigate =useNavigate();

    return (
        <div> Profile Page
            <div>
                {JSON.stringify(profile)}
            </div>
             <button onClick={()=>{
                logout();
                navigate('/login');
             }}>
                Logout
            </button>
        </div>
      
    )
}

export default  ProfilePage;