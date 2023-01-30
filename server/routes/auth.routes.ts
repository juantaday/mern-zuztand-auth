import {Router} from "express";
import  {isAuthorize} from "../middleware/requireAuth"
import {loginHandle, profileHandle} from "../controllers/auth.controller"


const router = Router();


router.post('/login',  loginHandle);

router.get('/profile', isAuthorize, profileHandle);


export default router;