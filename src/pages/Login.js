import styled from "styled-components";
import logoImg from "../assets/bigLogo.svg";
import logoText from "../assets/bigText.svg";
import { useEffect, useState } from "react";
const Login = () => {
  const [info, setInfo] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const id = e.target.id;
    setInfo({
      ...info,
      [id]: value,
    });
  };

  return (
    <>
      <LoginContainer>
        <LogoContainer>
          <LogoImg src={logoImg} />
          <LogoText src={logoText} />
        </LogoContainer>
        <Form>
          <Text>아이디</Text>
          <Input
            onChange={(e) => handleChange(e)}
            id="username"
            value={info.username || ""}
          />
          <Text>비밀번호</Text>
          <Input
            onchange={(e) => handleChange(e)}
            id="password"
            value={info.password || ""}
          />
          <Button>로그인</Button>
        </Form>
      </LoginContainer>
    </>
  );
};

export default Login;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 75px;
`;

const LogoContainer = styled.div`
  display: flex;
  height: 100%;
  width: 40%;
  margin-top: 64.5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const LogoImg = styled.img`
  height: 50px;
`;

const LogoText = styled.img`
  heigh: 50px;
`;

const Form = styled.form`
  width: 468px;
  dispaly: flex-start;
`;

const Text = styled.div`
  font-size: 15px;
  margin-top: 25px;
`;

const Input = styled.input`
  width: 468px;
  height: 50px;
  background-color: #f5f5f5;
  border: 1px solid #f5f5f5;
  border-radius: 10px;
`;

const Button = styled.button`
  font-size: 22px;
  width: 468px;
  background-color: #e8f0fe;
  border-radius: 5px;
  height: 60px;
  color: #1e70f6;
  border: transparent;
  font-weight: 700;
  margin-top: 50px;
`;
