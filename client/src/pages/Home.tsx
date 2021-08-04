import Page from "../layouts/Page";
import Container from "../components/Container";
import PageContainer from "../components/PageContainer";
import styled from "styled-components";
import NeonLogo from "../components/NeonLogo";
import Games from "../store/games";
import {useEffect} from "react";
import {observer} from "mobx-react";
import Loader from "../components/Loader";
import {Link} from "react-router-dom";

const LogoContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  text-align: start;
  margin: 50px 0;
`

const GameContainer = styled(Container)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const GameList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: 20px 0;
`

const GameListItem = styled.div`
  flex-basis: 200px;
  flex-shrink: 0;
  min-height: 300px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  cursor: pointer;
`

const GameListImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center;
`

const GameItemName = styled.h3`
  font-size: 25px;
  color: #fff;
`

const GameItemYear = styled.p`
  font-size: 20px;
  color: #b4b4b4;
`

export default observer(function Home() {
    useEffect(() => {
            Games.getGames()
    }, [])

    return (
        <Page>
            <PageContainer>
                <GameContainer>
                    <LogoContainer>
                        <NeonLogo size={"40px"} data-text="Special for gamers">Special for gamers</NeonLogo>
                    </LogoContainer>
                    <h1>Popular games 2021:</h1>
                    <GameList>
                        {Games.isLoading ? <Loader/> :
                            <>
                                {Games.games.map(item => {
                                    return (
                                        <GameListItem key={item.id}>
                                            <Link to={`/game/${item.id}`}>
                                                <GameListImage src={item.gamePicture} alt=""/>
                                                <GameItemName>{item.gameName}</GameItemName>
                                                <GameItemYear>{item.gameYear}</GameItemYear>
                                            </Link>
                                        </GameListItem>
                                    )
                                })}
                            </>
                        }
                    </GameList>
                </GameContainer>
            </PageContainer>
        </Page>
    )
        ;
});