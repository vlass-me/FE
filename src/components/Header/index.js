import logoImg from "../../assets/smallLogo.svg";
import logoText from "../../assets/smallText.svg";
import anonymousImg from "../../assets/anonymous.svg";
import Selection from "../../assets/selectionpic.svg";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLogin, setisLogin] = useState(false);
  const [isRegister, setisRegister] = useState(false);
  const [isHome, setisHome] = useState(false);
  const [isRecord, setisRecord] = useState(false);
  const [isStudy, setisStudy] = useState(false);
  const [isSettings, setisSettings] = useState(false);
  const [isUpload, setisUpload] = useState(false);
  const [userId, setUserId] = useState('')
  
  useEffect(() => {
    location.pathname === "/login" ? setisLogin(true) : setisLogin(false);
    var token = localStorage.getItem("token")
    console.log(token)
    if(token == undefined || token == null || token == ""){
        // setisLogin(false)
        return
    }
    var userIdd = localStorage.getItem("userId")
    setUserId(userIdd)
  }, [location.pathname]);

  useEffect(() => {
    location.pathname === "/register"
      ? setisRegister(true)
      : setisRegister(false);
  }, [location.pathname]);

  useEffect(() => {
    location.pathname === "/" ? setisHome(true) : setisHome(false);
  }, [location.pathname]);

  useEffect(() => {
    location.pathname === "/record" ? setisRecord(true) : setisRecord(false);
  }, [location.pathname]);

  useEffect(() => {
    location.pathname === "/study" ? setisStudy(true) : setisStudy(false);
  }, [location.pathname]);

  useEffect(() => {
    location.pathname === "/settings"
      ? setisSettings(true)
      : setisSettings(false);
  }, [location.pathname]);

  useEffect(() => {
    location.pathname === "/upload" ? setisUpload(true) : setisUpload(false);
  });

  const gotoHome = () => {
    navigate("/");
  };
  const gotoLogin = () => {
    navigate("/login");
  };
  const gotoRecord = () => {
    navigate("/record");
  };
  const gotoUpload = () => {
    navigate("/upload");
  };
  const gotoStudy = () => {
    navigate("/study");
  };
  const gotoSettings = () => {
    navigate("/settings");
  };

  return (
    <>
      {isUpload || isLogin || isRegister ? (
        <HeaderContainerLogin>
          <InnerContainer>
            <LogoContainer onClick={gotoHome}>
              <LogoImg src={logoImg} />
              <LogoText src={logoText} />
            </LogoContainer>
            <ProfileContainer>
              <ButtonContainer onClick={gotoLogin}>
                <Button>{ userId != '' ?  userId : "로그인" }</Button>
              </ButtonContainer>
              <ProfilePic src={anonymousImg}></ProfilePic>
            </ProfileContainer>
          </InnerContainer>
        </HeaderContainerLogin>
      ) : (
        <HeaderContainer>
          <InnerContainer>
            <LogoContainer onClick={gotoHome}>
              <LogoImg src={logoImg} />
              <LogoText src={logoText} />
            </LogoContainer>
            <ProfileContainer>
              <ButtonContainer onClick={gotoLogin}>
                <Button>{ userId != '' ?  userId : "로그인" }</Button>
              </ButtonContainer>
              <ProfilePic src={anonymousImg}></ProfilePic>
            </ProfileContainer>
          </InnerContainer>
          <MenuContainer>
            {isHome ? (
              <CurrentMenu onClick={gotoHome}>
                <MenuElement>홈</MenuElement>
                <SelectionPic src={Selection} />
              </CurrentMenu>
            ) : (
              <MenuElement onClick={gotoHome}>홈</MenuElement>
            )}
            {isRecord ? (
              <CurrentMenu onClick={gotoUpload}>
                <MenuElement>녹음하기</MenuElement>
                <SelectionPic src={Selection} />
              </CurrentMenu>
            ) : (
              <MenuElement onClick={gotoUpload}>녹음하기</MenuElement>
            )}
            {isStudy ? (
              <CurrentMenu onClick={gotoStudy}>
                <MenuElement>학습하기</MenuElement>
                <SelectionPic src={Selection} />
              </CurrentMenu>
            ) : (
              <MenuElement onClick={gotoStudy}>학습하기</MenuElement>
            )}
            {isSettings ? (
              <CurrentMenu onClick={gotoSettings}>
                <MenuElement>설정하기</MenuElement>
                <SelectionPic src={Selection} />
              </CurrentMenu>
            ) : (
              <MenuElement onClick={gotoSettings}>설정하기</MenuElement>
            )}
          </MenuContainer>
        </HeaderContainer>
      )}
    </>
  );
};

const HeaderContainer = styled.div`
  height: 150px;
  width: 100vw;
  position: fixed;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e6e6e6;
  justify-content: center;
  align-items: center;
  z-index: 999;
  background-color: white;
`;

const HeaderContainerLogin = styled.div`
  height: 75px;
  width: 100vw;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InnerContainer = styled.div`
  height: 75px;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #e6e6e6;
`;

const LogoContainer = styled.div`
  height: 100%;
  width: 15%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ProfileContainer = styled.div`
  height: 100%;
  margin-right: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const LogoImg = styled.img`
  height: 100%;
`;

const LogoText = styled.img`
  height: 100%;
`;

const ButtonContainer = styled.div``;

const Button = styled.button`
  font-size: 14px;
  background-color: transparent;
  border: transparent;
  cursor: pointer;
`;

const ProfilePic = styled.img`
  height: 30px;
`;

const MenuContainer = styled.div`
  width: 40vw;
  height: 75px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const MenuElement = styled.div`
  width: 113px;
  height: 33px;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
`;

const CurrentMenu = styled.div`
  width: 113px;
  height: 50px;
  color: #1e70f6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const SelectionPic = styled.img``;
