import {observable, action, makeObservable} from "mobx";
import axios from "axios";
import {IUser} from "../types";

export default class AuthStore {

    user:IUser = {
        firstName: "",
        lastName: "",
        nickName: "",
        email: "",
        password: ""
    }

    isAuth:boolean = false

    authUser ():void {
        this.isAuth = true
    }

    async register () {
        const response = await axios.post("", {
            firstName: this.user.firstName,
            lastName: this.user.lastName,
            nickName: this.user.nickName,
            email: this.user.email,
            password: this.user.password
        })
    }

    constructor() {
        makeObservable(this, {
            user: observable,
            isAuth: observable,
            authUser: action,
            register: action
        })
    }
}