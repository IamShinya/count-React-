import styled from "styled-components";

const SHeader = styled.header`
  height: 100px;
  width: 100%;
  background-color: rgba(0, 128, 0, 0.4);
`;

const SHeaderText = styled.h1`
  font-size: 2.5rem;
  color: rgba(0, 0, 0, 0.7);
`;

const SButton = styled.button`
  font-size: 2rem;
  color: blue;
  border: 1px solid black;
`;

const SText = styled.p`
  font-size: 1.5rem;
`;

const SResult = styled.span`
  font-size: 2rem;
`;

const SUsrCnt = styled.input`
  background-color: rgba(0, 0, 0, 0.2);
`;


export {SHeader,SButton,SHeaderText,SText,SResult,SUsrCnt};