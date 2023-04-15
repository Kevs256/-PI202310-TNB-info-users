import { Router } from "express";
import commentController from "../controllers/user.controller.js";

class UserRouter {

    router:Router;

    constructor(){
        this.router = Router();
        this.config();
    }

    private config(){
        
    }
}

export default new UserRouter();