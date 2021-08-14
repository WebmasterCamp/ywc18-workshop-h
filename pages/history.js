import { useState, useEffect } from 'react';
import { Avatar, Image, Tag, Typography, Card } from 'antd';
import { getQueueList } from '../utils/localStorage';
import Queue from '../components/Queue';
const { Paragraph } = Typography;

const archived = {
  date: '2021-08-16T08:53:42.080Z',
  dateRange: '2',
  placeData: {
    id: 1,
    category: 'บริการฝั่งเข็ม',
    popular: true,
    cover:
      'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    cert: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    detail: 'บริการฝังเข็มที่เหมาะสำหรับทุกคน',
    title: 'คลินิกเวชกรรมฝังเข็มสบายตัว',
    doctor_name: 'สมศักดิ์ งามวงศ์วาน',
    rating: 4,
    location: 'บางรัก',
    distance: 7.3,
    price: 'high',
  },
  archive: true,
  queueId: -1,
};

export default function HistoryPage() {
  const [queueList, setQueueList] = useState([]);

  useEffect(() => {
    setQueueList([...getQueueList(), archived].reverse());
  }, []);

  return (
    <>
      <div
        style={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'max-content 1fr',
          padding: '20px 30px',
          gap: '10px',
        }}
      >
        <div>
          <Avatar size={50} src="/mock/mock-10.png" />
        </div>
        <div
          style={{
            display: 'grid',
          }}
        >
          <div>สมพิณ จึงเลิศศิริ</div>
          <div>
            <Tag>แก้ไขข้อมูล</Tag>
          </div>
        </div>
      </div>
      <Paragraph>บริการจองสำเร็จ</Paragraph>
      {queueList
        .filter((data) => !data.archive)
        .map((data) => (
          <>
            <Queue queueData={data}></Queue>
            <br />
          </>
        ))}
      <Paragraph>ประวัติการจอง</Paragraph>
      {queueList
        .filter((data) => data.archive)
        .map((data) => (
          <>
            <Queue queueData={data}></Queue>
            <br />
          </>
        ))}
    </>
  );
}
