/* eslint-disable react/jsx-props-no-spreading */
import { Button, Input } from 'antd';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { BodySendCommentType } from '../../types/types';

type PropsType = {
  onSubmit: SubmitHandler<BodySendCommentType> ;
};

export const SendCommentForm = ({ onSubmit }: PropsType) => {
  const { handleSubmit, control, reset } = useForm<BodySendCommentType>();
  const { TextArea } = Input;
  const onHandleSubmit = (data: BodySendCommentType) => {
    onSubmit(data);
    reset();
  };
  return (
    <div style={{ width: '100%' }}>
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <Controller
          control={control}
          name="name"
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              style={{ backgroundColor: '#f0f0f0' }}
              placeholder="author"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="text"
          rules={{ required: true }}
          render={({ field }) => (
            <TextArea
              style={{ backgroundColor: '#f0f0f0' }}
              autoSize={{ minRows: 2, maxRows: 6 }}
              placeholder="write a comment"
              {...field}
            />
          )}
        />
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: '2%',
        }}
        >
          <Button htmlType="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};
