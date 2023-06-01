import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Landing1Img from "../assets/Landing1.svg";
import Landing1Title from "../assets/Landing1Title.svg";
import Landing2Img from "../assets/Landing2Text.svg";
import ThirdPart1 from "../assets/ThirdPart1.svg";
import ThirdPart2 from "../assets/ThirdPart2.svg";
import ThirdPart3 from "../assets/ThirdPart3.svg";
import FourthPart1 from "../assets/FourthPart1.svg";
import FourthPart2 from "../assets/FourthPart2.svg";
import FourthPart3 from "../assets/FourthPart3.svg";
import FourthPart4 from "../assets/FourthPart4.svg";
import FifthPart1 from "../assets/FifthPart1.svg";
import FifthPart2 from "../assets/FifthPart2.svg";
import FifthPart3 from "../assets/FifthPart3.svg";
import FifthPart4 from "../assets/FifthPart4.svg";
import SixthPart1 from "../assets/SixthPart1.svg";
import SeventhPart1 from "../assets/SeventhPart1.svg";
import SeventhPart2 from "../assets/SeventhPart2.svg";
import LastPart1 from "../assets/LastPart1.svg";

const Home = () => {
  const navigate = useNavigate();

  const ToRegister = () => {
    navigate("/register");
  };

  const ToLogin = () => {
    navigate("/login");
  };

  const ToStudy = () => {
    navigate("/study");
  };

  const ToRecord = () => {
    navigate("/record");
  };

  return (
    <>
      <HomeContainer>
        <FirstPart>
          <Landing1TitlePic src={Landing1Title} />
          <LandingPic src={Landing1Img} />
          <ToRegisterButton onClick={ToRegister}>
            이메일로 10초만에 시작하기
          </ToRegisterButton>
          <ToLoginButtonWrapper>
            이미 회원이신가요?
            <ToLoginButton onClick={ToLogin}>로그인하기</ToLoginButton>
          </ToLoginButtonWrapper>
        </FirstPart>
        <SecondPart>
          <PlainPic src={Landing2Img} />
        </SecondPart>
        <ThirdPart>
          <ToStudyButton onClick={ToStudy}>수업 요약본 생성</ToStudyButton>
          <PlainPic src={ThirdPart1} />
          <PlainPic src={ThirdPart2} />
          <PlainPic src={ThirdPart3} />
        </ThirdPart>
        <FourthPart>
          <TwoPicWrapper>
            <PlainPic src={FourthPart1} />
            <PlainPic src={FourthPart2} />
          </TwoPicWrapper>
          <PlainPic src={FourthPart3} />
          <FourthPart4Pic src={FourthPart4} />
        </FourthPart>
        <FifthPart>
          <ToStudyButton onClick={ToRecord}>chatGPT 내장</ToStudyButton>
          <FifthPartPicWrapper>
            <PlainPic src={FifthPart1} />
            <FifthAnotherWrapper>
              <PlainPic src={FifthPart2} />
              <PlainPic src={FifthPart3} />
              <AbsolutePic src={FifthPart4} />
            </FifthAnotherWrapper>
          </FifthPartPicWrapper>
        </FifthPart>
        <SixthPart>
          <ToStudyButton>퀴즈 생성</ToStudyButton>
          <PlainPic src={SixthPart1} />
        </SixthPart>
        <SeventhPart>
          <PlainPic src={SeventhPart1} />
          <PlainPic src={SeventhPart2} />
        </SeventhPart>
        <SecondPart>
          <PlainPic src={LastPart1} />
        </SecondPart>
      </HomeContainer>
    </>
  );
};

export default Home;

const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
  overflow: scroll;
  padding-top: 150px;
`;

const FirstPart = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  // background-image: url(${Landing1Img});
  // background-position: calc(200%) center;
  background-repeat: no-repeat;
  box-sizing: border-box;
  position: relative;
`;

const LandingPic = styled.img`
  position: absolute;
  z-index: 1;
  right: -220px;
  top: -50px;
`;

const Landing1TitlePic = styled.img`
  width: 600px;
  height: 300px;
  position: absolute;
  z-index: 2;
  top: 40px;
`;

const ToRegisterButton = styled.button`
  width: 440px;
  height: 60px;
  background: #e8f0fe;
  border-radius: 5px;
  border: transparent;
  font-weight: 700;
  font-size: 22px;
  line-height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1e70f6;
  position: absolute;
  top: 400px;
  left: 70px;
  z-index: 2;
`;

const ToLoginButtonWrapper = styled.div`
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #81868a;
  position: absolute;
  top: 490px;
  left: 230px;
  flex-direction: column;
`;

const ToLoginButton = styled.button`
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #81868a;
  border: transparent;
  background-color: white;
  text-decoration: underline;
  cursor: pointer;
`;

const SecondPart = styled.div`
  width: 100%;
  height: 280px;
  background-color: #1e70f6;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlainPic = styled.img``;

const ThirdPart = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ToStudyButton = styled.button`
  width: 240px;
  height: 60px;
  background: #e8f0fe;
  border-radius: 5px;
  border: transparent;
  font-weight: 700;
  font-size: 22px;
  line-height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1e70f6;
  margin-bottom: 50px;
`;

const FourthPart = styled.div`
  background-color: #000000;
  width: 100%;
  height: 1051px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  padding-left: 15%;
`;

const TwoPicWrapper = styled.div`
  display; flex;  
`;

const FourthPart4Pic = styled.img`
  height: 180px;
`;

const FifthPart = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  position: relative;
`;

const FifthPartPicWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const FifthAnotherWrapper = styled.div`
  margin-top: 20px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

const AbsolutePic = styled.img`
  position: absolute;
  bottom: -158%;
`;

const SixthPart = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  background: linear-gradient(to top, #f4f6fb 40%, transparent 50%);
`;

const SeventhPart = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 200px;
  justify-content: space-around;
  margin-top: 100px;
  align-items: start;
`;
