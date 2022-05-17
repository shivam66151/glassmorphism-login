import styled from 'styled-components'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import Input from './Components/Input';
import Button from './Components/Button';


function App() {
  return (
  <MainContainer>
    <WelcomeText>Welcome</WelcomeText>
    <InputContainer>
      <Input type="text" placeholder="Email"/>
      <Input type="password" placeholder="Password"/>
    </InputContainer>
    <ButtonContainer>
      <Button  content = "Sign Up"/>
    </ButtonContainer>
  </MainContainer>
  );
}

const MainContainer = styled.div`

display: flex;
align-items: center;
flex-direction: column;
height: 80vh;
width: 30vw;
background: rgba(255, 255, 255, 0.15);
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
backdrop-filter: blur(8.5px);
border-radius: 10px;
color: #ffffff;
text-transform: uppercase;
letter-spacing: 0.4rem;
`;

const WelcomeText = styled.h2`

margin: 3rem 0 2rem 0;
`;

const InputContainer = styled.div`

display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
height: 20%;
weight: 100%
`;

const ButtonContainer = styled.div`

 margin: 1rem 0 2rem 0;
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;

`;

export default App;
