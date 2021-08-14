import { Card } from 'antd';
import moment from 'moment';
// {
//     id: 1,
//     category: 'บริการฝั่งเข็ม',
//     popular: true,
//     cover:
//       'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
//     avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
//     cert: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
//     detail: 'บริการฝังเข็มที่เหมาะสำหรับทุกคน',
//     title: 'คลินิกเวชกรรมฝังเข็มสบายตัว',
//     doctor_name: 'สมศักดิ์ งามวงศ์วาน',
//     rating: 4,
//     location: 'บางรัก',
//     distance: 7.3,
//     price: 'high',
//   },
export default function Queue({ queueData }) {
  return (
    <Card>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'max-content 1fr',
          gap: '10px',
        }}
      >
        <img
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '5px',
          }}
          src={queueData.placeData.cover}
        ></img>
        <div>
          <div style={{ wordBreak: 'break-word' }}>
            {queueData.placeData.title}
          </div>
          <div style={{ wordBreak: 'break-word' }}>
            {queueData.placeData.doctor_name}
          </div>
          <div style={{ wordBreak: 'break-word' }}>
            {queueData.placeData.category}
          </div>
          <div style={{ wordBreak: 'break-word' }}>
            {queueData.placeData.location}
          </div>
          <div style={{ wordBreak: 'break-word' }}>
            {queueData.date}
            {moment(new Date(queueData.date)).format()}
          </div>
        </div>
      </div>
    </Card>
  );
}
