import styled from "styled-components";
import UploadImg from "../assets/UploadImg.svg";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
const Upload = () => {
  const fileInputRef = useRef();

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    console.log(file);
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const navigate = useNavigate();
  const gotoRecord = () => {
    navigate("/record");
  };
  const [tags, setTags] = useState([]);
  const [input, setInput] = useState("");

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (input !== "") {
        setTags([...tags, input]);
        setInput("");
      }
    }
  };

  const clearTags = () => {
    setTags([]);
  };

  return (
    <>
      <UploadContainer>
        <TitleArea>녹음하기</TitleArea>
        <UploadArea>
          <OtherInfo>
            <Text>강의자료 업로드하기</Text>
            <SmallText>강의자료는 pdf를 지원합니다.</SmallText>
          </OtherInfo>
          <UploadBox>
            <UploadBlue onClick={handleUploadClick}>
              <input
                type="file"
                accept=".pdf"
                style={{ display: "none" }}
                ref={fileInputRef}
                onChange={handleFileUpload}
              />
              <UploadPic src={UploadImg}></UploadPic>
              <UploadText>업로드</UploadText>
            </UploadBlue>
          </UploadBox>
        </UploadArea>
        <HashtagArea>
          <OtherInfo>
            <Text>해시태그 설정</Text>
            <ResetButton onClick={clearTags}>초기화</ResetButton>
          </OtherInfo>
          <TagArea>
            {tags.map((tag, index) => (
              <Tag key={index}>#{tag}</Tag>
            ))}
          </TagArea>
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyUp={handleKeyUp}
            placeholder="해시태그 입력 후 Enter를 눌러주세요!"
          />
        </HashtagArea>
        <UploadButton onClick={gotoRecord}>녹음 시작하기</UploadButton>
      </UploadContainer>
    </>
  );
};

export default Upload;

const UploadContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 75px;
`;

const TitleArea = styled.div`
  width: 50%;
  font-weight: 700;
  font-size: 26px;
  line-height: 38px;
  display: flex;
  align-items: center;
  color: #000000;
  margin-top: 32px;
  border-bottom: 1px solid #e6e6e6;
`;

const UploadArea = styled.div`
  width: 50%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

const OtherInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Text = styled.div`
  font-weight: 700;
  font-size: 20px;
  display: flex;
  align-items: center;
  color: #000000;
`;

const SmallText = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  text-align: right;
  color: #81868a;
`;

const UploadBox = styled.div`
  background: #f4f6fb;
  border-radius: 10px;
  height: 280px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HashtagArea = styled.div`
  width: 50%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

const Tag = styled.div`
  background-color: #f2e9f8;
  border-radius: 5px;
  color: #914688;
  font-size: 16px;
  height: 30px;
  display: flex;
  align-items: center;
  margin-right: 5px;
`;

const Input = styled.input`
  background: #f4f6fb;
  border-radius: 5px;
  height: 43px;
  margin-top: 13px;
  border: transparent;
`;

const TagArea = styled.div`
  display: flex;
`;

const ResetButton = styled.button`
  background-color: transparent;
  border: none;
  font-weight: 500;
  font-size: 15px;
  text-align: right;
  color: #81868a;
  cursor: pointer;
`;

const UploadButton = styled.div`
  background: #e8f0fe;
  border-radius: 5px;
  width: 50%;
  height: 60px;
  border: transparent;
  margin-top: 50px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 22px;
  color: #1e70f6;
`;

const UploadBlue = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const UploadPic = styled.img``;

const UploadText = styled.div`
  position: absolute;
  color: white;
  font-size: 20px;
  text-align: center;
  color: white;
  font-size: 20px;
  font-weight: 700;
`;
