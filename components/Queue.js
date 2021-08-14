import { Card } from 'antd';

export default function Queue({ queueData }) {
  return (
    <Card>
      <div style={{ wordBreak: 'break-word' }}>{queueData.placeData.cover}</div>
    </Card>
  );
}
