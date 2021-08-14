import { useState } from 'react';
import Router from 'next/router';
import {
  Card,
  Avatar,
  Collapse,
  Typography,
  Button,
  Calendar,
  Select,
  Modal,
} from 'antd';
import CommentList from '../components/CommentList.js';
import { data } from '../shared/data';
import { addQueue } from '../utils/localStorage';
import moment from 'moment';
import styled from 'styled-components';

const { Panel } = Collapse;
const { Title, Paragraph } = Typography;
const { Option } = Select;

const HeaderContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: max-content 1fr;
`;

const DetailContainer = styled.div`
  display: inline-block;
`;
// {
//   id: 1,
//   category: 1,
//   filter: 2,
//   cover:
//     'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
//   avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
//   cert: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
//   detail: "I am ice"
//   title: 'นายแพทย์เบล',
//   rating: 4,
//   location: 'บางรัก',
// },
export default function DetailPage() {
  const [date, setDate] = useState(moment(new Date()));
  const [dateRange, setDateRange] = useState('0');
  const [placeData, setData] = useState(data[0]);
  const [visible, setVisible] = useState(false);

  const onBook = () => {
    addQueue({
      date,
      dateRange,
      placeData,
    });
    setTimeout(() => {
      setVisible(true);
    }, 3000);
  };
  return (
    <>
      <Modal
        visible={visible}
        onCancel={() => setVisible(false)}
        title="จองคิวสำเร็จ"
        onOk={() => {
          Router.push('/history');
        }}
      >
        จะไปที่หน้าประวัติการจองคิวหรือไม่
      </Modal>
      <Card>
        <HeaderContainer>
          <img
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '5px',
            }}
            src={placeData.cover}
          ></img>
          <DetailContainer>test</DetailContainer>
        </HeaderContainer>
      </Card>
      <br />
      <Collapse>
        <Panel header="ใบรับรอง">
          <img
            style={{
              borderRadius: '5px',
            }}
            width="100%"
            src={placeData.cert}
          />
        </Panel>
      </Collapse>
      <br />
      <Card>
        <Title level={4}>รายละเอียด</Title>
        <Paragraph>{placeData.detail}</Paragraph>
      </Card>
      <br />
      <Calendar fullscreen={false} value={date} onSelect={setDate} />
      <br />
      <Select
        defaultValue={dateRange}
        style={{ width: '100%', display: 'block' }}
        onChange={(e) => setDateRange(e)}
      >
        <Option value="0">8:00 - 9:00</Option>
        <Option value="1">9:00 - 10:00</Option>
        <Option value="2">10:00 - 11:00</Option>
        <Option value="3">11:00 - 12:00</Option>
        <Option value="4" disabled>
          12:00 - 13:00
        </Option>
        <Option value="5">13:00 - 14:00</Option>
        <Option value="6">14:00 - 15:00</Option>
        <Option value="7">16:00 - 17:00</Option>
      </Select>
      <br />
      <Button style={{ width: '100%', display: 'block' }} onClick={onBook}>
        จอง
      </Button>
      <br />
      <CommentList />
    </>
  );
}
