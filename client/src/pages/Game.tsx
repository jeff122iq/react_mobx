import Page from "../layouts/Page";
import {useParams} from "react-router-dom";
import {QuizParams} from "../types";
import React, {useEffect} from "react";
import Games from "../store/games"
import Container from "../components/Container";
import PageContainer from "../components/PageContainer";
import {observer} from "mobx-react";
import styled from "styled-components";
import Loader from "../components/Loader";

interface IBackground {
    readonly background: string
}

const CurrentGameContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 50px 0;
`


const GamePictureContainer = styled.div<IBackground>`
  min-width: 300px;
  height: 500px;
  display: flex;
  background-image: url('${({background}) => background}');
  background-position: center;
  background-size: cover;
  justify-content: flex-start;
  align-items: flex-start;
`

const CurrentGame = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`

const TextContainer = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
`

export default observer(function Game() {
    const {id} = useParams<QuizParams>()

    useEffect(() => {
        Games.getCurrentGame(id)
    }, [])

    return (
        <Page>
            <PageContainer>
                <Container>
                    <CurrentGameContainer>
                        {Games.isLoading ? <Loader/> :
                            <>
                        {Games.currentGame.map(item => {
                            return (
                                <CurrentGame key={item.id}>
                                    <GamePictureContainer background={item.gamePicture}/>
                                    <TextContainer>
                                        <h1>{item.gameName}</h1>
                                        <h3>{item.gameYear}</h3>
                                        <h3>{item.gameStory}</h3>
                                    </TextContainer>
                                </CurrentGame>
                            )
                        })}</>}
                    </CurrentGameContainer>
                </Container>
            </PageContainer>
        </Page>
    );
});