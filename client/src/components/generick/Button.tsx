import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  display: flex;
  margin: 10px 0;
  justify-content: center;
  align-items: center;
  color: black;
  background-color: #ffffff;
  border-radius: 10px;
  font-family: 'Oswald', sans-serif;
  font-size: 20px;
  outline: none;
  cursor: pointer;
  border: 1px solid #ffffff;
  transition: all 0.3s;
  &:hover {
    background-color: transparent;
    color: #ffffff;
  }
`

export default Button;