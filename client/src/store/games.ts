import {makeAutoObservable, toJS} from "mobx";
import axios from "axios";
import {IGameItem} from "../types";

class Games {

    games: Array<IGameItem> = []
    currentGame: Array<IGameItem> = []

    isLoading:boolean = false

    startLoading = ():void => {
        this.isLoading = true
    }
    stopLoading = ():void => {
        this.isLoading = false
    }

    async getGames ():Promise<void> {
        this.startLoading()
        try {
            const response = await axios.get("http://localhost:5000/popular-games")
            this.games = toJS(response.data)
            this.stopLoading()
        } catch (e) {
            console.log(e)
            return e
        }
    }

    async getCurrentGame (id:string):Promise<void> {
        this.startLoading()
        try {
            const response = await axios.get(`http://localhost:5000/popular-games/${id}`)
            const result = toJS(response.data)
            this.currentGame.length = 0
            this.currentGame.push(result)
            this.currentGame.flat(0)
            this.stopLoading()
            console.log(toJS(result))
        } catch (e) {
            console.log(e)
            return e
        }
    }
    constructor() {
        makeAutoObservable(this)
    }
}

export default new Games()