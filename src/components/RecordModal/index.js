import React, { useState } from "react";
import styled from "styled-components";
import CloseImg from "../../assets/Close.svg";
import SendImg from "../../assets/InputImg.svg";
import GPTLogo from "../../assets/GPTLogo.svg";
import AnonymousImg from "../../assets/anonymous.svg";

const Modal = ({ handleClose, show }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isQuestion, setisQuestion] = useState(false);

  const handleSend = (event) => {
    event.preventDefault();
    if (input !== "") {
      setMessages([...messages, input]);
      setInput("");
      setisQuestion(true);
    }
  };

  return (
    <ModalContainer show={show}>
      <ModalContent>
        <ModalTitle>
          🙋🏻‍♂️ 질문하기
          <CloseButton onClick={handleClose}>
            <ClosePic src={CloseImg} />
          </CloseButton>
        </ModalTitle>
        <ContentArea>
          {!isQuestion ? (
            <AnswerArea>
              <LogoPic src={GPTLogo} />
              <AnswerBox>
                저는 vlass의 친구, GPT에요. 수업을 듣다 궁금한 게 있으면
                언제든지 저에게 물어보세요 😚
              </AnswerBox>
            </AnswerArea>
          ) : (
            <>
              {messages.map((message, index) => (
                <UserArea>
                  <UserBox key={index}>{message}</UserBox>
                  <ProfilePic src={AnonymousImg} />
                </UserArea>
              ))}
              <AnswerArea>
                <LogoPic src={GPTLogo} />
                <AnswerBox>
                  NUMA-aware한 OS는 메모리 구조를 인식하고, 각 프로세서가 더
                  빠르게 접근할 수 있는 메모리 영역에 할당하여 성능을 최적화할
                  수 있습니다. NUMA-aware한 OS는 SMP Load Balancing을 수행하는
                  동시에 NUMA 아키텍처의 특징을 고려하여 메모리 접근 속도를
                  최적화합니다. 이는 시스템 성능을 향상시키고, 프로세서 간의
                  경쟁을 최소화하여 부하 분산을 개선합니다.
                </AnswerBox>
              </AnswerArea>
            </>
          )}
        </ContentArea>
        <InputArea>
          <ChatInput
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
          />
          <SendButton
            type="submit"
            src={SendImg}
            onClick={handleSend}
          ></SendButton>
        </InputArea>
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

// const SendPic = styled.img`
//   height: 30px;
// `;

const CloseButton = styled.button`
  background-color: tranparent;
  border: none;
  background: #f5f5f5;
`;

const ClosePic = styled.img``;

const ContentArea = styled.div`
  height: 75%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AnswerArea = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
  margin-left: 10px;
`;

const LogoPic = styled.img``;

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
`;

const UserArea = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
  margin-right: 10px;
`;

const UserBox = styled.div`
  box-sizing: border-box;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  width: 85%;
  padding: 10px;
  margin-bottom: 20px;
`;

const ProfilePic = styled.img``;
