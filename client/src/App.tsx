import React, { FC} from "react"
import Router from "./components/Router";
import GlobalStyle from "./globalStyles";
import {BackgroundImage} from "./types";

// const BackgroundContext = React.createContext<BackgroundImage>({
//     backgroundImage: "gjhytj",
//     changeBG(newUrl) {this.backgroundImage = newUrl},
// })


const App: FC = () => {
    return (
        // <BackgroundContext.Provider value={
        //     {
        //         backgroundImage: "https://media.contentapi.ea.com/content/dam/bf/images/2017/08/BF1-Better-Time.jpg.adapt.crop16x9.575p.jpg",
        //         changeBG: this.changeBG("123")
        //     }
        // }>
            <div className="App">
                <GlobalStyle/>
                <Router/>
            </div>
        // </BackgroundContext.Provider>
    );
}
export default App;