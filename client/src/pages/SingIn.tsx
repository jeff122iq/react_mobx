import Page from "../layouts/Page";
import PageContainer from "../components/PageContainer";
import Container from "../components/Container";
import {Link} from "react-router-dom";
import FormInput from "../components/generick/Input";
import Button from "../components/generick/Button";
import styled from "styled-components";

const FormContainer = styled.form`
  margin: 50px 0;
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export default function SingIn() {
  return (
    <Page>
      <PageContainer>
        <Container>
          <FormContainer>
            <h1>Sign-in</h1>
            <p>Log-in, or <Link to="/sign-up">Sign-up</Link>!</p>
            <FormInput>
              Nick name
            </FormInput>
            <FormInput>
              Email
            </FormInput>
            <FormInput>
              Password
            </FormInput>
            <Button>
              Sign-in
            </Button>
          </FormContainer>
        </Container>
      </PageContainer>
    </Page>
  );
};