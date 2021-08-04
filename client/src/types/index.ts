export interface IGameItem {
    id: number;
    gameName: string;
    gameYear: number;
    gamePicture: string;
    gameStory?: string;
}

export interface IUser {
    firstName: string;
    lastName: string;
    nickName: string;
    email: string;
    password: string;
}

export type QuizParams = {
    id: string;
};

export interface BackgroundImage {
    backgroundImage: string;
    changeBG: (backgroundImage:string) => void;
}