import styled from "styled-components";
import Modal from "../components/RecordModal";
import { useState, useRef, useEffect } from "react";
import RecordModalImg from "../assets/RecordModal.svg";
import useRecorder from "../hooks/useRecorder";
import SttService from '../services/stt.service';
import useEventSource from '../hooks/useEventSource';
import { StereoAudioRecorder } from 'recordrtc';

const Record = () => {
  const speechRetRef = useRef();
  const STREAM_URL_PREFIX = 'http://localhost:8089/stream/'
  let [userId, setUserId] = useState('sample_user');
  let [sessionId, setSessionId] = useState('INVALID');
  let [url, setUrl] = useState(STREAM_URL_PREFIX+sessionId)
  
  useEffect(() => {
        if(sessionId == 'INVALID'){
            SttService.createSession(userId)
                .then((res) => {
                    let newSessionId = res?.data?.sessionId
                    if(newSessionId == undefined){
                        console.log("err")
                        return
                    }
                    setSessionId(newSessionId)
                    setUrl(STREAM_URL_PREFIX+newSessionId)
                })
                .catch((e) => console.log(e));
        }
        console.log(sessionId)
    }, [userId]);
   const { dataRef, setCallback } = useEventSource(url);
    const startButtonRef = useRef();
    const stopButtonRef = useRef();
    const recorderOnDataAvailable = (blob: Blob) => {
        console.log('recorderOnDataAvailable')
        SttService.upload(blob, 'fooo', userId, sessionId)
            .then((res) => {})
            .catch((e) => console.log("upload error"));
        return
    }
const { startRecording, stopRecording, mediaStream } = useRecorder({
        mimeType: 'audio/wav',
        type: "audio",
        recorderType: StereoAudioRecorder,
        numberOfAudioChannels: 1,
        desiredSampRate: 16000,
        timeSlice: 3000,
        ondataavailable: recorderOnDataAvailable
    }, recorderOnDataAvailable);
     const startRecordingWrapper = () => {
        startRecording()
         // TODO
        // startButtonRef.current.hidden = true
        // stopButtonRef.current.hidden = false
     }
     const stopRecordingWrapper = () => {
        stopRecording()
        // startButtonRef.current.hidden = false
        // stopButtonRef.current.hidden = true
     }
useEffect(() => {
         console.log(setCallback)
        if(setCallback == undefined){
            return;
        }
        setCallback((data) => {
            console.log('callback')
            console.log(data)
            speechRetRef.current.innerHTML = data
        });
    }, [setCallback]);
  const [showModal, setShowModal] = useState(false);
  
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <RecordContainer>
        <InfoContainer>
          <Title>2023년 4월 17일자 수업</Title>
          <OtherInfo>
            <TagArea>
              <Tags>#수업</Tags>
              <Tags>#서강대학교</Tags>
              <Tags>#OS</Tags>
            </TagArea>
            <Button>강의자료 다시 업로드</Button>
          </OtherInfo>
        </InfoContainer>
        <RecordArea>
          <Text>🎙️ 실시간 녹음</Text>
          <RecordBox ref={speechRetRef}></RecordBox>
          <RecordButton ref={startButtonRef} onClick={startRecordingWrapper}>녹음 시작</RecordButton>
        </RecordArea>
        <SummaryArea>
          <SummaryInfo>
            <Text>📝 실시간 요약본</Text>
          </SummaryInfo>
          <FileName>파일명: 230417_1632</FileName>
          <SummaryBox></SummaryBox>
        </SummaryArea>
      </RecordContainer>
      <ModalButton onClick={handleOpenModal}>
        <ModalPic src={RecordModalImg} />
      </ModalButton>
      <Modal show={showModal} handleClose={handleCloseModal}></Modal>
    </>
  );
};

export default Record;

const RecordContainer = styled.div`
  padding-top: 150px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1;
`;

const InfoContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`;

const Title = styled.div`
  font-size: 30px;
  display: flex-start;
  font-weight: 700;
`;

const OtherInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`;

const TagArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Tags = styled.div`
  background-color: #f2e9f8;
  border-radius: 5px;
  color: #914688;
  font-size: 16px;
  height: 30px;
  display: flex;
  align-items: center;
  margin-right: 5px;
`;

const Button = styled.div`
  text-decoration-line: underline;
`;

const RecordArea = styled.div`
  width: 50%;
  dispaly: flex;
  flex-direction: column;
  margin-top: 25px;
`;

const Text = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

const RecordBox = styled.div`
  width: 100%;
  background: #f4f6fb;
  border-radius: 10px;
  height: 110px;
  margin-top: 5px;
`;

const RecordButton = styled.div`
  background: #1e70f6;
  border-radius: 5px;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  height: 40px;
  margin-top: 12px;
`;

const SummaryArea = styled.div`
  width: 50%;
  dispaly: flex;
  flex-direction: column;
  margin-top: 35px;
`;

const SummaryInfo = styled.div``;
const FileName = styled.div`
  text-align: right;
  color: #81868a;
`;
const SummaryBox = styled.div`
  background: #f4f6fb;
  border-radius: 10px;
  height: 400px;
  width: 100%;
  margin-top: 5px;
`;

const ModalPic = styled.img``;

const ModalButton = styled.div`
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
