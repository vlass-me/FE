import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CloseImg from "../../assets/Close.svg";
import SendImg from "../../assets/InputImg.svg";
import GPTLogo from "../../assets/GPTLogo.svg";
import AnonymousImg from "../../assets/anonymous.svg";
import QuizImg from "../../assets/QuizImg.svg";
import TrashImg from "../../assets/Trash.svg";
import RefreshImg from "../../assets/Refresh.svg";

const Modal = ({ handleClose, show, selectedFile }) => {
  const [input, setInput] = useState("");
  const [hasSelectedFile, setHasSelectedFile] = useState(false);
  const [quizBoxClicked, setQuizBoxClicked] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState(null);

  const handleChoiceClick = (choiceNumber) => {
    console.log(choiceNumber);
    setSelectedChoice(choiceNumber);
  };

  const handleRefresh = () => {};

  const handleReset = () => {};

  useEffect(() => {
    setHasSelectedFile(!!selectedFile);
  }, [selectedFile]);

  const handleQuizBoxClick = () => {
    setQuizBoxClicked(true);
  };

  return (
    <ModalContainer show={show}>
      <ModalContent>
        <ModalTitle>
          🙋🏻‍♂️ 복습하기
          <CloseButton onClick={handleClose}>
            <ClosePic src={CloseImg} />
          </CloseButton>
        </ModalTitle>
        <ContentArea>
          {hasSelectedFile &&
            (quizBoxClicked ? (
              <>
                <AnswerArea>
                  <LogoPic src={GPTLogo} />
                  <AnswerBox>
                    복습을 하시는군요! 👏🏻 그럼 0418_1201와 강의자료를 바탕으로
                    퀴즈를 만들어 드릴게요. 공중(Public)의 다섯 가지 분류에
                    해당하지 않는 것은 무엇일까요?
                  </AnswerBox>
                </AnswerArea>
                <ChoiceBoxWrapper>
                  <ChoiceBox>
                    <Choices
                      isSelected={selectedChoice === 1}
                      onClick={() => handleChoiceClick(1)}
                    >
                      <ChoiceNumber isSelected={selectedChoice === 1}>
                        1
                      </ChoiceNumber>
                      <ChoiceContent isSelected={selectedChoice === 1}>
                        Active Publics
                      </ChoiceContent>
                    </Choices>
                    <Choices
                      isSelected={selectedChoice === 2}
                      onClick={() => handleChoiceClick(2)}
                    >
                      <ChoiceNumber isSelected={selectedChoice === 2}>
                        2
                      </ChoiceNumber>
                      <ChoiceContent isSelected={selectedChoice === 2}>
                        Active Publics
                      </ChoiceContent>
                    </Choices>
                    <CorrectChoices
                      isSelected={selectedChoice === 3}
                      onClick={() => handleChoiceClick(3)}
                    >
                      <CorrectChoiceNumber isSelected={selectedChoice === 3}>
                        3
                      </CorrectChoiceNumber>
                      <CorrectChoiceContent isSelected={selectedChoice === 3}>
                        Active Publics
                      </CorrectChoiceContent>
                    </CorrectChoices>
                    <Choices
                      isSelected={selectedChoice === 4}
                      onClick={() => handleChoiceClick(4)}
                    >
                      <ChoiceNumber isSelected={selectedChoice === 4}>
                        4
                      </ChoiceNumber>
                      <ChoiceContent isSelected={selectedChoice === 4}>
                        Active Publics
                      </ChoiceContent>
                    </Choices>
                  </ChoiceBox>
                </ChoiceBoxWrapper>
                {selectedChoice === 3 ? (
                  <>
                    <AnswerArea>
                      <LogoPic src={GPTLogo} />
                      <AnswerBox>
                        <AnswerBigText>정답입니다!</AnswerBigText>
                        <AnswerSmallText>
                          출처: [공공외교] CH03.pdf 14쪽
                        </AnswerSmallText>
                      </AnswerBox>
                    </AnswerArea>
                    <RefreshButton onClick={handleRefresh}>
                      <RefreshPic src={RefreshImg} />
                      다른 문제 풀어보기
                    </RefreshButton>
                  </>
                ) : (
                  <>
                    <AnswerArea>
                      <LogoPic src={GPTLogo} />
                      <AnswerBox>
                        <AnswerBigText>
                          아쉽지만 오답이에요. 정답은 3. Lazy Publics입니다.
                        </AnswerBigText>
                        <AnswerSmallText>
                          출처: [공공외교] CH03.pdf 14쪽
                        </AnswerSmallText>
                      </AnswerBox>
                    </AnswerArea>
                    <RefreshButton onClick={handleRefresh}>
                      <RefreshPic src={RefreshImg} />
                      다른 문제 풀어보기
                    </RefreshButton>
                  </>
                )}
                <RefreshButton onClick={handleReset}>초기화</RefreshButton>
              </>
            ) : (
              <QuizBox onClick={handleQuizBoxClick}>
                <QuizTextBox>
                  <QuizTitle>{selectedFile}</QuizTitle>
                  <QuizTime>5분 전 생성</QuizTime>
                </QuizTextBox>
                <TrashPic src={TrashImg} />
              </QuizBox>
            ))}
        </ContentArea>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div`
  display: ${({ show }) => (show ? "block" : "none")};
  position: fixed;
  z-index: 1;
  bottom: 20px;
  right: 20px;
`;

const ModalContent = styled.div`
  box-shadow: 0px 3px 10px 5px rgba(0, 0, 0, 0.15);
  background-color: #fefefe;
  border: transparent;
  width: 280px;
  height: 400px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  position: relative;
`;

const ModalTitle = styled.div`
  box-sizing: border-box;
  background: #f5f5f5;
  border-radius: 10px 10px 0px 0px;
  width: 100%;
  height: 10%;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
`;

const InputArea = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 36px;
  position: absolute;
  bottom: 15px;
  padding-left: 30px;
`;
const ChatInput = styled.input`
  margin-top: 10px;
  background: #ffffff;
  border: 1px solid #babcbe;
  border-radius: 40px;
  width: 80%;
  height: 20px;
`;

const SendButton = styled.img`
  border: none;
  background-color: transparent;
  height: 30px;
`;

const CloseButton = styled.button`
  background-color: tranparent;
  border: none;
  background: #f5f5f5;
`;

const ClosePic = styled.img``;

const ContentArea = styled.div`
  height: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: column-reverse;
`;

const LogoPic = styled.img``;

const QuizBox = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  align-items: center;
  background-color: #f4f6fb;
`;

const QuizTextBox = styled.div`
  width: 87%;
`;

const QuizTitle = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 23px;
  color: #323639;
`;

const QuizTime = styled.div`
  font-weight: 500;
  font-size: 13px;
  line-height: 23px;
  color: #81868a;
`;

const TrashPic = styled.img``;

const AnswerArea = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
  margin-left: 10px;
`;

const AnswerBox = styled.div`
  box-sizing: border-box;
  background: #e8f0fe;
  border-radius: 5px;
  margin-left: 5px;
  padding: 5px;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  width: 85%;
  display: flex;
  flex-direction: column;
`;

const ChoiceBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 85%;
`;

const Choices = styled.div`
  background: ${({ isSelected }) => (isSelected ? "#F2E9F8" : "#ffffff")};
  border: ${({ isSelected }) =>
    isSelected ? "0.5px solid #914688" : "0.5px solid #81868a"};
  border-radius: 5px;
  width: 48%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin-top: 5px;
  padding: 5px;
`;

const ChoiceNumber = styled.div`
  background: ${({ isSelected }) => (isSelected ? "#914688" : "#e6e6e6")};
  border-radius: 10px;
  width: 40%;
  font-weight: 700;
  font-size: 10px;
  line-height: 24px;
  text-align: center;
  color: ${({ isSelected }) => (isSelected ? "#ffffff" : "#81868a")};
`;

const ChoiceContent = styled.div`
  color: ${({ isSelected }) => (isSelected ? "#914688" : "#000000")};
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  display: flex;
  align-items: center;
`;

const CorrectChoices = styled.div`
  background: ${({ isSelected }) => (isSelected ? "#E8F0FE" : "#ffffff")};
  border: ${({ isSelected }) =>
    isSelected ? "0.5px solid #1e70f6" : "0.5px solid #81868a"};
  border-radius: 5px;
  width: 48%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin-top: 5px;
  padding: 5px;
`;

const CorrectChoiceNumber = styled.div`
  background: ${({ isSelected }) => (isSelected ? "#1E70F6" : "#e6e6e6")};
  border-radius: 10px;
  width: 40%;
  font-weight: 700;
  font-size: 10px;
  line-height: 24px;
  text-align: center;
  color: ${({ isSelected }) => (isSelected ? "#ffffff" : "#81868a")};
`;

const CorrectChoiceContent = styled.div`
  color: ${({ isSelected }) => (isSelected ? "#1E70F6" : "#000000")};
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  display: flex;
  align-items: center;
`;

const ChoiceBoxWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  box-sizing: border-box;
  padding: 10px;
`;

const AnswerBigText = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  color: #000000;
`;

const AnswerSmallText = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  color: #81868a;
`;

const RefreshButton = styled.div`
  font-size: 12px;
  line-height: 17px;
  display: flex;
  align-items: center;
  text-decoration-line: underline;
  color: #676769;
  cursor: pointer;
  margin-top: 8px;
`;

const RefreshPic = styled.img``;
