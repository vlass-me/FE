import React, { useState } from "react";
import styled from "styled-components";
import CloseImg from "../../assets/Close.svg";
import SendImg from "../../assets/InputImg.svg";
import GPTLogo from "../../assets/GPTLogo.svg";
const Modal = ({ handleClose, show }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = (event) => {
    event.preventDefault();
    if (input !== "") {
      setMessages([...messages, input]);
      setInput("");
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
          <AnswerArea>
            <LogoPic src={GPTLogo} />
            <AnswerBox>
              저는 vlass의 친구, GPT에요. 수업을 듣다 궁금한 게 있으면 언제든지
              저에게 물어보세요 😚
            </AnswerBox>
          </AnswerArea>
          {messages.map((message, index) => (
            <UserBox key={index}>{message}</UserBox>
          ))}
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
  background: #f5f5f5;
  border-radius: 10px 10px 0px 0px;
  width: 100%;
  height: 10%;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
`;

const AnswerArea = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
  margin-left: 10px;
`;

const LogoPic = styled.img``;

const AnswerBox = styled.div`
  background: #e8f0fe;
  border-radius: 5px;
  margin-left: 5px;
  padding: 5px;
  font-size: 12px;
`;

const UserBox = styled.div`
  background-color: grey;
  border-radius: 5px;
  margin-left: 5px;
  padding: 5px;
  font-size: 12px;
  width: 70%;
  margin-top: 5px;
  margin-left: auto;
  margin-right: auto;
`;
