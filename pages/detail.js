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
  Rate,
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
  gap: 10px;
`;

const DetailContainer = styled.div`
  display: inline-block;
`;

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
        <div
          style={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'max-content 1fr',
            gap: '10px',
          }}
        >
          <img
            style={{
              width: '130px',
              height: '130px',
              borderRadius: '5px',
              objectFit: 'cover',
            }}
            src={placeData.cover}
          ></img>
          <div>
            <div style={{ wordBreak: 'break-word', fontSize: '12px' }}>
              {placeData.title}
            </div>
            <div style={{ wordBreak: 'break-word', fontSize: '14px' }}>
              {placeData.doctor_name}
            </div>
            <div style={{ wordBreak: 'break-word', fontSize: '10px' }}>
              ประเภท: {placeData.category}
            </div>
            <div style={{ wordBreak: 'break-word', fontSize: '10px' }}>
              เรทติ้ง: <Rate allowHalf defaultValue={placeData.rating} />
            </div>
            <div style={{ wordBreak: 'break-word', fontSize: '10px' }}>
              ที่ตั้ง: {placeData.location}
            </div>
          </div>
        </div>
      </Card>
      <br />
      <Collapse>
        <Panel header="ใบรับรอง">
          <img
            style={{
              borderRadius: '5px',
              objectFit: 'cover',
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
