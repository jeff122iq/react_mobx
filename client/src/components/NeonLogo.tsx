import styled from "styled-components";

interface Props {
    size?: string
    fontFamily?: string
}

const NeonLogo = styled.h1`
  @keyframes blinkH1 {
    0% {
      color: #ffffff;
      text-shadow: 0 0 40px #d4008d;
    }
    19% {
      color: #fff;
      text-shadow: 0 0 40px #d4008d;
    }
    20% {
      color: #9E9E9E;
      text-shadow: 0 0 40px #d4008d;
    }
    21% {
      color: #fff;
      text-shadow: 0 0 40px #d4008d;
    }
    60% {
      color: #fff;
      text-shadow: 0 0 40px #d4008d;
    }
    61% {
      color: #9E9E9E;
      text-shadow: none;
    }
    62% {
      color: #fff;
      text-shadow: 0 0 40px #d4008d;
    }
    63% {
      color: #9E9E9E;
      text-shadow: none;
    }
    64% {
      color: #fff;
      text-shadow: 0 0 40px #d4008d;
    }
    100% {
      color: #fff;
      text-shadow: 0 0 40px #d4008d;
    }
  }

  @keyframes blinkH1After {
    0% {
      color: #d4008d;
    }
    19% {
      color: #d4008d;
    }
    20% {
      color: transparent;
    }
    21% {
      color: #d4008d;
    }
    60% {
      color: #d4008d;
    }
    61% {
      color: transparent;
    }
    62% {
      color: #d4008d;
    }
    63% {
      color: transparent;
    }
    64% {
      color: #d4006a;
    }
    100% {
      color: #d4006a;
    }
  }

  @keyframes blinkH1Before {
    0% {
      background: #d4008d;
    }
    19% {
      background: #d4008d;
    }
    20% {
      background: transparent;
    }
    21% {
      background: #d4008d;
    }
    60% {
      background: #d4008d;
    }
    61% {
      background: transparent;
    }
    62% {
      background: #d4008d;
    }
    63% {
      background: transparent;
    }
    64% {
      background: #d4008d;
    }
    100% {
      background: #d4008d;
    }
  }
  font-family: ${({fontFamily}:Props) => fontFamily}, sans-serif;
  font-weight: 100;
  color: #fff;
  position: relative;
  text-shadow: 0 0 20px #d4008d;
  animation: blinkH1 5s infinite;
  font-size: ${({size}: Props) => size};

  &:after {
    content: attr(data-text);
    position: absolute;
    top: inherit;
    left: 0;
    color: #d4008d;
    z-index: -1;
    filter: blur(15px);
    animation: blinkH1After 5s infinite;
  }

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #d4008d;
    z-index: -2;
    opacity: 0.7;
    filter: blur(50px);
    animation: blinkH1Before 5s infinite;
  }
`
export default NeonLogo;