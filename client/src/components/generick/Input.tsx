import styled from "styled-components";
import {ChangeEvent, FC} from "react";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 10px 0 20px;
`;

const Label = styled.label`
  color: #ffffff;
  font-weight: normal;
  opacity: 0.75;
  order: 1;
  padding: 0;
  pointer-events: none;
  text-shadow: none;
  text-transform: capitalize;
  transform-origin: left top;
  transform: scale(1) translate3d(0, 22px, 0);
  transition: 200ms ease all;
`;

const Input = styled.input`
  padding: 0;
  border-radius: 0;
  display: flex;
  font-size: 100%;
  line-height: 25px;
  text-shadow: none;
  background: transparent;
  border: 0;
  border-bottom: 1px solid #ffffff;
  color: #ffffff;
  flex: 1 1 auto;
  order: 2;
  &:focus {
    outline: 0;
    border-bottom: 1px solid white;
  }
  &:valid {
    border-bottom: 1px solid #ffffff;
  }
    &:valid + ${Label} {
    transform: scale(0.8) translate3d(0, 5px, 0);
    color: #ffffff;
  }
  &:focus + ${Label} {
    color: #ffffff;
    opacity: 1;
    transform: scale(0.8) translate3d(0, 5px, 0);
  }
`;

type Props = {
    onChange?: (e: ChangeEvent<HTMLInputElement> ) => void,
}

const  FormInput:FC<Props> = ({onChange, children}) => {
  return (
    <Container>
      <Input onChange={onChange} required/>
      <Label>{children}</Label>
    </Container>
  )
}

export default FormInput;