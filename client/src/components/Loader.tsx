import PageLoader from "../images/PageLoader.svg"
import styled from "styled-components";

const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function Loader() {
    return (
        <LoaderContainer>
            <img src={PageLoader} alt=""/>
        </LoaderContainer>
    );
};