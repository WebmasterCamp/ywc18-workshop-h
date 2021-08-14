import {
  Comment,
  Tooltip,
  List,
  Avatar,
  Form,
  Button,
  Input,
  Editor,
} from 'antd';
import moment from 'moment';

const data = [
  {
    actions: [<span key="comment-list-reply-to-0">ตอบกลับ</span>],
    author: 'เอก อนามัย',
    avatar: '/mock/mock-5.png',
    content: (
      <p>เคยไปเมื่อ 3 ปีก่อนครับ บริการดีมากครับเดียวไว้จะมาใช้บริการอีก</p>
    ),
    datetime: (
      <Tooltip
        title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}
      >
        <span>{moment().subtract(1, 'days').fromNow()}</span>
      </Tooltip>
    ),
  },
  {
    actions: [<span key="comment-list-reply-to-0">ตอบกลับ</span>],
    author: 'หฤทัย ใจใหญ่',
    avatar: '/mock/mock-3.png',
    content: <p>ร้านนี้ดีมากครับ ไปกับแม่ประจำ บริการดี</p>,
    datetime: (
      <Tooltip
        title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}
      >
        <span>{moment().subtract(2, 'days').fromNow()}</span>
      </Tooltip>
    ),
  },
];

export default function CommentList() {
  return (
    <List
      className="comment-list"
      header={`${data.length} replies`}
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <li>
          <Comment
            actions={item.actions}
            author={item.author}
            avatar={item.avatar}
            content={item.content}
            datetime={item.datetime}
          />
        </li>
      )}
    />
  );
}
