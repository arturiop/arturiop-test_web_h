import { Skeleton } from 'antd';

export const CommentsStub = () => (
  <div style={{
    padding: '2%',
    backgroundColor: '#495052',
    borderRadius: '10px',
  }}
  >
    <Skeleton avatar paragraph={{ rows: 2 }} />
  </div>
);
