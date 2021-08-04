import {
    makeAutoObservable
} from "mobx";

class Background {
    backgroundImage = ""
    constructor() {
        makeAutoObservable(this)
    }
}