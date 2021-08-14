import { Avatar, Image } from 'antd';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: max-conetnt 1fr;
`;

const HeaderDetailContainer = styled.div``;

export default function history() {
  return (
    <>
      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      <HeaderDetailContainer>iceice </HeaderDetailContainer>
    </>
  );
}
