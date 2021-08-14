import { useState, useEffect } from 'react';
import { Avatar, Image, Tag, Typography, Card } from 'antd';
import { getQueueList } from '../utils/localStorage';
import Queue from '../components/Queue';
const { Paragraph } = Typography;

export default function HistoryPage() {
  const [queueList, setQueueList] = useState([]);

  useEffect(() => {
    setQueueList(getQueueList().reverse());
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
          <Avatar
            size={50}
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
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
