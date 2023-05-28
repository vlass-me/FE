import styled from "styled-components";
import logoImg from "../assets/bigLogo.svg";
import logoText from "../assets/bigText.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from 'axios';

const TEST_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE3NzE0NjI1NzQsInVzZXIiOiJhZG1pbiJ9.AHSw4piFuK1ZeoIjuKDnWpsdS3O3qwvJvSiwF0j8g70"
const TEST_SECRET_KEY = "your_secret_key"
// const BASE_URL = 'http://localhost:8088'
const BASE_URL = 'http://34.64.33.21'

const Login = () => {
  const navigate = useNavigate();

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
  
  const tryLogin = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('username', info.username)
    formData.append('password', info.password)
    
    ///// for TEST
    //if(BASE_URL.includes("http://localhost") && info.username == "admin" && info.password == "admin") {
        localStorage.setItem('token', TEST_TOKEN)
        localStorage.setItem('userId', 'admin')
        navigate("/")
        return
    //}
    //////
    const axiosReqConfig: AxiosRequestConfig = {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      timeout: 3000,
      // withCredentials: false // true
    }
    axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
    axios.post(BASE_URL+'/api/login', formData, axiosReqConfig)
        .then(response => {
            console.log("succ login")
            console.log(response.data)
            localStorage.setItem('token', response.data.token)
            navigate("/")
        });
   
  }
 
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
            onChange={(e) => handleChange(e)}
            id="password"
            value={info.password || ""}
          />
          <Button onClick={tryLogin}>로그인</Button>
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
