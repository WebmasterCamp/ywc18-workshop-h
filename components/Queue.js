import { Card } from 'antd';
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
      <div style={{ wordBreak: 'break-word' }}>{queueData.placeData.cover}</div>
    </Card>
  );
}
