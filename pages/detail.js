import { useState } from 'react';
import { Card, Avatar, Collapse, Typography, Button, Calendar } from 'antd';
import CommentList from '../components/CommentList.js';
import moment from 'moment';
import styled from 'styled-components';

const { Panel } = Collapse;
const { Title, Paragraph } = Typography;

const HeaderContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: max-content 1fr;
`;

const DetailContainer = styled.div`
  display: inline-block;
`;

export default function detail() {
  const [date, setDate] = useState(moment(new Date()));
  return (
    <>
      <Card>
        <HeaderContainer>
          <img
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '5px',
            }}
            src="https://s.isanook.com/he/0/rp/rc/w850h510/yacxacm1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2hlLzAvdWQvNC8yMjkyNS9yYXBpZC10ZXN0LmpwZw==.jpg"
          ></img>
          <DetailContainer>test</DetailContainer>
        </HeaderContainer>
      </Card>
      <br />
      <Collapse>
        <Panel header="Certificate">
          <img
            style={{
              borderRadius: '5px',
            }}
            width="100%"
            src="https://s.isanook.com/he/0/rp/rc/w850h510/yacxacm1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2hlLzAvdWQvNC8yMjkyNS9yYXBpZC10ZXN0LmpwZw==.jpg"
          />
        </Panel>
      </Collapse>
      <br />
      <Card>
        <Title level={4}>รายละเอียด</Title>
        <Paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Paragraph>
        <Button>จอง</Button>
      </Card>
      <br />
      <Calendar fullscreen={false} value={date} onSelect={setDate} />
      <br />
      <CommentList />
    </>
  );
}
