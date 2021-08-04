import Page from "../layouts/Page";
import PageContainer from "../components/PageContainer";
import Container from "../components/Container";
import styled from "styled-components";
import FormInput from "../components/generick/Input";
import Button from "../components/generick/Button";
import {Link} from "react-router-dom";
import {ChangeEvent, useState} from "react";

const FormContainer = styled.form`
  margin: 50px 0;
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export default function SignUp() {

  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    nickName: "",
    email: "",
    password: ""
  })

  return (
    <Page>
      <PageContainer>
        <Container>
          <FormContainer>
          <h1>Sign-up</h1>
            <p>Create account, or <Link to="/sign-in">Sign-in</Link>!</p>
            <FormInput onChange={(e:ChangeEvent<HTMLInputElement>) => setState({...state, firstName: e.target.value})}>
              First name
            </FormInput>
            <FormInput onChange={(e:ChangeEvent<HTMLInputElement>) => setState({...state, lastName: e.target.value})}>
              Last name
            </FormInput>
            <FormInput onChange={(e:ChangeEvent<HTMLInputElement>) => setState({...state, nickName: e.target.value})}>
              Nick name
            </FormInput>
            <FormInput onChange={(e:ChangeEvent<HTMLInputElement>) => setState({...state, email: e.target.value})}>
              Email
            </FormInput>
            <FormInput onChange={(e:ChangeEvent<HTMLInputElement>) => setState({...state, password: e.target.value})}>
              Password
            </FormInput>
            <Button>
              Sign-up
            </Button>
          </FormContainer>
        </Container>
      </PageContainer>
    </Page>
  );
};