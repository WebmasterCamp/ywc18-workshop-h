import { Card, Button } from 'antd';
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
            width: '130px',
            height: '130px',
            borderRadius: '5px',
          }}
          src={queueData.placeData.cover}
        ></img>
        <div>
          <div style={{ wordBreak: 'break-word', fontSize: '12px' }}>
            {queueData.placeData.title}
          </div>
          <div style={{ wordBreak: 'break-word', fontSize: '14px' }}>
            {queueData.placeData.doctor_name}
          </div>
          <div style={{ wordBreak: 'break-word', fontSize: '10px' }}>
            ประเภท: {queueData.placeData.category}
          </div>
          <div style={{ wordBreak: 'break-word', fontSize: '10px' }}>
            โลเคชั่น: {queueData.placeData.location}
          </div>
          <div style={{ wordBreak: 'break-word', fontSize: '10px' }}>
            วันเวลาที่นัด: {moment(new Date(queueData.date)).format('DD/MM/YY')}
          </div>
          <div
            style={{
              wordBreak: 'break-word',
              fontSize: '10px',
              color: '#CE5151',
            }}
          >
            {moment(new Date(queueData.date)).fromNow()}
          </div>
          <Button>ดูลรายละเอียดการจอง</Button>
        </div>
      </div>
    </Card>
  );
}
