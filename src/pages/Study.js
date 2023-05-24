import styled from "styled-components";
import FolderImg from "../assets/FolderImg.svg";
import FileImg from "../assets/FileImg.svg";
import StudyModalImg from "../assets/StudyModal.svg";
import { useState } from "react";
import Modal from "../components/RecordModal";

const Study = () => {
  const [folders, setFolders] = useState(["대외활동"]);
  const [newFolderName, setNewFolderName] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleAddFolder = (event) => {
    event.preventDefault();
    setFolders([...folders, newFolderName]);
    setNewFolderName("");
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <StudyContainer>
        <Title>🗂️ 전체 요약본</Title>
        <HashtagArea>
          <TitleInfo>해시태그</TitleInfo>
          <TagArea>
            <Tag>#수업</Tag>
            <Tag>#서강대학교</Tag>
            <Tag>#OS</Tag>
          </TagArea>
        </HashtagArea>
        <ContentsArea>
          <TitleInfo>📁 폴더</TitleInfo>
          <FolderArea>
            <FolderFile>
              <FolderPic src={FolderImg} />
              대외활동
            </FolderFile>
          </FolderArea>
          <TitleInfo>📝 파일</TitleInfo>
          <FileArea>
            <FolderFile>
              <FolderPic src={FileImg} />
              0418_1201
            </FolderFile>
          </FileArea>
        </ContentsArea>
      </StudyContainer>
      <Button onClick={handleOpenModal}>
        <StudyModalPic src={StudyModalImg} />
      </Button>
      <Modal show={showModal} handleClose={handleCloseModal}></Modal>
    </>
  );
};

export default Study;

const StudyContainer = styled.div`
  padding-top: 150px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1;
`;

const Title = styled.div`
  width: 50%;
  font-weight: 700;
  font-size: 20px;
  margin-top: 26px;
`;

const HashtagArea = styled.div`
  width: 50%;
  display: flex;
  margin-top: 10px;
  flex-direction: column;
`;

const TagArea = styled.div`
  display: flex;
  margin-top: 10px;
`;

const Tag = styled.div`
  background-color: #e6e6e6;
  border-radius: 5px;
  color: #81868a;
  font-size: 14px;
  height: 30px;
  display: flex;
  align-items: center;
  margin-right: 5px;
`;

const ContentsArea = styled.div`
  background: #f4f6fb;
  border-radius: 10px;
  height: 343px;
  width: 50%;
  margin-top: 30px;
  padding: 15px;
`;

const FolderArea = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const FileArea = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-wrap: wrap;
`;

const TitleInfo = styled.div`
  font-weight: 700;
  font-size: 16px;
  display: flex;
  flex-wrap: wrap;
`;

const FolderFile = styled.div`
  background: #ffffff;
  border-radius: 5px;
  width: 29%;
  height: 45px;
  display: flex;
  align-items: center;
  padding: 10px;
  margin-top: 10px;
  color: #525659;
  font-size: 16px;
  font-weight: 500;
`;

const FolderPic = styled.img`
  width: 20px;
  margin-right: 10px;
`;

const Button = styled.div`
  background: #ffffff;
  box-shadow: 0px 3px 10px 5px rgba(0, 0, 0, 0.15);
  width: 90px;
  height: 90px;
  border: transparent;
  position: fixed;
  border-radius: 50%;
  right: 20px;
  bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StudyModalPic = styled.img``;
